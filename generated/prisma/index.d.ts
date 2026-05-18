
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model MissionEnc
 * 
 */
export type MissionEnc = $Result.DefaultSelection<Prisma.$MissionEncPayload>
/**
 * Model Facture
 * 
 */
export type Facture = $Result.DefaultSelection<Prisma.$FacturePayload>
/**
 * Model Tranche
 * 
 */
export type Tranche = $Result.DefaultSelection<Prisma.$TranchePayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model StaffPaie
 * 
 */
export type StaffPaie = $Result.DefaultSelection<Prisma.$StaffPaiePayload>
/**
 * Model Charge
 * 
 */
export type Charge = $Result.DefaultSelection<Prisma.$ChargePayload>
/**
 * Model ChargeReel
 * 
 */
export type ChargeReel = $Result.DefaultSelection<Prisma.$ChargeReelPayload>
/**
 * Model Depense
 * 
 */
export type Depense = $Result.DefaultSelection<Prisma.$DepensePayload>
/**
 * Model PetiteCaisse
 * 
 */
export type PetiteCaisse = $Result.DefaultSelection<Prisma.$PetiteCaissePayload>
/**
 * Model Tresorerie
 * 
 */
export type Tresorerie = $Result.DefaultSelection<Prisma.$TresoreriePayload>
/**
 * Model Params
 * 
 */
export type Params = $Result.DefaultSelection<Prisma.$ParamsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  COO: 'COO',
  VIEWER: 'VIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MissionStatut: {
  PROSPECT: 'PROSPECT',
  TDR: 'TDR',
  PROPALE: 'PROPALE',
  CONTRAT: 'CONTRAT',
  EN_COURS: 'EN_COURS',
  TERMINE: 'TERMINE',
  PERDU: 'PERDU'
};

export type MissionStatut = (typeof MissionStatut)[keyof typeof MissionStatut]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MissionStatut = $Enums.MissionStatut

