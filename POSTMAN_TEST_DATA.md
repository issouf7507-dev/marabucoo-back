# Marabu API — Données de test Postman

**Base URL** : `http://localhost:4000/api/v1`

> Toutes les routes (sauf `/auth/login`, `/auth/register`, `/health`) nécessitent le header :
> `Authorization: Bearer <token>`

---

## Variables Postman recommandées

| Variable     | Valeur initiale                |
| ------------ | ------------------------------ |
| `base_url`   | `http://localhost:4000/api/v1` |
| `token`      | _(récupéré après login)_       |
| `client_id`  | _(récupéré après création)_    |
| `mission_id` | _(récupéré après création)_    |
| `facture_id` | _(récupéré après création)_    |
| `tranche_id` | _(récupéré après création)_    |
| `staff_id`   | _(récupéré après création)_    |
| `charge_id`  | _(récupéré après création)_    |
| `depense_id` | _(récupéré après création)_    |
| `pc_id`      | _(récupéré après création)_    |
| `user_id`    | _(récupéré après création)_    |

---

## 1. Health Check

### GET `/health`

```
GET {{base_url}}/health
```

**Réponse attendue 200 :**

```json
{ "status": "ok", "env": "development", "timestamp": "..." }
```

---

## 2. Auth

### POST `/auth/register`

```
POST {{base_url}}/auth/register
Content-Type: application/json
```

```json
{
  "name": "Admin Marabu",
  "email": "admin@marabu.ci",
  "password": "secret123",
  "role": "ADMIN"
}
```

**Réponse attendue 201 :**

```json
{ "message": "Compte créé", "userId": 1 }
```

---

### POST `/auth/login`

```
POST {{base_url}}/auth/login
Content-Type: application/json
```

```json
{
  "email": "admin@marabu.ci",
  "password": "secret123"
}
```

**Réponse attendue 200 :**

```json
{
  "token": "eyJ...",
  "user": {
    "name": "Admin Marabu",
    "email": "admin@marabu.ci",
    "role": "ADMIN"
  }
}
```

> Copiez le `token` dans la variable Postman `token`.

---

### GET `/auth/me`

```
GET {{base_url}}/auth/me
Authorization: Bearer {{token}}
```

**Réponse attendue 200 :**

```json
{ "id": 1, "name": "Admin Marabu", "email": "admin@marabu.ci", "role": "ADMIN" }
```

---

### POST `/auth/change-password`

```
POST {{base_url}}/auth/change-password
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "currentPassword": "secret123",
  "newPassword": "newSecret456"
}
```

**Réponse attendue 200 :**

```json
{ "message": "Mot de passe mis à jour" }
```

---

## 3. Clients

### GET `/clients`

```
GET {{base_url}}/clients
Authorization: Bearer {{token}}
```

---

### POST `/clients`

```
POST {{base_url}}/clients
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "nom": "SOTRA Côte d'Ivoire",
  "secteur": "Transport",
  "tel": "+225 27 20 30 40 50",
  "email": "contact@sotra.ci"
}
```

**Réponse attendue 201 :**

```json
{
  "id": 1,
  "nom": "SOTRA Côte d'Ivoire",
  "secteur": "Transport",
  "tel": "+225 27 20 30 40 50",
  "email": "contact@sotra.ci"
}
```

---

### PUT `/clients/:id`

```
PUT {{base_url}}/clients/{{client_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "tel": "+225 27 20 99 99 99",
  "secteur": "Transport & Logistique"
}
```

---

### DELETE `/clients/:id`

```
DELETE {{base_url}}/clients/{{client_id}}
Authorization: Bearer {{token}}
```

**Réponse attendue 204** (corps vide)

---

## 4. Missions

### GET `/missions`

```
GET {{base_url}}/missions
Authorization: Bearer {{token}}
```

---

### GET `/missions/:id`

```
GET {{base_url}}/missions/{{mission_id}}
Authorization: Bearer {{token}}
```

---

### POST `/missions`

```
POST {{base_url}}/missions
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "nom": "Audit organisationnel SOTRA",
  "client": "SOTRA Côte d'Ivoire",
  "apporteur": "Kouassi Jean",
  "statut": "CONTRAT",
  "montant": 15000000,
  "avance": 0,
  "debut": "2026-01-15",
  "fin": "2026-06-30",
  "tva": "18",
  "nature": "Conseil",
  "desc": "Mission d'audit et réorganisation des processus internes"
}
```

> `statut` : `PROSPECT` | `TDR` | `PROPALE` | `CONTRAT` | `EN_COURS` | `TERMINE` | `PERDU`

---

### PUT `/missions/:id`

```
PUT {{base_url}}/missions/{{mission_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "statut": "EN_COURS",
  "avance": 5000000
}
```

---

### PUT `/missions/:id/enc` — Encaissements mensuels

```
PUT {{base_url}}/missions/{{mission_id}}/enc
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "2026-01": 2000000,
  "2026-02": 1500000,
  "2026-03": 1500000
}
```

> Les clés sont au format `YYYY-MM`.

---

### DELETE `/missions/:id`

