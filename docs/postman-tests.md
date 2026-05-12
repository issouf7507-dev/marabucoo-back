# Tests Postman — Marabu COO API

**Base URL :** `http://localhost:3000/api`

> Toutes les routes (sauf `/auth/login` et `/auth/register`) nécessitent le header :
>
> ```
> Authorization: Bearer <token>
> ```
>
> Récupérer le token via `POST /auth/login` et le stocker dans une variable d'environnement Postman `{{token}}`.

---

## 0. Setup Postman

1. Créer un **Environment** `Marabu Local`
2. Ajouter les variables :

| Variable   | Valeur initiale                    |
| ---------- | ---------------------------------- |
| `base_url` | `http://localhost:3000/api`        |
| `token`    | _(vide — sera rempli après login)_ |

3. Dans les requêtes protégées, onglet **Auth** → `Bearer Token` → `{{token}}`

---

## 1. Auth

### POST `/auth/register`

Crée un compte.

```json
{
  "name": "Admin Marabu",
  "email": "admin@marabu.com",
  "password": "secret123",
  "role": "ADMIN"
}
```

**Réponse 201 :**

```json
{ "message": "Compte créé", "userId": "clxxx..." }
```

---

### POST `/auth/login`

Connexion — récupère le JWT.

```json
{
  "email": "admin@marabu.com",
  "password": "secret123"
}
```

**Réponse 200 :**

```json
{
  "token": "eyJ...",
  "user": {
    "name": "Admin Marabu",
    "email": "admin@marabu.com",
    "role": "ADMIN"
  }
}
```

> **Script Postman (Tests) pour sauvegarder le token :**
>
> ```js
> const res = pm.response.json();
> pm.environment.set("token", res.token);
> ```

---

### GET `/auth/me`

Retourne le profil de l'utilisateur connecté.  
_Header requis : `Authorization: Bearer {{token}}`_

**Réponse 200 :**

```json
{
  "id": "clxxx...",
  "name": "Admin Marabu",
  "email": "admin@marabu.com",
  "role": "ADMIN"
}
```

---

### POST `/auth/change-password`

```json
{
  "currentPassword": "secret123",
  "newPassword": "nouveau456"
}
```

**Réponse 200 :** `{ "message": "Mot de passe mis à jour" }`

---

## 2. Missions

### GET `/missions`

Liste toutes les missions avec leurs encaissements.

### GET `/missions/:id`

Détail d'une mission (avec factures et tranches).

```
GET /missions/1
```

### POST `/missions`

```json
{
  "nom": "Audit stratégique",
  "client": "Société ABC",
  "apporteur": "Jean Dupont",
  "statut": "CONTRAT",
  "montant": 5000000,
  "avance": 1000000,
  "debut": "2026-01-15",
  "tva": "exo",
  "nature": "prevu"
}
```

**Statuts valides :** `PROSPECT` `TDR` `PROPALE` `CONTRAT` `EN_COURS` `TERMINE` `PERDU`

### PUT `/missions/:id`

Même body que POST, tous les champs optionnels.

```json
{ "statut": "EN_COURS", "avance": 2000000 }
```

### DELETE `/missions/:id`

**Réponse 204** (pas de body)

### PUT `/missions/:id/enc`

Met à jour les encaissements mensuels (upsert par mois).

```json
{
  "jan": 500000,
  "fev": 500000,
  "mar": 1000000
}
```

---

## 3. Staff (RH)

### GET `/staff`

Liste tout le personnel avec leurs paies.

### POST `/staff`

```json
{
  "nom": "Aminata Diallo",
  "poste": "Consultante",
  "salaire": 350000,
  "nature": "Consultant",
  "debut": "2025-03-01",
  "marabu": true,
  "actif": true
}
```

### PUT `/staff/:id`

Même body, tous champs optionnels.

```json
{ "salaire": 400000 }
```

### DELETE `/staff/:id`

**Réponse 204**

### PUT `/staff/:id/paie`

Enregistre ou met à jour la paie d'un mois.

```json
{
  "mois": "jan",
  "annee": 2026,
  "montant": 350000,
  "statut": "payé"
}
```

---

## 4. Charges

### GET `/charges`

Retourne toutes les charges avec leurs réalisations (`realisations[]`).

### POST `/charges`

```json
{
  "libelle": "Loyer bureau",
  "categorie": "EXPLOIT",
  "nature": "fixe",
  "type": "prevu",
  "periodicite": "Mensuelle",
  "budget": 200000
}
```

**Catégories valides :** `RH` `EXPLOIT` `UTIL` `VAR`

### PUT `/charges/:id`

```json
{ "budget": 220000 }
```

### DELETE `/charges/:id`

**Réponse 204**

### PUT `/charges/:id/reel`

Saisit le réalisé d'un mois.

```json
{
  "mois": "jan",
  "annee": 2026,
  "montant": 195000,
  "statut": "payé",
  "datePmt": "2026-01-31"
}
```

---

## 5. Dépenses (banque)

### GET `/depenses`

Liste les dépenses. Filtre optionnel : `?periode=jan-2026`

```
GET /depenses?periode=jan-2026
```

### POST `/depenses`

```json
{
  "type": "SORTIE BANQUE",
  "categorie": "Frais généraux",
  "periode": "jan-2026",
  "date": "2026-01-10",
  "designation": "Facture électricité",
  "prestataire": "SONELEC",
  "debit": 45000,
  "nature": "prevu"
}
```

**Types :** `ENTREE BANQUE` ou `SORTIE BANQUE`

### PUT `/depenses/:id`

```json
{ "debit": 48000, "reference": "FAC-2026-001" }
```

### DELETE `/depenses/:id`

**Réponse 204**

---

## 6. Trésorerie

### GET `/tresorerie`

Filtre par année : `?annee=2026` (défaut : 2026)

```
GET /tresorerie?annee=2026
```

### PUT `/tresorerie/:mois/:annee`

Upsert d'une ligne mensuelle.

```
PUT /tresorerie/jan/2026
```

```json
{
  "type": "reel",
  "banque": 12000000,
  "coffre": 500000,
  "entrees": 3000000,
  "chgPrev": 1500000,
  "chgPay": 1200000,
  "reste": 1800000
}
```

---

## 7. Paramètres

### GET `/params`

Retourne le singleton de paramètres (id = 1).

### PUT `/params`

Met à jour les paramètres globaux.

```json
{
  "banque": 15000000,
  "coffre": 800000,
  "masseSal": 2500000,
  "chargesPat": 375000,
  "primesMens": 150000,
  "arrSal": 0,
  "arrSalR": 0,
  "arrSalM": 0,
  "arrPrim": 0,
  "arrPrimM": 0
}
```

---

## 8. Health check

### GET `/health`

Ne nécessite pas de token.

**Réponse 200 :**

```json
{
  "status": "ok",
  "env": "development",
  "timestamp": "2026-05-08T10:00:00.000Z"
}
```

---

## Codes d'erreur courants

| Code  | Signification                  |
| ----- | ------------------------------ |
| `400` | Body invalide (Zod)            |
| `401` | Token manquant ou invalide     |
| `404` | Ressource introuvable          |
| `409` | Contrainte d'unicité (doublon) |
| `500` | Erreur serveur interne         |