export const MissionStatut: typeof $Enums.MissionStatut

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionEnc`: Exposes CRUD operations for the **MissionEnc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionEncs
    * const missionEncs = await prisma.missionEnc.findMany()
    * ```
    */
  get missionEnc(): Prisma.MissionEncDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facture`: Exposes CRUD operations for the **Facture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factures
    * const factures = await prisma.facture.findMany()
    * ```
    */
  get facture(): Prisma.FactureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tranche`: Exposes CRUD operations for the **Tranche** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tranches
    * const tranches = await prisma.tranche.findMany()
    * ```
    */
  get tranche(): Prisma.TrancheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffPaie`: Exposes CRUD operations for the **StaffPaie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffPaies
    * const staffPaies = await prisma.staffPaie.findMany()
    * ```
    */
  get staffPaie(): Prisma.StaffPaieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charge`: Exposes CRUD operations for the **Charge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charges
    * const charges = await prisma.charge.findMany()
    * ```
    */
  get charge(): Prisma.ChargeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chargeReel`: Exposes CRUD operations for the **ChargeReel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChargeReels
    * const chargeReels = await prisma.chargeReel.findMany()
    * ```
    */
  get chargeReel(): Prisma.ChargeReelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depense`: Exposes CRUD operations for the **Depense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Depenses
    * const depenses = await prisma.depense.findMany()
    * ```
    */
  get depense(): Prisma.DepenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petiteCaisse`: Exposes CRUD operations for the **PetiteCaisse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PetiteCaisses
    * const petiteCaisses = await prisma.petiteCaisse.findMany()
    * ```
    */
  get petiteCaisse(): Prisma.PetiteCaisseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tresorerie`: Exposes CRUD operations for the **Tresorerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tresoreries
    * const tresoreries = await prisma.tresorerie.findMany()
    * ```
    */
  get tresorerie(): Prisma.TresorerieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.params`: Exposes CRUD operations for the **Params** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Params
    * const params = await prisma.params.findMany()
    * ```
    */
  get params(): Prisma.ParamsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Client: 'Client',
    User: 'User',
    Mission: 'Mission',
    MissionEnc: 'MissionEnc',
    Facture: 'Facture',
    Tranche: 'Tranche',
    Staff: 'Staff',
    StaffPaie: 'StaffPaie',
    Charge: 'Charge',
    ChargeReel: 'ChargeReel',
    Depense: 'Depense',
    PetiteCaisse: 'PetiteCaisse',
    Tresorerie: 'Tresorerie',
    Params: 'Params'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "user" | "mission" | "missionEnc" | "facture" | "tranche" | "staff" | "staffPaie" | "charge" | "chargeReel" | "depense" | "petiteCaisse" | "tresorerie" | "params"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      MissionEnc: {
        payload: Prisma.$MissionEncPayload<ExtArgs>
        fields: Prisma.MissionEncFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionEncFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionEncFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>
          }
          findFirst: {
            args: Prisma.MissionEncFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionEncFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>
          }
          findMany: {
            args: Prisma.MissionEncFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>[]
          }
          create: {
            args: Prisma.MissionEncCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>
          }
          createMany: {
            args: Prisma.MissionEncCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionEncCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>[]
          }
          delete: {
            args: Prisma.MissionEncDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>
          }
          update: {
            args: Prisma.MissionEncUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>
          }
          deleteMany: {
            args: Prisma.MissionEncDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionEncUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionEncUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>[]
          }
          upsert: {
            args: Prisma.MissionEncUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEncPayload>
          }
          aggregate: {
            args: Prisma.MissionEncAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionEnc>
          }
          groupBy: {
            args: Prisma.MissionEncGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionEncGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionEncCountArgs<ExtArgs>
            result: $Utils.Optional<MissionEncCountAggregateOutputType> | number
          }
        }
      }
      Facture: {
        payload: Prisma.$FacturePayload<ExtArgs>
        fields: Prisma.FactureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          findFirst: {
            args: Prisma.FactureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          findMany: {
            args: Prisma.FactureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          create: {
            args: Prisma.FactureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          createMany: {
            args: Prisma.FactureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          delete: {
            args: Prisma.FactureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          update: {
            args: Prisma.FactureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          deleteMany: {
            args: Prisma.FactureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          upsert: {
            args: Prisma.FactureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          aggregate: {
            args: Prisma.FactureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacture>
          }
          groupBy: {
            args: Prisma.FactureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactureCountArgs<ExtArgs>
            result: $Utils.Optional<FactureCountAggregateOutputType> | number
          }
        }
      }
      Tranche: {
        payload: Prisma.$TranchePayload<ExtArgs>
        fields: Prisma.TrancheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrancheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrancheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>
          }
          findFirst: {
            args: Prisma.TrancheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrancheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>
          }
          findMany: {
            args: Prisma.TrancheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>[]
          }
          create: {
            args: Prisma.TrancheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>
          }
          createMany: {
            args: Prisma.TrancheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrancheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>[]
          }
          delete: {
            args: Prisma.TrancheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>
          }
          update: {
            args: Prisma.TrancheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>
          }
          deleteMany: {
            args: Prisma.TrancheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrancheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrancheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>[]
          }
          upsert: {
            args: Prisma.TrancheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranchePayload>
          }
          aggregate: {
            args: Prisma.TrancheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranche>
          }
          groupBy: {
            args: Prisma.TrancheGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrancheGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrancheCountArgs<ExtArgs>
            result: $Utils.Optional<TrancheCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      StaffPaie: {
        payload: Prisma.$StaffPaiePayload<ExtArgs>
        fields: Prisma.StaffPaieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffPaieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffPaieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>
          }
          findFirst: {
            args: Prisma.StaffPaieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffPaieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>
          }
          findMany: {
            args: Prisma.StaffPaieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>[]
          }
          create: {
            args: Prisma.StaffPaieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>
          }
          createMany: {
            args: Prisma.StaffPaieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffPaieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>[]
          }
          delete: {
            args: Prisma.StaffPaieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>
          }
          update: {
            args: Prisma.StaffPaieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>
          }
          deleteMany: {
            args: Prisma.StaffPaieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffPaieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffPaieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>[]
          }
          upsert: {
            args: Prisma.StaffPaieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPaiePayload>
          }
          aggregate: {
            args: Prisma.StaffPaieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffPaie>
          }
          groupBy: {
            args: Prisma.StaffPaieGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffPaieGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffPaieCountArgs<ExtArgs>
            result: $Utils.Optional<StaffPaieCountAggregateOutputType> | number
          }
        }
      }
      Charge: {
        payload: Prisma.$ChargePayload<ExtArgs>
        fields: Prisma.ChargeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          findFirst: {
            args: Prisma.ChargeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          findMany: {
            args: Prisma.ChargeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>[]
          }
          create: {
            args: Prisma.ChargeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          createMany: {
            args: Prisma.ChargeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>[]
          }
          delete: {
            args: Prisma.ChargeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          update: {
            args: Prisma.ChargeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          deleteMany: {
            args: Prisma.ChargeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>[]
          }
          upsert: {
            args: Prisma.ChargeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          aggregate: {
            args: Prisma.ChargeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharge>
          }
          groupBy: {
            args: Prisma.ChargeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargeCountArgs<ExtArgs>
            result: $Utils.Optional<ChargeCountAggregateOutputType> | number
          }
        }
      }
      ChargeReel: {
        payload: Prisma.$ChargeReelPayload<ExtArgs>
        fields: Prisma.ChargeReelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargeReelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargeReelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>
          }
          findFirst: {
            args: Prisma.ChargeReelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargeReelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>
          }
          findMany: {
            args: Prisma.ChargeReelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>[]
          }
          create: {
            args: Prisma.ChargeReelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>
          }
          createMany: {
            args: Prisma.ChargeReelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargeReelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>[]
          }
          delete: {
            args: Prisma.ChargeReelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>
          }
          update: {
            args: Prisma.ChargeReelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>
          }
          deleteMany: {
            args: Prisma.ChargeReelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargeReelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargeReelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>[]
          }
          upsert: {
            args: Prisma.ChargeReelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeReelPayload>
          }
          aggregate: {
            args: Prisma.ChargeReelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChargeReel>
          }
          groupBy: {
            args: Prisma.ChargeReelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargeReelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargeReelCountArgs<ExtArgs>
            result: $Utils.Optional<ChargeReelCountAggregateOutputType> | number
          }
        }
      }
      Depense: {
        payload: Prisma.$DepensePayload<ExtArgs>
        fields: Prisma.DepenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          findFirst: {
            args: Prisma.DepenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          findMany: {
            args: Prisma.DepenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>[]
          }
          create: {
            args: Prisma.DepenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          createMany: {
            args: Prisma.DepenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>[]
          }
          delete: {
            args: Prisma.DepenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          update: {
            args: Prisma.DepenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          deleteMany: {
            args: Prisma.DepenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>[]
          }
          upsert: {
            args: Prisma.DepenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          aggregate: {
            args: Prisma.DepenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepense>
          }
          groupBy: {
            args: Prisma.DepenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepenseCountArgs<ExtArgs>
            result: $Utils.Optional<DepenseCountAggregateOutputType> | number
          }
        }
      }
      PetiteCaisse: {
        payload: Prisma.$PetiteCaissePayload<ExtArgs>
        fields: Prisma.PetiteCaisseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetiteCaisseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetiteCaisseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>
          }
          findFirst: {
            args: Prisma.PetiteCaisseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetiteCaisseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>
          }
          findMany: {
            args: Prisma.PetiteCaisseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>[]
          }
          create: {
            args: Prisma.PetiteCaisseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>
          }
          createMany: {
            args: Prisma.PetiteCaisseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetiteCaisseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>[]
          }
          delete: {
            args: Prisma.PetiteCaisseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>
          }
          update: {
            args: Prisma.PetiteCaisseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>
          }
          deleteMany: {
            args: Prisma.PetiteCaisseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetiteCaisseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetiteCaisseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>[]
          }
          upsert: {
            args: Prisma.PetiteCaisseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetiteCaissePayload>
          }
          aggregate: {
            args: Prisma.PetiteCaisseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetiteCaisse>
          }
          groupBy: {
            args: Prisma.PetiteCaisseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetiteCaisseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetiteCaisseCountArgs<ExtArgs>
            result: $Utils.Optional<PetiteCaisseCountAggregateOutputType> | number
          }
        }
      }
      Tresorerie: {
        payload: Prisma.$TresoreriePayload<ExtArgs>
        fields: Prisma.TresorerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TresorerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TresorerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>
          }
          findFirst: {
            args: Prisma.TresorerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TresorerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>
          }
          findMany: {
            args: Prisma.TresorerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>[]
          }
          create: {
            args: Prisma.TresorerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>
          }
          createMany: {
            args: Prisma.TresorerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TresorerieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>[]
          }
          delete: {
            args: Prisma.TresorerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>
          }
          update: {
            args: Prisma.TresorerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>
          }
          deleteMany: {
            args: Prisma.TresorerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TresorerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TresorerieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>[]
          }
          upsert: {
            args: Prisma.TresorerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TresoreriePayload>
          }
          aggregate: {
            args: Prisma.TresorerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTresorerie>
          }
          groupBy: {
            args: Prisma.TresorerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<TresorerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.TresorerieCountArgs<ExtArgs>
            result: $Utils.Optional<TresorerieCountAggregateOutputType> | number
          }
        }
      }
      Params: {
        payload: Prisma.$ParamsPayload<ExtArgs>
        fields: Prisma.ParamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>
          }
          findFirst: {
            args: Prisma.ParamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>
          }
          findMany: {
            args: Prisma.ParamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>[]
          }
          create: {
            args: Prisma.ParamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>
          }
          createMany: {
            args: Prisma.ParamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>[]
          }
          delete: {
            args: Prisma.ParamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>
          }
          update: {
            args: Prisma.ParamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>
          }
          deleteMany: {
            args: Prisma.ParamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>[]
          }
          upsert: {
            args: Prisma.ParamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamsPayload>
          }
          aggregate: {
            args: Prisma.ParamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParams>
          }
          groupBy: {
            args: Prisma.ParamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParamsCountArgs<ExtArgs>
            result: $Utils.Optional<ParamsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    client?: ClientOmit
    user?: UserOmit
    mission?: MissionOmit
    missionEnc?: MissionEncOmit
    facture?: FactureOmit
    tranche?: TrancheOmit
    staff?: StaffOmit
    staffPaie?: StaffPaieOmit
    charge?: ChargeOmit
    chargeReel?: ChargeReelOmit
    depense?: DepenseOmit
    petiteCaisse?: PetiteCaisseOmit
    tresorerie?: TresorerieOmit
    params?: ParamsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    encaissements: number
    factures: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encaissements?: boolean | MissionCountOutputTypeCountEncaissementsArgs
    factures?: boolean | MissionCountOutputTypeCountFacturesArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountEncaissementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionEncWhereInput
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountFacturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureWhereInput
  }


  /**
   * Count Type FactureCountOutputType
   */

  export type FactureCountOutputType = {
    tranches: number
  }

  export type FactureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tranches?: boolean | FactureCountOutputTypeCountTranchesArgs
  }

  // Custom InputTypes
  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureCountOutputType
     */
    select?: FactureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeCountTranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrancheWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    paies: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paies?: boolean | StaffCountOutputTypeCountPaiesArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountPaiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffPaieWhereInput
  }


  /**
   * Count Type ChargeCountOutputType
   */

  export type ChargeCountOutputType = {
    realisations: number
  }

  export type ChargeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    realisations?: boolean | ChargeCountOutputTypeCountRealisationsArgs
  }

  // Custom InputTypes
  /**
   * ChargeCountOutputType without action
   */
  export type ChargeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCountOutputType
     */
    select?: ChargeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChargeCountOutputType without action
   */
  export type ChargeCountOutputTypeCountRealisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargeReelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    nom: string | null
    secteur: string | null
    tel: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    secteur: string | null
    tel: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    nom: number
    secteur: number
    tel: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    nom?: true
    secteur?: true
    tel?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    nom?: true
    secteur?: true
    tel?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    nom?: true
    secteur?: true
    tel?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    nom: string
    secteur: string | null
    tel: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    secteur?: boolean
    tel?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    secteur?: boolean
    tel?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    secteur?: boolean
    tel?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    nom?: boolean
    secteur?: boolean
    tel?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "secteur" | "tel" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      secteur: string | null
      tel: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly nom: FieldRef<"Client", 'String'>
    readonly secteur: FieldRef<"Client", 'String'>
    readonly tel: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
    montant: number | null
    avance: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: number | null
    montant: number | null
    avance: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: number | null
    nom: string | null
    client: string | null
    apporteur: string | null
    statut: $Enums.MissionStatut | null
    montant: number | null
    avance: number | null
    debut: Date | null
    fin: Date | null
    tva: string | null
    nature: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    client: string | null
    apporteur: string | null
    statut: $Enums.MissionStatut | null
    montant: number | null
    avance: number | null
    debut: Date | null
    fin: Date | null
    tva: string | null
    nature: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    nom: number
    client: number
    apporteur: number
    statut: number
    montant: number
    avance: number
    debut: number
    fin: number
    tva: number
    nature: number
    desc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
    montant?: true
    avance?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
    montant?: true
    avance?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    nom?: true
    client?: true
    apporteur?: true
    statut?: true
    montant?: true
    avance?: true
    debut?: true
    fin?: true
    tva?: true
    nature?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    nom?: true
    client?: true
    apporteur?: true
    statut?: true
    montant?: true
    avance?: true
    debut?: true
    fin?: true
    tva?: true
    nature?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    nom?: true
    client?: true
    apporteur?: true
    statut?: true
    montant?: true
    avance?: true
    debut?: true
    fin?: true
    tva?: true
    nature?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: number
    nom: string
    client: string
    apporteur: string | null
    statut: $Enums.MissionStatut
    montant: number
    avance: number
    debut: Date | null
    fin: Date | null
    tva: string
    nature: string
    desc: string | null
    createdAt: Date
    updatedAt: Date
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    client?: boolean
    apporteur?: boolean
    statut?: boolean
    montant?: boolean
    avance?: boolean
    debut?: boolean
    fin?: boolean
    tva?: boolean
    nature?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    encaissements?: boolean | Mission$encaissementsArgs<ExtArgs>
    factures?: boolean | Mission$facturesArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    client?: boolean
    apporteur?: boolean
    statut?: boolean
    montant?: boolean
    avance?: boolean
    debut?: boolean
    fin?: boolean
    tva?: boolean
    nature?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    client?: boolean
    apporteur?: boolean
    statut?: boolean
    montant?: boolean
    avance?: boolean
    debut?: boolean
    fin?: boolean
    tva?: boolean
    nature?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectScalar = {
    id?: boolean
    nom?: boolean
    client?: boolean
    apporteur?: boolean
    statut?: boolean
    montant?: boolean
    avance?: boolean
    debut?: boolean
    fin?: boolean
    tva?: boolean
    nature?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "client" | "apporteur" | "statut" | "montant" | "avance" | "debut" | "fin" | "tva" | "nature" | "desc" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encaissements?: boolean | Mission$encaissementsArgs<ExtArgs>
    factures?: boolean | Mission$facturesArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      encaissements: Prisma.$MissionEncPayload<ExtArgs>[]
      factures: Prisma.$FacturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      client: string
      apporteur: string | null
      statut: $Enums.MissionStatut
      montant: number
      avance: number
      debut: Date | null
      fin: Date | null
      tva: string
      nature: string
      desc: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missions and returns the data saved in the database.
     * @param {MissionCreateManyAndReturnArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions and returns the data updated in the database.
     * @param {MissionUpdateManyAndReturnArgs} args - Arguments to update many Missions.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissionUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    encaissements<T extends Mission$encaissementsArgs<ExtArgs> = {}>(args?: Subset<T, Mission$encaissementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factures<T extends Mission$facturesArgs<ExtArgs> = {}>(args?: Subset<T, Mission$facturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'Int'>
    readonly nom: FieldRef<"Mission", 'String'>
    readonly client: FieldRef<"Mission", 'String'>
    readonly apporteur: FieldRef<"Mission", 'String'>
    readonly statut: FieldRef<"Mission", 'MissionStatut'>
    readonly montant: FieldRef<"Mission", 'Float'>
    readonly avance: FieldRef<"Mission", 'Float'>
    readonly debut: FieldRef<"Mission", 'DateTime'>
    readonly fin: FieldRef<"Mission", 'DateTime'>
    readonly tva: FieldRef<"Mission", 'String'>
    readonly nature: FieldRef<"Mission", 'String'>
    readonly desc: FieldRef<"Mission", 'String'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission createManyAndReturn
   */
  export type MissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission updateManyAndReturn
   */
  export type MissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.encaissements
   */
  export type Mission$encaissementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    where?: MissionEncWhereInput
    orderBy?: MissionEncOrderByWithRelationInput | MissionEncOrderByWithRelationInput[]
    cursor?: MissionEncWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionEncScalarFieldEnum | MissionEncScalarFieldEnum[]
  }

  /**
   * Mission.factures
   */
  export type Mission$facturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    where?: FactureWhereInput
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    cursor?: FactureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model MissionEnc
   */

  export type AggregateMissionEnc = {
    _count: MissionEncCountAggregateOutputType | null
    _avg: MissionEncAvgAggregateOutputType | null
    _sum: MissionEncSumAggregateOutputType | null
    _min: MissionEncMinAggregateOutputType | null
    _max: MissionEncMaxAggregateOutputType | null
  }

  export type MissionEncAvgAggregateOutputType = {
    id: number | null
    missionId: number | null
    montant: number | null
  }

  export type MissionEncSumAggregateOutputType = {
    id: number | null
    missionId: number | null
    montant: number | null
  }

  export type MissionEncMinAggregateOutputType = {
    id: number | null
    missionId: number | null
    mois: string | null
    montant: number | null
  }

  export type MissionEncMaxAggregateOutputType = {
    id: number | null
    missionId: number | null
    mois: string | null
    montant: number | null
  }

  export type MissionEncCountAggregateOutputType = {
    id: number
    missionId: number
    mois: number
    montant: number
    _all: number
  }


  export type MissionEncAvgAggregateInputType = {
    id?: true
    missionId?: true
    montant?: true
  }

  export type MissionEncSumAggregateInputType = {
    id?: true
    missionId?: true
    montant?: true
  }

  export type MissionEncMinAggregateInputType = {
    id?: true
    missionId?: true
    mois?: true
    montant?: true
  }

  export type MissionEncMaxAggregateInputType = {
    id?: true
    missionId?: true
    mois?: true
    montant?: true
  }

  export type MissionEncCountAggregateInputType = {
    id?: true
    missionId?: true
    mois?: true
    montant?: true
    _all?: true
  }

  export type MissionEncAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionEnc to aggregate.
     */
    where?: MissionEncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionEncs to fetch.
     */
    orderBy?: MissionEncOrderByWithRelationInput | MissionEncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionEncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionEncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionEncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionEncs
    **/
    _count?: true | MissionEncCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionEncAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionEncSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionEncMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionEncMaxAggregateInputType
  }

  export type GetMissionEncAggregateType<T extends MissionEncAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionEnc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionEnc[P]>
      : GetScalarType<T[P], AggregateMissionEnc[P]>
  }




  export type MissionEncGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionEncWhereInput
    orderBy?: MissionEncOrderByWithAggregationInput | MissionEncOrderByWithAggregationInput[]
    by: MissionEncScalarFieldEnum[] | MissionEncScalarFieldEnum
    having?: MissionEncScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionEncCountAggregateInputType | true
    _avg?: MissionEncAvgAggregateInputType
    _sum?: MissionEncSumAggregateInputType
    _min?: MissionEncMinAggregateInputType
    _max?: MissionEncMaxAggregateInputType
  }

  export type MissionEncGroupByOutputType = {
    id: number
    missionId: number
    mois: string
    montant: number
    _count: MissionEncCountAggregateOutputType | null
    _avg: MissionEncAvgAggregateOutputType | null
    _sum: MissionEncSumAggregateOutputType | null
    _min: MissionEncMinAggregateOutputType | null
    _max: MissionEncMaxAggregateOutputType | null
  }

  type GetMissionEncGroupByPayload<T extends MissionEncGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionEncGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionEncGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionEncGroupByOutputType[P]>
            : GetScalarType<T[P], MissionEncGroupByOutputType[P]>
        }
      >
    >


  export type MissionEncSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    mois?: boolean
    montant?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionEnc"]>

  export type MissionEncSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    mois?: boolean
    montant?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionEnc"]>

  export type MissionEncSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    mois?: boolean
    montant?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionEnc"]>

  export type MissionEncSelectScalar = {
    id?: boolean
    missionId?: boolean
    mois?: boolean
    montant?: boolean
  }

  export type MissionEncOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "mois" | "montant", ExtArgs["result"]["missionEnc"]>
  export type MissionEncInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionEncIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionEncIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $MissionEncPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionEnc"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      missionId: number
      mois: string
      montant: number
    }, ExtArgs["result"]["missionEnc"]>
    composites: {}
  }

  type MissionEncGetPayload<S extends boolean | null | undefined | MissionEncDefaultArgs> = $Result.GetResult<Prisma.$MissionEncPayload, S>

  type MissionEncCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionEncFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionEncCountAggregateInputType | true
    }

  export interface MissionEncDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionEnc'], meta: { name: 'MissionEnc' } }
    /**
     * Find zero or one MissionEnc that matches the filter.
     * @param {MissionEncFindUniqueArgs} args - Arguments to find a MissionEnc
     * @example
     * // Get one MissionEnc
     * const missionEnc = await prisma.missionEnc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionEncFindUniqueArgs>(args: SelectSubset<T, MissionEncFindUniqueArgs<ExtArgs>>): Prisma__MissionEncClient<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionEnc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionEncFindUniqueOrThrowArgs} args - Arguments to find a MissionEnc
     * @example
     * // Get one MissionEnc
     * const missionEnc = await prisma.missionEnc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionEncFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionEncFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionEncClient<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionEnc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEncFindFirstArgs} args - Arguments to find a MissionEnc
     * @example
     * // Get one MissionEnc
     * const missionEnc = await prisma.missionEnc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionEncFindFirstArgs>(args?: SelectSubset<T, MissionEncFindFirstArgs<ExtArgs>>): Prisma__MissionEncClient<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionEnc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEncFindFirstOrThrowArgs} args - Arguments to find a MissionEnc
     * @example
     * // Get one MissionEnc
     * const missionEnc = await prisma.missionEnc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionEncFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionEncFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionEncClient<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionEncs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEncFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionEncs
     * const missionEncs = await prisma.missionEnc.findMany()
     * 
     * // Get first 10 MissionEncs
     * const missionEncs = await prisma.missionEnc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionEncWithIdOnly = await prisma.missionEnc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionEncFindManyArgs>(args?: SelectSubset<T, MissionEncFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionEnc.
     * @param {MissionEncCreateArgs} args - Arguments to create a MissionEnc.
     * @example
     * // Create one MissionEnc
     * const MissionEnc = await prisma.missionEnc.create({
     *   data: {
     *     // ... data to create a MissionEnc
     *   }
     * })
     * 
     */
    create<T extends MissionEncCreateArgs>(args: SelectSubset<T, MissionEncCreateArgs<ExtArgs>>): Prisma__MissionEncClient<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionEncs.
     * @param {MissionEncCreateManyArgs} args - Arguments to create many MissionEncs.
     * @example
     * // Create many MissionEncs
     * const missionEnc = await prisma.missionEnc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionEncCreateManyArgs>(args?: SelectSubset<T, MissionEncCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MissionEncs and returns the data saved in the database.
     * @param {MissionEncCreateManyAndReturnArgs} args - Arguments to create many MissionEncs.
     * @example
     * // Create many MissionEncs
     * const missionEnc = await prisma.missionEnc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MissionEncs and only return the `id`
     * const missionEncWithIdOnly = await prisma.missionEnc.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionEncCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionEncCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MissionEnc.
     * @param {MissionEncDeleteArgs} args - Arguments to delete one MissionEnc.
     * @example
     * // Delete one MissionEnc
     * const MissionEnc = await prisma.missionEnc.delete({
     *   where: {
     *     // ... filter to delete one MissionEnc
     *   }
     * })
     * 
     */
    delete<T extends MissionEncDeleteArgs>(args: SelectSubset<T, MissionEncDeleteArgs<ExtArgs>>): Prisma__MissionEncClient<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionEnc.
     * @param {MissionEncUpdateArgs} args - Arguments to update one MissionEnc.
     * @example
     * // Update one MissionEnc
     * const missionEnc = await prisma.missionEnc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionEncUpdateArgs>(args: SelectSubset<T, MissionEncUpdateArgs<ExtArgs>>): Prisma__MissionEncClient<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionEncs.
     * @param {MissionEncDeleteManyArgs} args - Arguments to filter MissionEncs to delete.
     * @example
     * // Delete a few MissionEncs
     * const { count } = await prisma.missionEnc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionEncDeleteManyArgs>(args?: SelectSubset<T, MissionEncDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionEncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEncUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionEncs
     * const missionEnc = await prisma.missionEnc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionEncUpdateManyArgs>(args: SelectSubset<T, MissionEncUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionEncs and returns the data updated in the database.
     * @param {MissionEncUpdateManyAndReturnArgs} args - Arguments to update many MissionEncs.
     * @example
     * // Update many MissionEncs
     * const missionEnc = await prisma.missionEnc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MissionEncs and only return the `id`
     * const missionEncWithIdOnly = await prisma.missionEnc.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissionEncUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionEncUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MissionEnc.
     * @param {MissionEncUpsertArgs} args - Arguments to update or create a MissionEnc.
     * @example
     * // Update or create a MissionEnc
     * const missionEnc = await prisma.missionEnc.upsert({
     *   create: {
     *     // ... data to create a MissionEnc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionEnc we want to update
     *   }
     * })
     */
    upsert<T extends MissionEncUpsertArgs>(args: SelectSubset<T, MissionEncUpsertArgs<ExtArgs>>): Prisma__MissionEncClient<$Result.GetResult<Prisma.$MissionEncPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionEncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEncCountArgs} args - Arguments to filter MissionEncs to count.
     * @example
     * // Count the number of MissionEncs
     * const count = await prisma.missionEnc.count({
     *   where: {
     *     // ... the filter for the MissionEncs we want to count
     *   }
     * })
    **/
    count<T extends MissionEncCountArgs>(
      args?: Subset<T, MissionEncCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionEncCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionEnc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEncAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionEncAggregateArgs>(args: Subset<T, MissionEncAggregateArgs>): Prisma.PrismaPromise<GetMissionEncAggregateType<T>>

    /**
     * Group by MissionEnc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEncGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionEncGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionEncGroupByArgs['orderBy'] }
        : { orderBy?: MissionEncGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionEncGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionEncGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionEnc model
   */
  readonly fields: MissionEncFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionEnc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionEncClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionEnc model
   */
  interface MissionEncFieldRefs {
    readonly id: FieldRef<"MissionEnc", 'Int'>
    readonly missionId: FieldRef<"MissionEnc", 'Int'>
    readonly mois: FieldRef<"MissionEnc", 'String'>
    readonly montant: FieldRef<"MissionEnc", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MissionEnc findUnique
   */
  export type MissionEncFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * Filter, which MissionEnc to fetch.
     */
    where: MissionEncWhereUniqueInput
  }

  /**
   * MissionEnc findUniqueOrThrow
   */
  export type MissionEncFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * Filter, which MissionEnc to fetch.
     */
    where: MissionEncWhereUniqueInput
  }

  /**
   * MissionEnc findFirst
   */
  export type MissionEncFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * Filter, which MissionEnc to fetch.
     */
    where?: MissionEncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionEncs to fetch.
     */
    orderBy?: MissionEncOrderByWithRelationInput | MissionEncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionEncs.
     */
    cursor?: MissionEncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionEncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionEncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionEncs.
     */
    distinct?: MissionEncScalarFieldEnum | MissionEncScalarFieldEnum[]
  }

  /**
   * MissionEnc findFirstOrThrow
   */
  export type MissionEncFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * Filter, which MissionEnc to fetch.
     */
    where?: MissionEncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionEncs to fetch.
     */
    orderBy?: MissionEncOrderByWithRelationInput | MissionEncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionEncs.
     */
    cursor?: MissionEncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionEncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionEncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionEncs.
     */
    distinct?: MissionEncScalarFieldEnum | MissionEncScalarFieldEnum[]
  }

  /**
   * MissionEnc findMany
   */
  export type MissionEncFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * Filter, which MissionEncs to fetch.
     */
    where?: MissionEncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionEncs to fetch.
     */
    orderBy?: MissionEncOrderByWithRelationInput | MissionEncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionEncs.
     */
    cursor?: MissionEncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionEncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionEncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionEncs.
     */
    distinct?: MissionEncScalarFieldEnum | MissionEncScalarFieldEnum[]
  }

  /**
   * MissionEnc create
   */
  export type MissionEncCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionEnc.
     */
    data: XOR<MissionEncCreateInput, MissionEncUncheckedCreateInput>
  }

  /**
   * MissionEnc createMany
   */
  export type MissionEncCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionEncs.
     */
    data: MissionEncCreateManyInput | MissionEncCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionEnc createManyAndReturn
   */
  export type MissionEncCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * The data used to create many MissionEncs.
     */
    data: MissionEncCreateManyInput | MissionEncCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionEnc update
   */
  export type MissionEncUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionEnc.
     */
    data: XOR<MissionEncUpdateInput, MissionEncUncheckedUpdateInput>
    /**
     * Choose, which MissionEnc to update.
     */
    where: MissionEncWhereUniqueInput
  }

  /**
   * MissionEnc updateMany
   */
  export type MissionEncUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionEncs.
     */
    data: XOR<MissionEncUpdateManyMutationInput, MissionEncUncheckedUpdateManyInput>
    /**
     * Filter which MissionEncs to update
     */
    where?: MissionEncWhereInput
    /**
     * Limit how many MissionEncs to update.
     */
    limit?: number
  }

  /**
   * MissionEnc updateManyAndReturn
   */
  export type MissionEncUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * The data used to update MissionEncs.
     */
    data: XOR<MissionEncUpdateManyMutationInput, MissionEncUncheckedUpdateManyInput>
    /**
     * Filter which MissionEncs to update
     */
    where?: MissionEncWhereInput
    /**
     * Limit how many MissionEncs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionEnc upsert
   */
  export type MissionEncUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionEnc to update in case it exists.
     */
    where: MissionEncWhereUniqueInput
    /**
     * In case the MissionEnc found by the `where` argument doesn't exist, create a new MissionEnc with this data.
     */
    create: XOR<MissionEncCreateInput, MissionEncUncheckedCreateInput>
    /**
     * In case the MissionEnc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionEncUpdateInput, MissionEncUncheckedUpdateInput>
  }

  /**
   * MissionEnc delete
   */
  export type MissionEncDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
    /**
     * Filter which MissionEnc to delete.
     */
    where: MissionEncWhereUniqueInput
  }

  /**
   * MissionEnc deleteMany
   */
  export type MissionEncDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionEncs to delete
     */
    where?: MissionEncWhereInput
    /**
     * Limit how many MissionEncs to delete.
     */
    limit?: number
  }

  /**
   * MissionEnc without action
   */
  export type MissionEncDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEnc
     */
    select?: MissionEncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEnc
     */
    omit?: MissionEncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEncInclude<ExtArgs> | null
  }


  /**
   * Model Facture
   */

  export type AggregateFacture = {
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  export type FactureAvgAggregateOutputType = {
    id: number | null
    missionId: number | null
    ht: number | null
    tvaMontant: number | null
    ttc: number | null
  }

  export type FactureSumAggregateOutputType = {
    id: number | null
    missionId: number | null
    ht: number | null
    tvaMontant: number | null
    ttc: number | null
  }

  export type FactureMinAggregateOutputType = {
    id: number | null
    missionId: number | null
    num: string | null
    date: Date | null
    ht: number | null
    tvaType: string | null
    tvaMontant: number | null
    ttc: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FactureMaxAggregateOutputType = {
    id: number | null
    missionId: number | null
    num: string | null
    date: Date | null
    ht: number | null
    tvaType: string | null
    tvaMontant: number | null
    ttc: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FactureCountAggregateOutputType = {
    id: number
    missionId: number
    num: number
    date: number
    ht: number
    tvaType: number
    tvaMontant: number
    ttc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FactureAvgAggregateInputType = {
    id?: true
    missionId?: true
    ht?: true
    tvaMontant?: true
    ttc?: true
  }

  export type FactureSumAggregateInputType = {
    id?: true
    missionId?: true
    ht?: true
    tvaMontant?: true
    ttc?: true
  }

  export type FactureMinAggregateInputType = {
    id?: true
    missionId?: true
    num?: true
    date?: true
    ht?: true
    tvaType?: true
    tvaMontant?: true
    ttc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FactureMaxAggregateInputType = {
    id?: true
    missionId?: true
    num?: true
    date?: true
    ht?: true
    tvaType?: true
    tvaMontant?: true
    ttc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FactureCountAggregateInputType = {
    id?: true
    missionId?: true
    num?: true
    date?: true
    ht?: true
    tvaType?: true
    tvaMontant?: true
    ttc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FactureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facture to aggregate.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Factures
    **/
    _count?: true | FactureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactureMaxAggregateInputType
  }

  export type GetFactureAggregateType<T extends FactureAggregateArgs> = {
        [P in keyof T & keyof AggregateFacture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacture[P]>
      : GetScalarType<T[P], AggregateFacture[P]>
  }




  export type FactureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureWhereInput
    orderBy?: FactureOrderByWithAggregationInput | FactureOrderByWithAggregationInput[]
    by: FactureScalarFieldEnum[] | FactureScalarFieldEnum
    having?: FactureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactureCountAggregateInputType | true
    _avg?: FactureAvgAggregateInputType
    _sum?: FactureSumAggregateInputType
    _min?: FactureMinAggregateInputType
    _max?: FactureMaxAggregateInputType
  }

  export type FactureGroupByOutputType = {
    id: number
    missionId: number
    num: string
    date: Date
    ht: number
    tvaType: string
    tvaMontant: number
    ttc: number
    createdAt: Date
    updatedAt: Date
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  type GetFactureGroupByPayload<T extends FactureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactureGroupByOutputType[P]>
            : GetScalarType<T[P], FactureGroupByOutputType[P]>
        }
      >
    >


  export type FactureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    num?: boolean
    date?: boolean
    ht?: boolean
    tvaType?: boolean
    tvaMontant?: boolean
    ttc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    tranches?: boolean | Facture$tranchesArgs<ExtArgs>
    _count?: boolean | FactureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    num?: boolean
    date?: boolean
    ht?: boolean
    tvaType?: boolean
    tvaMontant?: boolean
    ttc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    num?: boolean
    date?: boolean
    ht?: boolean
    tvaType?: boolean
    tvaMontant?: boolean
    ttc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectScalar = {
    id?: boolean
    missionId?: boolean
    num?: boolean
    date?: boolean
    ht?: boolean
    tvaType?: boolean
    tvaMontant?: boolean
    ttc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FactureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "num" | "date" | "ht" | "tvaType" | "tvaMontant" | "ttc" | "createdAt" | "updatedAt", ExtArgs["result"]["facture"]>
  export type FactureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    tranches?: boolean | Facture$tranchesArgs<ExtArgs>
    _count?: boolean | FactureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FactureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type FactureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $FacturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facture"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
      tranches: Prisma.$TranchePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      missionId: number
      num: string
      date: Date
      ht: number
      tvaType: string
      tvaMontant: number
      ttc: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facture"]>
    composites: {}
  }

  type FactureGetPayload<S extends boolean | null | undefined | FactureDefaultArgs> = $Result.GetResult<Prisma.$FacturePayload, S>

  type FactureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactureCountAggregateInputType | true
    }

  export interface FactureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facture'], meta: { name: 'Facture' } }
    /**
     * Find zero or one Facture that matches the filter.
     * @param {FactureFindUniqueArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactureFindUniqueArgs>(args: SelectSubset<T, FactureFindUniqueArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactureFindUniqueOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactureFindUniqueOrThrowArgs>(args: SelectSubset<T, FactureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindFirstArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactureFindFirstArgs>(args?: SelectSubset<T, FactureFindFirstArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindFirstOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactureFindFirstOrThrowArgs>(args?: SelectSubset<T, FactureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Factures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factures
     * const factures = await prisma.facture.findMany()
     * 
     * // Get first 10 Factures
     * const factures = await prisma.facture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factureWithIdOnly = await prisma.facture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactureFindManyArgs>(args?: SelectSubset<T, FactureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facture.
     * @param {FactureCreateArgs} args - Arguments to create a Facture.
     * @example
     * // Create one Facture
     * const Facture = await prisma.facture.create({
     *   data: {
     *     // ... data to create a Facture
     *   }
     * })
     * 
     */
    create<T extends FactureCreateArgs>(args: SelectSubset<T, FactureCreateArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Factures.
     * @param {FactureCreateManyArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactureCreateManyArgs>(args?: SelectSubset<T, FactureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Factures and returns the data saved in the database.
     * @param {FactureCreateManyAndReturnArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactureCreateManyAndReturnArgs>(args?: SelectSubset<T, FactureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facture.
     * @param {FactureDeleteArgs} args - Arguments to delete one Facture.
     * @example
     * // Delete one Facture
     * const Facture = await prisma.facture.delete({
     *   where: {
     *     // ... filter to delete one Facture
     *   }
     * })
     * 
     */
    delete<T extends FactureDeleteArgs>(args: SelectSubset<T, FactureDeleteArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facture.
     * @param {FactureUpdateArgs} args - Arguments to update one Facture.
     * @example
     * // Update one Facture
     * const facture = await prisma.facture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactureUpdateArgs>(args: SelectSubset<T, FactureUpdateArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Factures.
     * @param {FactureDeleteManyArgs} args - Arguments to filter Factures to delete.
     * @example
     * // Delete a few Factures
     * const { count } = await prisma.facture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactureDeleteManyArgs>(args?: SelectSubset<T, FactureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactureUpdateManyArgs>(args: SelectSubset<T, FactureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures and returns the data updated in the database.
     * @param {FactureUpdateManyAndReturnArgs} args - Arguments to update many Factures.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FactureUpdateManyAndReturnArgs>(args: SelectSubset<T, FactureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facture.
     * @param {FactureUpsertArgs} args - Arguments to update or create a Facture.
     * @example
     * // Update or create a Facture
     * const facture = await prisma.facture.upsert({
     *   create: {
     *     // ... data to create a Facture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facture we want to update
     *   }
     * })
     */
    upsert<T extends FactureUpsertArgs>(args: SelectSubset<T, FactureUpsertArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureCountArgs} args - Arguments to filter Factures to count.
     * @example
     * // Count the number of Factures
     * const count = await prisma.facture.count({
     *   where: {
     *     // ... the filter for the Factures we want to count
     *   }
     * })
    **/
    count<T extends FactureCountArgs>(
      args?: Subset<T, FactureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FactureAggregateArgs>(args: Subset<T, FactureAggregateArgs>): Prisma.PrismaPromise<GetFactureAggregateType<T>>

    /**
     * Group by Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FactureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactureGroupByArgs['orderBy'] }
        : { orderBy?: FactureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FactureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facture model
   */
  readonly fields: FactureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tranches<T extends Facture$tranchesArgs<ExtArgs> = {}>(args?: Subset<T, Facture$tranchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Facture model
   */
  interface FactureFieldRefs {
    readonly id: FieldRef<"Facture", 'Int'>
    readonly missionId: FieldRef<"Facture", 'Int'>
    readonly num: FieldRef<"Facture", 'String'>
    readonly date: FieldRef<"Facture", 'DateTime'>
    readonly ht: FieldRef<"Facture", 'Float'>
    readonly tvaType: FieldRef<"Facture", 'String'>
    readonly tvaMontant: FieldRef<"Facture", 'Float'>
    readonly ttc: FieldRef<"Facture", 'Float'>
    readonly createdAt: FieldRef<"Facture", 'DateTime'>
    readonly updatedAt: FieldRef<"Facture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Facture findUnique
   */
  export type FactureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture findUniqueOrThrow
   */
  export type FactureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture findFirst
   */
  export type FactureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture findFirstOrThrow
   */
  export type FactureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture findMany
   */
  export type FactureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Factures to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture create
   */
  export type FactureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The data needed to create a Facture.
     */
    data: XOR<FactureCreateInput, FactureUncheckedCreateInput>
  }

  /**
   * Facture createMany
   */
  export type FactureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Factures.
     */
    data: FactureCreateManyInput | FactureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facture createManyAndReturn
   */
  export type FactureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * The data used to create many Factures.
     */
    data: FactureCreateManyInput | FactureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Facture update
   */
  export type FactureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The data needed to update a Facture.
     */
    data: XOR<FactureUpdateInput, FactureUncheckedUpdateInput>
    /**
     * Choose, which Facture to update.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture updateMany
   */
  export type FactureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Factures.
     */
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyInput>
    /**
     * Filter which Factures to update
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to update.
     */
    limit?: number
  }

  /**
   * Facture updateManyAndReturn
   */
  export type FactureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * The data used to update Factures.
     */
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyInput>
    /**
     * Filter which Factures to update
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Facture upsert
   */
  export type FactureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The filter to search for the Facture to update in case it exists.
     */
    where: FactureWhereUniqueInput
    /**
     * In case the Facture found by the `where` argument doesn't exist, create a new Facture with this data.
     */
    create: XOR<FactureCreateInput, FactureUncheckedCreateInput>
    /**
     * In case the Facture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactureUpdateInput, FactureUncheckedUpdateInput>
  }

  /**
   * Facture delete
   */
  export type FactureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter which Facture to delete.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture deleteMany
   */
  export type FactureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factures to delete
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to delete.
     */
    limit?: number
  }

  /**
   * Facture.tranches
   */
  export type Facture$tranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    where?: TrancheWhereInput
    orderBy?: TrancheOrderByWithRelationInput | TrancheOrderByWithRelationInput[]
    cursor?: TrancheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrancheScalarFieldEnum | TrancheScalarFieldEnum[]
  }

  /**
   * Facture without action
   */
  export type FactureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
  }


  /**
   * Model Tranche
   */

  export type AggregateTranche = {
    _count: TrancheCountAggregateOutputType | null
    _avg: TrancheAvgAggregateOutputType | null
    _sum: TrancheSumAggregateOutputType | null
    _min: TrancheMinAggregateOutputType | null
    _max: TrancheMaxAggregateOutputType | null
  }

  export type TrancheAvgAggregateOutputType = {
    id: number | null
    factureId: number | null
    num: number | null
    montant: number | null
    encaisse: number | null
  }

  export type TrancheSumAggregateOutputType = {
    id: number | null
    factureId: number | null
    num: number | null
    montant: number | null
    encaisse: number | null
  }

  export type TrancheMinAggregateOutputType = {
    id: number | null
    factureId: number | null
    num: number | null
    montant: number | null
    echeance: Date | null
    encaisse: number | null
    dateEnc: Date | null
    ref: string | null
    statut: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrancheMaxAggregateOutputType = {
    id: number | null
    factureId: number | null
    num: number | null
    montant: number | null
    echeance: Date | null
    encaisse: number | null
    dateEnc: Date | null
    ref: string | null
    statut: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrancheCountAggregateOutputType = {
    id: number
    factureId: number
    num: number
    montant: number
    echeance: number
    encaisse: number
    dateEnc: number
    ref: number
    statut: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrancheAvgAggregateInputType = {
    id?: true
    factureId?: true
    num?: true
    montant?: true
    encaisse?: true
  }

  export type TrancheSumAggregateInputType = {
    id?: true
    factureId?: true
    num?: true
    montant?: true
    encaisse?: true
  }

  export type TrancheMinAggregateInputType = {
    id?: true
    factureId?: true
    num?: true
    montant?: true
    echeance?: true
    encaisse?: true
    dateEnc?: true
    ref?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrancheMaxAggregateInputType = {
    id?: true
    factureId?: true
    num?: true
    montant?: true
    echeance?: true
    encaisse?: true
    dateEnc?: true
    ref?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrancheCountAggregateInputType = {
    id?: true
    factureId?: true
    num?: true
    montant?: true
    echeance?: true
    encaisse?: true
    dateEnc?: true
    ref?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrancheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tranche to aggregate.
     */
    where?: TrancheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tranches to fetch.
     */
    orderBy?: TrancheOrderByWithRelationInput | TrancheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrancheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tranches
    **/
    _count?: true | TrancheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrancheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrancheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrancheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrancheMaxAggregateInputType
  }

  export type GetTrancheAggregateType<T extends TrancheAggregateArgs> = {
        [P in keyof T & keyof AggregateTranche]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranche[P]>
      : GetScalarType<T[P], AggregateTranche[P]>
  }




  export type TrancheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrancheWhereInput
    orderBy?: TrancheOrderByWithAggregationInput | TrancheOrderByWithAggregationInput[]
    by: TrancheScalarFieldEnum[] | TrancheScalarFieldEnum
    having?: TrancheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrancheCountAggregateInputType | true
    _avg?: TrancheAvgAggregateInputType
    _sum?: TrancheSumAggregateInputType
    _min?: TrancheMinAggregateInputType
    _max?: TrancheMaxAggregateInputType
  }

  export type TrancheGroupByOutputType = {
    id: number
    factureId: number
    num: number
    montant: number
    echeance: Date
    encaisse: number
    dateEnc: Date | null
    ref: string | null
    statut: string
    createdAt: Date
    updatedAt: Date
    _count: TrancheCountAggregateOutputType | null
    _avg: TrancheAvgAggregateOutputType | null
    _sum: TrancheSumAggregateOutputType | null
    _min: TrancheMinAggregateOutputType | null
    _max: TrancheMaxAggregateOutputType | null
  }

  type GetTrancheGroupByPayload<T extends TrancheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrancheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrancheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrancheGroupByOutputType[P]>
            : GetScalarType<T[P], TrancheGroupByOutputType[P]>
        }
      >
    >


  export type TrancheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factureId?: boolean
    num?: boolean
    montant?: boolean
    echeance?: boolean
    encaisse?: boolean
    dateEnc?: boolean
    ref?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tranche"]>

  export type TrancheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factureId?: boolean
    num?: boolean
    montant?: boolean
    echeance?: boolean
    encaisse?: boolean
    dateEnc?: boolean
    ref?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tranche"]>

  export type TrancheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factureId?: boolean
    num?: boolean
    montant?: boolean
    echeance?: boolean
    encaisse?: boolean
    dateEnc?: boolean
    ref?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tranche"]>

  export type TrancheSelectScalar = {
    id?: boolean
    factureId?: boolean
    num?: boolean
    montant?: boolean
    echeance?: boolean
    encaisse?: boolean
    dateEnc?: boolean
    ref?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrancheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "factureId" | "num" | "montant" | "echeance" | "encaisse" | "dateEnc" | "ref" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["tranche"]>
  export type TrancheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }
  export type TrancheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }
  export type TrancheIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }

  export type $TranchePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tranche"
    objects: {
      facture: Prisma.$FacturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      factureId: number
      num: number
      montant: number
      echeance: Date
      encaisse: number
      dateEnc: Date | null
      ref: string | null
      statut: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tranche"]>
    composites: {}
  }

  type TrancheGetPayload<S extends boolean | null | undefined | TrancheDefaultArgs> = $Result.GetResult<Prisma.$TranchePayload, S>

  type TrancheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrancheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrancheCountAggregateInputType | true
    }

  export interface TrancheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tranche'], meta: { name: 'Tranche' } }
    /**
     * Find zero or one Tranche that matches the filter.
     * @param {TrancheFindUniqueArgs} args - Arguments to find a Tranche
     * @example
     * // Get one Tranche
     * const tranche = await prisma.tranche.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrancheFindUniqueArgs>(args: SelectSubset<T, TrancheFindUniqueArgs<ExtArgs>>): Prisma__TrancheClient<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tranche that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrancheFindUniqueOrThrowArgs} args - Arguments to find a Tranche
     * @example
     * // Get one Tranche
     * const tranche = await prisma.tranche.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrancheFindUniqueOrThrowArgs>(args: SelectSubset<T, TrancheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrancheClient<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tranche that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrancheFindFirstArgs} args - Arguments to find a Tranche
     * @example
     * // Get one Tranche
     * const tranche = await prisma.tranche.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrancheFindFirstArgs>(args?: SelectSubset<T, TrancheFindFirstArgs<ExtArgs>>): Prisma__TrancheClient<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tranche that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrancheFindFirstOrThrowArgs} args - Arguments to find a Tranche
     * @example
     * // Get one Tranche
     * const tranche = await prisma.tranche.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrancheFindFirstOrThrowArgs>(args?: SelectSubset<T, TrancheFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrancheClient<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrancheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tranches
     * const tranches = await prisma.tranche.findMany()
     * 
     * // Get first 10 Tranches
     * const tranches = await prisma.tranche.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trancheWithIdOnly = await prisma.tranche.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrancheFindManyArgs>(args?: SelectSubset<T, TrancheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tranche.
     * @param {TrancheCreateArgs} args - Arguments to create a Tranche.
     * @example
     * // Create one Tranche
     * const Tranche = await prisma.tranche.create({
     *   data: {
     *     // ... data to create a Tranche
     *   }
     * })
     * 
     */
    create<T extends TrancheCreateArgs>(args: SelectSubset<T, TrancheCreateArgs<ExtArgs>>): Prisma__TrancheClient<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tranches.
     * @param {TrancheCreateManyArgs} args - Arguments to create many Tranches.
     * @example
     * // Create many Tranches
     * const tranche = await prisma.tranche.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrancheCreateManyArgs>(args?: SelectSubset<T, TrancheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tranches and returns the data saved in the database.
     * @param {TrancheCreateManyAndReturnArgs} args - Arguments to create many Tranches.
     * @example
     * // Create many Tranches
     * const tranche = await prisma.tranche.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tranches and only return the `id`
     * const trancheWithIdOnly = await prisma.tranche.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrancheCreateManyAndReturnArgs>(args?: SelectSubset<T, TrancheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tranche.
     * @param {TrancheDeleteArgs} args - Arguments to delete one Tranche.
     * @example
     * // Delete one Tranche
     * const Tranche = await prisma.tranche.delete({
     *   where: {
     *     // ... filter to delete one Tranche
     *   }
     * })
     * 
     */
    delete<T extends TrancheDeleteArgs>(args: SelectSubset<T, TrancheDeleteArgs<ExtArgs>>): Prisma__TrancheClient<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tranche.
     * @param {TrancheUpdateArgs} args - Arguments to update one Tranche.
     * @example
     * // Update one Tranche
     * const tranche = await prisma.tranche.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrancheUpdateArgs>(args: SelectSubset<T, TrancheUpdateArgs<ExtArgs>>): Prisma__TrancheClient<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tranches.
     * @param {TrancheDeleteManyArgs} args - Arguments to filter Tranches to delete.
     * @example
     * // Delete a few Tranches
     * const { count } = await prisma.tranche.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrancheDeleteManyArgs>(args?: SelectSubset<T, TrancheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrancheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tranches
     * const tranche = await prisma.tranche.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrancheUpdateManyArgs>(args: SelectSubset<T, TrancheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tranches and returns the data updated in the database.
     * @param {TrancheUpdateManyAndReturnArgs} args - Arguments to update many Tranches.
     * @example
     * // Update many Tranches
     * const tranche = await prisma.tranche.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tranches and only return the `id`
     * const trancheWithIdOnly = await prisma.tranche.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrancheUpdateManyAndReturnArgs>(args: SelectSubset<T, TrancheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tranche.
     * @param {TrancheUpsertArgs} args - Arguments to update or create a Tranche.
     * @example
     * // Update or create a Tranche
     * const tranche = await prisma.tranche.upsert({
     *   create: {
     *     // ... data to create a Tranche
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tranche we want to update
     *   }
     * })
     */
    upsert<T extends TrancheUpsertArgs>(args: SelectSubset<T, TrancheUpsertArgs<ExtArgs>>): Prisma__TrancheClient<$Result.GetResult<Prisma.$TranchePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrancheCountArgs} args - Arguments to filter Tranches to count.
     * @example
     * // Count the number of Tranches
     * const count = await prisma.tranche.count({
     *   where: {
     *     // ... the filter for the Tranches we want to count
     *   }
     * })
    **/
    count<T extends TrancheCountArgs>(
      args?: Subset<T, TrancheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrancheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tranche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrancheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrancheAggregateArgs>(args: Subset<T, TrancheAggregateArgs>): Prisma.PrismaPromise<GetTrancheAggregateType<T>>

    /**
     * Group by Tranche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrancheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrancheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrancheGroupByArgs['orderBy'] }
        : { orderBy?: TrancheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrancheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrancheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tranche model
   */
  readonly fields: TrancheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tranche.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrancheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facture<T extends FactureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FactureDefaultArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tranche model
   */
  interface TrancheFieldRefs {
    readonly id: FieldRef<"Tranche", 'Int'>
    readonly factureId: FieldRef<"Tranche", 'Int'>
    readonly num: FieldRef<"Tranche", 'Int'>
    readonly montant: FieldRef<"Tranche", 'Float'>
    readonly echeance: FieldRef<"Tranche", 'DateTime'>
    readonly encaisse: FieldRef<"Tranche", 'Float'>
    readonly dateEnc: FieldRef<"Tranche", 'DateTime'>
    readonly ref: FieldRef<"Tranche", 'String'>
    readonly statut: FieldRef<"Tranche", 'String'>
    readonly createdAt: FieldRef<"Tranche", 'DateTime'>
    readonly updatedAt: FieldRef<"Tranche", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tranche findUnique
   */
  export type TrancheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * Filter, which Tranche to fetch.
     */
    where: TrancheWhereUniqueInput
  }

  /**
   * Tranche findUniqueOrThrow
   */
  export type TrancheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * Filter, which Tranche to fetch.
     */
    where: TrancheWhereUniqueInput
  }

  /**
   * Tranche findFirst
   */
  export type TrancheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * Filter, which Tranche to fetch.
     */
    where?: TrancheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tranches to fetch.
     */
    orderBy?: TrancheOrderByWithRelationInput | TrancheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tranches.
     */
    cursor?: TrancheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tranches.
     */
    distinct?: TrancheScalarFieldEnum | TrancheScalarFieldEnum[]
  }

  /**
   * Tranche findFirstOrThrow
   */
  export type TrancheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * Filter, which Tranche to fetch.
     */
    where?: TrancheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tranches to fetch.
     */
    orderBy?: TrancheOrderByWithRelationInput | TrancheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tranches.
     */
    cursor?: TrancheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tranches.
     */
    distinct?: TrancheScalarFieldEnum | TrancheScalarFieldEnum[]
  }

  /**
   * Tranche findMany
   */
  export type TrancheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * Filter, which Tranches to fetch.
     */
    where?: TrancheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tranches to fetch.
     */
    orderBy?: TrancheOrderByWithRelationInput | TrancheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tranches.
     */
    cursor?: TrancheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tranches.
     */
    distinct?: TrancheScalarFieldEnum | TrancheScalarFieldEnum[]
  }

  /**
   * Tranche create
   */
  export type TrancheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * The data needed to create a Tranche.
     */
    data: XOR<TrancheCreateInput, TrancheUncheckedCreateInput>
  }

  /**
   * Tranche createMany
   */
  export type TrancheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tranches.
     */
    data: TrancheCreateManyInput | TrancheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tranche createManyAndReturn
   */
  export type TrancheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * The data used to create many Tranches.
     */
    data: TrancheCreateManyInput | TrancheCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tranche update
   */
  export type TrancheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * The data needed to update a Tranche.
     */
    data: XOR<TrancheUpdateInput, TrancheUncheckedUpdateInput>
    /**
     * Choose, which Tranche to update.
     */
    where: TrancheWhereUniqueInput
  }

  /**
   * Tranche updateMany
   */
  export type TrancheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tranches.
     */
    data: XOR<TrancheUpdateManyMutationInput, TrancheUncheckedUpdateManyInput>
    /**
     * Filter which Tranches to update
     */
    where?: TrancheWhereInput
    /**
     * Limit how many Tranches to update.
     */
    limit?: number
  }

  /**
   * Tranche updateManyAndReturn
   */
  export type TrancheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * The data used to update Tranches.
     */
    data: XOR<TrancheUpdateManyMutationInput, TrancheUncheckedUpdateManyInput>
    /**
     * Filter which Tranches to update
     */
    where?: TrancheWhereInput
    /**
     * Limit how many Tranches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tranche upsert
   */
  export type TrancheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * The filter to search for the Tranche to update in case it exists.
     */
    where: TrancheWhereUniqueInput
    /**
     * In case the Tranche found by the `where` argument doesn't exist, create a new Tranche with this data.
     */
    create: XOR<TrancheCreateInput, TrancheUncheckedCreateInput>
    /**
     * In case the Tranche was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrancheUpdateInput, TrancheUncheckedUpdateInput>
  }

  /**
   * Tranche delete
   */
  export type TrancheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
    /**
     * Filter which Tranche to delete.
     */
    where: TrancheWhereUniqueInput
  }

  /**
   * Tranche deleteMany
   */
  export type TrancheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tranches to delete
     */
    where?: TrancheWhereInput
    /**
     * Limit how many Tranches to delete.
     */
    limit?: number
  }

  /**
   * Tranche without action
   */
  export type TrancheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tranche
     */
    select?: TrancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tranche
     */
    omit?: TrancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrancheInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
    salaire: number | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
    salaire: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    nom: string | null
    poste: string | null
    salaire: number | null
    nature: string | null
    debut: Date | null
    fin: string | null
    marabu: boolean | null
    actif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    poste: string | null
    salaire: number | null
    nature: string | null
    debut: Date | null
    fin: string | null
    marabu: boolean | null
    actif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    nom: number
    poste: number
    salaire: number
    nature: number
    debut: number
    fin: number
    marabu: number
    actif: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
    salaire?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
    salaire?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    nom?: true
    poste?: true
    salaire?: true
    nature?: true
    debut?: true
    fin?: true
    marabu?: true
    actif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    nom?: true
    poste?: true
    salaire?: true
    nature?: true
    debut?: true
    fin?: true
    marabu?: true
    actif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    nom?: true
    poste?: true
    salaire?: true
    nature?: true
    debut?: true
    fin?: true
    marabu?: true
    actif?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    nom: string
    poste: string | null
    salaire: number
    nature: string
    debut: Date | null
    fin: string | null
    marabu: boolean
    actif: boolean
    createdAt: Date
    updatedAt: Date
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    poste?: boolean
    salaire?: boolean
    nature?: boolean
    debut?: boolean
    fin?: boolean
    marabu?: boolean
    actif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paies?: boolean | Staff$paiesArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    poste?: boolean
    salaire?: boolean
    nature?: boolean
    debut?: boolean
    fin?: boolean
    marabu?: boolean
    actif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    poste?: boolean
    salaire?: boolean
    nature?: boolean
    debut?: boolean
    fin?: boolean
    marabu?: boolean
    actif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    nom?: boolean
    poste?: boolean
    salaire?: boolean
    nature?: boolean
    debut?: boolean
    fin?: boolean
    marabu?: boolean
    actif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "poste" | "salaire" | "nature" | "debut" | "fin" | "marabu" | "actif" | "createdAt" | "updatedAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paies?: boolean | Staff$paiesArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      paies: Prisma.$StaffPaiePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      poste: string | null
      salaire: number
      nature: string
      debut: Date | null
      fin: string | null
      marabu: boolean
      actif: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paies<T extends Staff$paiesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$paiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'Int'>
    readonly nom: FieldRef<"Staff", 'String'>
    readonly poste: FieldRef<"Staff", 'String'>
    readonly salaire: FieldRef<"Staff", 'Float'>
    readonly nature: FieldRef<"Staff", 'String'>
    readonly debut: FieldRef<"Staff", 'DateTime'>
    readonly fin: FieldRef<"Staff", 'String'>
    readonly marabu: FieldRef<"Staff", 'Boolean'>
    readonly actif: FieldRef<"Staff", 'Boolean'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.paies
   */
  export type Staff$paiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    where?: StaffPaieWhereInput
    orderBy?: StaffPaieOrderByWithRelationInput | StaffPaieOrderByWithRelationInput[]
    cursor?: StaffPaieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffPaieScalarFieldEnum | StaffPaieScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model StaffPaie
   */

  export type AggregateStaffPaie = {
    _count: StaffPaieCountAggregateOutputType | null
    _avg: StaffPaieAvgAggregateOutputType | null
    _sum: StaffPaieSumAggregateOutputType | null
    _min: StaffPaieMinAggregateOutputType | null
    _max: StaffPaieMaxAggregateOutputType | null
  }

  export type StaffPaieAvgAggregateOutputType = {
    id: number | null
    staffId: number | null
    annee: number | null
    montant: number | null
  }

  export type StaffPaieSumAggregateOutputType = {
    id: number | null
    staffId: number | null
    annee: number | null
    montant: number | null
  }

  export type StaffPaieMinAggregateOutputType = {
    id: number | null
    staffId: number | null
    mois: string | null
    annee: number | null
    montant: number | null
    statut: string | null
  }

  export type StaffPaieMaxAggregateOutputType = {
    id: number | null
    staffId: number | null
    mois: string | null
    annee: number | null
    montant: number | null
    statut: string | null
  }

  export type StaffPaieCountAggregateOutputType = {
    id: number
    staffId: number
    mois: number
    annee: number
    montant: number
    statut: number
    _all: number
  }


  export type StaffPaieAvgAggregateInputType = {
    id?: true
    staffId?: true
    annee?: true
    montant?: true
  }

  export type StaffPaieSumAggregateInputType = {
    id?: true
    staffId?: true
    annee?: true
    montant?: true
  }

  export type StaffPaieMinAggregateInputType = {
    id?: true
    staffId?: true
    mois?: true
    annee?: true
    montant?: true
    statut?: true
  }

  export type StaffPaieMaxAggregateInputType = {
    id?: true
    staffId?: true
    mois?: true
    annee?: true
    montant?: true
    statut?: true
  }

  export type StaffPaieCountAggregateInputType = {
    id?: true
    staffId?: true
    mois?: true
    annee?: true
    montant?: true
    statut?: true
    _all?: true
  }

  export type StaffPaieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffPaie to aggregate.
     */
    where?: StaffPaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPaies to fetch.
     */
    orderBy?: StaffPaieOrderByWithRelationInput | StaffPaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffPaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffPaies
    **/
    _count?: true | StaffPaieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffPaieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffPaieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffPaieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffPaieMaxAggregateInputType
  }

  export type GetStaffPaieAggregateType<T extends StaffPaieAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffPaie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffPaie[P]>
      : GetScalarType<T[P], AggregateStaffPaie[P]>
  }




  export type StaffPaieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffPaieWhereInput
    orderBy?: StaffPaieOrderByWithAggregationInput | StaffPaieOrderByWithAggregationInput[]
    by: StaffPaieScalarFieldEnum[] | StaffPaieScalarFieldEnum
    having?: StaffPaieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffPaieCountAggregateInputType | true
    _avg?: StaffPaieAvgAggregateInputType
    _sum?: StaffPaieSumAggregateInputType
    _min?: StaffPaieMinAggregateInputType
    _max?: StaffPaieMaxAggregateInputType
  }

  export type StaffPaieGroupByOutputType = {
    id: number
    staffId: number
    mois: string
    annee: number
    montant: number | null
    statut: string | null
    _count: StaffPaieCountAggregateOutputType | null
    _avg: StaffPaieAvgAggregateOutputType | null
    _sum: StaffPaieSumAggregateOutputType | null
    _min: StaffPaieMinAggregateOutputType | null
    _max: StaffPaieMaxAggregateOutputType | null
  }

  type GetStaffPaieGroupByPayload<T extends StaffPaieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffPaieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffPaieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffPaieGroupByOutputType[P]>
            : GetScalarType<T[P], StaffPaieGroupByOutputType[P]>
        }
      >
    >


  export type StaffPaieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    mois?: boolean
    annee?: boolean
    montant?: boolean
    statut?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffPaie"]>

  export type StaffPaieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    mois?: boolean
    annee?: boolean
    montant?: boolean
    statut?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffPaie"]>

  export type StaffPaieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    mois?: boolean
    annee?: boolean
    montant?: boolean
    statut?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffPaie"]>

  export type StaffPaieSelectScalar = {
    id?: boolean
    staffId?: boolean
    mois?: boolean
    annee?: boolean
    montant?: boolean
    statut?: boolean
  }

  export type StaffPaieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "mois" | "annee" | "montant" | "statut", ExtArgs["result"]["staffPaie"]>
  export type StaffPaieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type StaffPaieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type StaffPaieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }

  export type $StaffPaiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffPaie"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      staffId: number
      mois: string
      annee: number
      montant: number | null
      statut: string | null
    }, ExtArgs["result"]["staffPaie"]>
    composites: {}
  }

  type StaffPaieGetPayload<S extends boolean | null | undefined | StaffPaieDefaultArgs> = $Result.GetResult<Prisma.$StaffPaiePayload, S>

  type StaffPaieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffPaieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffPaieCountAggregateInputType | true
    }

  export interface StaffPaieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffPaie'], meta: { name: 'StaffPaie' } }
    /**
     * Find zero or one StaffPaie that matches the filter.
     * @param {StaffPaieFindUniqueArgs} args - Arguments to find a StaffPaie
     * @example
     * // Get one StaffPaie
     * const staffPaie = await prisma.staffPaie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffPaieFindUniqueArgs>(args: SelectSubset<T, StaffPaieFindUniqueArgs<ExtArgs>>): Prisma__StaffPaieClient<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffPaie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffPaieFindUniqueOrThrowArgs} args - Arguments to find a StaffPaie
     * @example
     * // Get one StaffPaie
     * const staffPaie = await prisma.staffPaie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffPaieFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffPaieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffPaieClient<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffPaie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPaieFindFirstArgs} args - Arguments to find a StaffPaie
     * @example
     * // Get one StaffPaie
     * const staffPaie = await prisma.staffPaie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffPaieFindFirstArgs>(args?: SelectSubset<T, StaffPaieFindFirstArgs<ExtArgs>>): Prisma__StaffPaieClient<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffPaie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPaieFindFirstOrThrowArgs} args - Arguments to find a StaffPaie
     * @example
     * // Get one StaffPaie
     * const staffPaie = await prisma.staffPaie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffPaieFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffPaieFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffPaieClient<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffPaies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPaieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffPaies
     * const staffPaies = await prisma.staffPaie.findMany()
     * 
     * // Get first 10 StaffPaies
     * const staffPaies = await prisma.staffPaie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffPaieWithIdOnly = await prisma.staffPaie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffPaieFindManyArgs>(args?: SelectSubset<T, StaffPaieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffPaie.
     * @param {StaffPaieCreateArgs} args - Arguments to create a StaffPaie.
     * @example
     * // Create one StaffPaie
     * const StaffPaie = await prisma.staffPaie.create({
     *   data: {
     *     // ... data to create a StaffPaie
     *   }
     * })
     * 
     */
    create<T extends StaffPaieCreateArgs>(args: SelectSubset<T, StaffPaieCreateArgs<ExtArgs>>): Prisma__StaffPaieClient<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffPaies.
     * @param {StaffPaieCreateManyArgs} args - Arguments to create many StaffPaies.
     * @example
     * // Create many StaffPaies
     * const staffPaie = await prisma.staffPaie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffPaieCreateManyArgs>(args?: SelectSubset<T, StaffPaieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffPaies and returns the data saved in the database.
     * @param {StaffPaieCreateManyAndReturnArgs} args - Arguments to create many StaffPaies.
     * @example
     * // Create many StaffPaies
     * const staffPaie = await prisma.staffPaie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffPaies and only return the `id`
     * const staffPaieWithIdOnly = await prisma.staffPaie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffPaieCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffPaieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffPaie.
     * @param {StaffPaieDeleteArgs} args - Arguments to delete one StaffPaie.
     * @example
     * // Delete one StaffPaie
     * const StaffPaie = await prisma.staffPaie.delete({
     *   where: {
     *     // ... filter to delete one StaffPaie
     *   }
     * })
     * 
     */
    delete<T extends StaffPaieDeleteArgs>(args: SelectSubset<T, StaffPaieDeleteArgs<ExtArgs>>): Prisma__StaffPaieClient<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffPaie.
     * @param {StaffPaieUpdateArgs} args - Arguments to update one StaffPaie.
     * @example
     * // Update one StaffPaie
     * const staffPaie = await prisma.staffPaie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffPaieUpdateArgs>(args: SelectSubset<T, StaffPaieUpdateArgs<ExtArgs>>): Prisma__StaffPaieClient<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffPaies.
     * @param {StaffPaieDeleteManyArgs} args - Arguments to filter StaffPaies to delete.
     * @example
     * // Delete a few StaffPaies
     * const { count } = await prisma.staffPaie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffPaieDeleteManyArgs>(args?: SelectSubset<T, StaffPaieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffPaies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPaieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffPaies
     * const staffPaie = await prisma.staffPaie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffPaieUpdateManyArgs>(args: SelectSubset<T, StaffPaieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffPaies and returns the data updated in the database.
     * @param {StaffPaieUpdateManyAndReturnArgs} args - Arguments to update many StaffPaies.
     * @example
     * // Update many StaffPaies
     * const staffPaie = await prisma.staffPaie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffPaies and only return the `id`
     * const staffPaieWithIdOnly = await prisma.staffPaie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffPaieUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffPaieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffPaie.
     * @param {StaffPaieUpsertArgs} args - Arguments to update or create a StaffPaie.
     * @example
     * // Update or create a StaffPaie
     * const staffPaie = await prisma.staffPaie.upsert({
     *   create: {
     *     // ... data to create a StaffPaie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffPaie we want to update
     *   }
     * })
     */
    upsert<T extends StaffPaieUpsertArgs>(args: SelectSubset<T, StaffPaieUpsertArgs<ExtArgs>>): Prisma__StaffPaieClient<$Result.GetResult<Prisma.$StaffPaiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffPaies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPaieCountArgs} args - Arguments to filter StaffPaies to count.
     * @example
     * // Count the number of StaffPaies
     * const count = await prisma.staffPaie.count({
     *   where: {
     *     // ... the filter for the StaffPaies we want to count
     *   }
     * })
    **/
    count<T extends StaffPaieCountArgs>(
      args?: Subset<T, StaffPaieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffPaieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffPaie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPaieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffPaieAggregateArgs>(args: Subset<T, StaffPaieAggregateArgs>): Prisma.PrismaPromise<GetStaffPaieAggregateType<T>>

    /**
     * Group by StaffPaie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPaieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffPaieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffPaieGroupByArgs['orderBy'] }
        : { orderBy?: StaffPaieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffPaieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffPaieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffPaie model
   */
  readonly fields: StaffPaieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffPaie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffPaieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffPaie model
   */
  interface StaffPaieFieldRefs {
    readonly id: FieldRef<"StaffPaie", 'Int'>
    readonly staffId: FieldRef<"StaffPaie", 'Int'>
    readonly mois: FieldRef<"StaffPaie", 'String'>
    readonly annee: FieldRef<"StaffPaie", 'Int'>
    readonly montant: FieldRef<"StaffPaie", 'Float'>
    readonly statut: FieldRef<"StaffPaie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StaffPaie findUnique
   */
  export type StaffPaieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * Filter, which StaffPaie to fetch.
     */
    where: StaffPaieWhereUniqueInput
  }

  /**
   * StaffPaie findUniqueOrThrow
   */
  export type StaffPaieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * Filter, which StaffPaie to fetch.
     */
    where: StaffPaieWhereUniqueInput
  }

  /**
   * StaffPaie findFirst
   */
  export type StaffPaieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * Filter, which StaffPaie to fetch.
     */
    where?: StaffPaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPaies to fetch.
     */
    orderBy?: StaffPaieOrderByWithRelationInput | StaffPaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffPaies.
     */
    cursor?: StaffPaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPaies.
     */
    distinct?: StaffPaieScalarFieldEnum | StaffPaieScalarFieldEnum[]
  }

  /**
   * StaffPaie findFirstOrThrow
   */
  export type StaffPaieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * Filter, which StaffPaie to fetch.
     */
    where?: StaffPaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPaies to fetch.
     */
    orderBy?: StaffPaieOrderByWithRelationInput | StaffPaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffPaies.
     */
    cursor?: StaffPaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPaies.
     */
    distinct?: StaffPaieScalarFieldEnum | StaffPaieScalarFieldEnum[]
  }

  /**
   * StaffPaie findMany
   */
  export type StaffPaieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * Filter, which StaffPaies to fetch.
     */
    where?: StaffPaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPaies to fetch.
     */
    orderBy?: StaffPaieOrderByWithRelationInput | StaffPaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffPaies.
     */
    cursor?: StaffPaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPaies.
     */
    distinct?: StaffPaieScalarFieldEnum | StaffPaieScalarFieldEnum[]
  }

  /**
   * StaffPaie create
   */
  export type StaffPaieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffPaie.
     */
    data: XOR<StaffPaieCreateInput, StaffPaieUncheckedCreateInput>
  }

  /**
   * StaffPaie createMany
   */
  export type StaffPaieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffPaies.
     */
    data: StaffPaieCreateManyInput | StaffPaieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffPaie createManyAndReturn
   */
  export type StaffPaieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * The data used to create many StaffPaies.
     */
    data: StaffPaieCreateManyInput | StaffPaieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffPaie update
   */
  export type StaffPaieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffPaie.
     */
    data: XOR<StaffPaieUpdateInput, StaffPaieUncheckedUpdateInput>
    /**
     * Choose, which StaffPaie to update.
     */
    where: StaffPaieWhereUniqueInput
  }

  /**
   * StaffPaie updateMany
   */
  export type StaffPaieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffPaies.
     */
    data: XOR<StaffPaieUpdateManyMutationInput, StaffPaieUncheckedUpdateManyInput>
    /**
     * Filter which StaffPaies to update
     */
    where?: StaffPaieWhereInput
    /**
     * Limit how many StaffPaies to update.
     */
    limit?: number
  }

  /**
   * StaffPaie updateManyAndReturn
   */
  export type StaffPaieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * The data used to update StaffPaies.
     */
    data: XOR<StaffPaieUpdateManyMutationInput, StaffPaieUncheckedUpdateManyInput>
    /**
     * Filter which StaffPaies to update
     */
    where?: StaffPaieWhereInput
    /**
     * Limit how many StaffPaies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffPaie upsert
   */
  export type StaffPaieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffPaie to update in case it exists.
     */
    where: StaffPaieWhereUniqueInput
    /**
     * In case the StaffPaie found by the `where` argument doesn't exist, create a new StaffPaie with this data.
     */
    create: XOR<StaffPaieCreateInput, StaffPaieUncheckedCreateInput>
    /**
     * In case the StaffPaie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffPaieUpdateInput, StaffPaieUncheckedUpdateInput>
  }

  /**
   * StaffPaie delete
   */
  export type StaffPaieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
    /**
     * Filter which StaffPaie to delete.
     */
    where: StaffPaieWhereUniqueInput
  }

  /**
   * StaffPaie deleteMany
   */
  export type StaffPaieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffPaies to delete
     */
    where?: StaffPaieWhereInput
    /**
     * Limit how many StaffPaies to delete.
     */
    limit?: number
  }

  /**
   * StaffPaie without action
   */
  export type StaffPaieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPaie
     */
    select?: StaffPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPaie
     */
    omit?: StaffPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPaieInclude<ExtArgs> | null
  }


  /**
   * Model Charge
   */

  export type AggregateCharge = {
    _count: ChargeCountAggregateOutputType | null
    _avg: ChargeAvgAggregateOutputType | null
    _sum: ChargeSumAggregateOutputType | null
    _min: ChargeMinAggregateOutputType | null
    _max: ChargeMaxAggregateOutputType | null
  }

  export type ChargeAvgAggregateOutputType = {
    id: number | null
    budget: number | null
  }

  export type ChargeSumAggregateOutputType = {
    id: number | null
    budget: number | null
  }

  export type ChargeMinAggregateOutputType = {
    id: number | null
    libelle: string | null
    categorie: string | null
    nature: string | null
    type: string | null
    periodicite: string | null
    budget: number | null
    moisApplicables: string | null
    obs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChargeMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
    categorie: string | null
    nature: string | null
    type: string | null
    periodicite: string | null
    budget: number | null
    moisApplicables: string | null
    obs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChargeCountAggregateOutputType = {
    id: number
    libelle: number
    categorie: number
    nature: number
    type: number
    periodicite: number
    budget: number
    moisApplicables: number
    obs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChargeAvgAggregateInputType = {
    id?: true
    budget?: true
  }

  export type ChargeSumAggregateInputType = {
    id?: true
    budget?: true
  }

  export type ChargeMinAggregateInputType = {
    id?: true
    libelle?: true
    categorie?: true
    nature?: true
    type?: true
    periodicite?: true
    budget?: true
    moisApplicables?: true
    obs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChargeMaxAggregateInputType = {
    id?: true
    libelle?: true
    categorie?: true
    nature?: true
    type?: true
    periodicite?: true
    budget?: true
    moisApplicables?: true
    obs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChargeCountAggregateInputType = {
    id?: true
    libelle?: true
    categorie?: true
    nature?: true
    type?: true
    periodicite?: true
    budget?: true
    moisApplicables?: true
    obs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChargeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charge to aggregate.
     */
    where?: ChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Charges
    **/
    _count?: true | ChargeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargeMaxAggregateInputType
  }

  export type GetChargeAggregateType<T extends ChargeAggregateArgs> = {
        [P in keyof T & keyof AggregateCharge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharge[P]>
      : GetScalarType<T[P], AggregateCharge[P]>
  }




  export type ChargeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargeWhereInput
    orderBy?: ChargeOrderByWithAggregationInput | ChargeOrderByWithAggregationInput[]
    by: ChargeScalarFieldEnum[] | ChargeScalarFieldEnum
    having?: ChargeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargeCountAggregateInputType | true
    _avg?: ChargeAvgAggregateInputType
    _sum?: ChargeSumAggregateInputType
    _min?: ChargeMinAggregateInputType
    _max?: ChargeMaxAggregateInputType
  }

  export type ChargeGroupByOutputType = {
    id: number
    libelle: string
    categorie: string
    nature: string
    type: string
    periodicite: string
    budget: number
    moisApplicables: string
    obs: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChargeCountAggregateOutputType | null
    _avg: ChargeAvgAggregateOutputType | null
    _sum: ChargeSumAggregateOutputType | null
    _min: ChargeMinAggregateOutputType | null
    _max: ChargeMaxAggregateOutputType | null
  }

  type GetChargeGroupByPayload<T extends ChargeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargeGroupByOutputType[P]>
            : GetScalarType<T[P], ChargeGroupByOutputType[P]>
        }
      >
    >


  export type ChargeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    categorie?: boolean
    nature?: boolean
    type?: boolean
    periodicite?: boolean
    budget?: boolean
    moisApplicables?: boolean
    obs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    realisations?: boolean | Charge$realisationsArgs<ExtArgs>
    _count?: boolean | ChargeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charge"]>

  export type ChargeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    categorie?: boolean
    nature?: boolean
    type?: boolean
    periodicite?: boolean
    budget?: boolean
    moisApplicables?: boolean
    obs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["charge"]>

  export type ChargeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    categorie?: boolean
    nature?: boolean
    type?: boolean
    periodicite?: boolean
    budget?: boolean
    moisApplicables?: boolean
    obs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["charge"]>

  export type ChargeSelectScalar = {
    id?: boolean
    libelle?: boolean
    categorie?: boolean
    nature?: boolean
    type?: boolean
    periodicite?: boolean
    budget?: boolean
    moisApplicables?: boolean
    obs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChargeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle" | "categorie" | "nature" | "type" | "periodicite" | "budget" | "moisApplicables" | "obs" | "createdAt" | "updatedAt", ExtArgs["result"]["charge"]>
  export type ChargeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    realisations?: boolean | Charge$realisationsArgs<ExtArgs>
    _count?: boolean | ChargeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChargeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChargeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChargePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charge"
    objects: {
      realisations: Prisma.$ChargeReelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string
      categorie: string
      nature: string
      type: string
      periodicite: string
      budget: number
      moisApplicables: string
      obs: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["charge"]>
    composites: {}
  }

  type ChargeGetPayload<S extends boolean | null | undefined | ChargeDefaultArgs> = $Result.GetResult<Prisma.$ChargePayload, S>

  type ChargeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargeCountAggregateInputType | true
    }

  export interface ChargeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charge'], meta: { name: 'Charge' } }
    /**
     * Find zero or one Charge that matches the filter.
     * @param {ChargeFindUniqueArgs} args - Arguments to find a Charge
     * @example
     * // Get one Charge
     * const charge = await prisma.charge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargeFindUniqueArgs>(args: SelectSubset<T, ChargeFindUniqueArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargeFindUniqueOrThrowArgs} args - Arguments to find a Charge
     * @example
     * // Get one Charge
     * const charge = await prisma.charge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeFindFirstArgs} args - Arguments to find a Charge
     * @example
     * // Get one Charge
     * const charge = await prisma.charge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargeFindFirstArgs>(args?: SelectSubset<T, ChargeFindFirstArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeFindFirstOrThrowArgs} args - Arguments to find a Charge
     * @example
     * // Get one Charge
     * const charge = await prisma.charge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Charges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charges
     * const charges = await prisma.charge.findMany()
     * 
     * // Get first 10 Charges
     * const charges = await prisma.charge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargeWithIdOnly = await prisma.charge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargeFindManyArgs>(args?: SelectSubset<T, ChargeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charge.
     * @param {ChargeCreateArgs} args - Arguments to create a Charge.
     * @example
     * // Create one Charge
     * const Charge = await prisma.charge.create({
     *   data: {
     *     // ... data to create a Charge
     *   }
     * })
     * 
     */
    create<T extends ChargeCreateArgs>(args: SelectSubset<T, ChargeCreateArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Charges.
     * @param {ChargeCreateManyArgs} args - Arguments to create many Charges.
     * @example
     * // Create many Charges
     * const charge = await prisma.charge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargeCreateManyArgs>(args?: SelectSubset<T, ChargeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Charges and returns the data saved in the database.
     * @param {ChargeCreateManyAndReturnArgs} args - Arguments to create many Charges.
     * @example
     * // Create many Charges
     * const charge = await prisma.charge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Charges and only return the `id`
     * const chargeWithIdOnly = await prisma.charge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Charge.
     * @param {ChargeDeleteArgs} args - Arguments to delete one Charge.
     * @example
     * // Delete one Charge
     * const Charge = await prisma.charge.delete({
     *   where: {
     *     // ... filter to delete one Charge
     *   }
     * })
     * 
     */
    delete<T extends ChargeDeleteArgs>(args: SelectSubset<T, ChargeDeleteArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charge.
     * @param {ChargeUpdateArgs} args - Arguments to update one Charge.
     * @example
     * // Update one Charge
     * const charge = await prisma.charge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargeUpdateArgs>(args: SelectSubset<T, ChargeUpdateArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Charges.
     * @param {ChargeDeleteManyArgs} args - Arguments to filter Charges to delete.
     * @example
     * // Delete a few Charges
     * const { count } = await prisma.charge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargeDeleteManyArgs>(args?: SelectSubset<T, ChargeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charges
     * const charge = await prisma.charge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargeUpdateManyArgs>(args: SelectSubset<T, ChargeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charges and returns the data updated in the database.
     * @param {ChargeUpdateManyAndReturnArgs} args - Arguments to update many Charges.
     * @example
     * // Update many Charges
     * const charge = await prisma.charge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Charges and only return the `id`
     * const chargeWithIdOnly = await prisma.charge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Charge.
     * @param {ChargeUpsertArgs} args - Arguments to update or create a Charge.
     * @example
     * // Update or create a Charge
     * const charge = await prisma.charge.upsert({
     *   create: {
     *     // ... data to create a Charge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charge we want to update
     *   }
     * })
     */
    upsert<T extends ChargeUpsertArgs>(args: SelectSubset<T, ChargeUpsertArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCountArgs} args - Arguments to filter Charges to count.
     * @example
     * // Count the number of Charges
     * const count = await prisma.charge.count({
     *   where: {
     *     // ... the filter for the Charges we want to count
     *   }
     * })
    **/
    count<T extends ChargeCountArgs>(
      args?: Subset<T, ChargeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargeAggregateArgs>(args: Subset<T, ChargeAggregateArgs>): Prisma.PrismaPromise<GetChargeAggregateType<T>>

    /**
     * Group by Charge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargeGroupByArgs['orderBy'] }
        : { orderBy?: ChargeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charge model
   */
  readonly fields: ChargeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    realisations<T extends Charge$realisationsArgs<ExtArgs> = {}>(args?: Subset<T, Charge$realisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Charge model
   */
  interface ChargeFieldRefs {
    readonly id: FieldRef<"Charge", 'Int'>
    readonly libelle: FieldRef<"Charge", 'String'>
    readonly categorie: FieldRef<"Charge", 'String'>
    readonly nature: FieldRef<"Charge", 'String'>
    readonly type: FieldRef<"Charge", 'String'>
    readonly periodicite: FieldRef<"Charge", 'String'>
    readonly budget: FieldRef<"Charge", 'Float'>
    readonly moisApplicables: FieldRef<"Charge", 'String'>
    readonly obs: FieldRef<"Charge", 'String'>
    readonly createdAt: FieldRef<"Charge", 'DateTime'>
    readonly updatedAt: FieldRef<"Charge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Charge findUnique
   */
  export type ChargeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charge to fetch.
     */
    where: ChargeWhereUniqueInput
  }

  /**
   * Charge findUniqueOrThrow
   */
  export type ChargeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charge to fetch.
     */
    where: ChargeWhereUniqueInput
  }

  /**
   * Charge findFirst
   */
  export type ChargeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charge to fetch.
     */
    where?: ChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charges.
     */
    cursor?: ChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charges.
     */
    distinct?: ChargeScalarFieldEnum | ChargeScalarFieldEnum[]
  }

  /**
   * Charge findFirstOrThrow
   */
  export type ChargeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charge to fetch.
     */
    where?: ChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charges.
     */
    cursor?: ChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charges.
     */
    distinct?: ChargeScalarFieldEnum | ChargeScalarFieldEnum[]
  }

  /**
   * Charge findMany
   */
  export type ChargeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charges to fetch.
     */
    where?: ChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Charges.
     */
    cursor?: ChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charges.
     */
    distinct?: ChargeScalarFieldEnum | ChargeScalarFieldEnum[]
  }

  /**
   * Charge create
   */
  export type ChargeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * The data needed to create a Charge.
     */
    data: XOR<ChargeCreateInput, ChargeUncheckedCreateInput>
  }

  /**
   * Charge createMany
   */
  export type ChargeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Charges.
     */
    data: ChargeCreateManyInput | ChargeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charge createManyAndReturn
   */
  export type ChargeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * The data used to create many Charges.
     */
    data: ChargeCreateManyInput | ChargeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charge update
   */
  export type ChargeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * The data needed to update a Charge.
     */
    data: XOR<ChargeUpdateInput, ChargeUncheckedUpdateInput>
    /**
     * Choose, which Charge to update.
     */
    where: ChargeWhereUniqueInput
  }

  /**
   * Charge updateMany
   */
  export type ChargeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Charges.
     */
    data: XOR<ChargeUpdateManyMutationInput, ChargeUncheckedUpdateManyInput>
    /**
     * Filter which Charges to update
     */
    where?: ChargeWhereInput
    /**
     * Limit how many Charges to update.
     */
    limit?: number
  }

  /**
   * Charge updateManyAndReturn
   */
  export type ChargeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * The data used to update Charges.
     */
    data: XOR<ChargeUpdateManyMutationInput, ChargeUncheckedUpdateManyInput>
    /**
     * Filter which Charges to update
     */
    where?: ChargeWhereInput
    /**
     * Limit how many Charges to update.
     */
    limit?: number
  }

  /**
   * Charge upsert
   */
  export type ChargeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * The filter to search for the Charge to update in case it exists.
     */
    where: ChargeWhereUniqueInput
    /**
     * In case the Charge found by the `where` argument doesn't exist, create a new Charge with this data.
     */
    create: XOR<ChargeCreateInput, ChargeUncheckedCreateInput>
    /**
     * In case the Charge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargeUpdateInput, ChargeUncheckedUpdateInput>
  }

  /**
   * Charge delete
   */
  export type ChargeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter which Charge to delete.
     */
    where: ChargeWhereUniqueInput
  }

  /**
   * Charge deleteMany
   */
  export type ChargeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charges to delete
     */
    where?: ChargeWhereInput
    /**
     * Limit how many Charges to delete.
     */
    limit?: number
  }

  /**
   * Charge.realisations
   */
  export type Charge$realisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    where?: ChargeReelWhereInput
    orderBy?: ChargeReelOrderByWithRelationInput | ChargeReelOrderByWithRelationInput[]
    cursor?: ChargeReelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargeReelScalarFieldEnum | ChargeReelScalarFieldEnum[]
  }

  /**
   * Charge without action
   */
  export type ChargeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
  }


  /**
   * Model ChargeReel
   */

  export type AggregateChargeReel = {
    _count: ChargeReelCountAggregateOutputType | null
    _avg: ChargeReelAvgAggregateOutputType | null
    _sum: ChargeReelSumAggregateOutputType | null
    _min: ChargeReelMinAggregateOutputType | null
    _max: ChargeReelMaxAggregateOutputType | null
  }

  export type ChargeReelAvgAggregateOutputType = {
    id: number | null
    chargeId: number | null
    annee: number | null
    montant: number | null
  }

  export type ChargeReelSumAggregateOutputType = {
    id: number | null
    chargeId: number | null
    annee: number | null
    montant: number | null
  }

  export type ChargeReelMinAggregateOutputType = {
    id: number | null
    chargeId: number | null
    mois: string | null
    annee: number | null
    montant: number | null
    statut: string | null
    datePmt: Date | null
  }

  export type ChargeReelMaxAggregateOutputType = {
    id: number | null
    chargeId: number | null
    mois: string | null
    annee: number | null
    montant: number | null
    statut: string | null
    datePmt: Date | null
  }

  export type ChargeReelCountAggregateOutputType = {
    id: number
    chargeId: number
    mois: number
    annee: number
    montant: number
    statut: number
    datePmt: number
    _all: number
  }


  export type ChargeReelAvgAggregateInputType = {
    id?: true
    chargeId?: true
    annee?: true
    montant?: true
  }

  export type ChargeReelSumAggregateInputType = {
    id?: true
    chargeId?: true
    annee?: true
    montant?: true
  }

  export type ChargeReelMinAggregateInputType = {
    id?: true
    chargeId?: true
    mois?: true
    annee?: true
    montant?: true
    statut?: true
    datePmt?: true
  }

  export type ChargeReelMaxAggregateInputType = {
    id?: true
    chargeId?: true
    mois?: true
    annee?: true
    montant?: true
    statut?: true
    datePmt?: true
  }

  export type ChargeReelCountAggregateInputType = {
    id?: true
    chargeId?: true
    mois?: true
    annee?: true
    montant?: true
    statut?: true
    datePmt?: true
    _all?: true
  }

  export type ChargeReelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargeReel to aggregate.
     */
    where?: ChargeReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargeReels to fetch.
     */
    orderBy?: ChargeReelOrderByWithRelationInput | ChargeReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargeReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargeReels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargeReels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChargeReels
    **/
    _count?: true | ChargeReelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargeReelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargeReelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargeReelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargeReelMaxAggregateInputType
  }

  export type GetChargeReelAggregateType<T extends ChargeReelAggregateArgs> = {
        [P in keyof T & keyof AggregateChargeReel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChargeReel[P]>
      : GetScalarType<T[P], AggregateChargeReel[P]>
  }




  export type ChargeReelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargeReelWhereInput
    orderBy?: ChargeReelOrderByWithAggregationInput | ChargeReelOrderByWithAggregationInput[]
    by: ChargeReelScalarFieldEnum[] | ChargeReelScalarFieldEnum
    having?: ChargeReelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargeReelCountAggregateInputType | true
    _avg?: ChargeReelAvgAggregateInputType
    _sum?: ChargeReelSumAggregateInputType
    _min?: ChargeReelMinAggregateInputType
    _max?: ChargeReelMaxAggregateInputType
  }

  export type ChargeReelGroupByOutputType = {
    id: number
    chargeId: number
    mois: string
    annee: number
    montant: number
    statut: string | null
    datePmt: Date | null
    _count: ChargeReelCountAggregateOutputType | null
    _avg: ChargeReelAvgAggregateOutputType | null
    _sum: ChargeReelSumAggregateOutputType | null
    _min: ChargeReelMinAggregateOutputType | null
    _max: ChargeReelMaxAggregateOutputType | null
  }

  type GetChargeReelGroupByPayload<T extends ChargeReelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargeReelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargeReelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargeReelGroupByOutputType[P]>
            : GetScalarType<T[P], ChargeReelGroupByOutputType[P]>
        }
      >
    >


  export type ChargeReelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargeId?: boolean
    mois?: boolean
    annee?: boolean
    montant?: boolean
    statut?: boolean
    datePmt?: boolean
    charge?: boolean | ChargeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargeReel"]>

  export type ChargeReelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargeId?: boolean
    mois?: boolean
    annee?: boolean
    montant?: boolean
    statut?: boolean
    datePmt?: boolean
    charge?: boolean | ChargeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargeReel"]>

  export type ChargeReelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargeId?: boolean
    mois?: boolean
    annee?: boolean
    montant?: boolean
    statut?: boolean
    datePmt?: boolean
    charge?: boolean | ChargeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargeReel"]>

  export type ChargeReelSelectScalar = {
    id?: boolean
    chargeId?: boolean
    mois?: boolean
    annee?: boolean
    montant?: boolean
    statut?: boolean
    datePmt?: boolean
  }

  export type ChargeReelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chargeId" | "mois" | "annee" | "montant" | "statut" | "datePmt", ExtArgs["result"]["chargeReel"]>
  export type ChargeReelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charge?: boolean | ChargeDefaultArgs<ExtArgs>
  }
  export type ChargeReelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charge?: boolean | ChargeDefaultArgs<ExtArgs>
  }
  export type ChargeReelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charge?: boolean | ChargeDefaultArgs<ExtArgs>
  }

  export type $ChargeReelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChargeReel"
    objects: {
      charge: Prisma.$ChargePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chargeId: number
      mois: string
      annee: number
      montant: number
      statut: string | null
      datePmt: Date | null
    }, ExtArgs["result"]["chargeReel"]>
    composites: {}
  }

  type ChargeReelGetPayload<S extends boolean | null | undefined | ChargeReelDefaultArgs> = $Result.GetResult<Prisma.$ChargeReelPayload, S>

  type ChargeReelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargeReelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargeReelCountAggregateInputType | true
    }

  export interface ChargeReelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChargeReel'], meta: { name: 'ChargeReel' } }
    /**
     * Find zero or one ChargeReel that matches the filter.
     * @param {ChargeReelFindUniqueArgs} args - Arguments to find a ChargeReel
     * @example
     * // Get one ChargeReel
     * const chargeReel = await prisma.chargeReel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargeReelFindUniqueArgs>(args: SelectSubset<T, ChargeReelFindUniqueArgs<ExtArgs>>): Prisma__ChargeReelClient<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChargeReel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargeReelFindUniqueOrThrowArgs} args - Arguments to find a ChargeReel
     * @example
     * // Get one ChargeReel
     * const chargeReel = await prisma.chargeReel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargeReelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargeReelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargeReelClient<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargeReel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeReelFindFirstArgs} args - Arguments to find a ChargeReel
     * @example
     * // Get one ChargeReel
     * const chargeReel = await prisma.chargeReel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargeReelFindFirstArgs>(args?: SelectSubset<T, ChargeReelFindFirstArgs<ExtArgs>>): Prisma__ChargeReelClient<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargeReel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeReelFindFirstOrThrowArgs} args - Arguments to find a ChargeReel
     * @example
     * // Get one ChargeReel
     * const chargeReel = await prisma.chargeReel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargeReelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargeReelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargeReelClient<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChargeReels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeReelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChargeReels
     * const chargeReels = await prisma.chargeReel.findMany()
     * 
     * // Get first 10 ChargeReels
     * const chargeReels = await prisma.chargeReel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargeReelWithIdOnly = await prisma.chargeReel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargeReelFindManyArgs>(args?: SelectSubset<T, ChargeReelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChargeReel.
     * @param {ChargeReelCreateArgs} args - Arguments to create a ChargeReel.
     * @example
     * // Create one ChargeReel
     * const ChargeReel = await prisma.chargeReel.create({
     *   data: {
     *     // ... data to create a ChargeReel
     *   }
     * })
     * 
     */
    create<T extends ChargeReelCreateArgs>(args: SelectSubset<T, ChargeReelCreateArgs<ExtArgs>>): Prisma__ChargeReelClient<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChargeReels.
     * @param {ChargeReelCreateManyArgs} args - Arguments to create many ChargeReels.
     * @example
     * // Create many ChargeReels
     * const chargeReel = await prisma.chargeReel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargeReelCreateManyArgs>(args?: SelectSubset<T, ChargeReelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChargeReels and returns the data saved in the database.
     * @param {ChargeReelCreateManyAndReturnArgs} args - Arguments to create many ChargeReels.
     * @example
     * // Create many ChargeReels
     * const chargeReel = await prisma.chargeReel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChargeReels and only return the `id`
     * const chargeReelWithIdOnly = await prisma.chargeReel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargeReelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargeReelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChargeReel.
     * @param {ChargeReelDeleteArgs} args - Arguments to delete one ChargeReel.
     * @example
     * // Delete one ChargeReel
     * const ChargeReel = await prisma.chargeReel.delete({
     *   where: {
     *     // ... filter to delete one ChargeReel
     *   }
     * })
     * 
     */
    delete<T extends ChargeReelDeleteArgs>(args: SelectSubset<T, ChargeReelDeleteArgs<ExtArgs>>): Prisma__ChargeReelClient<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChargeReel.
     * @param {ChargeReelUpdateArgs} args - Arguments to update one ChargeReel.
     * @example
     * // Update one ChargeReel
     * const chargeReel = await prisma.chargeReel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargeReelUpdateArgs>(args: SelectSubset<T, ChargeReelUpdateArgs<ExtArgs>>): Prisma__ChargeReelClient<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChargeReels.
     * @param {ChargeReelDeleteManyArgs} args - Arguments to filter ChargeReels to delete.
     * @example
     * // Delete a few ChargeReels
     * const { count } = await prisma.chargeReel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargeReelDeleteManyArgs>(args?: SelectSubset<T, ChargeReelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargeReels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeReelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChargeReels
     * const chargeReel = await prisma.chargeReel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargeReelUpdateManyArgs>(args: SelectSubset<T, ChargeReelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargeReels and returns the data updated in the database.
     * @param {ChargeReelUpdateManyAndReturnArgs} args - Arguments to update many ChargeReels.
     * @example
     * // Update many ChargeReels
     * const chargeReel = await prisma.chargeReel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChargeReels and only return the `id`
     * const chargeReelWithIdOnly = await prisma.chargeReel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargeReelUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargeReelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChargeReel.
     * @param {ChargeReelUpsertArgs} args - Arguments to update or create a ChargeReel.
     * @example
     * // Update or create a ChargeReel
     * const chargeReel = await prisma.chargeReel.upsert({
     *   create: {
     *     // ... data to create a ChargeReel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChargeReel we want to update
     *   }
     * })
     */
    upsert<T extends ChargeReelUpsertArgs>(args: SelectSubset<T, ChargeReelUpsertArgs<ExtArgs>>): Prisma__ChargeReelClient<$Result.GetResult<Prisma.$ChargeReelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChargeReels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeReelCountArgs} args - Arguments to filter ChargeReels to count.
     * @example
     * // Count the number of ChargeReels
     * const count = await prisma.chargeReel.count({
     *   where: {
     *     // ... the filter for the ChargeReels we want to count
     *   }
     * })
    **/
    count<T extends ChargeReelCountArgs>(
      args?: Subset<T, ChargeReelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargeReelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChargeReel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeReelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargeReelAggregateArgs>(args: Subset<T, ChargeReelAggregateArgs>): Prisma.PrismaPromise<GetChargeReelAggregateType<T>>

    /**
     * Group by ChargeReel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeReelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargeReelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargeReelGroupByArgs['orderBy'] }
        : { orderBy?: ChargeReelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargeReelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargeReelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChargeReel model
   */
  readonly fields: ChargeReelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChargeReel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargeReelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    charge<T extends ChargeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChargeDefaultArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChargeReel model
   */
  interface ChargeReelFieldRefs {
    readonly id: FieldRef<"ChargeReel", 'Int'>
    readonly chargeId: FieldRef<"ChargeReel", 'Int'>
    readonly mois: FieldRef<"ChargeReel", 'String'>
    readonly annee: FieldRef<"ChargeReel", 'Int'>
    readonly montant: FieldRef<"ChargeReel", 'Float'>
    readonly statut: FieldRef<"ChargeReel", 'String'>
    readonly datePmt: FieldRef<"ChargeReel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChargeReel findUnique
   */
  export type ChargeReelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * Filter, which ChargeReel to fetch.
     */
    where: ChargeReelWhereUniqueInput
  }

  /**
   * ChargeReel findUniqueOrThrow
   */
  export type ChargeReelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * Filter, which ChargeReel to fetch.
     */
    where: ChargeReelWhereUniqueInput
  }

  /**
   * ChargeReel findFirst
   */
  export type ChargeReelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * Filter, which ChargeReel to fetch.
     */
    where?: ChargeReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargeReels to fetch.
     */
    orderBy?: ChargeReelOrderByWithRelationInput | ChargeReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargeReels.
     */
    cursor?: ChargeReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargeReels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargeReels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargeReels.
     */
    distinct?: ChargeReelScalarFieldEnum | ChargeReelScalarFieldEnum[]
  }

  /**
   * ChargeReel findFirstOrThrow
   */
  export type ChargeReelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * Filter, which ChargeReel to fetch.
     */
    where?: ChargeReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargeReels to fetch.
     */
    orderBy?: ChargeReelOrderByWithRelationInput | ChargeReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargeReels.
     */
    cursor?: ChargeReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargeReels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargeReels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargeReels.
     */
    distinct?: ChargeReelScalarFieldEnum | ChargeReelScalarFieldEnum[]
  }

  /**
   * ChargeReel findMany
   */
  export type ChargeReelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * Filter, which ChargeReels to fetch.
     */
    where?: ChargeReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargeReels to fetch.
     */
    orderBy?: ChargeReelOrderByWithRelationInput | ChargeReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChargeReels.
     */
    cursor?: ChargeReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargeReels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargeReels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargeReels.
     */
    distinct?: ChargeReelScalarFieldEnum | ChargeReelScalarFieldEnum[]
  }

  /**
   * ChargeReel create
   */
  export type ChargeReelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * The data needed to create a ChargeReel.
     */
    data: XOR<ChargeReelCreateInput, ChargeReelUncheckedCreateInput>
  }

  /**
   * ChargeReel createMany
   */
  export type ChargeReelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChargeReels.
     */
    data: ChargeReelCreateManyInput | ChargeReelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChargeReel createManyAndReturn
   */
  export type ChargeReelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * The data used to create many ChargeReels.
     */
    data: ChargeReelCreateManyInput | ChargeReelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargeReel update
   */
  export type ChargeReelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * The data needed to update a ChargeReel.
     */
    data: XOR<ChargeReelUpdateInput, ChargeReelUncheckedUpdateInput>
    /**
     * Choose, which ChargeReel to update.
     */
    where: ChargeReelWhereUniqueInput
  }

  /**
   * ChargeReel updateMany
   */
  export type ChargeReelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChargeReels.
     */
    data: XOR<ChargeReelUpdateManyMutationInput, ChargeReelUncheckedUpdateManyInput>
    /**
     * Filter which ChargeReels to update
     */
    where?: ChargeReelWhereInput
    /**
     * Limit how many ChargeReels to update.
     */
    limit?: number
  }

  /**
   * ChargeReel updateManyAndReturn
   */
  export type ChargeReelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * The data used to update ChargeReels.
     */
    data: XOR<ChargeReelUpdateManyMutationInput, ChargeReelUncheckedUpdateManyInput>
    /**
     * Filter which ChargeReels to update
     */
    where?: ChargeReelWhereInput
    /**
     * Limit how many ChargeReels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargeReel upsert
   */
  export type ChargeReelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * The filter to search for the ChargeReel to update in case it exists.
     */
    where: ChargeReelWhereUniqueInput
    /**
     * In case the ChargeReel found by the `where` argument doesn't exist, create a new ChargeReel with this data.
     */
    create: XOR<ChargeReelCreateInput, ChargeReelUncheckedCreateInput>
    /**
     * In case the ChargeReel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargeReelUpdateInput, ChargeReelUncheckedUpdateInput>
  }

  /**
   * ChargeReel delete
   */
  export type ChargeReelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
    /**
     * Filter which ChargeReel to delete.
     */
    where: ChargeReelWhereUniqueInput
  }

  /**
   * ChargeReel deleteMany
   */
  export type ChargeReelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargeReels to delete
     */
    where?: ChargeReelWhereInput
    /**
     * Limit how many ChargeReels to delete.
     */
    limit?: number
  }

  /**
   * ChargeReel without action
   */
  export type ChargeReelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeReel
     */
    select?: ChargeReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeReel
     */
    omit?: ChargeReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeReelInclude<ExtArgs> | null
  }


  /**
   * Model Depense
   */

  export type AggregateDepense = {
    _count: DepenseCountAggregateOutputType | null
    _avg: DepenseAvgAggregateOutputType | null
    _sum: DepenseSumAggregateOutputType | null
    _min: DepenseMinAggregateOutputType | null
    _max: DepenseMaxAggregateOutputType | null
  }

  export type DepenseAvgAggregateOutputType = {
    id: number | null
    montant: number | null
    credit: number | null
    debit: number | null
    fraisTransf: number | null
    penalite: number | null
  }

  export type DepenseSumAggregateOutputType = {
    id: number | null
    montant: number | null
    credit: number | null
    debit: number | null
    fraisTransf: number | null
    penalite: number | null
  }

  export type DepenseMinAggregateOutputType = {
    id: number | null
    type: string | null
    categorie: string | null
    periode: string | null
    intitule: string | null
    date: Date | null
    designation: string | null
    prestataire: string | null
    montant: number | null
    credit: number | null
    debit: number | null
    fraisTransf: number | null
    penalite: number | null
    reference: string | null
    nature: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepenseMaxAggregateOutputType = {
    id: number | null
    type: string | null
    categorie: string | null
    periode: string | null
    intitule: string | null
    date: Date | null
    designation: string | null
    prestataire: string | null
    montant: number | null
    credit: number | null
    debit: number | null
    fraisTransf: number | null
    penalite: number | null
    reference: string | null
    nature: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepenseCountAggregateOutputType = {
    id: number
    type: number
    categorie: number
    periode: number
    intitule: number
    date: number
    designation: number
    prestataire: number
    montant: number
    credit: number
    debit: number
    fraisTransf: number
    penalite: number
    reference: number
    nature: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepenseAvgAggregateInputType = {
    id?: true
    montant?: true
    credit?: true
    debit?: true
    fraisTransf?: true
    penalite?: true
  }

  export type DepenseSumAggregateInputType = {
    id?: true
    montant?: true
    credit?: true
    debit?: true
    fraisTransf?: true
    penalite?: true
  }

  export type DepenseMinAggregateInputType = {
    id?: true
    type?: true
    categorie?: true
    periode?: true
    intitule?: true
    date?: true
    designation?: true
    prestataire?: true
    montant?: true
    credit?: true
    debit?: true
    fraisTransf?: true
    penalite?: true
    reference?: true
    nature?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepenseMaxAggregateInputType = {
    id?: true
    type?: true
    categorie?: true
    periode?: true
    intitule?: true
    date?: true
    designation?: true
    prestataire?: true
    montant?: true
    credit?: true
    debit?: true
    fraisTransf?: true
    penalite?: true
    reference?: true
    nature?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepenseCountAggregateInputType = {
    id?: true
    type?: true
    categorie?: true
    periode?: true
    intitule?: true
    date?: true
    designation?: true
    prestataire?: true
    montant?: true
    credit?: true
    debit?: true
    fraisTransf?: true
    penalite?: true
    reference?: true
    nature?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Depense to aggregate.
     */
    where?: DepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depenses to fetch.
     */
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Depenses
    **/
    _count?: true | DepenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepenseMaxAggregateInputType
  }

  export type GetDepenseAggregateType<T extends DepenseAggregateArgs> = {
        [P in keyof T & keyof AggregateDepense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepense[P]>
      : GetScalarType<T[P], AggregateDepense[P]>
  }




  export type DepenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithAggregationInput | DepenseOrderByWithAggregationInput[]
    by: DepenseScalarFieldEnum[] | DepenseScalarFieldEnum
    having?: DepenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepenseCountAggregateInputType | true
    _avg?: DepenseAvgAggregateInputType
    _sum?: DepenseSumAggregateInputType
    _min?: DepenseMinAggregateInputType
    _max?: DepenseMaxAggregateInputType
  }

  export type DepenseGroupByOutputType = {
    id: number
    type: string
    categorie: string | null
    periode: string | null
    intitule: string | null
    date: Date
    designation: string
    prestataire: string | null
    montant: number
    credit: number
    debit: number
    fraisTransf: number
    penalite: number
    reference: string | null
    nature: string
    createdAt: Date
    updatedAt: Date
    _count: DepenseCountAggregateOutputType | null
    _avg: DepenseAvgAggregateOutputType | null
    _sum: DepenseSumAggregateOutputType | null
    _min: DepenseMinAggregateOutputType | null
    _max: DepenseMaxAggregateOutputType | null
  }

  type GetDepenseGroupByPayload<T extends DepenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepenseGroupByOutputType[P]>
            : GetScalarType<T[P], DepenseGroupByOutputType[P]>
        }
      >
    >


  export type DepenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    categorie?: boolean
    periode?: boolean
    intitule?: boolean
    date?: boolean
    designation?: boolean
    prestataire?: boolean
    montant?: boolean
    credit?: boolean
    debit?: boolean
    fraisTransf?: boolean
    penalite?: boolean
    reference?: boolean
    nature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["depense"]>

  export type DepenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    categorie?: boolean
    periode?: boolean
    intitule?: boolean
    date?: boolean
    designation?: boolean
    prestataire?: boolean
    montant?: boolean
    credit?: boolean
    debit?: boolean
    fraisTransf?: boolean
    penalite?: boolean
    reference?: boolean
    nature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["depense"]>

  export type DepenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    categorie?: boolean
    periode?: boolean
    intitule?: boolean
    date?: boolean
    designation?: boolean
    prestataire?: boolean
    montant?: boolean
    credit?: boolean
    debit?: boolean
    fraisTransf?: boolean
    penalite?: boolean
    reference?: boolean
    nature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["depense"]>

  export type DepenseSelectScalar = {
    id?: boolean
    type?: boolean
    categorie?: boolean
    periode?: boolean
    intitule?: boolean
    date?: boolean
    designation?: boolean
    prestataire?: boolean
    montant?: boolean
    credit?: boolean
    debit?: boolean
    fraisTransf?: boolean
    penalite?: boolean
    reference?: boolean
    nature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "categorie" | "periode" | "intitule" | "date" | "designation" | "prestataire" | "montant" | "credit" | "debit" | "fraisTransf" | "penalite" | "reference" | "nature" | "createdAt" | "updatedAt", ExtArgs["result"]["depense"]>

  export type $DepensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Depense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      categorie: string | null
      periode: string | null
      intitule: string | null
      date: Date
      designation: string
      prestataire: string | null
      montant: number
      credit: number
      debit: number
      fraisTransf: number
      penalite: number
      reference: string | null
      nature: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["depense"]>
    composites: {}
  }

  type DepenseGetPayload<S extends boolean | null | undefined | DepenseDefaultArgs> = $Result.GetResult<Prisma.$DepensePayload, S>

  type DepenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepenseCountAggregateInputType | true
    }

  export interface DepenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Depense'], meta: { name: 'Depense' } }
    /**
     * Find zero or one Depense that matches the filter.
     * @param {DepenseFindUniqueArgs} args - Arguments to find a Depense
     * @example
     * // Get one Depense
     * const depense = await prisma.depense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepenseFindUniqueArgs>(args: SelectSubset<T, DepenseFindUniqueArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Depense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepenseFindUniqueOrThrowArgs} args - Arguments to find a Depense
     * @example
     * // Get one Depense
     * const depense = await prisma.depense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepenseFindUniqueOrThrowArgs>(args: SelectSubset<T, DepenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Depense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseFindFirstArgs} args - Arguments to find a Depense
     * @example
     * // Get one Depense
     * const depense = await prisma.depense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepenseFindFirstArgs>(args?: SelectSubset<T, DepenseFindFirstArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Depense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseFindFirstOrThrowArgs} args - Arguments to find a Depense
     * @example
     * // Get one Depense
     * const depense = await prisma.depense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepenseFindFirstOrThrowArgs>(args?: SelectSubset<T, DepenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Depenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Depenses
     * const depenses = await prisma.depense.findMany()
     * 
     * // Get first 10 Depenses
     * const depenses = await prisma.depense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depenseWithIdOnly = await prisma.depense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepenseFindManyArgs>(args?: SelectSubset<T, DepenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Depense.
     * @param {DepenseCreateArgs} args - Arguments to create a Depense.
     * @example
     * // Create one Depense
     * const Depense = await prisma.depense.create({
     *   data: {
     *     // ... data to create a Depense
     *   }
     * })
     * 
     */
    create<T extends DepenseCreateArgs>(args: SelectSubset<T, DepenseCreateArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Depenses.
     * @param {DepenseCreateManyArgs} args - Arguments to create many Depenses.
     * @example
     * // Create many Depenses
     * const depense = await prisma.depense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepenseCreateManyArgs>(args?: SelectSubset<T, DepenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Depenses and returns the data saved in the database.
     * @param {DepenseCreateManyAndReturnArgs} args - Arguments to create many Depenses.
     * @example
     * // Create many Depenses
     * const depense = await prisma.depense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Depenses and only return the `id`
     * const depenseWithIdOnly = await prisma.depense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepenseCreateManyAndReturnArgs>(args?: SelectSubset<T, DepenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Depense.
     * @param {DepenseDeleteArgs} args - Arguments to delete one Depense.
     * @example
     * // Delete one Depense
     * const Depense = await prisma.depense.delete({
     *   where: {
     *     // ... filter to delete one Depense
     *   }
     * })
     * 
     */
    delete<T extends DepenseDeleteArgs>(args: SelectSubset<T, DepenseDeleteArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Depense.
     * @param {DepenseUpdateArgs} args - Arguments to update one Depense.
     * @example
     * // Update one Depense
     * const depense = await prisma.depense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepenseUpdateArgs>(args: SelectSubset<T, DepenseUpdateArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Depenses.
     * @param {DepenseDeleteManyArgs} args - Arguments to filter Depenses to delete.
     * @example
     * // Delete a few Depenses
     * const { count } = await prisma.depense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepenseDeleteManyArgs>(args?: SelectSubset<T, DepenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Depenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Depenses
     * const depense = await prisma.depense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepenseUpdateManyArgs>(args: SelectSubset<T, DepenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Depenses and returns the data updated in the database.
     * @param {DepenseUpdateManyAndReturnArgs} args - Arguments to update many Depenses.
     * @example
     * // Update many Depenses
     * const depense = await prisma.depense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Depenses and only return the `id`
     * const depenseWithIdOnly = await prisma.depense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepenseUpdateManyAndReturnArgs>(args: SelectSubset<T, DepenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Depense.
     * @param {DepenseUpsertArgs} args - Arguments to update or create a Depense.
     * @example
     * // Update or create a Depense
     * const depense = await prisma.depense.upsert({
     *   create: {
     *     // ... data to create a Depense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Depense we want to update
     *   }
     * })
     */
    upsert<T extends DepenseUpsertArgs>(args: SelectSubset<T, DepenseUpsertArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Depenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseCountArgs} args - Arguments to filter Depenses to count.
     * @example
     * // Count the number of Depenses
     * const count = await prisma.depense.count({
     *   where: {
     *     // ... the filter for the Depenses we want to count
     *   }
     * })
    **/
    count<T extends DepenseCountArgs>(
      args?: Subset<T, DepenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Depense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepenseAggregateArgs>(args: Subset<T, DepenseAggregateArgs>): Prisma.PrismaPromise<GetDepenseAggregateType<T>>

    /**
     * Group by Depense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepenseGroupByArgs['orderBy'] }
        : { orderBy?: DepenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Depense model
   */
  readonly fields: DepenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Depense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Depense model
   */
  interface DepenseFieldRefs {
    readonly id: FieldRef<"Depense", 'Int'>
    readonly type: FieldRef<"Depense", 'String'>
    readonly categorie: FieldRef<"Depense", 'String'>
    readonly periode: FieldRef<"Depense", 'String'>
    readonly intitule: FieldRef<"Depense", 'String'>
    readonly date: FieldRef<"Depense", 'DateTime'>
    readonly designation: FieldRef<"Depense", 'String'>
    readonly prestataire: FieldRef<"Depense", 'String'>
    readonly montant: FieldRef<"Depense", 'Float'>
    readonly credit: FieldRef<"Depense", 'Float'>
    readonly debit: FieldRef<"Depense", 'Float'>
    readonly fraisTransf: FieldRef<"Depense", 'Float'>
    readonly penalite: FieldRef<"Depense", 'Float'>
    readonly reference: FieldRef<"Depense", 'String'>
    readonly nature: FieldRef<"Depense", 'String'>
    readonly createdAt: FieldRef<"Depense", 'DateTime'>
    readonly updatedAt: FieldRef<"Depense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Depense findUnique
   */
  export type DepenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Filter, which Depense to fetch.
     */
    where: DepenseWhereUniqueInput
  }

  /**
   * Depense findUniqueOrThrow
   */
  export type DepenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Filter, which Depense to fetch.
     */
    where: DepenseWhereUniqueInput
  }

  /**
   * Depense findFirst
   */
  export type DepenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Filter, which Depense to fetch.
     */
    where?: DepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depenses to fetch.
     */
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Depenses.
     */
    cursor?: DepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depenses.
     */
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * Depense findFirstOrThrow
   */
  export type DepenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Filter, which Depense to fetch.
     */
    where?: DepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depenses to fetch.
     */
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Depenses.
     */
    cursor?: DepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depenses.
     */
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * Depense findMany
   */
  export type DepenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Filter, which Depenses to fetch.
     */
    where?: DepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depenses to fetch.
     */
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Depenses.
     */
    cursor?: DepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depenses.
     */
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * Depense create
   */
  export type DepenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * The data needed to create a Depense.
     */
    data: XOR<DepenseCreateInput, DepenseUncheckedCreateInput>
  }

  /**
   * Depense createMany
   */
  export type DepenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Depenses.
     */
    data: DepenseCreateManyInput | DepenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Depense createManyAndReturn
   */
  export type DepenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * The data used to create many Depenses.
     */
    data: DepenseCreateManyInput | DepenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Depense update
   */
  export type DepenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * The data needed to update a Depense.
     */
    data: XOR<DepenseUpdateInput, DepenseUncheckedUpdateInput>
    /**
     * Choose, which Depense to update.
     */
    where: DepenseWhereUniqueInput
  }

  /**
   * Depense updateMany
   */
  export type DepenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Depenses.
     */
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyInput>
    /**
     * Filter which Depenses to update
     */
    where?: DepenseWhereInput
    /**
     * Limit how many Depenses to update.
     */
    limit?: number
  }

  /**
   * Depense updateManyAndReturn
   */
  export type DepenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * The data used to update Depenses.
     */
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyInput>
    /**
     * Filter which Depenses to update
     */
    where?: DepenseWhereInput
    /**
     * Limit how many Depenses to update.
     */
    limit?: number
  }

  /**
   * Depense upsert
   */
  export type DepenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * The filter to search for the Depense to update in case it exists.
     */
    where: DepenseWhereUniqueInput
    /**
     * In case the Depense found by the `where` argument doesn't exist, create a new Depense with this data.
     */
    create: XOR<DepenseCreateInput, DepenseUncheckedCreateInput>
    /**
     * In case the Depense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepenseUpdateInput, DepenseUncheckedUpdateInput>
  }

  /**
   * Depense delete
   */
  export type DepenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Filter which Depense to delete.
     */
    where: DepenseWhereUniqueInput
  }

  /**
   * Depense deleteMany
   */
  export type DepenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Depenses to delete
     */
    where?: DepenseWhereInput
    /**
     * Limit how many Depenses to delete.
     */
    limit?: number
  }

  /**
   * Depense without action
   */
  export type DepenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
  }


  /**
   * Model PetiteCaisse
   */

  export type AggregatePetiteCaisse = {
    _count: PetiteCaisseCountAggregateOutputType | null
    _avg: PetiteCaisseAvgAggregateOutputType | null
    _sum: PetiteCaisseSumAggregateOutputType | null
    _min: PetiteCaisseMinAggregateOutputType | null
    _max: PetiteCaisseMaxAggregateOutputType | null
  }

  export type PetiteCaisseAvgAggregateOutputType = {
    id: number | null
    entree: number | null
    sortie: number | null
    penalite: number | null
    solde: number | null
  }

  export type PetiteCaisseSumAggregateOutputType = {
    id: number | null
    entree: number | null
    sortie: number | null
    penalite: number | null
    solde: number | null
  }

  export type PetiteCaisseMinAggregateOutputType = {
    id: number | null
    num: string | null
    caisse: string | null
    type: string | null
    categorie: string | null
    nature: string | null
    periode: string | null
    date: Date | null
    designation: string | null
    prestataire: string | null
    entree: number | null
    sortie: number | null
    penalite: number | null
    solde: number | null
    refFacture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetiteCaisseMaxAggregateOutputType = {
    id: number | null
    num: string | null
    caisse: string | null
    type: string | null
    categorie: string | null
    nature: string | null
    periode: string | null
    date: Date | null
    designation: string | null
    prestataire: string | null
    entree: number | null
    sortie: number | null
    penalite: number | null
    solde: number | null
    refFacture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetiteCaisseCountAggregateOutputType = {
    id: number
    num: number
    caisse: number
    type: number
    categorie: number
    nature: number
    periode: number
    date: number
    designation: number
    prestataire: number
    entree: number
    sortie: number
    penalite: number
    solde: number
    refFacture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PetiteCaisseAvgAggregateInputType = {
    id?: true
    entree?: true
    sortie?: true
    penalite?: true
    solde?: true
  }

  export type PetiteCaisseSumAggregateInputType = {
    id?: true
    entree?: true
    sortie?: true
    penalite?: true
    solde?: true
  }

  export type PetiteCaisseMinAggregateInputType = {
    id?: true
    num?: true
    caisse?: true
    type?: true
    categorie?: true
    nature?: true
    periode?: true
    date?: true
    designation?: true
    prestataire?: true
    entree?: true
    sortie?: true
    penalite?: true
    solde?: true
    refFacture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetiteCaisseMaxAggregateInputType = {
    id?: true
    num?: true
    caisse?: true
    type?: true
    categorie?: true
    nature?: true
    periode?: true
    date?: true
    designation?: true
    prestataire?: true
    entree?: true
    sortie?: true
    penalite?: true
    solde?: true
    refFacture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetiteCaisseCountAggregateInputType = {
    id?: true
    num?: true
    caisse?: true
    type?: true
    categorie?: true
    nature?: true
    periode?: true
    date?: true
    designation?: true
    prestataire?: true
    entree?: true
    sortie?: true
    penalite?: true
    solde?: true
    refFacture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PetiteCaisseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetiteCaisse to aggregate.
     */
    where?: PetiteCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetiteCaisses to fetch.
     */
    orderBy?: PetiteCaisseOrderByWithRelationInput | PetiteCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetiteCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetiteCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetiteCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PetiteCaisses
    **/
    _count?: true | PetiteCaisseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetiteCaisseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetiteCaisseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetiteCaisseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetiteCaisseMaxAggregateInputType
  }

  export type GetPetiteCaisseAggregateType<T extends PetiteCaisseAggregateArgs> = {
        [P in keyof T & keyof AggregatePetiteCaisse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetiteCaisse[P]>
      : GetScalarType<T[P], AggregatePetiteCaisse[P]>
  }




  export type PetiteCaisseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetiteCaisseWhereInput
    orderBy?: PetiteCaisseOrderByWithAggregationInput | PetiteCaisseOrderByWithAggregationInput[]
    by: PetiteCaisseScalarFieldEnum[] | PetiteCaisseScalarFieldEnum
    having?: PetiteCaisseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetiteCaisseCountAggregateInputType | true
    _avg?: PetiteCaisseAvgAggregateInputType
    _sum?: PetiteCaisseSumAggregateInputType
    _min?: PetiteCaisseMinAggregateInputType
    _max?: PetiteCaisseMaxAggregateInputType
  }

  export type PetiteCaisseGroupByOutputType = {
    id: number
    num: string
    caisse: string
    type: string
    categorie: string | null
    nature: string
    periode: string | null
    date: Date
    designation: string
    prestataire: string | null
    entree: number
    sortie: number
    penalite: number
    solde: number
    refFacture: string | null
    createdAt: Date
    updatedAt: Date
    _count: PetiteCaisseCountAggregateOutputType | null
    _avg: PetiteCaisseAvgAggregateOutputType | null
    _sum: PetiteCaisseSumAggregateOutputType | null
    _min: PetiteCaisseMinAggregateOutputType | null
    _max: PetiteCaisseMaxAggregateOutputType | null
  }

  type GetPetiteCaisseGroupByPayload<T extends PetiteCaisseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetiteCaisseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetiteCaisseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetiteCaisseGroupByOutputType[P]>
            : GetScalarType<T[P], PetiteCaisseGroupByOutputType[P]>
        }
      >
    >


  export type PetiteCaisseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num?: boolean
    caisse?: boolean
    type?: boolean
    categorie?: boolean
    nature?: boolean
    periode?: boolean
    date?: boolean
    designation?: boolean
    prestataire?: boolean
    entree?: boolean
    sortie?: boolean
    penalite?: boolean
    solde?: boolean
    refFacture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["petiteCaisse"]>

  export type PetiteCaisseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num?: boolean
    caisse?: boolean
    type?: boolean
    categorie?: boolean
    nature?: boolean
    periode?: boolean
    date?: boolean
    designation?: boolean
    prestataire?: boolean
    entree?: boolean
    sortie?: boolean
    penalite?: boolean
    solde?: boolean
    refFacture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["petiteCaisse"]>

  export type PetiteCaisseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num?: boolean
    caisse?: boolean
    type?: boolean
    categorie?: boolean
    nature?: boolean
    periode?: boolean
    date?: boolean
    designation?: boolean
    prestataire?: boolean
    entree?: boolean
    sortie?: boolean
    penalite?: boolean
    solde?: boolean
    refFacture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["petiteCaisse"]>

  export type PetiteCaisseSelectScalar = {
    id?: boolean
    num?: boolean
    caisse?: boolean
    type?: boolean
    categorie?: boolean
    nature?: boolean
    periode?: boolean
    date?: boolean
    designation?: boolean
    prestataire?: boolean
    entree?: boolean
    sortie?: boolean
    penalite?: boolean
    solde?: boolean
    refFacture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PetiteCaisseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "num" | "caisse" | "type" | "categorie" | "nature" | "periode" | "date" | "designation" | "prestataire" | "entree" | "sortie" | "penalite" | "solde" | "refFacture" | "createdAt" | "updatedAt", ExtArgs["result"]["petiteCaisse"]>

  export type $PetiteCaissePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PetiteCaisse"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      num: string
      caisse: string
      type: string
      categorie: string | null
      nature: string
      periode: string | null
      date: Date
      designation: string
      prestataire: string | null
      entree: number
      sortie: number
      penalite: number
      solde: number
      refFacture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["petiteCaisse"]>
    composites: {}
  }

  type PetiteCaisseGetPayload<S extends boolean | null | undefined | PetiteCaisseDefaultArgs> = $Result.GetResult<Prisma.$PetiteCaissePayload, S>

  type PetiteCaisseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetiteCaisseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetiteCaisseCountAggregateInputType | true
    }

  export interface PetiteCaisseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PetiteCaisse'], meta: { name: 'PetiteCaisse' } }
    /**
     * Find zero or one PetiteCaisse that matches the filter.
     * @param {PetiteCaisseFindUniqueArgs} args - Arguments to find a PetiteCaisse
     * @example
     * // Get one PetiteCaisse
     * const petiteCaisse = await prisma.petiteCaisse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetiteCaisseFindUniqueArgs>(args: SelectSubset<T, PetiteCaisseFindUniqueArgs<ExtArgs>>): Prisma__PetiteCaisseClient<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PetiteCaisse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetiteCaisseFindUniqueOrThrowArgs} args - Arguments to find a PetiteCaisse
     * @example
     * // Get one PetiteCaisse
     * const petiteCaisse = await prisma.petiteCaisse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetiteCaisseFindUniqueOrThrowArgs>(args: SelectSubset<T, PetiteCaisseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetiteCaisseClient<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetiteCaisse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetiteCaisseFindFirstArgs} args - Arguments to find a PetiteCaisse
     * @example
     * // Get one PetiteCaisse
     * const petiteCaisse = await prisma.petiteCaisse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetiteCaisseFindFirstArgs>(args?: SelectSubset<T, PetiteCaisseFindFirstArgs<ExtArgs>>): Prisma__PetiteCaisseClient<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetiteCaisse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetiteCaisseFindFirstOrThrowArgs} args - Arguments to find a PetiteCaisse
     * @example
     * // Get one PetiteCaisse
     * const petiteCaisse = await prisma.petiteCaisse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetiteCaisseFindFirstOrThrowArgs>(args?: SelectSubset<T, PetiteCaisseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetiteCaisseClient<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PetiteCaisses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetiteCaisseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PetiteCaisses
     * const petiteCaisses = await prisma.petiteCaisse.findMany()
     * 
     * // Get first 10 PetiteCaisses
     * const petiteCaisses = await prisma.petiteCaisse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petiteCaisseWithIdOnly = await prisma.petiteCaisse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetiteCaisseFindManyArgs>(args?: SelectSubset<T, PetiteCaisseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PetiteCaisse.
     * @param {PetiteCaisseCreateArgs} args - Arguments to create a PetiteCaisse.
     * @example
     * // Create one PetiteCaisse
     * const PetiteCaisse = await prisma.petiteCaisse.create({
     *   data: {
     *     // ... data to create a PetiteCaisse
     *   }
     * })
     * 
     */
    create<T extends PetiteCaisseCreateArgs>(args: SelectSubset<T, PetiteCaisseCreateArgs<ExtArgs>>): Prisma__PetiteCaisseClient<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PetiteCaisses.
     * @param {PetiteCaisseCreateManyArgs} args - Arguments to create many PetiteCaisses.
     * @example
     * // Create many PetiteCaisses
     * const petiteCaisse = await prisma.petiteCaisse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetiteCaisseCreateManyArgs>(args?: SelectSubset<T, PetiteCaisseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PetiteCaisses and returns the data saved in the database.
     * @param {PetiteCaisseCreateManyAndReturnArgs} args - Arguments to create many PetiteCaisses.
     * @example
     * // Create many PetiteCaisses
     * const petiteCaisse = await prisma.petiteCaisse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PetiteCaisses and only return the `id`
     * const petiteCaisseWithIdOnly = await prisma.petiteCaisse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetiteCaisseCreateManyAndReturnArgs>(args?: SelectSubset<T, PetiteCaisseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PetiteCaisse.
     * @param {PetiteCaisseDeleteArgs} args - Arguments to delete one PetiteCaisse.
     * @example
     * // Delete one PetiteCaisse
     * const PetiteCaisse = await prisma.petiteCaisse.delete({
     *   where: {
     *     // ... filter to delete one PetiteCaisse
     *   }
     * })
     * 
     */
    delete<T extends PetiteCaisseDeleteArgs>(args: SelectSubset<T, PetiteCaisseDeleteArgs<ExtArgs>>): Prisma__PetiteCaisseClient<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PetiteCaisse.
     * @param {PetiteCaisseUpdateArgs} args - Arguments to update one PetiteCaisse.
     * @example
     * // Update one PetiteCaisse
     * const petiteCaisse = await prisma.petiteCaisse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetiteCaisseUpdateArgs>(args: SelectSubset<T, PetiteCaisseUpdateArgs<ExtArgs>>): Prisma__PetiteCaisseClient<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PetiteCaisses.
     * @param {PetiteCaisseDeleteManyArgs} args - Arguments to filter PetiteCaisses to delete.
     * @example
     * // Delete a few PetiteCaisses
     * const { count } = await prisma.petiteCaisse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetiteCaisseDeleteManyArgs>(args?: SelectSubset<T, PetiteCaisseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetiteCaisses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetiteCaisseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PetiteCaisses
     * const petiteCaisse = await prisma.petiteCaisse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetiteCaisseUpdateManyArgs>(args: SelectSubset<T, PetiteCaisseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetiteCaisses and returns the data updated in the database.
     * @param {PetiteCaisseUpdateManyAndReturnArgs} args - Arguments to update many PetiteCaisses.
     * @example
     * // Update many PetiteCaisses
     * const petiteCaisse = await prisma.petiteCaisse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PetiteCaisses and only return the `id`
     * const petiteCaisseWithIdOnly = await prisma.petiteCaisse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetiteCaisseUpdateManyAndReturnArgs>(args: SelectSubset<T, PetiteCaisseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PetiteCaisse.
     * @param {PetiteCaisseUpsertArgs} args - Arguments to update or create a PetiteCaisse.
     * @example
     * // Update or create a PetiteCaisse
     * const petiteCaisse = await prisma.petiteCaisse.upsert({
     *   create: {
     *     // ... data to create a PetiteCaisse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PetiteCaisse we want to update
     *   }
     * })
     */
    upsert<T extends PetiteCaisseUpsertArgs>(args: SelectSubset<T, PetiteCaisseUpsertArgs<ExtArgs>>): Prisma__PetiteCaisseClient<$Result.GetResult<Prisma.$PetiteCaissePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PetiteCaisses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetiteCaisseCountArgs} args - Arguments to filter PetiteCaisses to count.
     * @example
     * // Count the number of PetiteCaisses
     * const count = await prisma.petiteCaisse.count({
     *   where: {
     *     // ... the filter for the PetiteCaisses we want to count
     *   }
     * })
    **/
    count<T extends PetiteCaisseCountArgs>(
      args?: Subset<T, PetiteCaisseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetiteCaisseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PetiteCaisse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetiteCaisseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetiteCaisseAggregateArgs>(args: Subset<T, PetiteCaisseAggregateArgs>): Prisma.PrismaPromise<GetPetiteCaisseAggregateType<T>>

    /**
     * Group by PetiteCaisse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetiteCaisseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetiteCaisseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetiteCaisseGroupByArgs['orderBy'] }
        : { orderBy?: PetiteCaisseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetiteCaisseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetiteCaisseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PetiteCaisse model
   */
  readonly fields: PetiteCaisseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PetiteCaisse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetiteCaisseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PetiteCaisse model
   */
  interface PetiteCaisseFieldRefs {
    readonly id: FieldRef<"PetiteCaisse", 'Int'>
    readonly num: FieldRef<"PetiteCaisse", 'String'>
    readonly caisse: FieldRef<"PetiteCaisse", 'String'>
    readonly type: FieldRef<"PetiteCaisse", 'String'>
    readonly categorie: FieldRef<"PetiteCaisse", 'String'>
    readonly nature: FieldRef<"PetiteCaisse", 'String'>
    readonly periode: FieldRef<"PetiteCaisse", 'String'>
    readonly date: FieldRef<"PetiteCaisse", 'DateTime'>
    readonly designation: FieldRef<"PetiteCaisse", 'String'>
    readonly prestataire: FieldRef<"PetiteCaisse", 'String'>
    readonly entree: FieldRef<"PetiteCaisse", 'Float'>
    readonly sortie: FieldRef<"PetiteCaisse", 'Float'>
    readonly penalite: FieldRef<"PetiteCaisse", 'Float'>
    readonly solde: FieldRef<"PetiteCaisse", 'Float'>
    readonly refFacture: FieldRef<"PetiteCaisse", 'String'>
    readonly createdAt: FieldRef<"PetiteCaisse", 'DateTime'>
    readonly updatedAt: FieldRef<"PetiteCaisse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PetiteCaisse findUnique
   */
  export type PetiteCaisseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * Filter, which PetiteCaisse to fetch.
     */
    where: PetiteCaisseWhereUniqueInput
  }

  /**
   * PetiteCaisse findUniqueOrThrow
   */
  export type PetiteCaisseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * Filter, which PetiteCaisse to fetch.
     */
    where: PetiteCaisseWhereUniqueInput
  }

  /**
   * PetiteCaisse findFirst
   */
  export type PetiteCaisseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * Filter, which PetiteCaisse to fetch.
     */
    where?: PetiteCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetiteCaisses to fetch.
     */
    orderBy?: PetiteCaisseOrderByWithRelationInput | PetiteCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetiteCaisses.
     */
    cursor?: PetiteCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetiteCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetiteCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetiteCaisses.
     */
    distinct?: PetiteCaisseScalarFieldEnum | PetiteCaisseScalarFieldEnum[]
  }

  /**
   * PetiteCaisse findFirstOrThrow
   */
  export type PetiteCaisseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * Filter, which PetiteCaisse to fetch.
     */
    where?: PetiteCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetiteCaisses to fetch.
     */
    orderBy?: PetiteCaisseOrderByWithRelationInput | PetiteCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetiteCaisses.
     */
    cursor?: PetiteCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetiteCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetiteCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetiteCaisses.
     */
    distinct?: PetiteCaisseScalarFieldEnum | PetiteCaisseScalarFieldEnum[]
  }

  /**
   * PetiteCaisse findMany
   */
  export type PetiteCaisseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * Filter, which PetiteCaisses to fetch.
     */
    where?: PetiteCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetiteCaisses to fetch.
     */
    orderBy?: PetiteCaisseOrderByWithRelationInput | PetiteCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PetiteCaisses.
     */
    cursor?: PetiteCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetiteCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetiteCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetiteCaisses.
     */
    distinct?: PetiteCaisseScalarFieldEnum | PetiteCaisseScalarFieldEnum[]
  }

  /**
   * PetiteCaisse create
   */
  export type PetiteCaisseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * The data needed to create a PetiteCaisse.
     */
    data: XOR<PetiteCaisseCreateInput, PetiteCaisseUncheckedCreateInput>
  }

  /**
   * PetiteCaisse createMany
   */
  export type PetiteCaisseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PetiteCaisses.
     */
    data: PetiteCaisseCreateManyInput | PetiteCaisseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetiteCaisse createManyAndReturn
   */
  export type PetiteCaisseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * The data used to create many PetiteCaisses.
     */
    data: PetiteCaisseCreateManyInput | PetiteCaisseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetiteCaisse update
   */
  export type PetiteCaisseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * The data needed to update a PetiteCaisse.
     */
    data: XOR<PetiteCaisseUpdateInput, PetiteCaisseUncheckedUpdateInput>
    /**
     * Choose, which PetiteCaisse to update.
     */
    where: PetiteCaisseWhereUniqueInput
  }

  /**
   * PetiteCaisse updateMany
   */
  export type PetiteCaisseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PetiteCaisses.
     */
    data: XOR<PetiteCaisseUpdateManyMutationInput, PetiteCaisseUncheckedUpdateManyInput>
    /**
     * Filter which PetiteCaisses to update
     */
    where?: PetiteCaisseWhereInput
    /**
     * Limit how many PetiteCaisses to update.
     */
    limit?: number
  }

  /**
   * PetiteCaisse updateManyAndReturn
   */
  export type PetiteCaisseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * The data used to update PetiteCaisses.
     */
    data: XOR<PetiteCaisseUpdateManyMutationInput, PetiteCaisseUncheckedUpdateManyInput>
    /**
     * Filter which PetiteCaisses to update
     */
    where?: PetiteCaisseWhereInput
    /**
     * Limit how many PetiteCaisses to update.
     */
    limit?: number
  }

  /**
   * PetiteCaisse upsert
   */
  export type PetiteCaisseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * The filter to search for the PetiteCaisse to update in case it exists.
     */
    where: PetiteCaisseWhereUniqueInput
    /**
     * In case the PetiteCaisse found by the `where` argument doesn't exist, create a new PetiteCaisse with this data.
     */
    create: XOR<PetiteCaisseCreateInput, PetiteCaisseUncheckedCreateInput>
    /**
     * In case the PetiteCaisse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetiteCaisseUpdateInput, PetiteCaisseUncheckedUpdateInput>
  }

  /**
   * PetiteCaisse delete
   */
  export type PetiteCaisseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
    /**
     * Filter which PetiteCaisse to delete.
     */
    where: PetiteCaisseWhereUniqueInput
  }

  /**
   * PetiteCaisse deleteMany
   */
  export type PetiteCaisseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetiteCaisses to delete
     */
    where?: PetiteCaisseWhereInput
    /**
     * Limit how many PetiteCaisses to delete.
     */
    limit?: number
  }

  /**
   * PetiteCaisse without action
   */
  export type PetiteCaisseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetiteCaisse
     */
    select?: PetiteCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetiteCaisse
     */
    omit?: PetiteCaisseOmit<ExtArgs> | null
  }


  /**
   * Model Tresorerie
   */

  export type AggregateTresorerie = {
    _count: TresorerieCountAggregateOutputType | null
    _avg: TresorerieAvgAggregateOutputType | null
    _sum: TresorerieSumAggregateOutputType | null
    _min: TresorerieMinAggregateOutputType | null
    _max: TresorerieMaxAggregateOutputType | null
  }

  export type TresorerieAvgAggregateOutputType = {
    id: number | null
    annee: number | null
    banque: number | null
    coffre: number | null
    entrees: number | null
    chgPrev: number | null
    chgPay: number | null
    reste: number | null
  }

  export type TresorerieSumAggregateOutputType = {
    id: number | null
    annee: number | null
    banque: number | null
    coffre: number | null
    entrees: number | null
    chgPrev: number | null
    chgPay: number | null
    reste: number | null
  }

  export type TresorerieMinAggregateOutputType = {
    id: number | null
    mois: string | null
    annee: number | null
    type: string | null
    banque: number | null
    coffre: number | null
    entrees: number | null
    chgPrev: number | null
    chgPay: number | null
    reste: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TresorerieMaxAggregateOutputType = {
    id: number | null
    mois: string | null
    annee: number | null
    type: string | null
    banque: number | null
    coffre: number | null
    entrees: number | null
    chgPrev: number | null
    chgPay: number | null
    reste: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TresorerieCountAggregateOutputType = {
    id: number
    mois: number
    annee: number
    type: number
    banque: number
    coffre: number
    entrees: number
    chgPrev: number
    chgPay: number
    reste: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TresorerieAvgAggregateInputType = {
    id?: true
    annee?: true
    banque?: true
    coffre?: true
    entrees?: true
    chgPrev?: true
    chgPay?: true
    reste?: true
  }

  export type TresorerieSumAggregateInputType = {
    id?: true
    annee?: true
    banque?: true
    coffre?: true
    entrees?: true
    chgPrev?: true
    chgPay?: true
    reste?: true
  }

  export type TresorerieMinAggregateInputType = {
    id?: true
    mois?: true
    annee?: true
    type?: true
    banque?: true
    coffre?: true
    entrees?: true
    chgPrev?: true
    chgPay?: true
    reste?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TresorerieMaxAggregateInputType = {
    id?: true
    mois?: true
    annee?: true
    type?: true
    banque?: true
    coffre?: true
    entrees?: true
    chgPrev?: true
    chgPay?: true
    reste?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TresorerieCountAggregateInputType = {
    id?: true
    mois?: true
    annee?: true
    type?: true
    banque?: true
    coffre?: true
    entrees?: true
    chgPrev?: true
    chgPay?: true
    reste?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TresorerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tresorerie to aggregate.
     */
    where?: TresorerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tresoreries to fetch.
     */
    orderBy?: TresorerieOrderByWithRelationInput | TresorerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TresorerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tresoreries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tresoreries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tresoreries
    **/
    _count?: true | TresorerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TresorerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TresorerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TresorerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TresorerieMaxAggregateInputType
  }

  export type GetTresorerieAggregateType<T extends TresorerieAggregateArgs> = {
        [P in keyof T & keyof AggregateTresorerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTresorerie[P]>
      : GetScalarType<T[P], AggregateTresorerie[P]>
  }




  export type TresorerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TresorerieWhereInput
    orderBy?: TresorerieOrderByWithAggregationInput | TresorerieOrderByWithAggregationInput[]
    by: TresorerieScalarFieldEnum[] | TresorerieScalarFieldEnum
    having?: TresorerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TresorerieCountAggregateInputType | true
    _avg?: TresorerieAvgAggregateInputType
    _sum?: TresorerieSumAggregateInputType
    _min?: TresorerieMinAggregateInputType
    _max?: TresorerieMaxAggregateInputType
  }

  export type TresorerieGroupByOutputType = {
    id: number
    mois: string
    annee: number
    type: string
    banque: number
    coffre: number
    entrees: number
    chgPrev: number
    chgPay: number
    reste: number
    createdAt: Date
    updatedAt: Date
    _count: TresorerieCountAggregateOutputType | null
    _avg: TresorerieAvgAggregateOutputType | null
    _sum: TresorerieSumAggregateOutputType | null
    _min: TresorerieMinAggregateOutputType | null
    _max: TresorerieMaxAggregateOutputType | null
  }

  type GetTresorerieGroupByPayload<T extends TresorerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TresorerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TresorerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TresorerieGroupByOutputType[P]>
            : GetScalarType<T[P], TresorerieGroupByOutputType[P]>
        }
      >
    >


  export type TresorerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mois?: boolean
    annee?: boolean
    type?: boolean
    banque?: boolean
    coffre?: boolean
    entrees?: boolean
    chgPrev?: boolean
    chgPay?: boolean
    reste?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tresorerie"]>

  export type TresorerieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mois?: boolean
    annee?: boolean
    type?: boolean
    banque?: boolean
    coffre?: boolean
    entrees?: boolean
    chgPrev?: boolean
    chgPay?: boolean
    reste?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tresorerie"]>

  export type TresorerieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mois?: boolean
    annee?: boolean
    type?: boolean
    banque?: boolean
    coffre?: boolean
    entrees?: boolean
    chgPrev?: boolean
    chgPay?: boolean
    reste?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tresorerie"]>

  export type TresorerieSelectScalar = {
    id?: boolean
    mois?: boolean
    annee?: boolean
    type?: boolean
    banque?: boolean
    coffre?: boolean
    entrees?: boolean
    chgPrev?: boolean
    chgPay?: boolean
    reste?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TresorerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mois" | "annee" | "type" | "banque" | "coffre" | "entrees" | "chgPrev" | "chgPay" | "reste" | "createdAt" | "updatedAt", ExtArgs["result"]["tresorerie"]>

  export type $TresoreriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tresorerie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mois: string
      annee: number
      type: string
      banque: number
      coffre: number
      entrees: number
      chgPrev: number
      chgPay: number
      reste: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tresorerie"]>
    composites: {}
  }

  type TresorerieGetPayload<S extends boolean | null | undefined | TresorerieDefaultArgs> = $Result.GetResult<Prisma.$TresoreriePayload, S>

  type TresorerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TresorerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TresorerieCountAggregateInputType | true
    }

  export interface TresorerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tresorerie'], meta: { name: 'Tresorerie' } }
    /**
     * Find zero or one Tresorerie that matches the filter.
     * @param {TresorerieFindUniqueArgs} args - Arguments to find a Tresorerie
     * @example
     * // Get one Tresorerie
     * const tresorerie = await prisma.tresorerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TresorerieFindUniqueArgs>(args: SelectSubset<T, TresorerieFindUniqueArgs<ExtArgs>>): Prisma__TresorerieClient<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tresorerie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TresorerieFindUniqueOrThrowArgs} args - Arguments to find a Tresorerie
     * @example
     * // Get one Tresorerie
     * const tresorerie = await prisma.tresorerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TresorerieFindUniqueOrThrowArgs>(args: SelectSubset<T, TresorerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TresorerieClient<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tresorerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TresorerieFindFirstArgs} args - Arguments to find a Tresorerie
     * @example
     * // Get one Tresorerie
     * const tresorerie = await prisma.tresorerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TresorerieFindFirstArgs>(args?: SelectSubset<T, TresorerieFindFirstArgs<ExtArgs>>): Prisma__TresorerieClient<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tresorerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TresorerieFindFirstOrThrowArgs} args - Arguments to find a Tresorerie
     * @example
     * // Get one Tresorerie
     * const tresorerie = await prisma.tresorerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TresorerieFindFirstOrThrowArgs>(args?: SelectSubset<T, TresorerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__TresorerieClient<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tresoreries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TresorerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tresoreries
     * const tresoreries = await prisma.tresorerie.findMany()
     * 
     * // Get first 10 Tresoreries
     * const tresoreries = await prisma.tresorerie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tresorerieWithIdOnly = await prisma.tresorerie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TresorerieFindManyArgs>(args?: SelectSubset<T, TresorerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tresorerie.
     * @param {TresorerieCreateArgs} args - Arguments to create a Tresorerie.
     * @example
     * // Create one Tresorerie
     * const Tresorerie = await prisma.tresorerie.create({
     *   data: {
     *     // ... data to create a Tresorerie
     *   }
     * })
     * 
     */
    create<T extends TresorerieCreateArgs>(args: SelectSubset<T, TresorerieCreateArgs<ExtArgs>>): Prisma__TresorerieClient<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tresoreries.
     * @param {TresorerieCreateManyArgs} args - Arguments to create many Tresoreries.
     * @example
     * // Create many Tresoreries
     * const tresorerie = await prisma.tresorerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TresorerieCreateManyArgs>(args?: SelectSubset<T, TresorerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tresoreries and returns the data saved in the database.
     * @param {TresorerieCreateManyAndReturnArgs} args - Arguments to create many Tresoreries.
     * @example
     * // Create many Tresoreries
     * const tresorerie = await prisma.tresorerie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tresoreries and only return the `id`
     * const tresorerieWithIdOnly = await prisma.tresorerie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TresorerieCreateManyAndReturnArgs>(args?: SelectSubset<T, TresorerieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tresorerie.
     * @param {TresorerieDeleteArgs} args - Arguments to delete one Tresorerie.
     * @example
     * // Delete one Tresorerie
     * const Tresorerie = await prisma.tresorerie.delete({
     *   where: {
     *     // ... filter to delete one Tresorerie
     *   }
     * })
     * 
     */
    delete<T extends TresorerieDeleteArgs>(args: SelectSubset<T, TresorerieDeleteArgs<ExtArgs>>): Prisma__TresorerieClient<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tresorerie.
     * @param {TresorerieUpdateArgs} args - Arguments to update one Tresorerie.
     * @example
     * // Update one Tresorerie
     * const tresorerie = await prisma.tresorerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TresorerieUpdateArgs>(args: SelectSubset<T, TresorerieUpdateArgs<ExtArgs>>): Prisma__TresorerieClient<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tresoreries.
     * @param {TresorerieDeleteManyArgs} args - Arguments to filter Tresoreries to delete.
     * @example
     * // Delete a few Tresoreries
     * const { count } = await prisma.tresorerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TresorerieDeleteManyArgs>(args?: SelectSubset<T, TresorerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tresoreries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TresorerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tresoreries
     * const tresorerie = await prisma.tresorerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TresorerieUpdateManyArgs>(args: SelectSubset<T, TresorerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tresoreries and returns the data updated in the database.
     * @param {TresorerieUpdateManyAndReturnArgs} args - Arguments to update many Tresoreries.
     * @example
     * // Update many Tresoreries
     * const tresorerie = await prisma.tresorerie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tresoreries and only return the `id`
     * const tresorerieWithIdOnly = await prisma.tresorerie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TresorerieUpdateManyAndReturnArgs>(args: SelectSubset<T, TresorerieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tresorerie.
     * @param {TresorerieUpsertArgs} args - Arguments to update or create a Tresorerie.
     * @example
     * // Update or create a Tresorerie
     * const tresorerie = await prisma.tresorerie.upsert({
     *   create: {
     *     // ... data to create a Tresorerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tresorerie we want to update
     *   }
     * })
     */
    upsert<T extends TresorerieUpsertArgs>(args: SelectSubset<T, TresorerieUpsertArgs<ExtArgs>>): Prisma__TresorerieClient<$Result.GetResult<Prisma.$TresoreriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tresoreries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TresorerieCountArgs} args - Arguments to filter Tresoreries to count.
     * @example
     * // Count the number of Tresoreries
     * const count = await prisma.tresorerie.count({
     *   where: {
     *     // ... the filter for the Tresoreries we want to count
     *   }
     * })
    **/
    count<T extends TresorerieCountArgs>(
      args?: Subset<T, TresorerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TresorerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tresorerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TresorerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TresorerieAggregateArgs>(args: Subset<T, TresorerieAggregateArgs>): Prisma.PrismaPromise<GetTresorerieAggregateType<T>>

    /**
     * Group by Tresorerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TresorerieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TresorerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TresorerieGroupByArgs['orderBy'] }
        : { orderBy?: TresorerieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TresorerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTresorerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tresorerie model
   */
  readonly fields: TresorerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tresorerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TresorerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tresorerie model
   */
  interface TresorerieFieldRefs {
    readonly id: FieldRef<"Tresorerie", 'Int'>
    readonly mois: FieldRef<"Tresorerie", 'String'>
    readonly annee: FieldRef<"Tresorerie", 'Int'>
    readonly type: FieldRef<"Tresorerie", 'String'>
    readonly banque: FieldRef<"Tresorerie", 'Float'>
    readonly coffre: FieldRef<"Tresorerie", 'Float'>
    readonly entrees: FieldRef<"Tresorerie", 'Float'>
    readonly chgPrev: FieldRef<"Tresorerie", 'Float'>
    readonly chgPay: FieldRef<"Tresorerie", 'Float'>
    readonly reste: FieldRef<"Tresorerie", 'Float'>
    readonly createdAt: FieldRef<"Tresorerie", 'DateTime'>
    readonly updatedAt: FieldRef<"Tresorerie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tresorerie findUnique
   */
  export type TresorerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * Filter, which Tresorerie to fetch.
     */
    where: TresorerieWhereUniqueInput
  }

  /**
   * Tresorerie findUniqueOrThrow
   */
  export type TresorerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * Filter, which Tresorerie to fetch.
     */
    where: TresorerieWhereUniqueInput
  }

  /**
   * Tresorerie findFirst
   */
  export type TresorerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * Filter, which Tresorerie to fetch.
     */
    where?: TresorerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tresoreries to fetch.
     */
    orderBy?: TresorerieOrderByWithRelationInput | TresorerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tresoreries.
     */
    cursor?: TresorerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tresoreries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tresoreries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tresoreries.
     */
    distinct?: TresorerieScalarFieldEnum | TresorerieScalarFieldEnum[]
  }

  /**
   * Tresorerie findFirstOrThrow
   */
  export type TresorerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * Filter, which Tresorerie to fetch.
     */
    where?: TresorerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tresoreries to fetch.
     */
    orderBy?: TresorerieOrderByWithRelationInput | TresorerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tresoreries.
     */
    cursor?: TresorerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tresoreries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tresoreries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tresoreries.
     */
    distinct?: TresorerieScalarFieldEnum | TresorerieScalarFieldEnum[]
  }

  /**
   * Tresorerie findMany
   */
  export type TresorerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * Filter, which Tresoreries to fetch.
     */
    where?: TresorerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tresoreries to fetch.
     */
    orderBy?: TresorerieOrderByWithRelationInput | TresorerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tresoreries.
     */
    cursor?: TresorerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tresoreries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tresoreries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tresoreries.
     */
    distinct?: TresorerieScalarFieldEnum | TresorerieScalarFieldEnum[]
  }

  /**
   * Tresorerie create
   */
  export type TresorerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * The data needed to create a Tresorerie.
     */
    data: XOR<TresorerieCreateInput, TresorerieUncheckedCreateInput>
  }

  /**
   * Tresorerie createMany
   */
  export type TresorerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tresoreries.
     */
    data: TresorerieCreateManyInput | TresorerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tresorerie createManyAndReturn
   */
  export type TresorerieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * The data used to create many Tresoreries.
     */
    data: TresorerieCreateManyInput | TresorerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tresorerie update
   */
  export type TresorerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * The data needed to update a Tresorerie.
     */
    data: XOR<TresorerieUpdateInput, TresorerieUncheckedUpdateInput>
    /**
     * Choose, which Tresorerie to update.
     */
    where: TresorerieWhereUniqueInput
  }

  /**
   * Tresorerie updateMany
   */
  export type TresorerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tresoreries.
     */
    data: XOR<TresorerieUpdateManyMutationInput, TresorerieUncheckedUpdateManyInput>
    /**
     * Filter which Tresoreries to update
     */
    where?: TresorerieWhereInput
    /**
     * Limit how many Tresoreries to update.
     */
    limit?: number
  }

  /**
   * Tresorerie updateManyAndReturn
   */
  export type TresorerieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * The data used to update Tresoreries.
     */
    data: XOR<TresorerieUpdateManyMutationInput, TresorerieUncheckedUpdateManyInput>
    /**
     * Filter which Tresoreries to update
     */
    where?: TresorerieWhereInput
    /**
     * Limit how many Tresoreries to update.
     */
    limit?: number
  }

  /**
   * Tresorerie upsert
   */
  export type TresorerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * The filter to search for the Tresorerie to update in case it exists.
     */
    where: TresorerieWhereUniqueInput
    /**
     * In case the Tresorerie found by the `where` argument doesn't exist, create a new Tresorerie with this data.
     */
    create: XOR<TresorerieCreateInput, TresorerieUncheckedCreateInput>
    /**
     * In case the Tresorerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TresorerieUpdateInput, TresorerieUncheckedUpdateInput>
  }

  /**
   * Tresorerie delete
   */
  export type TresorerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
    /**
     * Filter which Tresorerie to delete.
     */
    where: TresorerieWhereUniqueInput
  }

  /**
   * Tresorerie deleteMany
   */
  export type TresorerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tresoreries to delete
     */
    where?: TresorerieWhereInput
    /**
     * Limit how many Tresoreries to delete.
     */
    limit?: number
  }

  /**
   * Tresorerie without action
   */
  export type TresorerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tresorerie
     */
    select?: TresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tresorerie
     */
    omit?: TresorerieOmit<ExtArgs> | null
  }


  /**
   * Model Params
   */

  export type AggregateParams = {
    _count: ParamsCountAggregateOutputType | null
    _avg: ParamsAvgAggregateOutputType | null
    _sum: ParamsSumAggregateOutputType | null
    _min: ParamsMinAggregateOutputType | null
    _max: ParamsMaxAggregateOutputType | null
  }

  export type ParamsAvgAggregateOutputType = {
    id: number | null
    banque: number | null
    coffre: number | null
    masseSal: number | null
    chargesPat: number | null
    primesMens: number | null
    arrSal: number | null
    arrSalR: number | null
    arrSalM: number | null
    arrPrim: number | null
    arrPrimM: number | null
  }

  export type ParamsSumAggregateOutputType = {
    id: number | null
    banque: number | null
    coffre: number | null
    masseSal: number | null
    chargesPat: number | null
    primesMens: number | null
    arrSal: number | null
    arrSalR: number | null
    arrSalM: number | null
    arrPrim: number | null
    arrPrimM: number | null
  }

  export type ParamsMinAggregateOutputType = {
    id: number | null
    banque: number | null
    coffre: number | null
    masseSal: number | null
    chargesPat: number | null
    primesMens: number | null
    arrSal: number | null
    arrSalR: number | null
    arrSalM: number | null
    arrPrim: number | null
    arrPrimM: number | null
    updatedAt: Date | null
  }

  export type ParamsMaxAggregateOutputType = {
    id: number | null
    banque: number | null
    coffre: number | null
    masseSal: number | null
    chargesPat: number | null
    primesMens: number | null
    arrSal: number | null
    arrSalR: number | null
    arrSalM: number | null
    arrPrim: number | null
    arrPrimM: number | null
    updatedAt: Date | null
  }

  export type ParamsCountAggregateOutputType = {
    id: number
    banque: number
    coffre: number
    masseSal: number
    chargesPat: number
    primesMens: number
    arrSal: number
    arrSalR: number
    arrSalM: number
    arrPrim: number
    arrPrimM: number
    updatedAt: number
    _all: number
  }


  export type ParamsAvgAggregateInputType = {
    id?: true
    banque?: true
    coffre?: true
    masseSal?: true
    chargesPat?: true
    primesMens?: true
    arrSal?: true
    arrSalR?: true
    arrSalM?: true
    arrPrim?: true
    arrPrimM?: true
  }

  export type ParamsSumAggregateInputType = {
    id?: true
    banque?: true
    coffre?: true
    masseSal?: true
    chargesPat?: true
    primesMens?: true
    arrSal?: true
    arrSalR?: true
    arrSalM?: true
    arrPrim?: true
    arrPrimM?: true
  }

  export type ParamsMinAggregateInputType = {
    id?: true
    banque?: true
    coffre?: true
    masseSal?: true
    chargesPat?: true
    primesMens?: true
    arrSal?: true
    arrSalR?: true
    arrSalM?: true
    arrPrim?: true
    arrPrimM?: true
    updatedAt?: true
  }

  export type ParamsMaxAggregateInputType = {
    id?: true
    banque?: true
    coffre?: true
    masseSal?: true
    chargesPat?: true
    primesMens?: true
    arrSal?: true
    arrSalR?: true
    arrSalM?: true
    arrPrim?: true
    arrPrimM?: true
    updatedAt?: true
  }

  export type ParamsCountAggregateInputType = {
    id?: true
    banque?: true
    coffre?: true
    masseSal?: true
    chargesPat?: true
    primesMens?: true
    arrSal?: true
    arrSalR?: true
    arrSalM?: true
    arrPrim?: true
    arrPrimM?: true
    updatedAt?: true
    _all?: true
  }

  export type ParamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Params to aggregate.
     */
    where?: ParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Params to fetch.
     */
    orderBy?: ParamsOrderByWithRelationInput | ParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Params from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Params.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Params
    **/
    _count?: true | ParamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParamsMaxAggregateInputType
  }

  export type GetParamsAggregateType<T extends ParamsAggregateArgs> = {
        [P in keyof T & keyof AggregateParams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParams[P]>
      : GetScalarType<T[P], AggregateParams[P]>
  }




  export type ParamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParamsWhereInput
    orderBy?: ParamsOrderByWithAggregationInput | ParamsOrderByWithAggregationInput[]
    by: ParamsScalarFieldEnum[] | ParamsScalarFieldEnum
    having?: ParamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParamsCountAggregateInputType | true
    _avg?: ParamsAvgAggregateInputType
    _sum?: ParamsSumAggregateInputType
    _min?: ParamsMinAggregateInputType
    _max?: ParamsMaxAggregateInputType
  }

  export type ParamsGroupByOutputType = {
    id: number
    banque: number
    coffre: number
    masseSal: number
    chargesPat: number
    primesMens: number
    arrSal: number
    arrSalR: number
    arrSalM: number
    arrPrim: number
    arrPrimM: number
    updatedAt: Date
    _count: ParamsCountAggregateOutputType | null
    _avg: ParamsAvgAggregateOutputType | null
    _sum: ParamsSumAggregateOutputType | null
    _min: ParamsMinAggregateOutputType | null
    _max: ParamsMaxAggregateOutputType | null
  }

  type GetParamsGroupByPayload<T extends ParamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParamsGroupByOutputType[P]>
            : GetScalarType<T[P], ParamsGroupByOutputType[P]>
        }
      >
    >


  export type ParamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    banque?: boolean
    coffre?: boolean
    masseSal?: boolean
    chargesPat?: boolean
    primesMens?: boolean
    arrSal?: boolean
    arrSalR?: boolean
    arrSalM?: boolean
    arrPrim?: boolean
    arrPrimM?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["params"]>

  export type ParamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    banque?: boolean
    coffre?: boolean
    masseSal?: boolean
    chargesPat?: boolean
    primesMens?: boolean
    arrSal?: boolean
    arrSalR?: boolean
    arrSalM?: boolean
    arrPrim?: boolean
    arrPrimM?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["params"]>

  export type ParamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    banque?: boolean
    coffre?: boolean
    masseSal?: boolean
    chargesPat?: boolean
    primesMens?: boolean
    arrSal?: boolean
    arrSalR?: boolean
    arrSalM?: boolean
    arrPrim?: boolean
    arrPrimM?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["params"]>

  export type ParamsSelectScalar = {
    id?: boolean
    banque?: boolean
    coffre?: boolean
    masseSal?: boolean
    chargesPat?: boolean
    primesMens?: boolean
    arrSal?: boolean
    arrSalR?: boolean
    arrSalM?: boolean
    arrPrim?: boolean
    arrPrimM?: boolean
    updatedAt?: boolean
  }

  export type ParamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "banque" | "coffre" | "masseSal" | "chargesPat" | "primesMens" | "arrSal" | "arrSalR" | "arrSalM" | "arrPrim" | "arrPrimM" | "updatedAt", ExtArgs["result"]["params"]>

  export type $ParamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Params"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      banque: number
      coffre: number
      masseSal: number
      chargesPat: number
      primesMens: number
      arrSal: number
      arrSalR: number
      arrSalM: number
      arrPrim: number
      arrPrimM: number
      updatedAt: Date
    }, ExtArgs["result"]["params"]>
    composites: {}
  }

  type ParamsGetPayload<S extends boolean | null | undefined | ParamsDefaultArgs> = $Result.GetResult<Prisma.$ParamsPayload, S>

  type ParamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParamsCountAggregateInputType | true
    }

  export interface ParamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Params'], meta: { name: 'Params' } }
    /**
     * Find zero or one Params that matches the filter.
     * @param {ParamsFindUniqueArgs} args - Arguments to find a Params
     * @example
     * // Get one Params
     * const params = await prisma.params.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParamsFindUniqueArgs>(args: SelectSubset<T, ParamsFindUniqueArgs<ExtArgs>>): Prisma__ParamsClient<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Params that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParamsFindUniqueOrThrowArgs} args - Arguments to find a Params
     * @example
     * // Get one Params
     * const params = await prisma.params.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParamsFindUniqueOrThrowArgs>(args: SelectSubset<T, ParamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParamsClient<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Params that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamsFindFirstArgs} args - Arguments to find a Params
     * @example
     * // Get one Params
     * const params = await prisma.params.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParamsFindFirstArgs>(args?: SelectSubset<T, ParamsFindFirstArgs<ExtArgs>>): Prisma__ParamsClient<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Params that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamsFindFirstOrThrowArgs} args - Arguments to find a Params
     * @example
     * // Get one Params
     * const params = await prisma.params.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParamsFindFirstOrThrowArgs>(args?: SelectSubset<T, ParamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParamsClient<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Params that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Params
     * const params = await prisma.params.findMany()
     * 
     * // Get first 10 Params
     * const params = await prisma.params.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paramsWithIdOnly = await prisma.params.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParamsFindManyArgs>(args?: SelectSubset<T, ParamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Params.
     * @param {ParamsCreateArgs} args - Arguments to create a Params.
     * @example
     * // Create one Params
     * const Params = await prisma.params.create({
     *   data: {
     *     // ... data to create a Params
     *   }
     * })
     * 
     */
    create<T extends ParamsCreateArgs>(args: SelectSubset<T, ParamsCreateArgs<ExtArgs>>): Prisma__ParamsClient<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Params.
     * @param {ParamsCreateManyArgs} args - Arguments to create many Params.
     * @example
     * // Create many Params
     * const params = await prisma.params.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParamsCreateManyArgs>(args?: SelectSubset<T, ParamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Params and returns the data saved in the database.
     * @param {ParamsCreateManyAndReturnArgs} args - Arguments to create many Params.
     * @example
     * // Create many Params
     * const params = await prisma.params.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Params and only return the `id`
     * const paramsWithIdOnly = await prisma.params.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParamsCreateManyAndReturnArgs>(args?: SelectSubset<T, ParamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Params.
     * @param {ParamsDeleteArgs} args - Arguments to delete one Params.
     * @example
     * // Delete one Params
     * const Params = await prisma.params.delete({
     *   where: {
     *     // ... filter to delete one Params
     *   }
     * })
     * 
     */
    delete<T extends ParamsDeleteArgs>(args: SelectSubset<T, ParamsDeleteArgs<ExtArgs>>): Prisma__ParamsClient<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Params.
     * @param {ParamsUpdateArgs} args - Arguments to update one Params.
     * @example
     * // Update one Params
     * const params = await prisma.params.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParamsUpdateArgs>(args: SelectSubset<T, ParamsUpdateArgs<ExtArgs>>): Prisma__ParamsClient<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Params.
     * @param {ParamsDeleteManyArgs} args - Arguments to filter Params to delete.
     * @example
     * // Delete a few Params
     * const { count } = await prisma.params.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParamsDeleteManyArgs>(args?: SelectSubset<T, ParamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Params.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Params
     * const params = await prisma.params.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParamsUpdateManyArgs>(args: SelectSubset<T, ParamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Params and returns the data updated in the database.
     * @param {ParamsUpdateManyAndReturnArgs} args - Arguments to update many Params.
     * @example
     * // Update many Params
     * const params = await prisma.params.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Params and only return the `id`
     * const paramsWithIdOnly = await prisma.params.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParamsUpdateManyAndReturnArgs>(args: SelectSubset<T, ParamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Params.
     * @param {ParamsUpsertArgs} args - Arguments to update or create a Params.
     * @example
     * // Update or create a Params
     * const params = await prisma.params.upsert({
     *   create: {
     *     // ... data to create a Params
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Params we want to update
     *   }
     * })
     */
    upsert<T extends ParamsUpsertArgs>(args: SelectSubset<T, ParamsUpsertArgs<ExtArgs>>): Prisma__ParamsClient<$Result.GetResult<Prisma.$ParamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Params.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamsCountArgs} args - Arguments to filter Params to count.
     * @example
     * // Count the number of Params
     * const count = await prisma.params.count({
     *   where: {
     *     // ... the filter for the Params we want to count
     *   }
     * })
    **/
    count<T extends ParamsCountArgs>(
      args?: Subset<T, ParamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Params.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParamsAggregateArgs>(args: Subset<T, ParamsAggregateArgs>): Prisma.PrismaPromise<GetParamsAggregateType<T>>

    /**
     * Group by Params.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParamsGroupByArgs['orderBy'] }
        : { orderBy?: ParamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Params model
   */
  readonly fields: ParamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Params.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Params model
   */
  interface ParamsFieldRefs {
    readonly id: FieldRef<"Params", 'Int'>
    readonly banque: FieldRef<"Params", 'Float'>
    readonly coffre: FieldRef<"Params", 'Float'>
    readonly masseSal: FieldRef<"Params", 'Float'>
    readonly chargesPat: FieldRef<"Params", 'Float'>
    readonly primesMens: FieldRef<"Params", 'Float'>
    readonly arrSal: FieldRef<"Params", 'Float'>
    readonly arrSalR: FieldRef<"Params", 'Float'>
    readonly arrSalM: FieldRef<"Params", 'Float'>
    readonly arrPrim: FieldRef<"Params", 'Float'>
    readonly arrPrimM: FieldRef<"Params", 'Float'>
    readonly updatedAt: FieldRef<"Params", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Params findUnique
   */
  export type ParamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * Filter, which Params to fetch.
     */
    where: ParamsWhereUniqueInput
  }

  /**
   * Params findUniqueOrThrow
   */
  export type ParamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * Filter, which Params to fetch.
     */
    where: ParamsWhereUniqueInput
  }

  /**
   * Params findFirst
   */
  export type ParamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * Filter, which Params to fetch.
     */
    where?: ParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Params to fetch.
     */
    orderBy?: ParamsOrderByWithRelationInput | ParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Params.
     */
    cursor?: ParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Params from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Params.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Params.
     */
    distinct?: ParamsScalarFieldEnum | ParamsScalarFieldEnum[]
  }

  /**
   * Params findFirstOrThrow
   */
  export type ParamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * Filter, which Params to fetch.
     */
    where?: ParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Params to fetch.
     */
    orderBy?: ParamsOrderByWithRelationInput | ParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Params.
     */
    cursor?: ParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Params from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Params.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Params.
     */
    distinct?: ParamsScalarFieldEnum | ParamsScalarFieldEnum[]
  }

  /**
   * Params findMany
   */
  export type ParamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * Filter, which Params to fetch.
     */
    where?: ParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Params to fetch.
     */
    orderBy?: ParamsOrderByWithRelationInput | ParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Params.
     */
    cursor?: ParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Params from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Params.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Params.
     */
    distinct?: ParamsScalarFieldEnum | ParamsScalarFieldEnum[]
  }

  /**
   * Params create
   */
  export type ParamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * The data needed to create a Params.
     */
    data: XOR<ParamsCreateInput, ParamsUncheckedCreateInput>
  }

  /**
   * Params createMany
   */
  export type ParamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Params.
     */
    data: ParamsCreateManyInput | ParamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Params createManyAndReturn
   */
  export type ParamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * The data used to create many Params.
     */
    data: ParamsCreateManyInput | ParamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Params update
   */
  export type ParamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * The data needed to update a Params.
     */
    data: XOR<ParamsUpdateInput, ParamsUncheckedUpdateInput>
    /**
     * Choose, which Params to update.
     */
    where: ParamsWhereUniqueInput
  }

  /**
   * Params updateMany
   */
  export type ParamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Params.
     */
    data: XOR<ParamsUpdateManyMutationInput, ParamsUncheckedUpdateManyInput>
    /**
     * Filter which Params to update
     */
    where?: ParamsWhereInput
    /**
     * Limit how many Params to update.
     */
    limit?: number
  }

  /**
   * Params updateManyAndReturn
   */
  export type ParamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * The data used to update Params.
     */
    data: XOR<ParamsUpdateManyMutationInput, ParamsUncheckedUpdateManyInput>
    /**
     * Filter which Params to update
     */
    where?: ParamsWhereInput
    /**
     * Limit how many Params to update.
     */
    limit?: number
  }

  /**
   * Params upsert
   */
  export type ParamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * The filter to search for the Params to update in case it exists.
     */
    where: ParamsWhereUniqueInput
    /**
     * In case the Params found by the `where` argument doesn't exist, create a new Params with this data.
     */
    create: XOR<ParamsCreateInput, ParamsUncheckedCreateInput>
    /**
     * In case the Params was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParamsUpdateInput, ParamsUncheckedUpdateInput>
  }

  /**
   * Params delete
   */
  export type ParamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
    /**
     * Filter which Params to delete.
     */
    where: ParamsWhereUniqueInput
  }

  /**
   * Params deleteMany
   */
  export type ParamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Params to delete
     */
    where?: ParamsWhereInput
    /**
     * Limit how many Params to delete.
     */
    limit?: number
  }

  /**
   * Params without action
   */
  export type ParamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Params
     */
    select?: ParamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Params
     */
    omit?: ParamsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    secteur: 'secteur',
    tel: 'tel',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    client: 'client',
    apporteur: 'apporteur',
    statut: 'statut',
    montant: 'montant',
    avance: 'avance',
    debut: 'debut',
    fin: 'fin',
    tva: 'tva',
    nature: 'nature',
    desc: 'desc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const MissionEncScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    mois: 'mois',
    montant: 'montant'
  };

  export type MissionEncScalarFieldEnum = (typeof MissionEncScalarFieldEnum)[keyof typeof MissionEncScalarFieldEnum]


  export const FactureScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    num: 'num',
    date: 'date',
    ht: 'ht',
    tvaType: 'tvaType',
    tvaMontant: 'tvaMontant',
    ttc: 'ttc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum]


  export const TrancheScalarFieldEnum: {
    id: 'id',
    factureId: 'factureId',
    num: 'num',
    montant: 'montant',
    echeance: 'echeance',
    encaisse: 'encaisse',
    dateEnc: 'dateEnc',
    ref: 'ref',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrancheScalarFieldEnum = (typeof TrancheScalarFieldEnum)[keyof typeof TrancheScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    poste: 'poste',
    salaire: 'salaire',
    nature: 'nature',
    debut: 'debut',
    fin: 'fin',
    marabu: 'marabu',
    actif: 'actif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const StaffPaieScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    mois: 'mois',
    annee: 'annee',
    montant: 'montant',
    statut: 'statut'
  };

  export type StaffPaieScalarFieldEnum = (typeof StaffPaieScalarFieldEnum)[keyof typeof StaffPaieScalarFieldEnum]


  export const ChargeScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    categorie: 'categorie',
    nature: 'nature',
    type: 'type',
    periodicite: 'periodicite',
    budget: 'budget',
    moisApplicables: 'moisApplicables',
    obs: 'obs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChargeScalarFieldEnum = (typeof ChargeScalarFieldEnum)[keyof typeof ChargeScalarFieldEnum]


  export const ChargeReelScalarFieldEnum: {
    id: 'id',
    chargeId: 'chargeId',
    mois: 'mois',
    annee: 'annee',
    montant: 'montant',
    statut: 'statut',
    datePmt: 'datePmt'
  };

  export type ChargeReelScalarFieldEnum = (typeof ChargeReelScalarFieldEnum)[keyof typeof ChargeReelScalarFieldEnum]


  export const DepenseScalarFieldEnum: {
    id: 'id',
    type: 'type',
    categorie: 'categorie',
    periode: 'periode',
    intitule: 'intitule',
    date: 'date',
    designation: 'designation',
    prestataire: 'prestataire',
    montant: 'montant',
    credit: 'credit',
    debit: 'debit',
    fraisTransf: 'fraisTransf',
    penalite: 'penalite',
    reference: 'reference',
    nature: 'nature',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepenseScalarFieldEnum = (typeof DepenseScalarFieldEnum)[keyof typeof DepenseScalarFieldEnum]


  export const PetiteCaisseScalarFieldEnum: {
    id: 'id',
    num: 'num',
    caisse: 'caisse',
    type: 'type',
    categorie: 'categorie',
    nature: 'nature',
    periode: 'periode',
    date: 'date',
    designation: 'designation',
    prestataire: 'prestataire',
    entree: 'entree',
    sortie: 'sortie',
    penalite: 'penalite',
    solde: 'solde',
    refFacture: 'refFacture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PetiteCaisseScalarFieldEnum = (typeof PetiteCaisseScalarFieldEnum)[keyof typeof PetiteCaisseScalarFieldEnum]


  export const TresorerieScalarFieldEnum: {
    id: 'id',
    mois: 'mois',
    annee: 'annee',
    type: 'type',
    banque: 'banque',
    coffre: 'coffre',
    entrees: 'entrees',
    chgPrev: 'chgPrev',
    chgPay: 'chgPay',
    reste: 'reste',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TresorerieScalarFieldEnum = (typeof TresorerieScalarFieldEnum)[keyof typeof TresorerieScalarFieldEnum]


  export const ParamsScalarFieldEnum: {
    id: 'id',
    banque: 'banque',
    coffre: 'coffre',
    masseSal: 'masseSal',
    chargesPat: 'chargesPat',
    primesMens: 'primesMens',
    arrSal: 'arrSal',
    arrSalR: 'arrSalR',
    arrSalM: 'arrSalM',
    arrPrim: 'arrPrim',
    arrPrimM: 'arrPrimM',
    updatedAt: 'updatedAt'
  };

  export type ParamsScalarFieldEnum = (typeof ParamsScalarFieldEnum)[keyof typeof ParamsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MissionStatut'
   */
  export type EnumMissionStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionStatut'>
    


  /**
   * Reference to a field of type 'MissionStatut[]'
   */
  export type ListEnumMissionStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionStatut[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    nom?: StringFilter<"Client"> | string
    secteur?: StringNullableFilter<"Client"> | string | null
    tel?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    secteur?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    nom?: StringFilter<"Client"> | string
    secteur?: StringNullableFilter<"Client"> | string | null
    tel?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    secteur?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    nom?: StringWithAggregatesFilter<"Client"> | string
    secteur?: StringNullableWithAggregatesFilter<"Client"> | string | null
    tel?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: IntFilter<"Mission"> | number
    nom?: StringFilter<"Mission"> | string
    client?: StringFilter<"Mission"> | string
    apporteur?: StringNullableFilter<"Mission"> | string | null
    statut?: EnumMissionStatutFilter<"Mission"> | $Enums.MissionStatut
    montant?: FloatFilter<"Mission"> | number
    avance?: FloatFilter<"Mission"> | number
    debut?: DateTimeNullableFilter<"Mission"> | Date | string | null
    fin?: DateTimeNullableFilter<"Mission"> | Date | string | null
    tva?: StringFilter<"Mission"> | string
    nature?: StringFilter<"Mission"> | string
    desc?: StringNullableFilter<"Mission"> | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    encaissements?: MissionEncListRelationFilter
    factures?: FactureListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    client?: SortOrder
    apporteur?: SortOrderInput | SortOrder
    statut?: SortOrder
    montant?: SortOrder
    avance?: SortOrder
    debut?: SortOrderInput | SortOrder
    fin?: SortOrderInput | SortOrder
    tva?: SortOrder
    nature?: SortOrder
    desc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    encaissements?: MissionEncOrderByRelationAggregateInput
    factures?: FactureOrderByRelationAggregateInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    nom?: StringFilter<"Mission"> | string
    client?: StringFilter<"Mission"> | string
    apporteur?: StringNullableFilter<"Mission"> | string | null
    statut?: EnumMissionStatutFilter<"Mission"> | $Enums.MissionStatut
    montant?: FloatFilter<"Mission"> | number
    avance?: FloatFilter<"Mission"> | number
    debut?: DateTimeNullableFilter<"Mission"> | Date | string | null
    fin?: DateTimeNullableFilter<"Mission"> | Date | string | null
    tva?: StringFilter<"Mission"> | string
    nature?: StringFilter<"Mission"> | string
    desc?: StringNullableFilter<"Mission"> | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    encaissements?: MissionEncListRelationFilter
    factures?: FactureListRelationFilter
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    client?: SortOrder
    apporteur?: SortOrderInput | SortOrder
    statut?: SortOrder
    montant?: SortOrder
    avance?: SortOrder
    debut?: SortOrderInput | SortOrder
    fin?: SortOrderInput | SortOrder
    tva?: SortOrder
    nature?: SortOrder
    desc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mission"> | number
    nom?: StringWithAggregatesFilter<"Mission"> | string
    client?: StringWithAggregatesFilter<"Mission"> | string
    apporteur?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    statut?: EnumMissionStatutWithAggregatesFilter<"Mission"> | $Enums.MissionStatut
    montant?: FloatWithAggregatesFilter<"Mission"> | number
    avance?: FloatWithAggregatesFilter<"Mission"> | number
    debut?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
    fin?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
    tva?: StringWithAggregatesFilter<"Mission"> | string
    nature?: StringWithAggregatesFilter<"Mission"> | string
    desc?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type MissionEncWhereInput = {
    AND?: MissionEncWhereInput | MissionEncWhereInput[]
    OR?: MissionEncWhereInput[]
    NOT?: MissionEncWhereInput | MissionEncWhereInput[]
    id?: IntFilter<"MissionEnc"> | number
    missionId?: IntFilter<"MissionEnc"> | number
    mois?: StringFilter<"MissionEnc"> | string
    montant?: FloatFilter<"MissionEnc"> | number
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type MissionEncOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    mois?: SortOrder
    montant?: SortOrder
    mission?: MissionOrderByWithRelationInput
  }

  export type MissionEncWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    missionId_mois?: MissionEncMissionIdMoisCompoundUniqueInput
    AND?: MissionEncWhereInput | MissionEncWhereInput[]
    OR?: MissionEncWhereInput[]
    NOT?: MissionEncWhereInput | MissionEncWhereInput[]
    missionId?: IntFilter<"MissionEnc"> | number
    mois?: StringFilter<"MissionEnc"> | string
    montant?: FloatFilter<"MissionEnc"> | number
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "id" | "missionId_mois">

  export type MissionEncOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    mois?: SortOrder
    montant?: SortOrder
    _count?: MissionEncCountOrderByAggregateInput
    _avg?: MissionEncAvgOrderByAggregateInput
    _max?: MissionEncMaxOrderByAggregateInput
    _min?: MissionEncMinOrderByAggregateInput
    _sum?: MissionEncSumOrderByAggregateInput
  }

  export type MissionEncScalarWhereWithAggregatesInput = {
    AND?: MissionEncScalarWhereWithAggregatesInput | MissionEncScalarWhereWithAggregatesInput[]
    OR?: MissionEncScalarWhereWithAggregatesInput[]
    NOT?: MissionEncScalarWhereWithAggregatesInput | MissionEncScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MissionEnc"> | number
    missionId?: IntWithAggregatesFilter<"MissionEnc"> | number
    mois?: StringWithAggregatesFilter<"MissionEnc"> | string
    montant?: FloatWithAggregatesFilter<"MissionEnc"> | number
  }

  export type FactureWhereInput = {
    AND?: FactureWhereInput | FactureWhereInput[]
    OR?: FactureWhereInput[]
    NOT?: FactureWhereInput | FactureWhereInput[]
    id?: IntFilter<"Facture"> | number
    missionId?: IntFilter<"Facture"> | number
    num?: StringFilter<"Facture"> | string
    date?: DateTimeFilter<"Facture"> | Date | string
    ht?: FloatFilter<"Facture"> | number
    tvaType?: StringFilter<"Facture"> | string
    tvaMontant?: FloatFilter<"Facture"> | number
    ttc?: FloatFilter<"Facture"> | number
    createdAt?: DateTimeFilter<"Facture"> | Date | string
    updatedAt?: DateTimeFilter<"Facture"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    tranches?: TrancheListRelationFilter
  }

  export type FactureOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    num?: SortOrder
    date?: SortOrder
    ht?: SortOrder
    tvaType?: SortOrder
    tvaMontant?: SortOrder
    ttc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mission?: MissionOrderByWithRelationInput
    tranches?: TrancheOrderByRelationAggregateInput
  }

  export type FactureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    num?: string
    AND?: FactureWhereInput | FactureWhereInput[]
    OR?: FactureWhereInput[]
    NOT?: FactureWhereInput | FactureWhereInput[]
    missionId?: IntFilter<"Facture"> | number
    date?: DateTimeFilter<"Facture"> | Date | string
    ht?: FloatFilter<"Facture"> | number
    tvaType?: StringFilter<"Facture"> | string
    tvaMontant?: FloatFilter<"Facture"> | number
    ttc?: FloatFilter<"Facture"> | number
    createdAt?: DateTimeFilter<"Facture"> | Date | string
    updatedAt?: DateTimeFilter<"Facture"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    tranches?: TrancheListRelationFilter
  }, "id" | "num">

  export type FactureOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    num?: SortOrder
    date?: SortOrder
    ht?: SortOrder
    tvaType?: SortOrder
    tvaMontant?: SortOrder
    ttc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FactureCountOrderByAggregateInput
    _avg?: FactureAvgOrderByAggregateInput
    _max?: FactureMaxOrderByAggregateInput
    _min?: FactureMinOrderByAggregateInput
    _sum?: FactureSumOrderByAggregateInput
  }

  export type FactureScalarWhereWithAggregatesInput = {
    AND?: FactureScalarWhereWithAggregatesInput | FactureScalarWhereWithAggregatesInput[]
    OR?: FactureScalarWhereWithAggregatesInput[]
    NOT?: FactureScalarWhereWithAggregatesInput | FactureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Facture"> | number
    missionId?: IntWithAggregatesFilter<"Facture"> | number
    num?: StringWithAggregatesFilter<"Facture"> | string
    date?: DateTimeWithAggregatesFilter<"Facture"> | Date | string
    ht?: FloatWithAggregatesFilter<"Facture"> | number
    tvaType?: StringWithAggregatesFilter<"Facture"> | string
    tvaMontant?: FloatWithAggregatesFilter<"Facture"> | number
    ttc?: FloatWithAggregatesFilter<"Facture"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Facture"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Facture"> | Date | string
  }

  export type TrancheWhereInput = {
    AND?: TrancheWhereInput | TrancheWhereInput[]
    OR?: TrancheWhereInput[]
    NOT?: TrancheWhereInput | TrancheWhereInput[]
    id?: IntFilter<"Tranche"> | number
    factureId?: IntFilter<"Tranche"> | number
    num?: IntFilter<"Tranche"> | number
    montant?: FloatFilter<"Tranche"> | number
    echeance?: DateTimeFilter<"Tranche"> | Date | string
    encaisse?: FloatFilter<"Tranche"> | number
    dateEnc?: DateTimeNullableFilter<"Tranche"> | Date | string | null
    ref?: StringNullableFilter<"Tranche"> | string | null
    statut?: StringFilter<"Tranche"> | string
    createdAt?: DateTimeFilter<"Tranche"> | Date | string
    updatedAt?: DateTimeFilter<"Tranche"> | Date | string
    facture?: XOR<FactureScalarRelationFilter, FactureWhereInput>
  }

  export type TrancheOrderByWithRelationInput = {
    id?: SortOrder
    factureId?: SortOrder
    num?: SortOrder
    montant?: SortOrder
    echeance?: SortOrder
    encaisse?: SortOrder
    dateEnc?: SortOrderInput | SortOrder
    ref?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facture?: FactureOrderByWithRelationInput
  }

  export type TrancheWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrancheWhereInput | TrancheWhereInput[]
    OR?: TrancheWhereInput[]
    NOT?: TrancheWhereInput | TrancheWhereInput[]
    factureId?: IntFilter<"Tranche"> | number
    num?: IntFilter<"Tranche"> | number
    montant?: FloatFilter<"Tranche"> | number
    echeance?: DateTimeFilter<"Tranche"> | Date | string
    encaisse?: FloatFilter<"Tranche"> | number
    dateEnc?: DateTimeNullableFilter<"Tranche"> | Date | string | null
    ref?: StringNullableFilter<"Tranche"> | string | null
    statut?: StringFilter<"Tranche"> | string
    createdAt?: DateTimeFilter<"Tranche"> | Date | string
    updatedAt?: DateTimeFilter<"Tranche"> | Date | string
    facture?: XOR<FactureScalarRelationFilter, FactureWhereInput>
  }, "id">

  export type TrancheOrderByWithAggregationInput = {
    id?: SortOrder
    factureId?: SortOrder
    num?: SortOrder
    montant?: SortOrder
    echeance?: SortOrder
    encaisse?: SortOrder
    dateEnc?: SortOrderInput | SortOrder
    ref?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrancheCountOrderByAggregateInput
    _avg?: TrancheAvgOrderByAggregateInput
    _max?: TrancheMaxOrderByAggregateInput
    _min?: TrancheMinOrderByAggregateInput
    _sum?: TrancheSumOrderByAggregateInput
  }

  export type TrancheScalarWhereWithAggregatesInput = {
    AND?: TrancheScalarWhereWithAggregatesInput | TrancheScalarWhereWithAggregatesInput[]
    OR?: TrancheScalarWhereWithAggregatesInput[]
    NOT?: TrancheScalarWhereWithAggregatesInput | TrancheScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tranche"> | number
    factureId?: IntWithAggregatesFilter<"Tranche"> | number
    num?: IntWithAggregatesFilter<"Tranche"> | number
    montant?: FloatWithAggregatesFilter<"Tranche"> | number
    echeance?: DateTimeWithAggregatesFilter<"Tranche"> | Date | string
    encaisse?: FloatWithAggregatesFilter<"Tranche"> | number
    dateEnc?: DateTimeNullableWithAggregatesFilter<"Tranche"> | Date | string | null
    ref?: StringNullableWithAggregatesFilter<"Tranche"> | string | null
    statut?: StringWithAggregatesFilter<"Tranche"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tranche"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tranche"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: IntFilter<"Staff"> | number
    nom?: StringFilter<"Staff"> | string
    poste?: StringNullableFilter<"Staff"> | string | null
    salaire?: FloatFilter<"Staff"> | number
    nature?: StringFilter<"Staff"> | string
    debut?: DateTimeNullableFilter<"Staff"> | Date | string | null
    fin?: StringNullableFilter<"Staff"> | string | null
    marabu?: BoolFilter<"Staff"> | boolean
    actif?: BoolFilter<"Staff"> | boolean
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    paies?: StaffPaieListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrderInput | SortOrder
    salaire?: SortOrder
    nature?: SortOrder
    debut?: SortOrderInput | SortOrder
    fin?: SortOrderInput | SortOrder
    marabu?: SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paies?: StaffPaieOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    nom?: StringFilter<"Staff"> | string
    poste?: StringNullableFilter<"Staff"> | string | null
    salaire?: FloatFilter<"Staff"> | number
    nature?: StringFilter<"Staff"> | string
    debut?: DateTimeNullableFilter<"Staff"> | Date | string | null
    fin?: StringNullableFilter<"Staff"> | string | null
    marabu?: BoolFilter<"Staff"> | boolean
    actif?: BoolFilter<"Staff"> | boolean
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    paies?: StaffPaieListRelationFilter
  }, "id">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrderInput | SortOrder
    salaire?: SortOrder
    nature?: SortOrder
    debut?: SortOrderInput | SortOrder
    fin?: SortOrderInput | SortOrder
    marabu?: SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Staff"> | number
    nom?: StringWithAggregatesFilter<"Staff"> | string
    poste?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    salaire?: FloatWithAggregatesFilter<"Staff"> | number
    nature?: StringWithAggregatesFilter<"Staff"> | string
    debut?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
    fin?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    marabu?: BoolWithAggregatesFilter<"Staff"> | boolean
    actif?: BoolWithAggregatesFilter<"Staff"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type StaffPaieWhereInput = {
    AND?: StaffPaieWhereInput | StaffPaieWhereInput[]
    OR?: StaffPaieWhereInput[]
    NOT?: StaffPaieWhereInput | StaffPaieWhereInput[]
    id?: IntFilter<"StaffPaie"> | number
    staffId?: IntFilter<"StaffPaie"> | number
    mois?: StringFilter<"StaffPaie"> | string
    annee?: IntFilter<"StaffPaie"> | number
    montant?: FloatNullableFilter<"StaffPaie"> | number | null
    statut?: StringNullableFilter<"StaffPaie"> | string | null
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }

  export type StaffPaieOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    staff?: StaffOrderByWithRelationInput
  }

  export type StaffPaieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    staffId_mois_annee?: StaffPaieStaffIdMoisAnneeCompoundUniqueInput
    AND?: StaffPaieWhereInput | StaffPaieWhereInput[]
    OR?: StaffPaieWhereInput[]
    NOT?: StaffPaieWhereInput | StaffPaieWhereInput[]
    staffId?: IntFilter<"StaffPaie"> | number
    mois?: StringFilter<"StaffPaie"> | string
    annee?: IntFilter<"StaffPaie"> | number
    montant?: FloatNullableFilter<"StaffPaie"> | number | null
    statut?: StringNullableFilter<"StaffPaie"> | string | null
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }, "id" | "staffId_mois_annee">

  export type StaffPaieOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    _count?: StaffPaieCountOrderByAggregateInput
    _avg?: StaffPaieAvgOrderByAggregateInput
    _max?: StaffPaieMaxOrderByAggregateInput
    _min?: StaffPaieMinOrderByAggregateInput
    _sum?: StaffPaieSumOrderByAggregateInput
  }

  export type StaffPaieScalarWhereWithAggregatesInput = {
    AND?: StaffPaieScalarWhereWithAggregatesInput | StaffPaieScalarWhereWithAggregatesInput[]
    OR?: StaffPaieScalarWhereWithAggregatesInput[]
    NOT?: StaffPaieScalarWhereWithAggregatesInput | StaffPaieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StaffPaie"> | number
    staffId?: IntWithAggregatesFilter<"StaffPaie"> | number
    mois?: StringWithAggregatesFilter<"StaffPaie"> | string
    annee?: IntWithAggregatesFilter<"StaffPaie"> | number
    montant?: FloatNullableWithAggregatesFilter<"StaffPaie"> | number | null
    statut?: StringNullableWithAggregatesFilter<"StaffPaie"> | string | null
  }

  export type ChargeWhereInput = {
    AND?: ChargeWhereInput | ChargeWhereInput[]
    OR?: ChargeWhereInput[]
    NOT?: ChargeWhereInput | ChargeWhereInput[]
    id?: IntFilter<"Charge"> | number
    libelle?: StringFilter<"Charge"> | string
    categorie?: StringFilter<"Charge"> | string
    nature?: StringFilter<"Charge"> | string
    type?: StringFilter<"Charge"> | string
    periodicite?: StringFilter<"Charge"> | string
    budget?: FloatFilter<"Charge"> | number
    moisApplicables?: StringFilter<"Charge"> | string
    obs?: StringNullableFilter<"Charge"> | string | null
    createdAt?: DateTimeFilter<"Charge"> | Date | string
    updatedAt?: DateTimeFilter<"Charge"> | Date | string
    realisations?: ChargeReelListRelationFilter
  }

  export type ChargeOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    categorie?: SortOrder
    nature?: SortOrder
    type?: SortOrder
    periodicite?: SortOrder
    budget?: SortOrder
    moisApplicables?: SortOrder
    obs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    realisations?: ChargeReelOrderByRelationAggregateInput
  }

  export type ChargeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChargeWhereInput | ChargeWhereInput[]
    OR?: ChargeWhereInput[]
    NOT?: ChargeWhereInput | ChargeWhereInput[]
    libelle?: StringFilter<"Charge"> | string
    categorie?: StringFilter<"Charge"> | string
    nature?: StringFilter<"Charge"> | string
    type?: StringFilter<"Charge"> | string
    periodicite?: StringFilter<"Charge"> | string
    budget?: FloatFilter<"Charge"> | number
    moisApplicables?: StringFilter<"Charge"> | string
    obs?: StringNullableFilter<"Charge"> | string | null
    createdAt?: DateTimeFilter<"Charge"> | Date | string
    updatedAt?: DateTimeFilter<"Charge"> | Date | string
    realisations?: ChargeReelListRelationFilter
  }, "id">

  export type ChargeOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    categorie?: SortOrder
    nature?: SortOrder
    type?: SortOrder
    periodicite?: SortOrder
    budget?: SortOrder
    moisApplicables?: SortOrder
    obs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChargeCountOrderByAggregateInput
    _avg?: ChargeAvgOrderByAggregateInput
    _max?: ChargeMaxOrderByAggregateInput
    _min?: ChargeMinOrderByAggregateInput
    _sum?: ChargeSumOrderByAggregateInput
  }

  export type ChargeScalarWhereWithAggregatesInput = {
    AND?: ChargeScalarWhereWithAggregatesInput | ChargeScalarWhereWithAggregatesInput[]
    OR?: ChargeScalarWhereWithAggregatesInput[]
    NOT?: ChargeScalarWhereWithAggregatesInput | ChargeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Charge"> | number
    libelle?: StringWithAggregatesFilter<"Charge"> | string
    categorie?: StringWithAggregatesFilter<"Charge"> | string
    nature?: StringWithAggregatesFilter<"Charge"> | string
    type?: StringWithAggregatesFilter<"Charge"> | string
    periodicite?: StringWithAggregatesFilter<"Charge"> | string
    budget?: FloatWithAggregatesFilter<"Charge"> | number
    moisApplicables?: StringWithAggregatesFilter<"Charge"> | string
    obs?: StringNullableWithAggregatesFilter<"Charge"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Charge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Charge"> | Date | string
  }

  export type ChargeReelWhereInput = {
    AND?: ChargeReelWhereInput | ChargeReelWhereInput[]
    OR?: ChargeReelWhereInput[]
    NOT?: ChargeReelWhereInput | ChargeReelWhereInput[]
    id?: IntFilter<"ChargeReel"> | number
    chargeId?: IntFilter<"ChargeReel"> | number
    mois?: StringFilter<"ChargeReel"> | string
    annee?: IntFilter<"ChargeReel"> | number
    montant?: FloatFilter<"ChargeReel"> | number
    statut?: StringNullableFilter<"ChargeReel"> | string | null
    datePmt?: DateTimeNullableFilter<"ChargeReel"> | Date | string | null
    charge?: XOR<ChargeScalarRelationFilter, ChargeWhereInput>
  }

  export type ChargeReelOrderByWithRelationInput = {
    id?: SortOrder
    chargeId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
    statut?: SortOrderInput | SortOrder
    datePmt?: SortOrderInput | SortOrder
    charge?: ChargeOrderByWithRelationInput
  }

  export type ChargeReelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chargeId_mois_annee?: ChargeReelChargeIdMoisAnneeCompoundUniqueInput
    AND?: ChargeReelWhereInput | ChargeReelWhereInput[]
    OR?: ChargeReelWhereInput[]
    NOT?: ChargeReelWhereInput | ChargeReelWhereInput[]
    chargeId?: IntFilter<"ChargeReel"> | number
    mois?: StringFilter<"ChargeReel"> | string
    annee?: IntFilter<"ChargeReel"> | number
    montant?: FloatFilter<"ChargeReel"> | number
    statut?: StringNullableFilter<"ChargeReel"> | string | null
    datePmt?: DateTimeNullableFilter<"ChargeReel"> | Date | string | null
    charge?: XOR<ChargeScalarRelationFilter, ChargeWhereInput>
  }, "id" | "chargeId_mois_annee">

  export type ChargeReelOrderByWithAggregationInput = {
    id?: SortOrder
    chargeId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
    statut?: SortOrderInput | SortOrder
    datePmt?: SortOrderInput | SortOrder
    _count?: ChargeReelCountOrderByAggregateInput
    _avg?: ChargeReelAvgOrderByAggregateInput
    _max?: ChargeReelMaxOrderByAggregateInput
    _min?: ChargeReelMinOrderByAggregateInput
    _sum?: ChargeReelSumOrderByAggregateInput
  }

  export type ChargeReelScalarWhereWithAggregatesInput = {
    AND?: ChargeReelScalarWhereWithAggregatesInput | ChargeReelScalarWhereWithAggregatesInput[]
    OR?: ChargeReelScalarWhereWithAggregatesInput[]
    NOT?: ChargeReelScalarWhereWithAggregatesInput | ChargeReelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChargeReel"> | number
    chargeId?: IntWithAggregatesFilter<"ChargeReel"> | number
    mois?: StringWithAggregatesFilter<"ChargeReel"> | string
    annee?: IntWithAggregatesFilter<"ChargeReel"> | number
    montant?: FloatWithAggregatesFilter<"ChargeReel"> | number
    statut?: StringNullableWithAggregatesFilter<"ChargeReel"> | string | null
    datePmt?: DateTimeNullableWithAggregatesFilter<"ChargeReel"> | Date | string | null
  }

  export type DepenseWhereInput = {
    AND?: DepenseWhereInput | DepenseWhereInput[]
    OR?: DepenseWhereInput[]
    NOT?: DepenseWhereInput | DepenseWhereInput[]
    id?: IntFilter<"Depense"> | number
    type?: StringFilter<"Depense"> | string
    categorie?: StringNullableFilter<"Depense"> | string | null
    periode?: StringNullableFilter<"Depense"> | string | null
    intitule?: StringNullableFilter<"Depense"> | string | null
    date?: DateTimeFilter<"Depense"> | Date | string
    designation?: StringFilter<"Depense"> | string
    prestataire?: StringNullableFilter<"Depense"> | string | null
    montant?: FloatFilter<"Depense"> | number
    credit?: FloatFilter<"Depense"> | number
    debit?: FloatFilter<"Depense"> | number
    fraisTransf?: FloatFilter<"Depense"> | number
    penalite?: FloatFilter<"Depense"> | number
    reference?: StringNullableFilter<"Depense"> | string | null
    nature?: StringFilter<"Depense"> | string
    createdAt?: DateTimeFilter<"Depense"> | Date | string
    updatedAt?: DateTimeFilter<"Depense"> | Date | string
  }

  export type DepenseOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    categorie?: SortOrderInput | SortOrder
    periode?: SortOrderInput | SortOrder
    intitule?: SortOrderInput | SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrderInput | SortOrder
    montant?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    fraisTransf?: SortOrder
    penalite?: SortOrder
    reference?: SortOrderInput | SortOrder
    nature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepenseWhereInput | DepenseWhereInput[]
    OR?: DepenseWhereInput[]
    NOT?: DepenseWhereInput | DepenseWhereInput[]
    type?: StringFilter<"Depense"> | string
    categorie?: StringNullableFilter<"Depense"> | string | null
    periode?: StringNullableFilter<"Depense"> | string | null
    intitule?: StringNullableFilter<"Depense"> | string | null
    date?: DateTimeFilter<"Depense"> | Date | string
    designation?: StringFilter<"Depense"> | string
    prestataire?: StringNullableFilter<"Depense"> | string | null
    montant?: FloatFilter<"Depense"> | number
    credit?: FloatFilter<"Depense"> | number
    debit?: FloatFilter<"Depense"> | number
    fraisTransf?: FloatFilter<"Depense"> | number
    penalite?: FloatFilter<"Depense"> | number
    reference?: StringNullableFilter<"Depense"> | string | null
    nature?: StringFilter<"Depense"> | string
    createdAt?: DateTimeFilter<"Depense"> | Date | string
    updatedAt?: DateTimeFilter<"Depense"> | Date | string
  }, "id">

  export type DepenseOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    categorie?: SortOrderInput | SortOrder
    periode?: SortOrderInput | SortOrder
    intitule?: SortOrderInput | SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrderInput | SortOrder
    montant?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    fraisTransf?: SortOrder
    penalite?: SortOrder
    reference?: SortOrderInput | SortOrder
    nature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepenseCountOrderByAggregateInput
    _avg?: DepenseAvgOrderByAggregateInput
    _max?: DepenseMaxOrderByAggregateInput
    _min?: DepenseMinOrderByAggregateInput
    _sum?: DepenseSumOrderByAggregateInput
  }

  export type DepenseScalarWhereWithAggregatesInput = {
    AND?: DepenseScalarWhereWithAggregatesInput | DepenseScalarWhereWithAggregatesInput[]
    OR?: DepenseScalarWhereWithAggregatesInput[]
    NOT?: DepenseScalarWhereWithAggregatesInput | DepenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Depense"> | number
    type?: StringWithAggregatesFilter<"Depense"> | string
    categorie?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    periode?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    intitule?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    date?: DateTimeWithAggregatesFilter<"Depense"> | Date | string
    designation?: StringWithAggregatesFilter<"Depense"> | string
    prestataire?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    montant?: FloatWithAggregatesFilter<"Depense"> | number
    credit?: FloatWithAggregatesFilter<"Depense"> | number
    debit?: FloatWithAggregatesFilter<"Depense"> | number
    fraisTransf?: FloatWithAggregatesFilter<"Depense"> | number
    penalite?: FloatWithAggregatesFilter<"Depense"> | number
    reference?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    nature?: StringWithAggregatesFilter<"Depense"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Depense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Depense"> | Date | string
  }

  export type PetiteCaisseWhereInput = {
    AND?: PetiteCaisseWhereInput | PetiteCaisseWhereInput[]
    OR?: PetiteCaisseWhereInput[]
    NOT?: PetiteCaisseWhereInput | PetiteCaisseWhereInput[]
    id?: IntFilter<"PetiteCaisse"> | number
    num?: StringFilter<"PetiteCaisse"> | string
    caisse?: StringFilter<"PetiteCaisse"> | string
    type?: StringFilter<"PetiteCaisse"> | string
    categorie?: StringNullableFilter<"PetiteCaisse"> | string | null
    nature?: StringFilter<"PetiteCaisse"> | string
    periode?: StringNullableFilter<"PetiteCaisse"> | string | null
    date?: DateTimeFilter<"PetiteCaisse"> | Date | string
    designation?: StringFilter<"PetiteCaisse"> | string
    prestataire?: StringNullableFilter<"PetiteCaisse"> | string | null
    entree?: FloatFilter<"PetiteCaisse"> | number
    sortie?: FloatFilter<"PetiteCaisse"> | number
    penalite?: FloatFilter<"PetiteCaisse"> | number
    solde?: FloatFilter<"PetiteCaisse"> | number
    refFacture?: StringNullableFilter<"PetiteCaisse"> | string | null
    createdAt?: DateTimeFilter<"PetiteCaisse"> | Date | string
    updatedAt?: DateTimeFilter<"PetiteCaisse"> | Date | string
  }

  export type PetiteCaisseOrderByWithRelationInput = {
    id?: SortOrder
    num?: SortOrder
    caisse?: SortOrder
    type?: SortOrder
    categorie?: SortOrderInput | SortOrder
    nature?: SortOrder
    periode?: SortOrderInput | SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrderInput | SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    penalite?: SortOrder
    solde?: SortOrder
    refFacture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetiteCaisseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    num?: string
    AND?: PetiteCaisseWhereInput | PetiteCaisseWhereInput[]
    OR?: PetiteCaisseWhereInput[]
    NOT?: PetiteCaisseWhereInput | PetiteCaisseWhereInput[]
    caisse?: StringFilter<"PetiteCaisse"> | string
    type?: StringFilter<"PetiteCaisse"> | string
    categorie?: StringNullableFilter<"PetiteCaisse"> | string | null
    nature?: StringFilter<"PetiteCaisse"> | string
    periode?: StringNullableFilter<"PetiteCaisse"> | string | null
    date?: DateTimeFilter<"PetiteCaisse"> | Date | string
    designation?: StringFilter<"PetiteCaisse"> | string
    prestataire?: StringNullableFilter<"PetiteCaisse"> | string | null
    entree?: FloatFilter<"PetiteCaisse"> | number
    sortie?: FloatFilter<"PetiteCaisse"> | number
    penalite?: FloatFilter<"PetiteCaisse"> | number
    solde?: FloatFilter<"PetiteCaisse"> | number
    refFacture?: StringNullableFilter<"PetiteCaisse"> | string | null
    createdAt?: DateTimeFilter<"PetiteCaisse"> | Date | string
    updatedAt?: DateTimeFilter<"PetiteCaisse"> | Date | string
  }, "id" | "num">

  export type PetiteCaisseOrderByWithAggregationInput = {
    id?: SortOrder
    num?: SortOrder
    caisse?: SortOrder
    type?: SortOrder
    categorie?: SortOrderInput | SortOrder
    nature?: SortOrder
    periode?: SortOrderInput | SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrderInput | SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    penalite?: SortOrder
    solde?: SortOrder
    refFacture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PetiteCaisseCountOrderByAggregateInput
    _avg?: PetiteCaisseAvgOrderByAggregateInput
    _max?: PetiteCaisseMaxOrderByAggregateInput
    _min?: PetiteCaisseMinOrderByAggregateInput
    _sum?: PetiteCaisseSumOrderByAggregateInput
  }

  export type PetiteCaisseScalarWhereWithAggregatesInput = {
    AND?: PetiteCaisseScalarWhereWithAggregatesInput | PetiteCaisseScalarWhereWithAggregatesInput[]
    OR?: PetiteCaisseScalarWhereWithAggregatesInput[]
    NOT?: PetiteCaisseScalarWhereWithAggregatesInput | PetiteCaisseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PetiteCaisse"> | number
    num?: StringWithAggregatesFilter<"PetiteCaisse"> | string
    caisse?: StringWithAggregatesFilter<"PetiteCaisse"> | string
    type?: StringWithAggregatesFilter<"PetiteCaisse"> | string
    categorie?: StringNullableWithAggregatesFilter<"PetiteCaisse"> | string | null
    nature?: StringWithAggregatesFilter<"PetiteCaisse"> | string
    periode?: StringNullableWithAggregatesFilter<"PetiteCaisse"> | string | null
    date?: DateTimeWithAggregatesFilter<"PetiteCaisse"> | Date | string
    designation?: StringWithAggregatesFilter<"PetiteCaisse"> | string
    prestataire?: StringNullableWithAggregatesFilter<"PetiteCaisse"> | string | null
    entree?: FloatWithAggregatesFilter<"PetiteCaisse"> | number
    sortie?: FloatWithAggregatesFilter<"PetiteCaisse"> | number
    penalite?: FloatWithAggregatesFilter<"PetiteCaisse"> | number
    solde?: FloatWithAggregatesFilter<"PetiteCaisse"> | number
    refFacture?: StringNullableWithAggregatesFilter<"PetiteCaisse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PetiteCaisse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PetiteCaisse"> | Date | string
  }

  export type TresorerieWhereInput = {
    AND?: TresorerieWhereInput | TresorerieWhereInput[]
    OR?: TresorerieWhereInput[]
    NOT?: TresorerieWhereInput | TresorerieWhereInput[]
    id?: IntFilter<"Tresorerie"> | number
    mois?: StringFilter<"Tresorerie"> | string
    annee?: IntFilter<"Tresorerie"> | number
    type?: StringFilter<"Tresorerie"> | string
    banque?: FloatFilter<"Tresorerie"> | number
    coffre?: FloatFilter<"Tresorerie"> | number
    entrees?: FloatFilter<"Tresorerie"> | number
    chgPrev?: FloatFilter<"Tresorerie"> | number
    chgPay?: FloatFilter<"Tresorerie"> | number
    reste?: FloatFilter<"Tresorerie"> | number
    createdAt?: DateTimeFilter<"Tresorerie"> | Date | string
    updatedAt?: DateTimeFilter<"Tresorerie"> | Date | string
  }

  export type TresorerieOrderByWithRelationInput = {
    id?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    type?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    entrees?: SortOrder
    chgPrev?: SortOrder
    chgPay?: SortOrder
    reste?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TresorerieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mois_annee?: TresorerieMoisAnneeCompoundUniqueInput
    AND?: TresorerieWhereInput | TresorerieWhereInput[]
    OR?: TresorerieWhereInput[]
    NOT?: TresorerieWhereInput | TresorerieWhereInput[]
    mois?: StringFilter<"Tresorerie"> | string
    annee?: IntFilter<"Tresorerie"> | number
    type?: StringFilter<"Tresorerie"> | string
    banque?: FloatFilter<"Tresorerie"> | number
    coffre?: FloatFilter<"Tresorerie"> | number
    entrees?: FloatFilter<"Tresorerie"> | number
    chgPrev?: FloatFilter<"Tresorerie"> | number
    chgPay?: FloatFilter<"Tresorerie"> | number
    reste?: FloatFilter<"Tresorerie"> | number
    createdAt?: DateTimeFilter<"Tresorerie"> | Date | string
    updatedAt?: DateTimeFilter<"Tresorerie"> | Date | string
  }, "id" | "mois_annee">

  export type TresorerieOrderByWithAggregationInput = {
    id?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    type?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    entrees?: SortOrder
    chgPrev?: SortOrder
    chgPay?: SortOrder
    reste?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TresorerieCountOrderByAggregateInput
    _avg?: TresorerieAvgOrderByAggregateInput
    _max?: TresorerieMaxOrderByAggregateInput
    _min?: TresorerieMinOrderByAggregateInput
    _sum?: TresorerieSumOrderByAggregateInput
  }

  export type TresorerieScalarWhereWithAggregatesInput = {
    AND?: TresorerieScalarWhereWithAggregatesInput | TresorerieScalarWhereWithAggregatesInput[]
    OR?: TresorerieScalarWhereWithAggregatesInput[]
    NOT?: TresorerieScalarWhereWithAggregatesInput | TresorerieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tresorerie"> | number
    mois?: StringWithAggregatesFilter<"Tresorerie"> | string
    annee?: IntWithAggregatesFilter<"Tresorerie"> | number
    type?: StringWithAggregatesFilter<"Tresorerie"> | string
    banque?: FloatWithAggregatesFilter<"Tresorerie"> | number
    coffre?: FloatWithAggregatesFilter<"Tresorerie"> | number
    entrees?: FloatWithAggregatesFilter<"Tresorerie"> | number
    chgPrev?: FloatWithAggregatesFilter<"Tresorerie"> | number
    chgPay?: FloatWithAggregatesFilter<"Tresorerie"> | number
    reste?: FloatWithAggregatesFilter<"Tresorerie"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tresorerie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tresorerie"> | Date | string
  }

  export type ParamsWhereInput = {
    AND?: ParamsWhereInput | ParamsWhereInput[]
    OR?: ParamsWhereInput[]
    NOT?: ParamsWhereInput | ParamsWhereInput[]
    id?: IntFilter<"Params"> | number
    banque?: FloatFilter<"Params"> | number
    coffre?: FloatFilter<"Params"> | number
    masseSal?: FloatFilter<"Params"> | number
    chargesPat?: FloatFilter<"Params"> | number
    primesMens?: FloatFilter<"Params"> | number
    arrSal?: FloatFilter<"Params"> | number
    arrSalR?: FloatFilter<"Params"> | number
    arrSalM?: FloatFilter<"Params"> | number
    arrPrim?: FloatFilter<"Params"> | number
    arrPrimM?: FloatFilter<"Params"> | number
    updatedAt?: DateTimeFilter<"Params"> | Date | string
  }

  export type ParamsOrderByWithRelationInput = {
    id?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    masseSal?: SortOrder
    chargesPat?: SortOrder
    primesMens?: SortOrder
    arrSal?: SortOrder
    arrSalR?: SortOrder
    arrSalM?: SortOrder
    arrPrim?: SortOrder
    arrPrimM?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParamsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParamsWhereInput | ParamsWhereInput[]
    OR?: ParamsWhereInput[]
    NOT?: ParamsWhereInput | ParamsWhereInput[]
    banque?: FloatFilter<"Params"> | number
    coffre?: FloatFilter<"Params"> | number
    masseSal?: FloatFilter<"Params"> | number
    chargesPat?: FloatFilter<"Params"> | number
    primesMens?: FloatFilter<"Params"> | number
    arrSal?: FloatFilter<"Params"> | number
    arrSalR?: FloatFilter<"Params"> | number
    arrSalM?: FloatFilter<"Params"> | number
    arrPrim?: FloatFilter<"Params"> | number
    arrPrimM?: FloatFilter<"Params"> | number
    updatedAt?: DateTimeFilter<"Params"> | Date | string
  }, "id">

  export type ParamsOrderByWithAggregationInput = {
    id?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    masseSal?: SortOrder
    chargesPat?: SortOrder
    primesMens?: SortOrder
    arrSal?: SortOrder
    arrSalR?: SortOrder
    arrSalM?: SortOrder
    arrPrim?: SortOrder
    arrPrimM?: SortOrder
    updatedAt?: SortOrder
    _count?: ParamsCountOrderByAggregateInput
    _avg?: ParamsAvgOrderByAggregateInput
    _max?: ParamsMaxOrderByAggregateInput
    _min?: ParamsMinOrderByAggregateInput
    _sum?: ParamsSumOrderByAggregateInput
  }

  export type ParamsScalarWhereWithAggregatesInput = {
    AND?: ParamsScalarWhereWithAggregatesInput | ParamsScalarWhereWithAggregatesInput[]
    OR?: ParamsScalarWhereWithAggregatesInput[]
    NOT?: ParamsScalarWhereWithAggregatesInput | ParamsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Params"> | number
    banque?: FloatWithAggregatesFilter<"Params"> | number
    coffre?: FloatWithAggregatesFilter<"Params"> | number
    masseSal?: FloatWithAggregatesFilter<"Params"> | number
    chargesPat?: FloatWithAggregatesFilter<"Params"> | number
    primesMens?: FloatWithAggregatesFilter<"Params"> | number
    arrSal?: FloatWithAggregatesFilter<"Params"> | number
    arrSalR?: FloatWithAggregatesFilter<"Params"> | number
    arrSalM?: FloatWithAggregatesFilter<"Params"> | number
    arrPrim?: FloatWithAggregatesFilter<"Params"> | number
    arrPrimM?: FloatWithAggregatesFilter<"Params"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Params"> | Date | string
  }

  export type ClientCreateInput = {
    nom: string
    secteur?: string | null
    tel?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    nom: string
    secteur?: string | null
    tel?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    secteur?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    secteur?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateManyInput = {
    id?: number
    nom: string
    secteur?: string | null
    tel?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    secteur?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    secteur?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateInput = {
    nom: string
    client: string
    apporteur?: string | null
    statut?: $Enums.MissionStatut
    montant?: number
    avance?: number
    debut?: Date | string | null
    fin?: Date | string | null
    tva?: string
    nature?: string
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    encaissements?: MissionEncCreateNestedManyWithoutMissionInput
    factures?: FactureCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: number
    nom: string
    client: string
    apporteur?: string | null
    statut?: $Enums.MissionStatut
    montant?: number
    avance?: number
    debut?: Date | string | null
    fin?: Date | string | null
    tva?: string
    nature?: string
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    encaissements?: MissionEncUncheckedCreateNestedManyWithoutMissionInput
    factures?: FactureUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    apporteur?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumMissionStatutFieldUpdateOperationsInput | $Enums.MissionStatut
    montant?: FloatFieldUpdateOperationsInput | number
    avance?: FloatFieldUpdateOperationsInput | number
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tva?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encaissements?: MissionEncUpdateManyWithoutMissionNestedInput
    factures?: FactureUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    apporteur?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumMissionStatutFieldUpdateOperationsInput | $Enums.MissionStatut
    montant?: FloatFieldUpdateOperationsInput | number
    avance?: FloatFieldUpdateOperationsInput | number
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tva?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encaissements?: MissionEncUncheckedUpdateManyWithoutMissionNestedInput
    factures?: FactureUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: number
    nom: string
    client: string
    apporteur?: string | null
    statut?: $Enums.MissionStatut
    montant?: number
    avance?: number
    debut?: Date | string | null
    fin?: Date | string | null
    tva?: string
    nature?: string
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    apporteur?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumMissionStatutFieldUpdateOperationsInput | $Enums.MissionStatut
    montant?: FloatFieldUpdateOperationsInput | number
    avance?: FloatFieldUpdateOperationsInput | number
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tva?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    apporteur?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumMissionStatutFieldUpdateOperationsInput | $Enums.MissionStatut
    montant?: FloatFieldUpdateOperationsInput | number
    avance?: FloatFieldUpdateOperationsInput | number
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tva?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionEncCreateInput = {
    mois: string
    montant?: number
    mission: MissionCreateNestedOneWithoutEncaissementsInput
  }

  export type MissionEncUncheckedCreateInput = {
    id?: number
    missionId: number
    mois: string
    montant?: number
  }

  export type MissionEncUpdateInput = {
    mois?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    mission?: MissionUpdateOneRequiredWithoutEncaissementsNestedInput
  }

  export type MissionEncUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type MissionEncCreateManyInput = {
    id?: number
    missionId: number
    mois: string
    montant?: number
  }

  export type MissionEncUpdateManyMutationInput = {
    mois?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type MissionEncUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type FactureCreateInput = {
    num: string
    date: Date | string
    ht: number
    tvaType?: string
    tvaMontant?: number
    ttc: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mission: MissionCreateNestedOneWithoutFacturesInput
    tranches?: TrancheCreateNestedManyWithoutFactureInput
  }

  export type FactureUncheckedCreateInput = {
    id?: number
    missionId: number
    num: string
    date: Date | string
    ht: number
    tvaType?: string
    tvaMontant?: number
    ttc: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tranches?: TrancheUncheckedCreateNestedManyWithoutFactureInput
  }

  export type FactureUpdateInput = {
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutFacturesNestedInput
    tranches?: TrancheUpdateManyWithoutFactureNestedInput
  }

  export type FactureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tranches?: TrancheUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type FactureCreateManyInput = {
    id?: number
    missionId: number
    num: string
    date: Date | string
    ht: number
    tvaType?: string
    tvaMontant?: number
    ttc: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FactureUpdateManyMutationInput = {
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrancheCreateInput = {
    num: number
    montant: number
    echeance: Date | string
    encaisse?: number
    dateEnc?: Date | string | null
    ref?: string | null
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facture: FactureCreateNestedOneWithoutTranchesInput
  }

  export type TrancheUncheckedCreateInput = {
    id?: number
    factureId: number
    num: number
    montant: number
    echeance: Date | string
    encaisse?: number
    dateEnc?: Date | string | null
    ref?: string | null
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrancheUpdateInput = {
    num?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    encaisse?: FloatFieldUpdateOperationsInput | number
    dateEnc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facture?: FactureUpdateOneRequiredWithoutTranchesNestedInput
  }

  export type TrancheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    factureId?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    encaisse?: FloatFieldUpdateOperationsInput | number
    dateEnc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrancheCreateManyInput = {
    id?: number
    factureId: number
    num: number
    montant: number
    echeance: Date | string
    encaisse?: number
    dateEnc?: Date | string | null
    ref?: string | null
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrancheUpdateManyMutationInput = {
    num?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    encaisse?: FloatFieldUpdateOperationsInput | number
    dateEnc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrancheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    factureId?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    encaisse?: FloatFieldUpdateOperationsInput | number
    dateEnc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    nom: string
    poste?: string | null
    salaire?: number
    nature?: string
    debut?: Date | string | null
    fin?: string | null
    marabu?: boolean
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paies?: StaffPaieCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: number
    nom: string
    poste?: string | null
    salaire?: number
    nature?: string
    debut?: Date | string | null
    fin?: string | null
    marabu?: boolean
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paies?: StaffPaieUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    poste?: NullableStringFieldUpdateOperationsInput | string | null
    salaire?: FloatFieldUpdateOperationsInput | number
    nature?: StringFieldUpdateOperationsInput | string
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableStringFieldUpdateOperationsInput | string | null
    marabu?: BoolFieldUpdateOperationsInput | boolean
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paies?: StaffPaieUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    poste?: NullableStringFieldUpdateOperationsInput | string | null
    salaire?: FloatFieldUpdateOperationsInput | number
    nature?: StringFieldUpdateOperationsInput | string
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableStringFieldUpdateOperationsInput | string | null
    marabu?: BoolFieldUpdateOperationsInput | boolean
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paies?: StaffPaieUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: number
    nom: string
    poste?: string | null
    salaire?: number
    nature?: string
    debut?: Date | string | null
    fin?: string | null
    marabu?: boolean
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    poste?: NullableStringFieldUpdateOperationsInput | string | null
    salaire?: FloatFieldUpdateOperationsInput | number
    nature?: StringFieldUpdateOperationsInput | string
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableStringFieldUpdateOperationsInput | string | null
    marabu?: BoolFieldUpdateOperationsInput | boolean
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    poste?: NullableStringFieldUpdateOperationsInput | string | null
    salaire?: FloatFieldUpdateOperationsInput | number
    nature?: StringFieldUpdateOperationsInput | string
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableStringFieldUpdateOperationsInput | string | null
    marabu?: BoolFieldUpdateOperationsInput | boolean
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPaieCreateInput = {
    mois: string
    annee?: number
    montant?: number | null
    statut?: string | null
    staff: StaffCreateNestedOneWithoutPaiesInput
  }

  export type StaffPaieUncheckedCreateInput = {
    id?: number
    staffId: number
    mois: string
    annee?: number
    montant?: number | null
    statut?: string | null
  }

  export type StaffPaieUpdateInput = {
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateOneRequiredWithoutPaiesNestedInput
  }

  export type StaffPaieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPaieCreateManyInput = {
    id?: number
    staffId: number
    mois: string
    annee?: number
    montant?: number | null
    statut?: string | null
  }

  export type StaffPaieUpdateManyMutationInput = {
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPaieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChargeCreateInput = {
    libelle: string
    categorie: string
    nature?: string
    type?: string
    periodicite?: string
    budget?: number
    moisApplicables?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    realisations?: ChargeReelCreateNestedManyWithoutChargeInput
  }

  export type ChargeUncheckedCreateInput = {
    id?: number
    libelle: string
    categorie: string
    nature?: string
    type?: string
    periodicite?: string
    budget?: number
    moisApplicables?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    realisations?: ChargeReelUncheckedCreateNestedManyWithoutChargeInput
  }

  export type ChargeUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    periodicite?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    moisApplicables?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    realisations?: ChargeReelUpdateManyWithoutChargeNestedInput
  }

  export type ChargeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    periodicite?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    moisApplicables?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    realisations?: ChargeReelUncheckedUpdateManyWithoutChargeNestedInput
  }

  export type ChargeCreateManyInput = {
    id?: number
    libelle: string
    categorie: string
    nature?: string
    type?: string
    periodicite?: string
    budget?: number
    moisApplicables?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChargeUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    periodicite?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    moisApplicables?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    periodicite?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    moisApplicables?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargeReelCreateInput = {
    mois: string
    annee?: number
    montant?: number
    statut?: string | null
    datePmt?: Date | string | null
    charge: ChargeCreateNestedOneWithoutRealisationsInput
  }

  export type ChargeReelUncheckedCreateInput = {
    id?: number
    chargeId: number
    mois: string
    annee?: number
    montant?: number
    statut?: string | null
    datePmt?: Date | string | null
  }

  export type ChargeReelUpdateInput = {
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    datePmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    charge?: ChargeUpdateOneRequiredWithoutRealisationsNestedInput
  }

  export type ChargeReelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chargeId?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    datePmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChargeReelCreateManyInput = {
    id?: number
    chargeId: number
    mois: string
    annee?: number
    montant?: number
    statut?: string | null
    datePmt?: Date | string | null
  }

  export type ChargeReelUpdateManyMutationInput = {
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    datePmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChargeReelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chargeId?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    datePmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepenseCreateInput = {
    type: string
    categorie?: string | null
    periode?: string | null
    intitule?: string | null
    date: Date | string
    designation: string
    prestataire?: string | null
    montant?: number
    credit?: number
    debit?: number
    fraisTransf?: number
    penalite?: number
    reference?: string | null
    nature?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepenseUncheckedCreateInput = {
    id?: number
    type: string
    categorie?: string | null
    periode?: string | null
    intitule?: string | null
    date: Date | string
    designation: string
    prestataire?: string | null
    montant?: number
    credit?: number
    debit?: number
    fraisTransf?: number
    penalite?: number
    reference?: string | null
    nature?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepenseUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    periode?: NullableStringFieldUpdateOperationsInput | string | null
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: StringFieldUpdateOperationsInput | string
    prestataire?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    fraisTransf?: FloatFieldUpdateOperationsInput | number
    penalite?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    periode?: NullableStringFieldUpdateOperationsInput | string | null
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: StringFieldUpdateOperationsInput | string
    prestataire?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    fraisTransf?: FloatFieldUpdateOperationsInput | number
    penalite?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepenseCreateManyInput = {
    id?: number
    type: string
    categorie?: string | null
    periode?: string | null
    intitule?: string | null
    date: Date | string
    designation: string
    prestataire?: string | null
    montant?: number
    credit?: number
    debit?: number
    fraisTransf?: number
    penalite?: number
    reference?: string | null
    nature?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepenseUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    periode?: NullableStringFieldUpdateOperationsInput | string | null
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: StringFieldUpdateOperationsInput | string
    prestataire?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    fraisTransf?: FloatFieldUpdateOperationsInput | number
    penalite?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    periode?: NullableStringFieldUpdateOperationsInput | string | null
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: StringFieldUpdateOperationsInput | string
    prestataire?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    fraisTransf?: FloatFieldUpdateOperationsInput | number
    penalite?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetiteCaisseCreateInput = {
    num: string
    caisse: string
    type: string
    categorie?: string | null
    nature?: string
    periode?: string | null
    date: Date | string
    designation: string
    prestataire?: string | null
    entree?: number
    sortie?: number
    penalite?: number
    solde?: number
    refFacture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetiteCaisseUncheckedCreateInput = {
    id?: number
    num: string
    caisse: string
    type: string
    categorie?: string | null
    nature?: string
    periode?: string | null
    date: Date | string
    designation: string
    prestataire?: string | null
    entree?: number
    sortie?: number
    penalite?: number
    solde?: number
    refFacture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetiteCaisseUpdateInput = {
    num?: StringFieldUpdateOperationsInput | string
    caisse?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: StringFieldUpdateOperationsInput | string
    periode?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: StringFieldUpdateOperationsInput | string
    prestataire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: FloatFieldUpdateOperationsInput | number
    sortie?: FloatFieldUpdateOperationsInput | number
    penalite?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    refFacture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetiteCaisseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    num?: StringFieldUpdateOperationsInput | string
    caisse?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: StringFieldUpdateOperationsInput | string
    periode?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: StringFieldUpdateOperationsInput | string
    prestataire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: FloatFieldUpdateOperationsInput | number
    sortie?: FloatFieldUpdateOperationsInput | number
    penalite?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    refFacture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetiteCaisseCreateManyInput = {
    id?: number
    num: string
    caisse: string
    type: string
    categorie?: string | null
    nature?: string
    periode?: string | null
    date: Date | string
    designation: string
    prestataire?: string | null
    entree?: number
    sortie?: number
    penalite?: number
    solde?: number
    refFacture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetiteCaisseUpdateManyMutationInput = {
    num?: StringFieldUpdateOperationsInput | string
    caisse?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: StringFieldUpdateOperationsInput | string
    periode?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: StringFieldUpdateOperationsInput | string
    prestataire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: FloatFieldUpdateOperationsInput | number
    sortie?: FloatFieldUpdateOperationsInput | number
    penalite?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    refFacture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetiteCaisseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    num?: StringFieldUpdateOperationsInput | string
    caisse?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: StringFieldUpdateOperationsInput | string
    periode?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: StringFieldUpdateOperationsInput | string
    prestataire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: FloatFieldUpdateOperationsInput | number
    sortie?: FloatFieldUpdateOperationsInput | number
    penalite?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    refFacture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TresorerieCreateInput = {
    mois: string
    annee?: number
    type?: string
    banque?: number
    coffre?: number
    entrees?: number
    chgPrev?: number
    chgPay?: number
    reste?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TresorerieUncheckedCreateInput = {
    id?: number
    mois: string
    annee?: number
    type?: string
    banque?: number
    coffre?: number
    entrees?: number
    chgPrev?: number
    chgPay?: number
    reste?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TresorerieUpdateInput = {
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    banque?: FloatFieldUpdateOperationsInput | number
    coffre?: FloatFieldUpdateOperationsInput | number
    entrees?: FloatFieldUpdateOperationsInput | number
    chgPrev?: FloatFieldUpdateOperationsInput | number
    chgPay?: FloatFieldUpdateOperationsInput | number
    reste?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TresorerieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    banque?: FloatFieldUpdateOperationsInput | number
    coffre?: FloatFieldUpdateOperationsInput | number
    entrees?: FloatFieldUpdateOperationsInput | number
    chgPrev?: FloatFieldUpdateOperationsInput | number
    chgPay?: FloatFieldUpdateOperationsInput | number
    reste?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TresorerieCreateManyInput = {
    id?: number
    mois: string
    annee?: number
    type?: string
    banque?: number
    coffre?: number
    entrees?: number
    chgPrev?: number
    chgPay?: number
    reste?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TresorerieUpdateManyMutationInput = {
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    banque?: FloatFieldUpdateOperationsInput | number
    coffre?: FloatFieldUpdateOperationsInput | number
    entrees?: FloatFieldUpdateOperationsInput | number
    chgPrev?: FloatFieldUpdateOperationsInput | number
    chgPay?: FloatFieldUpdateOperationsInput | number
    reste?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TresorerieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    banque?: FloatFieldUpdateOperationsInput | number
    coffre?: FloatFieldUpdateOperationsInput | number
    entrees?: FloatFieldUpdateOperationsInput | number
    chgPrev?: FloatFieldUpdateOperationsInput | number
    chgPay?: FloatFieldUpdateOperationsInput | number
    reste?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParamsCreateInput = {
    id?: number
    banque?: number
    coffre?: number
    masseSal?: number
    chargesPat?: number
    primesMens?: number
    arrSal?: number
    arrSalR?: number
    arrSalM?: number
    arrPrim?: number
    arrPrimM?: number
    updatedAt?: Date | string
  }

  export type ParamsUncheckedCreateInput = {
    id?: number
    banque?: number
    coffre?: number
    masseSal?: number
    chargesPat?: number
    primesMens?: number
    arrSal?: number
    arrSalR?: number
    arrSalM?: number
    arrPrim?: number
    arrPrimM?: number
    updatedAt?: Date | string
  }

  export type ParamsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    banque?: FloatFieldUpdateOperationsInput | number
    coffre?: FloatFieldUpdateOperationsInput | number
    masseSal?: FloatFieldUpdateOperationsInput | number
    chargesPat?: FloatFieldUpdateOperationsInput | number
    primesMens?: FloatFieldUpdateOperationsInput | number
    arrSal?: FloatFieldUpdateOperationsInput | number
    arrSalR?: FloatFieldUpdateOperationsInput | number
    arrSalM?: FloatFieldUpdateOperationsInput | number
    arrPrim?: FloatFieldUpdateOperationsInput | number
    arrPrimM?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParamsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    banque?: FloatFieldUpdateOperationsInput | number
    coffre?: FloatFieldUpdateOperationsInput | number
    masseSal?: FloatFieldUpdateOperationsInput | number
    chargesPat?: FloatFieldUpdateOperationsInput | number
    primesMens?: FloatFieldUpdateOperationsInput | number
    arrSal?: FloatFieldUpdateOperationsInput | number
    arrSalR?: FloatFieldUpdateOperationsInput | number
    arrSalM?: FloatFieldUpdateOperationsInput | number
    arrPrim?: FloatFieldUpdateOperationsInput | number
    arrPrimM?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParamsCreateManyInput = {
    id?: number
    banque?: number
    coffre?: number
    masseSal?: number
    chargesPat?: number
    primesMens?: number
    arrSal?: number
    arrSalR?: number
    arrSalM?: number
    arrPrim?: number
    arrPrimM?: number
    updatedAt?: Date | string
  }

  export type ParamsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    banque?: FloatFieldUpdateOperationsInput | number
    coffre?: FloatFieldUpdateOperationsInput | number
    masseSal?: FloatFieldUpdateOperationsInput | number
    chargesPat?: FloatFieldUpdateOperationsInput | number
    primesMens?: FloatFieldUpdateOperationsInput | number
    arrSal?: FloatFieldUpdateOperationsInput | number
    arrSalR?: FloatFieldUpdateOperationsInput | number
    arrSalM?: FloatFieldUpdateOperationsInput | number
    arrPrim?: FloatFieldUpdateOperationsInput | number
    arrPrimM?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParamsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    banque?: FloatFieldUpdateOperationsInput | number
    coffre?: FloatFieldUpdateOperationsInput | number
    masseSal?: FloatFieldUpdateOperationsInput | number
    chargesPat?: FloatFieldUpdateOperationsInput | number
    primesMens?: FloatFieldUpdateOperationsInput | number
    arrSal?: FloatFieldUpdateOperationsInput | number
    arrSalR?: FloatFieldUpdateOperationsInput | number
    arrSalM?: FloatFieldUpdateOperationsInput | number
    arrPrim?: FloatFieldUpdateOperationsInput | number
    arrPrimM?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    secteur?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    secteur?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    secteur?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMissionStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatut | EnumMissionStatutFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatut[] | ListEnumMissionStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatut[] | ListEnumMissionStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatutFilter<$PrismaModel> | $Enums.MissionStatut
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MissionEncListRelationFilter = {
    every?: MissionEncWhereInput
    some?: MissionEncWhereInput
    none?: MissionEncWhereInput
  }

  export type FactureListRelationFilter = {
    every?: FactureWhereInput
    some?: FactureWhereInput
    none?: FactureWhereInput
  }

  export type MissionEncOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    client?: SortOrder
    apporteur?: SortOrder
    statut?: SortOrder
    montant?: SortOrder
    avance?: SortOrder
    debut?: SortOrder
    fin?: SortOrder
    tva?: SortOrder
    nature?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    avance?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    client?: SortOrder
    apporteur?: SortOrder
    statut?: SortOrder
    montant?: SortOrder
    avance?: SortOrder
    debut?: SortOrder
    fin?: SortOrder
    tva?: SortOrder
    nature?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    client?: SortOrder
    apporteur?: SortOrder
    statut?: SortOrder
    montant?: SortOrder
    avance?: SortOrder
    debut?: SortOrder
    fin?: SortOrder
    tva?: SortOrder
    nature?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    avance?: SortOrder
  }

  export type EnumMissionStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatut | EnumMissionStatutFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatut[] | ListEnumMissionStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatut[] | ListEnumMissionStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatutWithAggregatesFilter<$PrismaModel> | $Enums.MissionStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionStatutFilter<$PrismaModel>
    _max?: NestedEnumMissionStatutFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type MissionEncMissionIdMoisCompoundUniqueInput = {
    missionId: number
    mois: string
  }

  export type MissionEncCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    mois?: SortOrder
    montant?: SortOrder
  }

  export type MissionEncAvgOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    montant?: SortOrder
  }

  export type MissionEncMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    mois?: SortOrder
    montant?: SortOrder
  }

  export type MissionEncMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    mois?: SortOrder
    montant?: SortOrder
  }

  export type MissionEncSumOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    montant?: SortOrder
  }

  export type TrancheListRelationFilter = {
    every?: TrancheWhereInput
    some?: TrancheWhereInput
    none?: TrancheWhereInput
  }

  export type TrancheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactureCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    num?: SortOrder
    date?: SortOrder
    ht?: SortOrder
    tvaType?: SortOrder
    tvaMontant?: SortOrder
    ttc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FactureAvgOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    ht?: SortOrder
    tvaMontant?: SortOrder
    ttc?: SortOrder
  }

  export type FactureMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    num?: SortOrder
    date?: SortOrder
    ht?: SortOrder
    tvaType?: SortOrder
    tvaMontant?: SortOrder
    ttc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FactureMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    num?: SortOrder
    date?: SortOrder
    ht?: SortOrder
    tvaType?: SortOrder
    tvaMontant?: SortOrder
    ttc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FactureSumOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    ht?: SortOrder
    tvaMontant?: SortOrder
    ttc?: SortOrder
  }

  export type FactureScalarRelationFilter = {
    is?: FactureWhereInput
    isNot?: FactureWhereInput
  }

  export type TrancheCountOrderByAggregateInput = {
    id?: SortOrder
    factureId?: SortOrder
    num?: SortOrder
    montant?: SortOrder
    echeance?: SortOrder
    encaisse?: SortOrder
    dateEnc?: SortOrder
    ref?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrancheAvgOrderByAggregateInput = {
    id?: SortOrder
    factureId?: SortOrder
    num?: SortOrder
    montant?: SortOrder
    encaisse?: SortOrder
  }

  export type TrancheMaxOrderByAggregateInput = {
    id?: SortOrder
    factureId?: SortOrder
    num?: SortOrder
    montant?: SortOrder
    echeance?: SortOrder
    encaisse?: SortOrder
    dateEnc?: SortOrder
    ref?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrancheMinOrderByAggregateInput = {
    id?: SortOrder
    factureId?: SortOrder
    num?: SortOrder
    montant?: SortOrder
    echeance?: SortOrder
    encaisse?: SortOrder
    dateEnc?: SortOrder
    ref?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrancheSumOrderByAggregateInput = {
    id?: SortOrder
    factureId?: SortOrder
    num?: SortOrder
    montant?: SortOrder
    encaisse?: SortOrder
  }

  export type StaffPaieListRelationFilter = {
    every?: StaffPaieWhereInput
    some?: StaffPaieWhereInput
    none?: StaffPaieWhereInput
  }

  export type StaffPaieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    salaire?: SortOrder
    nature?: SortOrder
    debut?: SortOrder
    fin?: SortOrder
    marabu?: SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    id?: SortOrder
    salaire?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    salaire?: SortOrder
    nature?: SortOrder
    debut?: SortOrder
    fin?: SortOrder
    marabu?: SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    salaire?: SortOrder
    nature?: SortOrder
    debut?: SortOrder
    fin?: SortOrder
    marabu?: SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    id?: SortOrder
    salaire?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type StaffPaieStaffIdMoisAnneeCompoundUniqueInput = {
    staffId: number
    mois: string
    annee: number
  }

  export type StaffPaieCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
  }

  export type StaffPaieAvgOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
  }

  export type StaffPaieMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
  }

  export type StaffPaieMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
  }

  export type StaffPaieSumOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ChargeReelListRelationFilter = {
    every?: ChargeReelWhereInput
    some?: ChargeReelWhereInput
    none?: ChargeReelWhereInput
  }

  export type ChargeReelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChargeCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    categorie?: SortOrder
    nature?: SortOrder
    type?: SortOrder
    periodicite?: SortOrder
    budget?: SortOrder
    moisApplicables?: SortOrder
    obs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChargeAvgOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
  }

  export type ChargeMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    categorie?: SortOrder
    nature?: SortOrder
    type?: SortOrder
    periodicite?: SortOrder
    budget?: SortOrder
    moisApplicables?: SortOrder
    obs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChargeMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    categorie?: SortOrder
    nature?: SortOrder
    type?: SortOrder
    periodicite?: SortOrder
    budget?: SortOrder
    moisApplicables?: SortOrder
    obs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChargeSumOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
  }

  export type ChargeScalarRelationFilter = {
    is?: ChargeWhereInput
    isNot?: ChargeWhereInput
  }

  export type ChargeReelChargeIdMoisAnneeCompoundUniqueInput = {
    chargeId: number
    mois: string
    annee: number
  }

  export type ChargeReelCountOrderByAggregateInput = {
    id?: SortOrder
    chargeId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    datePmt?: SortOrder
  }

  export type ChargeReelAvgOrderByAggregateInput = {
    id?: SortOrder
    chargeId?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
  }

  export type ChargeReelMaxOrderByAggregateInput = {
    id?: SortOrder
    chargeId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    datePmt?: SortOrder
  }

  export type ChargeReelMinOrderByAggregateInput = {
    id?: SortOrder
    chargeId?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    datePmt?: SortOrder
  }

  export type ChargeReelSumOrderByAggregateInput = {
    id?: SortOrder
    chargeId?: SortOrder
    annee?: SortOrder
    montant?: SortOrder
  }

  export type DepenseCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    categorie?: SortOrder
    periode?: SortOrder
    intitule?: SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrder
    montant?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    fraisTransf?: SortOrder
    penalite?: SortOrder
    reference?: SortOrder
    nature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepenseAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    fraisTransf?: SortOrder
    penalite?: SortOrder
  }

  export type DepenseMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    categorie?: SortOrder
    periode?: SortOrder
    intitule?: SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrder
    montant?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    fraisTransf?: SortOrder
    penalite?: SortOrder
    reference?: SortOrder
    nature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepenseMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    categorie?: SortOrder
    periode?: SortOrder
    intitule?: SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrder
    montant?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    fraisTransf?: SortOrder
    penalite?: SortOrder
    reference?: SortOrder
    nature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepenseSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    fraisTransf?: SortOrder
    penalite?: SortOrder
  }

  export type PetiteCaisseCountOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    caisse?: SortOrder
    type?: SortOrder
    categorie?: SortOrder
    nature?: SortOrder
    periode?: SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    penalite?: SortOrder
    solde?: SortOrder
    refFacture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetiteCaisseAvgOrderByAggregateInput = {
    id?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    penalite?: SortOrder
    solde?: SortOrder
  }

  export type PetiteCaisseMaxOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    caisse?: SortOrder
    type?: SortOrder
    categorie?: SortOrder
    nature?: SortOrder
    periode?: SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    penalite?: SortOrder
    solde?: SortOrder
    refFacture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetiteCaisseMinOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    caisse?: SortOrder
    type?: SortOrder
    categorie?: SortOrder
    nature?: SortOrder
    periode?: SortOrder
    date?: SortOrder
    designation?: SortOrder
    prestataire?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    penalite?: SortOrder
    solde?: SortOrder
    refFacture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetiteCaisseSumOrderByAggregateInput = {
    id?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    penalite?: SortOrder
    solde?: SortOrder
  }

  export type TresorerieMoisAnneeCompoundUniqueInput = {
    mois: string
    annee: number
  }

  export type TresorerieCountOrderByAggregateInput = {
    id?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    type?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    entrees?: SortOrder
    chgPrev?: SortOrder
    chgPay?: SortOrder
    reste?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TresorerieAvgOrderByAggregateInput = {
    id?: SortOrder
    annee?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    entrees?: SortOrder
    chgPrev?: SortOrder
    chgPay?: SortOrder
    reste?: SortOrder
  }

  export type TresorerieMaxOrderByAggregateInput = {
    id?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    type?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    entrees?: SortOrder
    chgPrev?: SortOrder
    chgPay?: SortOrder
    reste?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TresorerieMinOrderByAggregateInput = {
    id?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    type?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    entrees?: SortOrder
    chgPrev?: SortOrder
    chgPay?: SortOrder
    reste?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TresorerieSumOrderByAggregateInput = {
    id?: SortOrder
    annee?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    entrees?: SortOrder
    chgPrev?: SortOrder
    chgPay?: SortOrder
    reste?: SortOrder
  }

  export type ParamsCountOrderByAggregateInput = {
    id?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    masseSal?: SortOrder
    chargesPat?: SortOrder
    primesMens?: SortOrder
    arrSal?: SortOrder
    arrSalR?: SortOrder
    arrSalM?: SortOrder
    arrPrim?: SortOrder
    arrPrimM?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParamsAvgOrderByAggregateInput = {
    id?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    masseSal?: SortOrder
    chargesPat?: SortOrder
    primesMens?: SortOrder
    arrSal?: SortOrder
    arrSalR?: SortOrder
    arrSalM?: SortOrder
    arrPrim?: SortOrder
    arrPrimM?: SortOrder
  }

  export type ParamsMaxOrderByAggregateInput = {
    id?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    masseSal?: SortOrder
    chargesPat?: SortOrder
    primesMens?: SortOrder
    arrSal?: SortOrder
    arrSalR?: SortOrder
    arrSalM?: SortOrder
    arrPrim?: SortOrder
    arrPrimM?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParamsMinOrderByAggregateInput = {
    id?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    masseSal?: SortOrder
    chargesPat?: SortOrder
    primesMens?: SortOrder
    arrSal?: SortOrder
    arrSalR?: SortOrder
    arrSalM?: SortOrder
    arrPrim?: SortOrder
    arrPrimM?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParamsSumOrderByAggregateInput = {
    id?: SortOrder
    banque?: SortOrder
    coffre?: SortOrder
    masseSal?: SortOrder
    chargesPat?: SortOrder
    primesMens?: SortOrder
    arrSal?: SortOrder
    arrSalR?: SortOrder
    arrSalM?: SortOrder
    arrPrim?: SortOrder
    arrPrimM?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MissionEncCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionEncCreateWithoutMissionInput, MissionEncUncheckedCreateWithoutMissionInput> | MissionEncCreateWithoutMissionInput[] | MissionEncUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionEncCreateOrConnectWithoutMissionInput | MissionEncCreateOrConnectWithoutMissionInput[]
    createMany?: MissionEncCreateManyMissionInputEnvelope
    connect?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
  }

  export type FactureCreateNestedManyWithoutMissionInput = {
    create?: XOR<FactureCreateWithoutMissionInput, FactureUncheckedCreateWithoutMissionInput> | FactureCreateWithoutMissionInput[] | FactureUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutMissionInput | FactureCreateOrConnectWithoutMissionInput[]
    createMany?: FactureCreateManyMissionInputEnvelope
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
  }

  export type MissionEncUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionEncCreateWithoutMissionInput, MissionEncUncheckedCreateWithoutMissionInput> | MissionEncCreateWithoutMissionInput[] | MissionEncUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionEncCreateOrConnectWithoutMissionInput | MissionEncCreateOrConnectWithoutMissionInput[]
    createMany?: MissionEncCreateManyMissionInputEnvelope
    connect?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
  }

  export type FactureUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<FactureCreateWithoutMissionInput, FactureUncheckedCreateWithoutMissionInput> | FactureCreateWithoutMissionInput[] | FactureUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutMissionInput | FactureCreateOrConnectWithoutMissionInput[]
    createMany?: FactureCreateManyMissionInputEnvelope
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
  }

  export type EnumMissionStatutFieldUpdateOperationsInput = {
    set?: $Enums.MissionStatut
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MissionEncUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionEncCreateWithoutMissionInput, MissionEncUncheckedCreateWithoutMissionInput> | MissionEncCreateWithoutMissionInput[] | MissionEncUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionEncCreateOrConnectWithoutMissionInput | MissionEncCreateOrConnectWithoutMissionInput[]
    upsert?: MissionEncUpsertWithWhereUniqueWithoutMissionInput | MissionEncUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionEncCreateManyMissionInputEnvelope
    set?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
    disconnect?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
    delete?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
    connect?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
    update?: MissionEncUpdateWithWhereUniqueWithoutMissionInput | MissionEncUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionEncUpdateManyWithWhereWithoutMissionInput | MissionEncUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionEncScalarWhereInput | MissionEncScalarWhereInput[]
  }

  export type FactureUpdateManyWithoutMissionNestedInput = {
    create?: XOR<FactureCreateWithoutMissionInput, FactureUncheckedCreateWithoutMissionInput> | FactureCreateWithoutMissionInput[] | FactureUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutMissionInput | FactureCreateOrConnectWithoutMissionInput[]
    upsert?: FactureUpsertWithWhereUniqueWithoutMissionInput | FactureUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: FactureCreateManyMissionInputEnvelope
    set?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    disconnect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    delete?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    update?: FactureUpdateWithWhereUniqueWithoutMissionInput | FactureUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: FactureUpdateManyWithWhereWithoutMissionInput | FactureUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: FactureScalarWhereInput | FactureScalarWhereInput[]
  }

  export type MissionEncUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionEncCreateWithoutMissionInput, MissionEncUncheckedCreateWithoutMissionInput> | MissionEncCreateWithoutMissionInput[] | MissionEncUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionEncCreateOrConnectWithoutMissionInput | MissionEncCreateOrConnectWithoutMissionInput[]
    upsert?: MissionEncUpsertWithWhereUniqueWithoutMissionInput | MissionEncUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionEncCreateManyMissionInputEnvelope
    set?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
    disconnect?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
    delete?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
    connect?: MissionEncWhereUniqueInput | MissionEncWhereUniqueInput[]
    update?: MissionEncUpdateWithWhereUniqueWithoutMissionInput | MissionEncUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionEncUpdateManyWithWhereWithoutMissionInput | MissionEncUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionEncScalarWhereInput | MissionEncScalarWhereInput[]
  }

  export type FactureUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<FactureCreateWithoutMissionInput, FactureUncheckedCreateWithoutMissionInput> | FactureCreateWithoutMissionInput[] | FactureUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutMissionInput | FactureCreateOrConnectWithoutMissionInput[]
    upsert?: FactureUpsertWithWhereUniqueWithoutMissionInput | FactureUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: FactureCreateManyMissionInputEnvelope
    set?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    disconnect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    delete?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    update?: FactureUpdateWithWhereUniqueWithoutMissionInput | FactureUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: FactureUpdateManyWithWhereWithoutMissionInput | FactureUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: FactureScalarWhereInput | FactureScalarWhereInput[]
  }

  export type MissionCreateNestedOneWithoutEncaissementsInput = {
    create?: XOR<MissionCreateWithoutEncaissementsInput, MissionUncheckedCreateWithoutEncaissementsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutEncaissementsInput
    connect?: MissionWhereUniqueInput
  }

  export type MissionUpdateOneRequiredWithoutEncaissementsNestedInput = {
    create?: XOR<MissionCreateWithoutEncaissementsInput, MissionUncheckedCreateWithoutEncaissementsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutEncaissementsInput
    upsert?: MissionUpsertWithoutEncaissementsInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutEncaissementsInput, MissionUpdateWithoutEncaissementsInput>, MissionUncheckedUpdateWithoutEncaissementsInput>
  }

  export type MissionCreateNestedOneWithoutFacturesInput = {
    create?: XOR<MissionCreateWithoutFacturesInput, MissionUncheckedCreateWithoutFacturesInput>
    connectOrCreate?: MissionCreateOrConnectWithoutFacturesInput
    connect?: MissionWhereUniqueInput
  }

  export type TrancheCreateNestedManyWithoutFactureInput = {
    create?: XOR<TrancheCreateWithoutFactureInput, TrancheUncheckedCreateWithoutFactureInput> | TrancheCreateWithoutFactureInput[] | TrancheUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: TrancheCreateOrConnectWithoutFactureInput | TrancheCreateOrConnectWithoutFactureInput[]
    createMany?: TrancheCreateManyFactureInputEnvelope
    connect?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
  }

  export type TrancheUncheckedCreateNestedManyWithoutFactureInput = {
    create?: XOR<TrancheCreateWithoutFactureInput, TrancheUncheckedCreateWithoutFactureInput> | TrancheCreateWithoutFactureInput[] | TrancheUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: TrancheCreateOrConnectWithoutFactureInput | TrancheCreateOrConnectWithoutFactureInput[]
    createMany?: TrancheCreateManyFactureInputEnvelope
    connect?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
  }

  export type MissionUpdateOneRequiredWithoutFacturesNestedInput = {
    create?: XOR<MissionCreateWithoutFacturesInput, MissionUncheckedCreateWithoutFacturesInput>
    connectOrCreate?: MissionCreateOrConnectWithoutFacturesInput
    upsert?: MissionUpsertWithoutFacturesInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutFacturesInput, MissionUpdateWithoutFacturesInput>, MissionUncheckedUpdateWithoutFacturesInput>
  }

  export type TrancheUpdateManyWithoutFactureNestedInput = {
    create?: XOR<TrancheCreateWithoutFactureInput, TrancheUncheckedCreateWithoutFactureInput> | TrancheCreateWithoutFactureInput[] | TrancheUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: TrancheCreateOrConnectWithoutFactureInput | TrancheCreateOrConnectWithoutFactureInput[]
    upsert?: TrancheUpsertWithWhereUniqueWithoutFactureInput | TrancheUpsertWithWhereUniqueWithoutFactureInput[]
    createMany?: TrancheCreateManyFactureInputEnvelope
    set?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
    disconnect?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
    delete?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
    connect?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
    update?: TrancheUpdateWithWhereUniqueWithoutFactureInput | TrancheUpdateWithWhereUniqueWithoutFactureInput[]
    updateMany?: TrancheUpdateManyWithWhereWithoutFactureInput | TrancheUpdateManyWithWhereWithoutFactureInput[]
    deleteMany?: TrancheScalarWhereInput | TrancheScalarWhereInput[]
  }

  export type TrancheUncheckedUpdateManyWithoutFactureNestedInput = {
    create?: XOR<TrancheCreateWithoutFactureInput, TrancheUncheckedCreateWithoutFactureInput> | TrancheCreateWithoutFactureInput[] | TrancheUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: TrancheCreateOrConnectWithoutFactureInput | TrancheCreateOrConnectWithoutFactureInput[]
    upsert?: TrancheUpsertWithWhereUniqueWithoutFactureInput | TrancheUpsertWithWhereUniqueWithoutFactureInput[]
    createMany?: TrancheCreateManyFactureInputEnvelope
    set?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
    disconnect?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
    delete?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
    connect?: TrancheWhereUniqueInput | TrancheWhereUniqueInput[]
    update?: TrancheUpdateWithWhereUniqueWithoutFactureInput | TrancheUpdateWithWhereUniqueWithoutFactureInput[]
    updateMany?: TrancheUpdateManyWithWhereWithoutFactureInput | TrancheUpdateManyWithWhereWithoutFactureInput[]
    deleteMany?: TrancheScalarWhereInput | TrancheScalarWhereInput[]
  }

  export type FactureCreateNestedOneWithoutTranchesInput = {
    create?: XOR<FactureCreateWithoutTranchesInput, FactureUncheckedCreateWithoutTranchesInput>
    connectOrCreate?: FactureCreateOrConnectWithoutTranchesInput
    connect?: FactureWhereUniqueInput
  }

  export type FactureUpdateOneRequiredWithoutTranchesNestedInput = {
    create?: XOR<FactureCreateWithoutTranchesInput, FactureUncheckedCreateWithoutTranchesInput>
    connectOrCreate?: FactureCreateOrConnectWithoutTranchesInput
    upsert?: FactureUpsertWithoutTranchesInput
    connect?: FactureWhereUniqueInput
    update?: XOR<XOR<FactureUpdateToOneWithWhereWithoutTranchesInput, FactureUpdateWithoutTranchesInput>, FactureUncheckedUpdateWithoutTranchesInput>
  }

  export type StaffPaieCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffPaieCreateWithoutStaffInput, StaffPaieUncheckedCreateWithoutStaffInput> | StaffPaieCreateWithoutStaffInput[] | StaffPaieUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffPaieCreateOrConnectWithoutStaffInput | StaffPaieCreateOrConnectWithoutStaffInput[]
    createMany?: StaffPaieCreateManyStaffInputEnvelope
    connect?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
  }

  export type StaffPaieUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffPaieCreateWithoutStaffInput, StaffPaieUncheckedCreateWithoutStaffInput> | StaffPaieCreateWithoutStaffInput[] | StaffPaieUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffPaieCreateOrConnectWithoutStaffInput | StaffPaieCreateOrConnectWithoutStaffInput[]
    createMany?: StaffPaieCreateManyStaffInputEnvelope
    connect?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
  }

  export type StaffPaieUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffPaieCreateWithoutStaffInput, StaffPaieUncheckedCreateWithoutStaffInput> | StaffPaieCreateWithoutStaffInput[] | StaffPaieUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffPaieCreateOrConnectWithoutStaffInput | StaffPaieCreateOrConnectWithoutStaffInput[]
    upsert?: StaffPaieUpsertWithWhereUniqueWithoutStaffInput | StaffPaieUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffPaieCreateManyStaffInputEnvelope
    set?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
    disconnect?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
    delete?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
    connect?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
    update?: StaffPaieUpdateWithWhereUniqueWithoutStaffInput | StaffPaieUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffPaieUpdateManyWithWhereWithoutStaffInput | StaffPaieUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffPaieScalarWhereInput | StaffPaieScalarWhereInput[]
  }

  export type StaffPaieUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffPaieCreateWithoutStaffInput, StaffPaieUncheckedCreateWithoutStaffInput> | StaffPaieCreateWithoutStaffInput[] | StaffPaieUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffPaieCreateOrConnectWithoutStaffInput | StaffPaieCreateOrConnectWithoutStaffInput[]
    upsert?: StaffPaieUpsertWithWhereUniqueWithoutStaffInput | StaffPaieUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffPaieCreateManyStaffInputEnvelope
    set?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
    disconnect?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
    delete?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
    connect?: StaffPaieWhereUniqueInput | StaffPaieWhereUniqueInput[]
    update?: StaffPaieUpdateWithWhereUniqueWithoutStaffInput | StaffPaieUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffPaieUpdateManyWithWhereWithoutStaffInput | StaffPaieUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffPaieScalarWhereInput | StaffPaieScalarWhereInput[]
  }

  export type StaffCreateNestedOneWithoutPaiesInput = {
    create?: XOR<StaffCreateWithoutPaiesInput, StaffUncheckedCreateWithoutPaiesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutPaiesInput
    connect?: StaffWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StaffUpdateOneRequiredWithoutPaiesNestedInput = {
    create?: XOR<StaffCreateWithoutPaiesInput, StaffUncheckedCreateWithoutPaiesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutPaiesInput
    upsert?: StaffUpsertWithoutPaiesInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutPaiesInput, StaffUpdateWithoutPaiesInput>, StaffUncheckedUpdateWithoutPaiesInput>
  }

  export type ChargeReelCreateNestedManyWithoutChargeInput = {
    create?: XOR<ChargeReelCreateWithoutChargeInput, ChargeReelUncheckedCreateWithoutChargeInput> | ChargeReelCreateWithoutChargeInput[] | ChargeReelUncheckedCreateWithoutChargeInput[]
    connectOrCreate?: ChargeReelCreateOrConnectWithoutChargeInput | ChargeReelCreateOrConnectWithoutChargeInput[]
    createMany?: ChargeReelCreateManyChargeInputEnvelope
    connect?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
  }

  export type ChargeReelUncheckedCreateNestedManyWithoutChargeInput = {
    create?: XOR<ChargeReelCreateWithoutChargeInput, ChargeReelUncheckedCreateWithoutChargeInput> | ChargeReelCreateWithoutChargeInput[] | ChargeReelUncheckedCreateWithoutChargeInput[]
    connectOrCreate?: ChargeReelCreateOrConnectWithoutChargeInput | ChargeReelCreateOrConnectWithoutChargeInput[]
    createMany?: ChargeReelCreateManyChargeInputEnvelope
    connect?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
  }

  export type ChargeReelUpdateManyWithoutChargeNestedInput = {
    create?: XOR<ChargeReelCreateWithoutChargeInput, ChargeReelUncheckedCreateWithoutChargeInput> | ChargeReelCreateWithoutChargeInput[] | ChargeReelUncheckedCreateWithoutChargeInput[]
    connectOrCreate?: ChargeReelCreateOrConnectWithoutChargeInput | ChargeReelCreateOrConnectWithoutChargeInput[]
    upsert?: ChargeReelUpsertWithWhereUniqueWithoutChargeInput | ChargeReelUpsertWithWhereUniqueWithoutChargeInput[]
    createMany?: ChargeReelCreateManyChargeInputEnvelope
    set?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
    disconnect?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
    delete?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
    connect?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
    update?: ChargeReelUpdateWithWhereUniqueWithoutChargeInput | ChargeReelUpdateWithWhereUniqueWithoutChargeInput[]
    updateMany?: ChargeReelUpdateManyWithWhereWithoutChargeInput | ChargeReelUpdateManyWithWhereWithoutChargeInput[]
    deleteMany?: ChargeReelScalarWhereInput | ChargeReelScalarWhereInput[]
  }

  export type ChargeReelUncheckedUpdateManyWithoutChargeNestedInput = {
    create?: XOR<ChargeReelCreateWithoutChargeInput, ChargeReelUncheckedCreateWithoutChargeInput> | ChargeReelCreateWithoutChargeInput[] | ChargeReelUncheckedCreateWithoutChargeInput[]
    connectOrCreate?: ChargeReelCreateOrConnectWithoutChargeInput | ChargeReelCreateOrConnectWithoutChargeInput[]
    upsert?: ChargeReelUpsertWithWhereUniqueWithoutChargeInput | ChargeReelUpsertWithWhereUniqueWithoutChargeInput[]
    createMany?: ChargeReelCreateManyChargeInputEnvelope
    set?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
    disconnect?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
    delete?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
    connect?: ChargeReelWhereUniqueInput | ChargeReelWhereUniqueInput[]
    update?: ChargeReelUpdateWithWhereUniqueWithoutChargeInput | ChargeReelUpdateWithWhereUniqueWithoutChargeInput[]
    updateMany?: ChargeReelUpdateManyWithWhereWithoutChargeInput | ChargeReelUpdateManyWithWhereWithoutChargeInput[]
    deleteMany?: ChargeReelScalarWhereInput | ChargeReelScalarWhereInput[]
  }

  export type ChargeCreateNestedOneWithoutRealisationsInput = {
    create?: XOR<ChargeCreateWithoutRealisationsInput, ChargeUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: ChargeCreateOrConnectWithoutRealisationsInput
    connect?: ChargeWhereUniqueInput
  }

  export type ChargeUpdateOneRequiredWithoutRealisationsNestedInput = {
    create?: XOR<ChargeCreateWithoutRealisationsInput, ChargeUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: ChargeCreateOrConnectWithoutRealisationsInput
    upsert?: ChargeUpsertWithoutRealisationsInput
    connect?: ChargeWhereUniqueInput
    update?: XOR<XOR<ChargeUpdateToOneWithWhereWithoutRealisationsInput, ChargeUpdateWithoutRealisationsInput>, ChargeUncheckedUpdateWithoutRealisationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMissionStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatut | EnumMissionStatutFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatut[] | ListEnumMissionStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatut[] | ListEnumMissionStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatutFilter<$PrismaModel> | $Enums.MissionStatut
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMissionStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatut | EnumMissionStatutFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatut[] | ListEnumMissionStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatut[] | ListEnumMissionStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatutWithAggregatesFilter<$PrismaModel> | $Enums.MissionStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionStatutFilter<$PrismaModel>
    _max?: NestedEnumMissionStatutFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MissionEncCreateWithoutMissionInput = {
    mois: string
    montant?: number
  }

  export type MissionEncUncheckedCreateWithoutMissionInput = {
    id?: number
    mois: string
    montant?: number
  }

  export type MissionEncCreateOrConnectWithoutMissionInput = {
    where: MissionEncWhereUniqueInput
    create: XOR<MissionEncCreateWithoutMissionInput, MissionEncUncheckedCreateWithoutMissionInput>
  }

  export type MissionEncCreateManyMissionInputEnvelope = {
    data: MissionEncCreateManyMissionInput | MissionEncCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type FactureCreateWithoutMissionInput = {
    num: string
    date: Date | string
    ht: number
    tvaType?: string
    tvaMontant?: number
    ttc: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tranches?: TrancheCreateNestedManyWithoutFactureInput
  }

  export type FactureUncheckedCreateWithoutMissionInput = {
    id?: number
    num: string
    date: Date | string
    ht: number
    tvaType?: string
    tvaMontant?: number
    ttc: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tranches?: TrancheUncheckedCreateNestedManyWithoutFactureInput
  }

  export type FactureCreateOrConnectWithoutMissionInput = {
    where: FactureWhereUniqueInput
    create: XOR<FactureCreateWithoutMissionInput, FactureUncheckedCreateWithoutMissionInput>
  }

  export type FactureCreateManyMissionInputEnvelope = {
    data: FactureCreateManyMissionInput | FactureCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type MissionEncUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionEncWhereUniqueInput
    update: XOR<MissionEncUpdateWithoutMissionInput, MissionEncUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionEncCreateWithoutMissionInput, MissionEncUncheckedCreateWithoutMissionInput>
  }

  export type MissionEncUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionEncWhereUniqueInput
    data: XOR<MissionEncUpdateWithoutMissionInput, MissionEncUncheckedUpdateWithoutMissionInput>
  }

  export type MissionEncUpdateManyWithWhereWithoutMissionInput = {
    where: MissionEncScalarWhereInput
    data: XOR<MissionEncUpdateManyMutationInput, MissionEncUncheckedUpdateManyWithoutMissionInput>
  }

  export type MissionEncScalarWhereInput = {
    AND?: MissionEncScalarWhereInput | MissionEncScalarWhereInput[]
    OR?: MissionEncScalarWhereInput[]
    NOT?: MissionEncScalarWhereInput | MissionEncScalarWhereInput[]
    id?: IntFilter<"MissionEnc"> | number
    missionId?: IntFilter<"MissionEnc"> | number
    mois?: StringFilter<"MissionEnc"> | string
    montant?: FloatFilter<"MissionEnc"> | number
  }

  export type FactureUpsertWithWhereUniqueWithoutMissionInput = {
    where: FactureWhereUniqueInput
    update: XOR<FactureUpdateWithoutMissionInput, FactureUncheckedUpdateWithoutMissionInput>
    create: XOR<FactureCreateWithoutMissionInput, FactureUncheckedCreateWithoutMissionInput>
  }

  export type FactureUpdateWithWhereUniqueWithoutMissionInput = {
    where: FactureWhereUniqueInput
    data: XOR<FactureUpdateWithoutMissionInput, FactureUncheckedUpdateWithoutMissionInput>
  }

  export type FactureUpdateManyWithWhereWithoutMissionInput = {
    where: FactureScalarWhereInput
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyWithoutMissionInput>
  }

  export type FactureScalarWhereInput = {
    AND?: FactureScalarWhereInput | FactureScalarWhereInput[]
    OR?: FactureScalarWhereInput[]
    NOT?: FactureScalarWhereInput | FactureScalarWhereInput[]
    id?: IntFilter<"Facture"> | number
    missionId?: IntFilter<"Facture"> | number
    num?: StringFilter<"Facture"> | string
    date?: DateTimeFilter<"Facture"> | Date | string
    ht?: FloatFilter<"Facture"> | number
    tvaType?: StringFilter<"Facture"> | string
    tvaMontant?: FloatFilter<"Facture"> | number
    ttc?: FloatFilter<"Facture"> | number
    createdAt?: DateTimeFilter<"Facture"> | Date | string
    updatedAt?: DateTimeFilter<"Facture"> | Date | string
  }

  export type MissionCreateWithoutEncaissementsInput = {
    nom: string
    client: string
    apporteur?: string | null
    statut?: $Enums.MissionStatut
    montant?: number
    avance?: number
    debut?: Date | string | null
    fin?: Date | string | null
    tva?: string
    nature?: string
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    factures?: FactureCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutEncaissementsInput = {
    id?: number
    nom: string
    client: string
    apporteur?: string | null
    statut?: $Enums.MissionStatut
    montant?: number
    avance?: number
    debut?: Date | string | null
    fin?: Date | string | null
    tva?: string
    nature?: string
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    factures?: FactureUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutEncaissementsInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutEncaissementsInput, MissionUncheckedCreateWithoutEncaissementsInput>
  }

  export type MissionUpsertWithoutEncaissementsInput = {
    update: XOR<MissionUpdateWithoutEncaissementsInput, MissionUncheckedUpdateWithoutEncaissementsInput>
    create: XOR<MissionCreateWithoutEncaissementsInput, MissionUncheckedCreateWithoutEncaissementsInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutEncaissementsInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutEncaissementsInput, MissionUncheckedUpdateWithoutEncaissementsInput>
  }

  export type MissionUpdateWithoutEncaissementsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    apporteur?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumMissionStatutFieldUpdateOperationsInput | $Enums.MissionStatut
    montant?: FloatFieldUpdateOperationsInput | number
    avance?: FloatFieldUpdateOperationsInput | number
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tva?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factures?: FactureUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutEncaissementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    apporteur?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumMissionStatutFieldUpdateOperationsInput | $Enums.MissionStatut
    montant?: FloatFieldUpdateOperationsInput | number
    avance?: FloatFieldUpdateOperationsInput | number
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tva?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factures?: FactureUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateWithoutFacturesInput = {
    nom: string
    client: string
    apporteur?: string | null
    statut?: $Enums.MissionStatut
    montant?: number
    avance?: number
    debut?: Date | string | null
    fin?: Date | string | null
    tva?: string
    nature?: string
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    encaissements?: MissionEncCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutFacturesInput = {
    id?: number
    nom: string
    client: string
    apporteur?: string | null
    statut?: $Enums.MissionStatut
    montant?: number
    avance?: number
    debut?: Date | string | null
    fin?: Date | string | null
    tva?: string
    nature?: string
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    encaissements?: MissionEncUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutFacturesInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutFacturesInput, MissionUncheckedCreateWithoutFacturesInput>
  }

  export type TrancheCreateWithoutFactureInput = {
    num: number
    montant: number
    echeance: Date | string
    encaisse?: number
    dateEnc?: Date | string | null
    ref?: string | null
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrancheUncheckedCreateWithoutFactureInput = {
    id?: number
    num: number
    montant: number
    echeance: Date | string
    encaisse?: number
    dateEnc?: Date | string | null
    ref?: string | null
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrancheCreateOrConnectWithoutFactureInput = {
    where: TrancheWhereUniqueInput
    create: XOR<TrancheCreateWithoutFactureInput, TrancheUncheckedCreateWithoutFactureInput>
  }

  export type TrancheCreateManyFactureInputEnvelope = {
    data: TrancheCreateManyFactureInput | TrancheCreateManyFactureInput[]
    skipDuplicates?: boolean
  }

  export type MissionUpsertWithoutFacturesInput = {
    update: XOR<MissionUpdateWithoutFacturesInput, MissionUncheckedUpdateWithoutFacturesInput>
    create: XOR<MissionCreateWithoutFacturesInput, MissionUncheckedCreateWithoutFacturesInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutFacturesInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutFacturesInput, MissionUncheckedUpdateWithoutFacturesInput>
  }

  export type MissionUpdateWithoutFacturesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    apporteur?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumMissionStatutFieldUpdateOperationsInput | $Enums.MissionStatut
    montant?: FloatFieldUpdateOperationsInput | number
    avance?: FloatFieldUpdateOperationsInput | number
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tva?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encaissements?: MissionEncUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutFacturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    apporteur?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumMissionStatutFieldUpdateOperationsInput | $Enums.MissionStatut
    montant?: FloatFieldUpdateOperationsInput | number
    avance?: FloatFieldUpdateOperationsInput | number
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tva?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encaissements?: MissionEncUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type TrancheUpsertWithWhereUniqueWithoutFactureInput = {
    where: TrancheWhereUniqueInput
    update: XOR<TrancheUpdateWithoutFactureInput, TrancheUncheckedUpdateWithoutFactureInput>
    create: XOR<TrancheCreateWithoutFactureInput, TrancheUncheckedCreateWithoutFactureInput>
  }

  export type TrancheUpdateWithWhereUniqueWithoutFactureInput = {
    where: TrancheWhereUniqueInput
    data: XOR<TrancheUpdateWithoutFactureInput, TrancheUncheckedUpdateWithoutFactureInput>
  }

  export type TrancheUpdateManyWithWhereWithoutFactureInput = {
    where: TrancheScalarWhereInput
    data: XOR<TrancheUpdateManyMutationInput, TrancheUncheckedUpdateManyWithoutFactureInput>
  }

  export type TrancheScalarWhereInput = {
    AND?: TrancheScalarWhereInput | TrancheScalarWhereInput[]
    OR?: TrancheScalarWhereInput[]
    NOT?: TrancheScalarWhereInput | TrancheScalarWhereInput[]
    id?: IntFilter<"Tranche"> | number
    factureId?: IntFilter<"Tranche"> | number
    num?: IntFilter<"Tranche"> | number
    montant?: FloatFilter<"Tranche"> | number
    echeance?: DateTimeFilter<"Tranche"> | Date | string
    encaisse?: FloatFilter<"Tranche"> | number
    dateEnc?: DateTimeNullableFilter<"Tranche"> | Date | string | null
    ref?: StringNullableFilter<"Tranche"> | string | null
    statut?: StringFilter<"Tranche"> | string
    createdAt?: DateTimeFilter<"Tranche"> | Date | string
    updatedAt?: DateTimeFilter<"Tranche"> | Date | string
  }

  export type FactureCreateWithoutTranchesInput = {
    num: string
    date: Date | string
    ht: number
    tvaType?: string
    tvaMontant?: number
    ttc: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mission: MissionCreateNestedOneWithoutFacturesInput
  }

  export type FactureUncheckedCreateWithoutTranchesInput = {
    id?: number
    missionId: number
    num: string
    date: Date | string
    ht: number
    tvaType?: string
    tvaMontant?: number
    ttc: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FactureCreateOrConnectWithoutTranchesInput = {
    where: FactureWhereUniqueInput
    create: XOR<FactureCreateWithoutTranchesInput, FactureUncheckedCreateWithoutTranchesInput>
  }

  export type FactureUpsertWithoutTranchesInput = {
    update: XOR<FactureUpdateWithoutTranchesInput, FactureUncheckedUpdateWithoutTranchesInput>
    create: XOR<FactureCreateWithoutTranchesInput, FactureUncheckedCreateWithoutTranchesInput>
    where?: FactureWhereInput
  }

  export type FactureUpdateToOneWithWhereWithoutTranchesInput = {
    where?: FactureWhereInput
    data: XOR<FactureUpdateWithoutTranchesInput, FactureUncheckedUpdateWithoutTranchesInput>
  }

  export type FactureUpdateWithoutTranchesInput = {
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutFacturesNestedInput
  }

  export type FactureUncheckedUpdateWithoutTranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPaieCreateWithoutStaffInput = {
    mois: string
    annee?: number
    montant?: number | null
    statut?: string | null
  }

  export type StaffPaieUncheckedCreateWithoutStaffInput = {
    id?: number
    mois: string
    annee?: number
    montant?: number | null
    statut?: string | null
  }

  export type StaffPaieCreateOrConnectWithoutStaffInput = {
    where: StaffPaieWhereUniqueInput
    create: XOR<StaffPaieCreateWithoutStaffInput, StaffPaieUncheckedCreateWithoutStaffInput>
  }

  export type StaffPaieCreateManyStaffInputEnvelope = {
    data: StaffPaieCreateManyStaffInput | StaffPaieCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type StaffPaieUpsertWithWhereUniqueWithoutStaffInput = {
    where: StaffPaieWhereUniqueInput
    update: XOR<StaffPaieUpdateWithoutStaffInput, StaffPaieUncheckedUpdateWithoutStaffInput>
    create: XOR<StaffPaieCreateWithoutStaffInput, StaffPaieUncheckedCreateWithoutStaffInput>
  }

  export type StaffPaieUpdateWithWhereUniqueWithoutStaffInput = {
    where: StaffPaieWhereUniqueInput
    data: XOR<StaffPaieUpdateWithoutStaffInput, StaffPaieUncheckedUpdateWithoutStaffInput>
  }

  export type StaffPaieUpdateManyWithWhereWithoutStaffInput = {
    where: StaffPaieScalarWhereInput
    data: XOR<StaffPaieUpdateManyMutationInput, StaffPaieUncheckedUpdateManyWithoutStaffInput>
  }

  export type StaffPaieScalarWhereInput = {
    AND?: StaffPaieScalarWhereInput | StaffPaieScalarWhereInput[]
    OR?: StaffPaieScalarWhereInput[]
    NOT?: StaffPaieScalarWhereInput | StaffPaieScalarWhereInput[]
    id?: IntFilter<"StaffPaie"> | number
    staffId?: IntFilter<"StaffPaie"> | number
    mois?: StringFilter<"StaffPaie"> | string
    annee?: IntFilter<"StaffPaie"> | number
    montant?: FloatNullableFilter<"StaffPaie"> | number | null
    statut?: StringNullableFilter<"StaffPaie"> | string | null
  }

  export type StaffCreateWithoutPaiesInput = {
    nom: string
    poste?: string | null
    salaire?: number
    nature?: string
    debut?: Date | string | null
    fin?: string | null
    marabu?: boolean
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUncheckedCreateWithoutPaiesInput = {
    id?: number
    nom: string
    poste?: string | null
    salaire?: number
    nature?: string
    debut?: Date | string | null
    fin?: string | null
    marabu?: boolean
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutPaiesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutPaiesInput, StaffUncheckedCreateWithoutPaiesInput>
  }

  export type StaffUpsertWithoutPaiesInput = {
    update: XOR<StaffUpdateWithoutPaiesInput, StaffUncheckedUpdateWithoutPaiesInput>
    create: XOR<StaffCreateWithoutPaiesInput, StaffUncheckedCreateWithoutPaiesInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutPaiesInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutPaiesInput, StaffUncheckedUpdateWithoutPaiesInput>
  }

  export type StaffUpdateWithoutPaiesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    poste?: NullableStringFieldUpdateOperationsInput | string | null
    salaire?: FloatFieldUpdateOperationsInput | number
    nature?: StringFieldUpdateOperationsInput | string
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableStringFieldUpdateOperationsInput | string | null
    marabu?: BoolFieldUpdateOperationsInput | boolean
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateWithoutPaiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    poste?: NullableStringFieldUpdateOperationsInput | string | null
    salaire?: FloatFieldUpdateOperationsInput | number
    nature?: StringFieldUpdateOperationsInput | string
    debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fin?: NullableStringFieldUpdateOperationsInput | string | null
    marabu?: BoolFieldUpdateOperationsInput | boolean
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargeReelCreateWithoutChargeInput = {
    mois: string
    annee?: number
    montant?: number
    statut?: string | null
    datePmt?: Date | string | null
  }

  export type ChargeReelUncheckedCreateWithoutChargeInput = {
    id?: number
    mois: string
    annee?: number
    montant?: number
    statut?: string | null
    datePmt?: Date | string | null
  }

  export type ChargeReelCreateOrConnectWithoutChargeInput = {
    where: ChargeReelWhereUniqueInput
    create: XOR<ChargeReelCreateWithoutChargeInput, ChargeReelUncheckedCreateWithoutChargeInput>
  }

  export type ChargeReelCreateManyChargeInputEnvelope = {
    data: ChargeReelCreateManyChargeInput | ChargeReelCreateManyChargeInput[]
    skipDuplicates?: boolean
  }

  export type ChargeReelUpsertWithWhereUniqueWithoutChargeInput = {
    where: ChargeReelWhereUniqueInput
    update: XOR<ChargeReelUpdateWithoutChargeInput, ChargeReelUncheckedUpdateWithoutChargeInput>
    create: XOR<ChargeReelCreateWithoutChargeInput, ChargeReelUncheckedCreateWithoutChargeInput>
  }

  export type ChargeReelUpdateWithWhereUniqueWithoutChargeInput = {
    where: ChargeReelWhereUniqueInput
    data: XOR<ChargeReelUpdateWithoutChargeInput, ChargeReelUncheckedUpdateWithoutChargeInput>
  }

  export type ChargeReelUpdateManyWithWhereWithoutChargeInput = {
    where: ChargeReelScalarWhereInput
    data: XOR<ChargeReelUpdateManyMutationInput, ChargeReelUncheckedUpdateManyWithoutChargeInput>
  }

  export type ChargeReelScalarWhereInput = {
    AND?: ChargeReelScalarWhereInput | ChargeReelScalarWhereInput[]
    OR?: ChargeReelScalarWhereInput[]
    NOT?: ChargeReelScalarWhereInput | ChargeReelScalarWhereInput[]
    id?: IntFilter<"ChargeReel"> | number
    chargeId?: IntFilter<"ChargeReel"> | number
    mois?: StringFilter<"ChargeReel"> | string
    annee?: IntFilter<"ChargeReel"> | number
    montant?: FloatFilter<"ChargeReel"> | number
    statut?: StringNullableFilter<"ChargeReel"> | string | null
    datePmt?: DateTimeNullableFilter<"ChargeReel"> | Date | string | null
  }

  export type ChargeCreateWithoutRealisationsInput = {
    libelle: string
    categorie: string
    nature?: string
    type?: string
    periodicite?: string
    budget?: number
    moisApplicables?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChargeUncheckedCreateWithoutRealisationsInput = {
    id?: number
    libelle: string
    categorie: string
    nature?: string
    type?: string
    periodicite?: string
    budget?: number
    moisApplicables?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChargeCreateOrConnectWithoutRealisationsInput = {
    where: ChargeWhereUniqueInput
    create: XOR<ChargeCreateWithoutRealisationsInput, ChargeUncheckedCreateWithoutRealisationsInput>
  }

  export type ChargeUpsertWithoutRealisationsInput = {
    update: XOR<ChargeUpdateWithoutRealisationsInput, ChargeUncheckedUpdateWithoutRealisationsInput>
    create: XOR<ChargeCreateWithoutRealisationsInput, ChargeUncheckedCreateWithoutRealisationsInput>
    where?: ChargeWhereInput
  }

  export type ChargeUpdateToOneWithWhereWithoutRealisationsInput = {
    where?: ChargeWhereInput
    data: XOR<ChargeUpdateWithoutRealisationsInput, ChargeUncheckedUpdateWithoutRealisationsInput>
  }

  export type ChargeUpdateWithoutRealisationsInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    periodicite?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    moisApplicables?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargeUncheckedUpdateWithoutRealisationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    nature?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    periodicite?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    moisApplicables?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionEncCreateManyMissionInput = {
    id?: number
    mois: string
    montant?: number
  }

  export type FactureCreateManyMissionInput = {
    id?: number
    num: string
    date: Date | string
    ht: number
    tvaType?: string
    tvaMontant?: number
    ttc: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionEncUpdateWithoutMissionInput = {
    mois?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type MissionEncUncheckedUpdateWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type MissionEncUncheckedUpdateManyWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type FactureUpdateWithoutMissionInput = {
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tranches?: TrancheUpdateManyWithoutFactureNestedInput
  }

  export type FactureUncheckedUpdateWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tranches?: TrancheUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type FactureUncheckedUpdateManyWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ht?: FloatFieldUpdateOperationsInput | number
    tvaType?: StringFieldUpdateOperationsInput | string
    tvaMontant?: FloatFieldUpdateOperationsInput | number
    ttc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrancheCreateManyFactureInput = {
    id?: number
    num: number
    montant: number
    echeance: Date | string
    encaisse?: number
    dateEnc?: Date | string | null
    ref?: string | null
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrancheUpdateWithoutFactureInput = {
    num?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    encaisse?: FloatFieldUpdateOperationsInput | number
    dateEnc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrancheUncheckedUpdateWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    encaisse?: FloatFieldUpdateOperationsInput | number
    dateEnc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrancheUncheckedUpdateManyWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    encaisse?: FloatFieldUpdateOperationsInput | number
    dateEnc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPaieCreateManyStaffInput = {
    id?: number
    mois: string
    annee?: number
    montant?: number | null
    statut?: string | null
  }

  export type StaffPaieUpdateWithoutStaffInput = {
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPaieUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPaieUncheckedUpdateManyWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChargeReelCreateManyChargeInput = {
    id?: number
    mois: string
    annee?: number
    montant?: number
    statut?: string | null
    datePmt?: Date | string | null
  }

  export type ChargeReelUpdateWithoutChargeInput = {
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    datePmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChargeReelUncheckedUpdateWithoutChargeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    datePmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChargeReelUncheckedUpdateManyWithoutChargeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    datePmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}