```
DELETE {{base_url}}/missions/{{mission_id}}
Authorization: Bearer {{token}}
```

---

## 5. Factures

### GET `/factures`

```
GET {{base_url}}/factures
Authorization: Bearer {{token}}
```

---

### GET `/factures/:id`

```
GET {{base_url}}/factures/{{facture_id}}
Authorization: Bearer {{token}}
```

---

### POST `/factures`

```
POST {{base_url}}/factures
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "missionId": 1,
  "num": "FAC-2026-001",
  "date": "2026-02-01",
  "ht": 10000000,
  "tvaType": "18",
  "tranches": [
    { "montant": 4720000, "echeance": "2026-02-15" },
    { "montant": 4720000, "echeance": "2026-04-01" },
    { "montant": 2360000, "echeance": "2026-06-01" }
  ]
}
```

> `tvaType` : `"exo"` (exonéré) ou `"18"` (TVA 18%)
> `ttc` = `ht` + `tvaMontant` calculé automatiquement.

---

### PUT `/factures/:id`

```
PUT {{base_url}}/factures/{{facture_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "num": "FAC-2026-001-REV",
  "ht": 10000000,
  "tvaType": "18"
}
```

---

### PUT `/factures/:id/tranches/:tid` — Encaissement d'une tranche

```
PUT {{base_url}}/factures/{{facture_id}}/tranches/{{tranche_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "encaisse": 4720000,
  "dateEnc": "2026-02-20",
  "ref": "VIR-2026-0042",
  "statut": "Payé"
}
```

---

### DELETE `/factures/:id`

```
DELETE {{base_url}}/factures/{{facture_id}}
Authorization: Bearer {{token}}
```

---

## 6. Staff

### GET `/staff`

```
GET {{base_url}}/staff
Authorization: Bearer {{token}}
```

---

### POST `/staff`

```
POST {{base_url}}/staff
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "nom": "Traoré Aminata",
  "poste": "Consultante Senior",
  "salaire": 850000,
  "nature": "CDI",
  "debut": "2024-03-01",
  "marabu": true,
  "actif": true
}
```

---

### PUT `/staff/:id`

```
PUT {{base_url}}/staff/{{staff_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "salaire": 950000,
  "poste": "Manager Conseil"
}
```

---

### PUT `/staff/:id/paie` — Saisir un paiement de salaire

```
PUT {{base_url}}/staff/{{staff_id}}/paie
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "mois": "jan",
  "annee": 2026,
  "montant": 850000,
  "statut": "Payé"
}
```

> `mois` : `jan` | `fev` | `mar` | `avr` | `mai` | `jun` | `jul` | `aou` | `sep` | `oct` | `nov` | `dec`
> `statut` : `"Payé"` | `"En attente"`

---

### DELETE `/staff/:id`

```
DELETE {{base_url}}/staff/{{staff_id}}
Authorization: Bearer {{token}}
```

---

## 7. Charges

### GET `/charges`

```
GET {{base_url}}/charges
Authorization: Bearer {{token}}
```

---

### POST `/charges`

```
POST {{base_url}}/charges
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "libelle": "Loyer bureau plateau",
  "categorie": "EXPLOIT",
  "nature": "fixe",
  "type": "Immobilier",
  "periodicite": "mensuel",
  "budget": 500000,
  "moisApplicables": "jan,fev,mar,avr,mai,jun,jul,aou,sep,oct,nov,dec",
  "obs": "Bail 3 ans renouvelable"
}
```

> `categorie` : `"RH"` | `"EXPLOIT"` | `"UTIL"` | `"VAR"`

---

### PUT `/charges/:id`

```
PUT {{base_url}}/charges/{{charge_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "budget": 550000,
  "obs": "Révision loyer janvier 2026"
}
```

---

### PUT `/charges/:id/reel` — Saisir le réel d'une charge

```
PUT {{base_url}}/charges/{{charge_id}}/reel
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "mois": 2,
  "annee": 2026,
  "montant": 500000,
  "statut": "Payé",
  "datePmt": "2026-02-05"
}
```

---

### DELETE `/charges/:id`

```
DELETE {{base_url}}/charges/{{charge_id}}
Authorization: Bearer {{token}}
```

---

## 8. Dépenses (Banque)

### GET `/depenses`

```
GET {{base_url}}/depenses
Authorization: Bearer {{token}}

# Avec filtre période :
GET {{base_url}}/depenses?periode=2026-02
```

---

### POST `/depenses`

```
POST {{base_url}}/depenses
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "type": "Virement sortant",
  "categorie": "Fournisseur",
  "periode": "2026-02",
  "intitule": "Règlement prestataire",
  "date": "2026-02-10",
  "designation": "Paiement KOFFI Consulting - Déc 2025",
  "prestataire": "KOFFI Consulting",
  "debit": 1200000,
  "credit": 0,
  "fraisTransf": 2500,
  "reference": "VIR-BCI-20260210"
}
```

---

### POST `/depenses` — Entrée bancaire (crédit)

```json
{
  "type": "Virement entrant",
  "categorie": "Client",
  "periode": "2026-02",
  "date": "2026-02-20",
  "designation": "Encaissement SOTRA - FAC-2026-001",
  "prestataire": "SOTRA Côte d'Ivoire",
  "credit": 4720000,
  "debit": 0,
  "reference": "VIR-SOTRA-20260220"
}
```

---

### PUT `/depenses/:id`

```
PUT {{base_url}}/depenses/{{depense_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "reference": "VIR-BCI-20260210-COR",
  "fraisTransf": 3000
}
```

---

### DELETE `/depenses/:id`

```
DELETE {{base_url}}/depenses/{{depense_id}}
Authorization: Bearer {{token}}
```

---

## 9. Trésorerie

### GET `/tresorerie`

```
GET {{base_url}}/tresorerie
Authorization: Bearer {{token}}

# Avec filtre année :
GET {{base_url}}/tresorerie?annee=2026
```

---

### PUT `/tresorerie/:mois/:annee` — Upsert une ligne

```
PUT {{base_url}}/tresorerie/jan/2026
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "soldeDeb": 3500000,
  "encaissements": 5000000,
  "decaissements": 2800000,
  "soldeFin": 5700000
}
```

> `:mois` : `jan` | `fev` | `mar` | ... | `dec`

---

## 10. Petite Caisse

### GET `/petite-caisse`

```
GET {{base_url}}/petite-caisse
Authorization: Bearer {{token}}
```

---

### POST `/petite-caisse` — Sortie de caisse

```
POST {{base_url}}/petite-caisse
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "caisse": "Caisse Principale",
  "type": "Dépense",
  "categorie": "Fournitures",
  "nature": "reel",
  "periode": "2026-02",
  "date": "2026-02-08",
  "designation": "Achat ramettes papier A4",
  "prestataire": "Papeterie du Plateau",
  "entree": 0,
  "sortie": 45000,
  "penalite": 0
}
```

---

### POST `/petite-caisse` — Entrée de caisse

```json
{
  "caisse": "Caisse Principale",
  "type": "Approvisionnement",
  "categorie": "Banque",
  "nature": "reel",
  "periode": "2026-02",
  "date": "2026-02-01",
  "designation": "Retrait bancaire approvisionnement caisse",
  "entree": 500000,
  "sortie": 0,
  "penalite": 0
}
```

---

### PUT `/petite-caisse/:id`

```
PUT {{base_url}}/petite-caisse/{{pc_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "designation": "Achat ramettes papier A4 (corrigé)",
  "sortie": 48000
}
```

---

### DELETE `/petite-caisse/:id`

```
DELETE {{base_url}}/petite-caisse/{{pc_id}}
Authorization: Bearer {{token}}
```

---

## 11. Params

### GET `/params`

```
GET {{base_url}}/params
Authorization: Bearer {{token}}
```

---

### PUT `/params`

```
PUT {{base_url}}/params
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "raisonSociale": "Marabu Consulting SARL",
  "capital": 10000000,
  "ncc": "CI-ABJ-2020-B-12345",
  "dfe": "DFE-123456",
  "rccm": "RCCM-CI-ABJ-2020-B-12345"
}
```

> Les champs `banque`, `coffre`, `masseSal`, `arrSal`, `arrSalR` sont **calculés automatiquement** — inutile de les envoyer.

---

## 12. Users _(ADMIN seulement)_

### GET `/users`

```
GET {{base_url}}/users
Authorization: Bearer {{token}}
```

---

### POST `/users`

```
POST {{base_url}}/users
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "name": "Koné Ibrahima",
  "email": "ikone@marabu.ci",
  "password": "motdepasse123",
  "role": "COO"
}
```

> `role` : `"ADMIN"` | `"COO"` | `"VIEWER"`

---

### PUT `/users/:id`

```
PUT {{base_url}}/users/{{user_id}}
Authorization: Bearer {{token}}
Content-Type: application/json
```

```json
{
  "name": "Koné Ibrahima D.",
  "role": "VIEWER",
  "active": false
}
```

---

### DELETE `/users/:id`

```
DELETE {{base_url}}/users/{{user_id}}
Authorization: Bearer {{token}}
```

---

## Cas d'erreurs à tester

| Cas                     | Endpoint                       | Body                                                  | Attendu |
| ----------------------- | ------------------------------ | ----------------------------------------------------- | ------- |
| Email invalide          | `POST /auth/login`             | `{ "email": "pasunemail", "password": "abc" }`        | `400`   |
| Mauvais mot de passe    | `POST /auth/login`             | `{ "email": "admin@marabu.ci", "password": "wrong" }` | `401`   |
| Sans token              | `GET /clients`                 | —                                                     | `401`   |
| Email déjà utilisé      | `POST /auth/register`          | même email                                            | `409`   |
| ID inexistant           | `GET /missions/99999`          | —                                                     | `404`   |
| Champ requis manquant   | `POST /clients`                | `{}`                                                  | `400`   |
| Rôle insuffisant        | `GET /users` avec token VIEWER | —                                                     | `403`   |
| TVA invalide            | `POST /factures`               | `"tvaType": "25"`                                     | `400`   |
| Statut mission invalide | `POST /missions`               | `"statut": "INCONNU"`                                 | `400`   |
