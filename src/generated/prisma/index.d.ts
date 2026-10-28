
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model RoomEmoji
 * 
 */
export type RoomEmoji = $Result.DefaultSelection<Prisma.$RoomEmojiPayload>
/**
 * Model Auction
 * 
 */
export type Auction = $Result.DefaultSelection<Prisma.$AuctionPayload>
/**
 * Model AuctionBid
 * 
 */
export type AuctionBid = $Result.DefaultSelection<Prisma.$AuctionBidPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuctionStatus: {
  RUNNING: 'RUNNING',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type AuctionStatus = (typeof AuctionStatus)[keyof typeof AuctionStatus]

}

export type AuctionStatus = $Enums.AuctionStatus

export const AuctionStatus: typeof $Enums.AuctionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomEmoji`: Exposes CRUD operations for the **RoomEmoji** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomEmojis
    * const roomEmojis = await prisma.roomEmoji.findMany()
    * ```
    */
  get roomEmoji(): Prisma.RoomEmojiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auction`: Exposes CRUD operations for the **Auction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auctions
    * const auctions = await prisma.auction.findMany()
    * ```
    */
  get auction(): Prisma.AuctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auctionBid`: Exposes CRUD operations for the **AuctionBid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuctionBids
    * const auctionBids = await prisma.auctionBid.findMany()
    * ```
    */
  get auctionBid(): Prisma.AuctionBidDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    Room: 'Room',
    Player: 'Player',
    RoomEmoji: 'RoomEmoji',
    Auction: 'Auction',
    AuctionBid: 'AuctionBid'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "room" | "player" | "roomEmoji" | "auction" | "auctionBid"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      RoomEmoji: {
        payload: Prisma.$RoomEmojiPayload<ExtArgs>
        fields: Prisma.RoomEmojiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomEmojiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomEmojiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>
          }
          findFirst: {
            args: Prisma.RoomEmojiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomEmojiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>
          }
          findMany: {
            args: Prisma.RoomEmojiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>[]
          }
          create: {
            args: Prisma.RoomEmojiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>
          }
          createMany: {
            args: Prisma.RoomEmojiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomEmojiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>[]
          }
          delete: {
            args: Prisma.RoomEmojiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>
          }
          update: {
            args: Prisma.RoomEmojiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>
          }
          deleteMany: {
            args: Prisma.RoomEmojiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomEmojiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomEmojiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>[]
          }
          upsert: {
            args: Prisma.RoomEmojiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomEmojiPayload>
          }
          aggregate: {
            args: Prisma.RoomEmojiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomEmoji>
          }
          groupBy: {
            args: Prisma.RoomEmojiGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomEmojiGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomEmojiCountArgs<ExtArgs>
            result: $Utils.Optional<RoomEmojiCountAggregateOutputType> | number
          }
        }
      }
      Auction: {
        payload: Prisma.$AuctionPayload<ExtArgs>
        fields: Prisma.AuctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findFirst: {
            args: Prisma.AuctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findMany: {
            args: Prisma.AuctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          create: {
            args: Prisma.AuctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          createMany: {
            args: Prisma.AuctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          delete: {
            args: Prisma.AuctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          update: {
            args: Prisma.AuctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          deleteMany: {
            args: Prisma.AuctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          upsert: {
            args: Prisma.AuctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          aggregate: {
            args: Prisma.AuctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuction>
          }
          groupBy: {
            args: Prisma.AuctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionCountAggregateOutputType> | number
          }
        }
      }
      AuctionBid: {
        payload: Prisma.$AuctionBidPayload<ExtArgs>
        fields: Prisma.AuctionBidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionBidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionBidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>
          }
          findFirst: {
            args: Prisma.AuctionBidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionBidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>
          }
          findMany: {
            args: Prisma.AuctionBidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>[]
          }
          create: {
            args: Prisma.AuctionBidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>
          }
          createMany: {
            args: Prisma.AuctionBidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuctionBidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>[]
          }
          delete: {
            args: Prisma.AuctionBidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>
          }
          update: {
            args: Prisma.AuctionBidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>
          }
          deleteMany: {
            args: Prisma.AuctionBidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionBidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuctionBidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>[]
          }
          upsert: {
            args: Prisma.AuctionBidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidPayload>
          }
          aggregate: {
            args: Prisma.AuctionBidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuctionBid>
          }
          groupBy: {
            args: Prisma.AuctionBidGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionBidGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionBidCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionBidCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    room?: RoomOmit
    player?: PlayerOmit
    roomEmoji?: RoomEmojiOmit
    auction?: AuctionOmit
    auctionBid?: AuctionBidOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rooms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    players: number
    emojis: number
    auctions: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | RoomCountOutputTypeCountPlayersArgs
    emojis?: boolean | RoomCountOutputTypeCountEmojisArgs
    auctions?: boolean | RoomCountOutputTypeCountAuctionsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountEmojisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomEmojiWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountAuctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    emojis: number
    leadingAuctions: number
    bids: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emojis?: boolean | PlayerCountOutputTypeCountEmojisArgs
    leadingAuctions?: boolean | PlayerCountOutputTypeCountLeadingAuctionsArgs
    bids?: boolean | PlayerCountOutputTypeCountBidsArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountEmojisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomEmojiWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountLeadingAuctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionBidWhereInput
  }


  /**
   * Count Type AuctionCountOutputType
   */

  export type AuctionCountOutputType = {
    bids: number
  }

  export type AuctionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | AuctionCountOutputTypeCountBidsArgs
  }

  // Custom InputTypes
  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionCountOutputType
     */
    select?: AuctionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionBidWhereInput
  }


  /**
   * Models
   */

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
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
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
    password: string
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
    password?: boolean
    rooms?: boolean | User$roomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | User$roomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
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
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    PlayerLimit: number | null
    EmojiLimit: number | null
    EmojiCooldown: number | null
  }

  export type RoomSumAggregateOutputType = {
    PlayerLimit: number | null
    EmojiLimit: number | null
    EmojiCooldown: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    PlayerLimit: number | null
    PlayersCanEditPoints: boolean | null
    PlayersCanEditName: boolean | null
    EmojisEnabled: boolean | null
    EmojiLimit: number | null
    EmojiCooldown: number | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    PlayerLimit: number | null
    PlayersCanEditPoints: boolean | null
    PlayersCanEditName: boolean | null
    EmojisEnabled: boolean | null
    EmojiLimit: number | null
    EmojiCooldown: number | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    PlayerLimit: number
    PlayersCanEditPoints: number
    PlayersCanEditName: number
    EmojisEnabled: number
    EmojiLimit: number
    EmojiCooldown: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    PlayerLimit?: true
    EmojiLimit?: true
    EmojiCooldown?: true
  }

  export type RoomSumAggregateInputType = {
    PlayerLimit?: true
    EmojiLimit?: true
    EmojiCooldown?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    PlayerLimit?: true
    PlayersCanEditPoints?: true
    PlayersCanEditName?: true
    EmojisEnabled?: true
    EmojiLimit?: true
    EmojiCooldown?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    PlayerLimit?: true
    PlayersCanEditPoints?: true
    PlayersCanEditName?: true
    EmojisEnabled?: true
    EmojiLimit?: true
    EmojiCooldown?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    PlayerLimit?: true
    PlayersCanEditPoints?: true
    PlayersCanEditName?: true
    EmojisEnabled?: true
    EmojiLimit?: true
    EmojiCooldown?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    PlayerLimit: number
    PlayersCanEditPoints: boolean
    PlayersCanEditName: boolean
    EmojisEnabled: boolean
    EmojiLimit: number
    EmojiCooldown: number
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    PlayerLimit?: boolean
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: boolean
    EmojiCooldown?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | Room$playersArgs<ExtArgs>
    emojis?: boolean | Room$emojisArgs<ExtArgs>
    auctions?: boolean | Room$auctionsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    PlayerLimit?: boolean
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: boolean
    EmojiCooldown?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    PlayerLimit?: boolean
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: boolean
    EmojiCooldown?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    PlayerLimit?: boolean
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: boolean
    EmojiCooldown?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "PlayerLimit" | "PlayersCanEditPoints" | "PlayersCanEditName" | "EmojisEnabled" | "EmojiLimit" | "EmojiCooldown", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | Room$playersArgs<ExtArgs>
    emojis?: boolean | Room$emojisArgs<ExtArgs>
    auctions?: boolean | Room$auctionsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      players: Prisma.$PlayerPayload<ExtArgs>[]
      emojis: Prisma.$RoomEmojiPayload<ExtArgs>[]
      auctions: Prisma.$AuctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      PlayerLimit: number
      PlayersCanEditPoints: boolean
      PlayersCanEditName: boolean
      EmojisEnabled: boolean
      EmojiLimit: number
      EmojiCooldown: number
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends Room$playersArgs<ExtArgs> = {}>(args?: Subset<T, Room$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emojis<T extends Room$emojisArgs<ExtArgs> = {}>(args?: Subset<T, Room$emojisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auctions<T extends Room$auctionsArgs<ExtArgs> = {}>(args?: Subset<T, Room$auctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly ownerId: FieldRef<"Room", 'String'>
    readonly PlayerLimit: FieldRef<"Room", 'Int'>
    readonly PlayersCanEditPoints: FieldRef<"Room", 'Boolean'>
    readonly PlayersCanEditName: FieldRef<"Room", 'Boolean'>
    readonly EmojisEnabled: FieldRef<"Room", 'Boolean'>
    readonly EmojiLimit: FieldRef<"Room", 'Int'>
    readonly EmojiCooldown: FieldRef<"Room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.players
   */
  export type Room$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Room.emojis
   */
  export type Room$emojisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    where?: RoomEmojiWhereInput
    orderBy?: RoomEmojiOrderByWithRelationInput | RoomEmojiOrderByWithRelationInput[]
    cursor?: RoomEmojiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomEmojiScalarFieldEnum | RoomEmojiScalarFieldEnum[]
  }

  /**
   * Room.auctions
   */
  export type Room$auctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    points: number | null
  }

  export type PlayerSumAggregateOutputType = {
    points: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    roomId: string | null
    points: number | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    roomId: string | null
    points: number | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    roomId: number
    points: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    points?: true
  }

  export type PlayerSumAggregateInputType = {
    points?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    roomId?: true
    points?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    roomId?: true
    points?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    roomId?: true
    points?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    avatar: string | null
    roomId: string
    points: number
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    roomId?: boolean
    points?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    emojis?: boolean | Player$emojisArgs<ExtArgs>
    leadingAuctions?: boolean | Player$leadingAuctionsArgs<ExtArgs>
    bids?: boolean | Player$bidsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    roomId?: boolean
    points?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    roomId?: boolean
    points?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    roomId?: boolean
    points?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatar" | "roomId" | "points", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    emojis?: boolean | Player$emojisArgs<ExtArgs>
    leadingAuctions?: boolean | Player$leadingAuctionsArgs<ExtArgs>
    bids?: boolean | Player$bidsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      emojis: Prisma.$RoomEmojiPayload<ExtArgs>[]
      leadingAuctions: Prisma.$AuctionPayload<ExtArgs>[]
      bids: Prisma.$AuctionBidPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatar: string | null
      roomId: string
      points: number
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emojis<T extends Player$emojisArgs<ExtArgs> = {}>(args?: Subset<T, Player$emojisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leadingAuctions<T extends Player$leadingAuctionsArgs<ExtArgs> = {}>(args?: Subset<T, Player$leadingAuctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bids<T extends Player$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Player$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly avatar: FieldRef<"Player", 'String'>
    readonly roomId: FieldRef<"Player", 'String'>
    readonly points: FieldRef<"Player", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.emojis
   */
  export type Player$emojisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    where?: RoomEmojiWhereInput
    orderBy?: RoomEmojiOrderByWithRelationInput | RoomEmojiOrderByWithRelationInput[]
    cursor?: RoomEmojiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomEmojiScalarFieldEnum | RoomEmojiScalarFieldEnum[]
  }

  /**
   * Player.leadingAuctions
   */
  export type Player$leadingAuctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Player.bids
   */
  export type Player$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    where?: AuctionBidWhereInput
    orderBy?: AuctionBidOrderByWithRelationInput | AuctionBidOrderByWithRelationInput[]
    cursor?: AuctionBidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionBidScalarFieldEnum | AuctionBidScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model RoomEmoji
   */

  export type AggregateRoomEmoji = {
    _count: RoomEmojiCountAggregateOutputType | null
    _min: RoomEmojiMinAggregateOutputType | null
    _max: RoomEmojiMaxAggregateOutputType | null
  }

  export type RoomEmojiMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    playerId: string | null
    emoji: string | null
    createdAt: Date | null
  }

  export type RoomEmojiMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    playerId: string | null
    emoji: string | null
    createdAt: Date | null
  }

  export type RoomEmojiCountAggregateOutputType = {
    id: number
    roomId: number
    playerId: number
    emoji: number
    createdAt: number
    _all: number
  }


  export type RoomEmojiMinAggregateInputType = {
    id?: true
    roomId?: true
    playerId?: true
    emoji?: true
    createdAt?: true
  }

  export type RoomEmojiMaxAggregateInputType = {
    id?: true
    roomId?: true
    playerId?: true
    emoji?: true
    createdAt?: true
  }

  export type RoomEmojiCountAggregateInputType = {
    id?: true
    roomId?: true
    playerId?: true
    emoji?: true
    createdAt?: true
    _all?: true
  }

  export type RoomEmojiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomEmoji to aggregate.
     */
    where?: RoomEmojiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomEmojis to fetch.
     */
    orderBy?: RoomEmojiOrderByWithRelationInput | RoomEmojiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomEmojiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomEmojis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomEmojis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomEmojis
    **/
    _count?: true | RoomEmojiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomEmojiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomEmojiMaxAggregateInputType
  }

  export type GetRoomEmojiAggregateType<T extends RoomEmojiAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomEmoji]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomEmoji[P]>
      : GetScalarType<T[P], AggregateRoomEmoji[P]>
  }




  export type RoomEmojiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomEmojiWhereInput
    orderBy?: RoomEmojiOrderByWithAggregationInput | RoomEmojiOrderByWithAggregationInput[]
    by: RoomEmojiScalarFieldEnum[] | RoomEmojiScalarFieldEnum
    having?: RoomEmojiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomEmojiCountAggregateInputType | true
    _min?: RoomEmojiMinAggregateInputType
    _max?: RoomEmojiMaxAggregateInputType
  }

  export type RoomEmojiGroupByOutputType = {
    id: string
    roomId: string
    playerId: string
    emoji: string
    createdAt: Date
    _count: RoomEmojiCountAggregateOutputType | null
    _min: RoomEmojiMinAggregateOutputType | null
    _max: RoomEmojiMaxAggregateOutputType | null
  }

  type GetRoomEmojiGroupByPayload<T extends RoomEmojiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomEmojiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomEmojiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomEmojiGroupByOutputType[P]>
            : GetScalarType<T[P], RoomEmojiGroupByOutputType[P]>
        }
      >
    >


  export type RoomEmojiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    playerId?: boolean
    emoji?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomEmoji"]>

  export type RoomEmojiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    playerId?: boolean
    emoji?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomEmoji"]>

  export type RoomEmojiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    playerId?: boolean
    emoji?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomEmoji"]>

  export type RoomEmojiSelectScalar = {
    id?: boolean
    roomId?: boolean
    playerId?: boolean
    emoji?: boolean
    createdAt?: boolean
  }

  export type RoomEmojiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "playerId" | "emoji" | "createdAt", ExtArgs["result"]["roomEmoji"]>
  export type RoomEmojiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type RoomEmojiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type RoomEmojiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $RoomEmojiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomEmoji"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      playerId: string
      emoji: string
      createdAt: Date
    }, ExtArgs["result"]["roomEmoji"]>
    composites: {}
  }

  type RoomEmojiGetPayload<S extends boolean | null | undefined | RoomEmojiDefaultArgs> = $Result.GetResult<Prisma.$RoomEmojiPayload, S>

  type RoomEmojiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomEmojiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomEmojiCountAggregateInputType | true
    }

  export interface RoomEmojiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomEmoji'], meta: { name: 'RoomEmoji' } }
    /**
     * Find zero or one RoomEmoji that matches the filter.
     * @param {RoomEmojiFindUniqueArgs} args - Arguments to find a RoomEmoji
     * @example
     * // Get one RoomEmoji
     * const roomEmoji = await prisma.roomEmoji.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomEmojiFindUniqueArgs>(args: SelectSubset<T, RoomEmojiFindUniqueArgs<ExtArgs>>): Prisma__RoomEmojiClient<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomEmoji that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomEmojiFindUniqueOrThrowArgs} args - Arguments to find a RoomEmoji
     * @example
     * // Get one RoomEmoji
     * const roomEmoji = await prisma.roomEmoji.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomEmojiFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomEmojiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomEmojiClient<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomEmoji that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomEmojiFindFirstArgs} args - Arguments to find a RoomEmoji
     * @example
     * // Get one RoomEmoji
     * const roomEmoji = await prisma.roomEmoji.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomEmojiFindFirstArgs>(args?: SelectSubset<T, RoomEmojiFindFirstArgs<ExtArgs>>): Prisma__RoomEmojiClient<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomEmoji that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomEmojiFindFirstOrThrowArgs} args - Arguments to find a RoomEmoji
     * @example
     * // Get one RoomEmoji
     * const roomEmoji = await prisma.roomEmoji.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomEmojiFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomEmojiFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomEmojiClient<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomEmojis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomEmojiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomEmojis
     * const roomEmojis = await prisma.roomEmoji.findMany()
     * 
     * // Get first 10 RoomEmojis
     * const roomEmojis = await prisma.roomEmoji.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomEmojiWithIdOnly = await prisma.roomEmoji.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomEmojiFindManyArgs>(args?: SelectSubset<T, RoomEmojiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomEmoji.
     * @param {RoomEmojiCreateArgs} args - Arguments to create a RoomEmoji.
     * @example
     * // Create one RoomEmoji
     * const RoomEmoji = await prisma.roomEmoji.create({
     *   data: {
     *     // ... data to create a RoomEmoji
     *   }
     * })
     * 
     */
    create<T extends RoomEmojiCreateArgs>(args: SelectSubset<T, RoomEmojiCreateArgs<ExtArgs>>): Prisma__RoomEmojiClient<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomEmojis.
     * @param {RoomEmojiCreateManyArgs} args - Arguments to create many RoomEmojis.
     * @example
     * // Create many RoomEmojis
     * const roomEmoji = await prisma.roomEmoji.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomEmojiCreateManyArgs>(args?: SelectSubset<T, RoomEmojiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomEmojis and returns the data saved in the database.
     * @param {RoomEmojiCreateManyAndReturnArgs} args - Arguments to create many RoomEmojis.
     * @example
     * // Create many RoomEmojis
     * const roomEmoji = await prisma.roomEmoji.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomEmojis and only return the `id`
     * const roomEmojiWithIdOnly = await prisma.roomEmoji.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomEmojiCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomEmojiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomEmoji.
     * @param {RoomEmojiDeleteArgs} args - Arguments to delete one RoomEmoji.
     * @example
     * // Delete one RoomEmoji
     * const RoomEmoji = await prisma.roomEmoji.delete({
     *   where: {
     *     // ... filter to delete one RoomEmoji
     *   }
     * })
     * 
     */
    delete<T extends RoomEmojiDeleteArgs>(args: SelectSubset<T, RoomEmojiDeleteArgs<ExtArgs>>): Prisma__RoomEmojiClient<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomEmoji.
     * @param {RoomEmojiUpdateArgs} args - Arguments to update one RoomEmoji.
     * @example
     * // Update one RoomEmoji
     * const roomEmoji = await prisma.roomEmoji.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomEmojiUpdateArgs>(args: SelectSubset<T, RoomEmojiUpdateArgs<ExtArgs>>): Prisma__RoomEmojiClient<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomEmojis.
     * @param {RoomEmojiDeleteManyArgs} args - Arguments to filter RoomEmojis to delete.
     * @example
     * // Delete a few RoomEmojis
     * const { count } = await prisma.roomEmoji.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomEmojiDeleteManyArgs>(args?: SelectSubset<T, RoomEmojiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomEmojis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomEmojiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomEmojis
     * const roomEmoji = await prisma.roomEmoji.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomEmojiUpdateManyArgs>(args: SelectSubset<T, RoomEmojiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomEmojis and returns the data updated in the database.
     * @param {RoomEmojiUpdateManyAndReturnArgs} args - Arguments to update many RoomEmojis.
     * @example
     * // Update many RoomEmojis
     * const roomEmoji = await prisma.roomEmoji.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomEmojis and only return the `id`
     * const roomEmojiWithIdOnly = await prisma.roomEmoji.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomEmojiUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomEmojiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomEmoji.
     * @param {RoomEmojiUpsertArgs} args - Arguments to update or create a RoomEmoji.
     * @example
     * // Update or create a RoomEmoji
     * const roomEmoji = await prisma.roomEmoji.upsert({
     *   create: {
     *     // ... data to create a RoomEmoji
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomEmoji we want to update
     *   }
     * })
     */
    upsert<T extends RoomEmojiUpsertArgs>(args: SelectSubset<T, RoomEmojiUpsertArgs<ExtArgs>>): Prisma__RoomEmojiClient<$Result.GetResult<Prisma.$RoomEmojiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomEmojis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomEmojiCountArgs} args - Arguments to filter RoomEmojis to count.
     * @example
     * // Count the number of RoomEmojis
     * const count = await prisma.roomEmoji.count({
     *   where: {
     *     // ... the filter for the RoomEmojis we want to count
     *   }
     * })
    **/
    count<T extends RoomEmojiCountArgs>(
      args?: Subset<T, RoomEmojiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomEmojiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomEmoji.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomEmojiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomEmojiAggregateArgs>(args: Subset<T, RoomEmojiAggregateArgs>): Prisma.PrismaPromise<GetRoomEmojiAggregateType<T>>

    /**
     * Group by RoomEmoji.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomEmojiGroupByArgs} args - Group by arguments.
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
      T extends RoomEmojiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomEmojiGroupByArgs['orderBy'] }
        : { orderBy?: RoomEmojiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomEmojiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomEmojiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomEmoji model
   */
  readonly fields: RoomEmojiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomEmoji.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomEmojiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomEmoji model
   */
  interface RoomEmojiFieldRefs {
    readonly id: FieldRef<"RoomEmoji", 'String'>
    readonly roomId: FieldRef<"RoomEmoji", 'String'>
    readonly playerId: FieldRef<"RoomEmoji", 'String'>
    readonly emoji: FieldRef<"RoomEmoji", 'String'>
    readonly createdAt: FieldRef<"RoomEmoji", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomEmoji findUnique
   */
  export type RoomEmojiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * Filter, which RoomEmoji to fetch.
     */
    where: RoomEmojiWhereUniqueInput
  }

  /**
   * RoomEmoji findUniqueOrThrow
   */
  export type RoomEmojiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * Filter, which RoomEmoji to fetch.
     */
    where: RoomEmojiWhereUniqueInput
  }

  /**
   * RoomEmoji findFirst
   */
  export type RoomEmojiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * Filter, which RoomEmoji to fetch.
     */
    where?: RoomEmojiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomEmojis to fetch.
     */
    orderBy?: RoomEmojiOrderByWithRelationInput | RoomEmojiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomEmojis.
     */
    cursor?: RoomEmojiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomEmojis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomEmojis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomEmojis.
     */
    distinct?: RoomEmojiScalarFieldEnum | RoomEmojiScalarFieldEnum[]
  }

  /**
   * RoomEmoji findFirstOrThrow
   */
  export type RoomEmojiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * Filter, which RoomEmoji to fetch.
     */
    where?: RoomEmojiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomEmojis to fetch.
     */
    orderBy?: RoomEmojiOrderByWithRelationInput | RoomEmojiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomEmojis.
     */
    cursor?: RoomEmojiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomEmojis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomEmojis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomEmojis.
     */
    distinct?: RoomEmojiScalarFieldEnum | RoomEmojiScalarFieldEnum[]
  }

  /**
   * RoomEmoji findMany
   */
  export type RoomEmojiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * Filter, which RoomEmojis to fetch.
     */
    where?: RoomEmojiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomEmojis to fetch.
     */
    orderBy?: RoomEmojiOrderByWithRelationInput | RoomEmojiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomEmojis.
     */
    cursor?: RoomEmojiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomEmojis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomEmojis.
     */
    skip?: number
    distinct?: RoomEmojiScalarFieldEnum | RoomEmojiScalarFieldEnum[]
  }

  /**
   * RoomEmoji create
   */
  export type RoomEmojiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomEmoji.
     */
    data: XOR<RoomEmojiCreateInput, RoomEmojiUncheckedCreateInput>
  }

  /**
   * RoomEmoji createMany
   */
  export type RoomEmojiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomEmojis.
     */
    data: RoomEmojiCreateManyInput | RoomEmojiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomEmoji createManyAndReturn
   */
  export type RoomEmojiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * The data used to create many RoomEmojis.
     */
    data: RoomEmojiCreateManyInput | RoomEmojiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomEmoji update
   */
  export type RoomEmojiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomEmoji.
     */
    data: XOR<RoomEmojiUpdateInput, RoomEmojiUncheckedUpdateInput>
    /**
     * Choose, which RoomEmoji to update.
     */
    where: RoomEmojiWhereUniqueInput
  }

  /**
   * RoomEmoji updateMany
   */
  export type RoomEmojiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomEmojis.
     */
    data: XOR<RoomEmojiUpdateManyMutationInput, RoomEmojiUncheckedUpdateManyInput>
    /**
     * Filter which RoomEmojis to update
     */
    where?: RoomEmojiWhereInput
    /**
     * Limit how many RoomEmojis to update.
     */
    limit?: number
  }

  /**
   * RoomEmoji updateManyAndReturn
   */
  export type RoomEmojiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * The data used to update RoomEmojis.
     */
    data: XOR<RoomEmojiUpdateManyMutationInput, RoomEmojiUncheckedUpdateManyInput>
    /**
     * Filter which RoomEmojis to update
     */
    where?: RoomEmojiWhereInput
    /**
     * Limit how many RoomEmojis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomEmoji upsert
   */
  export type RoomEmojiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomEmoji to update in case it exists.
     */
    where: RoomEmojiWhereUniqueInput
    /**
     * In case the RoomEmoji found by the `where` argument doesn't exist, create a new RoomEmoji with this data.
     */
    create: XOR<RoomEmojiCreateInput, RoomEmojiUncheckedCreateInput>
    /**
     * In case the RoomEmoji was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomEmojiUpdateInput, RoomEmojiUncheckedUpdateInput>
  }

  /**
   * RoomEmoji delete
   */
  export type RoomEmojiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
    /**
     * Filter which RoomEmoji to delete.
     */
    where: RoomEmojiWhereUniqueInput
  }

  /**
   * RoomEmoji deleteMany
   */
  export type RoomEmojiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomEmojis to delete
     */
    where?: RoomEmojiWhereInput
    /**
     * Limit how many RoomEmojis to delete.
     */
    limit?: number
  }

  /**
   * RoomEmoji without action
   */
  export type RoomEmojiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomEmoji
     */
    select?: RoomEmojiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomEmoji
     */
    omit?: RoomEmojiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomEmojiInclude<ExtArgs> | null
  }


  /**
   * Model Auction
   */

  export type AggregateAuction = {
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  export type AuctionAvgAggregateOutputType = {
    startingBid: number | null
    minIncrement: number | null
    durationSeconds: number | null
    bidResetSeconds: number | null
    currentBid: number | null
  }

  export type AuctionSumAggregateOutputType = {
    startingBid: number | null
    minIncrement: number | null
    durationSeconds: number | null
    bidResetSeconds: number | null
    currentBid: number | null
  }

  export type AuctionMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    item: string | null
    startingBid: number | null
    minIncrement: number | null
    durationSeconds: number | null
    bidResetSeconds: number | null
    status: $Enums.AuctionStatus | null
    endsAt: Date | null
    currentBid: number | null
    leaderId: string | null
    leaderName: string | null
    createdAt: Date | null
    finishedAt: Date | null
  }

  export type AuctionMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    item: string | null
    startingBid: number | null
    minIncrement: number | null
    durationSeconds: number | null
    bidResetSeconds: number | null
    status: $Enums.AuctionStatus | null
    endsAt: Date | null
    currentBid: number | null
    leaderId: string | null
    leaderName: string | null
    createdAt: Date | null
    finishedAt: Date | null
  }

  export type AuctionCountAggregateOutputType = {
    id: number
    roomId: number
    item: number
    startingBid: number
    minIncrement: number
    durationSeconds: number
    bidResetSeconds: number
    status: number
    endsAt: number
    currentBid: number
    leaderId: number
    leaderName: number
    createdAt: number
    finishedAt: number
    _all: number
  }


  export type AuctionAvgAggregateInputType = {
    startingBid?: true
    minIncrement?: true
    durationSeconds?: true
    bidResetSeconds?: true
    currentBid?: true
  }

  export type AuctionSumAggregateInputType = {
    startingBid?: true
    minIncrement?: true
    durationSeconds?: true
    bidResetSeconds?: true
    currentBid?: true
  }

  export type AuctionMinAggregateInputType = {
    id?: true
    roomId?: true
    item?: true
    startingBid?: true
    minIncrement?: true
    durationSeconds?: true
    bidResetSeconds?: true
    status?: true
    endsAt?: true
    currentBid?: true
    leaderId?: true
    leaderName?: true
    createdAt?: true
    finishedAt?: true
  }

  export type AuctionMaxAggregateInputType = {
    id?: true
    roomId?: true
    item?: true
    startingBid?: true
    minIncrement?: true
    durationSeconds?: true
    bidResetSeconds?: true
    status?: true
    endsAt?: true
    currentBid?: true
    leaderId?: true
    leaderName?: true
    createdAt?: true
    finishedAt?: true
  }

  export type AuctionCountAggregateInputType = {
    id?: true
    roomId?: true
    item?: true
    startingBid?: true
    minIncrement?: true
    durationSeconds?: true
    bidResetSeconds?: true
    status?: true
    endsAt?: true
    currentBid?: true
    leaderId?: true
    leaderName?: true
    createdAt?: true
    finishedAt?: true
    _all?: true
  }

  export type AuctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auction to aggregate.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auctions
    **/
    _count?: true | AuctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionMaxAggregateInputType
  }

  export type GetAuctionAggregateType<T extends AuctionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuction[P]>
      : GetScalarType<T[P], AggregateAuction[P]>
  }




  export type AuctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithAggregationInput | AuctionOrderByWithAggregationInput[]
    by: AuctionScalarFieldEnum[] | AuctionScalarFieldEnum
    having?: AuctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionCountAggregateInputType | true
    _avg?: AuctionAvgAggregateInputType
    _sum?: AuctionSumAggregateInputType
    _min?: AuctionMinAggregateInputType
    _max?: AuctionMaxAggregateInputType
  }

  export type AuctionGroupByOutputType = {
    id: string
    roomId: string
    item: string | null
    startingBid: number
    minIncrement: number
    durationSeconds: number
    bidResetSeconds: number
    status: $Enums.AuctionStatus
    endsAt: Date
    currentBid: number | null
    leaderId: string | null
    leaderName: string | null
    createdAt: Date
    finishedAt: Date | null
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  type GetAuctionGroupByPayload<T extends AuctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionGroupByOutputType[P]>
        }
      >
    >


  export type AuctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    item?: boolean
    startingBid?: boolean
    minIncrement?: boolean
    durationSeconds?: boolean
    bidResetSeconds?: boolean
    status?: boolean
    endsAt?: boolean
    currentBid?: boolean
    leaderId?: boolean
    leaderName?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    leader?: boolean | Auction$leaderArgs<ExtArgs>
    bids?: boolean | Auction$bidsArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    item?: boolean
    startingBid?: boolean
    minIncrement?: boolean
    durationSeconds?: boolean
    bidResetSeconds?: boolean
    status?: boolean
    endsAt?: boolean
    currentBid?: boolean
    leaderId?: boolean
    leaderName?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    leader?: boolean | Auction$leaderArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    item?: boolean
    startingBid?: boolean
    minIncrement?: boolean
    durationSeconds?: boolean
    bidResetSeconds?: boolean
    status?: boolean
    endsAt?: boolean
    currentBid?: boolean
    leaderId?: boolean
    leaderName?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    leader?: boolean | Auction$leaderArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectScalar = {
    id?: boolean
    roomId?: boolean
    item?: boolean
    startingBid?: boolean
    minIncrement?: boolean
    durationSeconds?: boolean
    bidResetSeconds?: boolean
    status?: boolean
    endsAt?: boolean
    currentBid?: boolean
    leaderId?: boolean
    leaderName?: boolean
    createdAt?: boolean
    finishedAt?: boolean
  }

  export type AuctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "item" | "startingBid" | "minIncrement" | "durationSeconds" | "bidResetSeconds" | "status" | "endsAt" | "currentBid" | "leaderId" | "leaderName" | "createdAt" | "finishedAt", ExtArgs["result"]["auction"]>
  export type AuctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    leader?: boolean | Auction$leaderArgs<ExtArgs>
    bids?: boolean | Auction$bidsArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    leader?: boolean | Auction$leaderArgs<ExtArgs>
  }
  export type AuctionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    leader?: boolean | Auction$leaderArgs<ExtArgs>
  }

  export type $AuctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auction"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      leader: Prisma.$PlayerPayload<ExtArgs> | null
      bids: Prisma.$AuctionBidPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      item: string | null
      startingBid: number
      minIncrement: number
      durationSeconds: number
      bidResetSeconds: number
      status: $Enums.AuctionStatus
      endsAt: Date
      currentBid: number | null
      leaderId: string | null
      leaderName: string | null
      createdAt: Date
      finishedAt: Date | null
    }, ExtArgs["result"]["auction"]>
    composites: {}
  }

  type AuctionGetPayload<S extends boolean | null | undefined | AuctionDefaultArgs> = $Result.GetResult<Prisma.$AuctionPayload, S>

  type AuctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuctionCountAggregateInputType | true
    }

  export interface AuctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auction'], meta: { name: 'Auction' } }
    /**
     * Find zero or one Auction that matches the filter.
     * @param {AuctionFindUniqueArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionFindUniqueArgs>(args: SelectSubset<T, AuctionFindUniqueArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuctionFindUniqueOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionFindFirstArgs>(args?: SelectSubset<T, AuctionFindFirstArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auctions
     * const auctions = await prisma.auction.findMany()
     * 
     * // Get first 10 Auctions
     * const auctions = await prisma.auction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionWithIdOnly = await prisma.auction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionFindManyArgs>(args?: SelectSubset<T, AuctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auction.
     * @param {AuctionCreateArgs} args - Arguments to create a Auction.
     * @example
     * // Create one Auction
     * const Auction = await prisma.auction.create({
     *   data: {
     *     // ... data to create a Auction
     *   }
     * })
     * 
     */
    create<T extends AuctionCreateArgs>(args: SelectSubset<T, AuctionCreateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auctions.
     * @param {AuctionCreateManyArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionCreateManyArgs>(args?: SelectSubset<T, AuctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auctions and returns the data saved in the database.
     * @param {AuctionCreateManyAndReturnArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuctionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auction.
     * @param {AuctionDeleteArgs} args - Arguments to delete one Auction.
     * @example
     * // Delete one Auction
     * const Auction = await prisma.auction.delete({
     *   where: {
     *     // ... filter to delete one Auction
     *   }
     * })
     * 
     */
    delete<T extends AuctionDeleteArgs>(args: SelectSubset<T, AuctionDeleteArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auction.
     * @param {AuctionUpdateArgs} args - Arguments to update one Auction.
     * @example
     * // Update one Auction
     * const auction = await prisma.auction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionUpdateArgs>(args: SelectSubset<T, AuctionUpdateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auctions.
     * @param {AuctionDeleteManyArgs} args - Arguments to filter Auctions to delete.
     * @example
     * // Delete a few Auctions
     * const { count } = await prisma.auction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionDeleteManyArgs>(args?: SelectSubset<T, AuctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionUpdateManyArgs>(args: SelectSubset<T, AuctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions and returns the data updated in the database.
     * @param {AuctionUpdateManyAndReturnArgs} args - Arguments to update many Auctions.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuctionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auction.
     * @param {AuctionUpsertArgs} args - Arguments to update or create a Auction.
     * @example
     * // Update or create a Auction
     * const auction = await prisma.auction.upsert({
     *   create: {
     *     // ... data to create a Auction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auction we want to update
     *   }
     * })
     */
    upsert<T extends AuctionUpsertArgs>(args: SelectSubset<T, AuctionUpsertArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionCountArgs} args - Arguments to filter Auctions to count.
     * @example
     * // Count the number of Auctions
     * const count = await prisma.auction.count({
     *   where: {
     *     // ... the filter for the Auctions we want to count
     *   }
     * })
    **/
    count<T extends AuctionCountArgs>(
      args?: Subset<T, AuctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuctionAggregateArgs>(args: Subset<T, AuctionAggregateArgs>): Prisma.PrismaPromise<GetAuctionAggregateType<T>>

    /**
     * Group by Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionGroupByArgs} args - Group by arguments.
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
      T extends AuctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionGroupByArgs['orderBy'] }
        : { orderBy?: AuctionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auction model
   */
  readonly fields: AuctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leader<T extends Auction$leaderArgs<ExtArgs> = {}>(args?: Subset<T, Auction$leaderArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bids<T extends Auction$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Auction$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Auction model
   */
  interface AuctionFieldRefs {
    readonly id: FieldRef<"Auction", 'String'>
    readonly roomId: FieldRef<"Auction", 'String'>
    readonly item: FieldRef<"Auction", 'String'>
    readonly startingBid: FieldRef<"Auction", 'Int'>
    readonly minIncrement: FieldRef<"Auction", 'Int'>
    readonly durationSeconds: FieldRef<"Auction", 'Int'>
    readonly bidResetSeconds: FieldRef<"Auction", 'Int'>
    readonly status: FieldRef<"Auction", 'AuctionStatus'>
    readonly endsAt: FieldRef<"Auction", 'DateTime'>
    readonly currentBid: FieldRef<"Auction", 'Int'>
    readonly leaderId: FieldRef<"Auction", 'String'>
    readonly leaderName: FieldRef<"Auction", 'String'>
    readonly createdAt: FieldRef<"Auction", 'DateTime'>
    readonly finishedAt: FieldRef<"Auction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auction findUnique
   */
  export type AuctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findUniqueOrThrow
   */
  export type AuctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findFirst
   */
  export type AuctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findFirstOrThrow
   */
  export type AuctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findMany
   */
  export type AuctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auctions to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction create
   */
  export type AuctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to create a Auction.
     */
    data: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
  }

  /**
   * Auction createMany
   */
  export type AuctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auction createManyAndReturn
   */
  export type AuctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auction update
   */
  export type AuctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to update a Auction.
     */
    data: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
    /**
     * Choose, which Auction to update.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction updateMany
   */
  export type AuctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to update.
     */
    limit?: number
  }

  /**
   * Auction updateManyAndReturn
   */
  export type AuctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auction upsert
   */
  export type AuctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The filter to search for the Auction to update in case it exists.
     */
    where: AuctionWhereUniqueInput
    /**
     * In case the Auction found by the `where` argument doesn't exist, create a new Auction with this data.
     */
    create: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
    /**
     * In case the Auction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
  }

  /**
   * Auction delete
   */
  export type AuctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter which Auction to delete.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction deleteMany
   */
  export type AuctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auctions to delete
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to delete.
     */
    limit?: number
  }

  /**
   * Auction.leader
   */
  export type Auction$leaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * Auction.bids
   */
  export type Auction$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    where?: AuctionBidWhereInput
    orderBy?: AuctionBidOrderByWithRelationInput | AuctionBidOrderByWithRelationInput[]
    cursor?: AuctionBidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionBidScalarFieldEnum | AuctionBidScalarFieldEnum[]
  }

  /**
   * Auction without action
   */
  export type AuctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
  }


  /**
   * Model AuctionBid
   */

  export type AggregateAuctionBid = {
    _count: AuctionBidCountAggregateOutputType | null
    _avg: AuctionBidAvgAggregateOutputType | null
    _sum: AuctionBidSumAggregateOutputType | null
    _min: AuctionBidMinAggregateOutputType | null
    _max: AuctionBidMaxAggregateOutputType | null
  }

  export type AuctionBidAvgAggregateOutputType = {
    amount: number | null
  }

  export type AuctionBidSumAggregateOutputType = {
    amount: number | null
  }

  export type AuctionBidMinAggregateOutputType = {
    id: string | null
    auctionId: string | null
    playerId: string | null
    playerName: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type AuctionBidMaxAggregateOutputType = {
    id: string | null
    auctionId: string | null
    playerId: string | null
    playerName: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type AuctionBidCountAggregateOutputType = {
    id: number
    auctionId: number
    playerId: number
    playerName: number
    amount: number
    createdAt: number
    _all: number
  }


  export type AuctionBidAvgAggregateInputType = {
    amount?: true
  }

  export type AuctionBidSumAggregateInputType = {
    amount?: true
  }

  export type AuctionBidMinAggregateInputType = {
    id?: true
    auctionId?: true
    playerId?: true
    playerName?: true
    amount?: true
    createdAt?: true
  }

  export type AuctionBidMaxAggregateInputType = {
    id?: true
    auctionId?: true
    playerId?: true
    playerName?: true
    amount?: true
    createdAt?: true
  }

  export type AuctionBidCountAggregateInputType = {
    id?: true
    auctionId?: true
    playerId?: true
    playerName?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type AuctionBidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuctionBid to aggregate.
     */
    where?: AuctionBidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionBids to fetch.
     */
    orderBy?: AuctionBidOrderByWithRelationInput | AuctionBidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionBidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuctionBids
    **/
    _count?: true | AuctionBidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionBidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionBidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionBidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionBidMaxAggregateInputType
  }

  export type GetAuctionBidAggregateType<T extends AuctionBidAggregateArgs> = {
        [P in keyof T & keyof AggregateAuctionBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuctionBid[P]>
      : GetScalarType<T[P], AggregateAuctionBid[P]>
  }




  export type AuctionBidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionBidWhereInput
    orderBy?: AuctionBidOrderByWithAggregationInput | AuctionBidOrderByWithAggregationInput[]
    by: AuctionBidScalarFieldEnum[] | AuctionBidScalarFieldEnum
    having?: AuctionBidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionBidCountAggregateInputType | true
    _avg?: AuctionBidAvgAggregateInputType
    _sum?: AuctionBidSumAggregateInputType
    _min?: AuctionBidMinAggregateInputType
    _max?: AuctionBidMaxAggregateInputType
  }

  export type AuctionBidGroupByOutputType = {
    id: string
    auctionId: string
    playerId: string | null
    playerName: string
    amount: number
    createdAt: Date
    _count: AuctionBidCountAggregateOutputType | null
    _avg: AuctionBidAvgAggregateOutputType | null
    _sum: AuctionBidSumAggregateOutputType | null
    _min: AuctionBidMinAggregateOutputType | null
    _max: AuctionBidMaxAggregateOutputType | null
  }

  type GetAuctionBidGroupByPayload<T extends AuctionBidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionBidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionBidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionBidGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionBidGroupByOutputType[P]>
        }
      >
    >


  export type AuctionBidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    playerId?: boolean
    playerName?: boolean
    amount?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    player?: boolean | AuctionBid$playerArgs<ExtArgs>
  }, ExtArgs["result"]["auctionBid"]>

  export type AuctionBidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    playerId?: boolean
    playerName?: boolean
    amount?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    player?: boolean | AuctionBid$playerArgs<ExtArgs>
  }, ExtArgs["result"]["auctionBid"]>

  export type AuctionBidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    playerId?: boolean
    playerName?: boolean
    amount?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    player?: boolean | AuctionBid$playerArgs<ExtArgs>
  }, ExtArgs["result"]["auctionBid"]>

  export type AuctionBidSelectScalar = {
    id?: boolean
    auctionId?: boolean
    playerId?: boolean
    playerName?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type AuctionBidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auctionId" | "playerId" | "playerName" | "amount" | "createdAt", ExtArgs["result"]["auctionBid"]>
  export type AuctionBidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    player?: boolean | AuctionBid$playerArgs<ExtArgs>
  }
  export type AuctionBidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    player?: boolean | AuctionBid$playerArgs<ExtArgs>
  }
  export type AuctionBidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    player?: boolean | AuctionBid$playerArgs<ExtArgs>
  }

  export type $AuctionBidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuctionBid"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auctionId: string
      playerId: string | null
      playerName: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["auctionBid"]>
    composites: {}
  }

  type AuctionBidGetPayload<S extends boolean | null | undefined | AuctionBidDefaultArgs> = $Result.GetResult<Prisma.$AuctionBidPayload, S>

  type AuctionBidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuctionBidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuctionBidCountAggregateInputType | true
    }

  export interface AuctionBidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuctionBid'], meta: { name: 'AuctionBid' } }
    /**
     * Find zero or one AuctionBid that matches the filter.
     * @param {AuctionBidFindUniqueArgs} args - Arguments to find a AuctionBid
     * @example
     * // Get one AuctionBid
     * const auctionBid = await prisma.auctionBid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionBidFindUniqueArgs>(args: SelectSubset<T, AuctionBidFindUniqueArgs<ExtArgs>>): Prisma__AuctionBidClient<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuctionBid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuctionBidFindUniqueOrThrowArgs} args - Arguments to find a AuctionBid
     * @example
     * // Get one AuctionBid
     * const auctionBid = await prisma.auctionBid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionBidFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionBidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionBidClient<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuctionBid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidFindFirstArgs} args - Arguments to find a AuctionBid
     * @example
     * // Get one AuctionBid
     * const auctionBid = await prisma.auctionBid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionBidFindFirstArgs>(args?: SelectSubset<T, AuctionBidFindFirstArgs<ExtArgs>>): Prisma__AuctionBidClient<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuctionBid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidFindFirstOrThrowArgs} args - Arguments to find a AuctionBid
     * @example
     * // Get one AuctionBid
     * const auctionBid = await prisma.auctionBid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionBidFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionBidFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionBidClient<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuctionBids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuctionBids
     * const auctionBids = await prisma.auctionBid.findMany()
     * 
     * // Get first 10 AuctionBids
     * const auctionBids = await prisma.auctionBid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionBidWithIdOnly = await prisma.auctionBid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionBidFindManyArgs>(args?: SelectSubset<T, AuctionBidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuctionBid.
     * @param {AuctionBidCreateArgs} args - Arguments to create a AuctionBid.
     * @example
     * // Create one AuctionBid
     * const AuctionBid = await prisma.auctionBid.create({
     *   data: {
     *     // ... data to create a AuctionBid
     *   }
     * })
     * 
     */
    create<T extends AuctionBidCreateArgs>(args: SelectSubset<T, AuctionBidCreateArgs<ExtArgs>>): Prisma__AuctionBidClient<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuctionBids.
     * @param {AuctionBidCreateManyArgs} args - Arguments to create many AuctionBids.
     * @example
     * // Create many AuctionBids
     * const auctionBid = await prisma.auctionBid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionBidCreateManyArgs>(args?: SelectSubset<T, AuctionBidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuctionBids and returns the data saved in the database.
     * @param {AuctionBidCreateManyAndReturnArgs} args - Arguments to create many AuctionBids.
     * @example
     * // Create many AuctionBids
     * const auctionBid = await prisma.auctionBid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuctionBids and only return the `id`
     * const auctionBidWithIdOnly = await prisma.auctionBid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuctionBidCreateManyAndReturnArgs>(args?: SelectSubset<T, AuctionBidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuctionBid.
     * @param {AuctionBidDeleteArgs} args - Arguments to delete one AuctionBid.
     * @example
     * // Delete one AuctionBid
     * const AuctionBid = await prisma.auctionBid.delete({
     *   where: {
     *     // ... filter to delete one AuctionBid
     *   }
     * })
     * 
     */
    delete<T extends AuctionBidDeleteArgs>(args: SelectSubset<T, AuctionBidDeleteArgs<ExtArgs>>): Prisma__AuctionBidClient<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuctionBid.
     * @param {AuctionBidUpdateArgs} args - Arguments to update one AuctionBid.
     * @example
     * // Update one AuctionBid
     * const auctionBid = await prisma.auctionBid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionBidUpdateArgs>(args: SelectSubset<T, AuctionBidUpdateArgs<ExtArgs>>): Prisma__AuctionBidClient<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuctionBids.
     * @param {AuctionBidDeleteManyArgs} args - Arguments to filter AuctionBids to delete.
     * @example
     * // Delete a few AuctionBids
     * const { count } = await prisma.auctionBid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionBidDeleteManyArgs>(args?: SelectSubset<T, AuctionBidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuctionBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuctionBids
     * const auctionBid = await prisma.auctionBid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionBidUpdateManyArgs>(args: SelectSubset<T, AuctionBidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuctionBids and returns the data updated in the database.
     * @param {AuctionBidUpdateManyAndReturnArgs} args - Arguments to update many AuctionBids.
     * @example
     * // Update many AuctionBids
     * const auctionBid = await prisma.auctionBid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuctionBids and only return the `id`
     * const auctionBidWithIdOnly = await prisma.auctionBid.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuctionBidUpdateManyAndReturnArgs>(args: SelectSubset<T, AuctionBidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuctionBid.
     * @param {AuctionBidUpsertArgs} args - Arguments to update or create a AuctionBid.
     * @example
     * // Update or create a AuctionBid
     * const auctionBid = await prisma.auctionBid.upsert({
     *   create: {
     *     // ... data to create a AuctionBid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuctionBid we want to update
     *   }
     * })
     */
    upsert<T extends AuctionBidUpsertArgs>(args: SelectSubset<T, AuctionBidUpsertArgs<ExtArgs>>): Prisma__AuctionBidClient<$Result.GetResult<Prisma.$AuctionBidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuctionBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidCountArgs} args - Arguments to filter AuctionBids to count.
     * @example
     * // Count the number of AuctionBids
     * const count = await prisma.auctionBid.count({
     *   where: {
     *     // ... the filter for the AuctionBids we want to count
     *   }
     * })
    **/
    count<T extends AuctionBidCountArgs>(
      args?: Subset<T, AuctionBidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionBidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuctionBid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuctionBidAggregateArgs>(args: Subset<T, AuctionBidAggregateArgs>): Prisma.PrismaPromise<GetAuctionBidAggregateType<T>>

    /**
     * Group by AuctionBid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidGroupByArgs} args - Group by arguments.
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
      T extends AuctionBidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionBidGroupByArgs['orderBy'] }
        : { orderBy?: AuctionBidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuctionBidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuctionBid model
   */
  readonly fields: AuctionBidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuctionBid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionBidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends AuctionBid$playerArgs<ExtArgs> = {}>(args?: Subset<T, AuctionBid$playerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuctionBid model
   */
  interface AuctionBidFieldRefs {
    readonly id: FieldRef<"AuctionBid", 'String'>
    readonly auctionId: FieldRef<"AuctionBid", 'String'>
    readonly playerId: FieldRef<"AuctionBid", 'String'>
    readonly playerName: FieldRef<"AuctionBid", 'String'>
    readonly amount: FieldRef<"AuctionBid", 'Int'>
    readonly createdAt: FieldRef<"AuctionBid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuctionBid findUnique
   */
  export type AuctionBidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBid to fetch.
     */
    where: AuctionBidWhereUniqueInput
  }

  /**
   * AuctionBid findUniqueOrThrow
   */
  export type AuctionBidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBid to fetch.
     */
    where: AuctionBidWhereUniqueInput
  }

  /**
   * AuctionBid findFirst
   */
  export type AuctionBidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBid to fetch.
     */
    where?: AuctionBidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionBids to fetch.
     */
    orderBy?: AuctionBidOrderByWithRelationInput | AuctionBidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuctionBids.
     */
    cursor?: AuctionBidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuctionBids.
     */
    distinct?: AuctionBidScalarFieldEnum | AuctionBidScalarFieldEnum[]
  }

  /**
   * AuctionBid findFirstOrThrow
   */
  export type AuctionBidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBid to fetch.
     */
    where?: AuctionBidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionBids to fetch.
     */
    orderBy?: AuctionBidOrderByWithRelationInput | AuctionBidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuctionBids.
     */
    cursor?: AuctionBidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuctionBids.
     */
    distinct?: AuctionBidScalarFieldEnum | AuctionBidScalarFieldEnum[]
  }

  /**
   * AuctionBid findMany
   */
  export type AuctionBidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBids to fetch.
     */
    where?: AuctionBidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionBids to fetch.
     */
    orderBy?: AuctionBidOrderByWithRelationInput | AuctionBidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuctionBids.
     */
    cursor?: AuctionBidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionBids.
     */
    skip?: number
    distinct?: AuctionBidScalarFieldEnum | AuctionBidScalarFieldEnum[]
  }

  /**
   * AuctionBid create
   */
  export type AuctionBidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * The data needed to create a AuctionBid.
     */
    data: XOR<AuctionBidCreateInput, AuctionBidUncheckedCreateInput>
  }

  /**
   * AuctionBid createMany
   */
  export type AuctionBidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuctionBids.
     */
    data: AuctionBidCreateManyInput | AuctionBidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuctionBid createManyAndReturn
   */
  export type AuctionBidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * The data used to create many AuctionBids.
     */
    data: AuctionBidCreateManyInput | AuctionBidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuctionBid update
   */
  export type AuctionBidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * The data needed to update a AuctionBid.
     */
    data: XOR<AuctionBidUpdateInput, AuctionBidUncheckedUpdateInput>
    /**
     * Choose, which AuctionBid to update.
     */
    where: AuctionBidWhereUniqueInput
  }

  /**
   * AuctionBid updateMany
   */
  export type AuctionBidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuctionBids.
     */
    data: XOR<AuctionBidUpdateManyMutationInput, AuctionBidUncheckedUpdateManyInput>
    /**
     * Filter which AuctionBids to update
     */
    where?: AuctionBidWhereInput
    /**
     * Limit how many AuctionBids to update.
     */
    limit?: number
  }

  /**
   * AuctionBid updateManyAndReturn
   */
  export type AuctionBidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * The data used to update AuctionBids.
     */
    data: XOR<AuctionBidUpdateManyMutationInput, AuctionBidUncheckedUpdateManyInput>
    /**
     * Filter which AuctionBids to update
     */
    where?: AuctionBidWhereInput
    /**
     * Limit how many AuctionBids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuctionBid upsert
   */
  export type AuctionBidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * The filter to search for the AuctionBid to update in case it exists.
     */
    where: AuctionBidWhereUniqueInput
    /**
     * In case the AuctionBid found by the `where` argument doesn't exist, create a new AuctionBid with this data.
     */
    create: XOR<AuctionBidCreateInput, AuctionBidUncheckedCreateInput>
    /**
     * In case the AuctionBid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionBidUpdateInput, AuctionBidUncheckedUpdateInput>
  }

  /**
   * AuctionBid delete
   */
  export type AuctionBidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
    /**
     * Filter which AuctionBid to delete.
     */
    where: AuctionBidWhereUniqueInput
  }

  /**
   * AuctionBid deleteMany
   */
  export type AuctionBidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuctionBids to delete
     */
    where?: AuctionBidWhereInput
    /**
     * Limit how many AuctionBids to delete.
     */
    limit?: number
  }

  /**
   * AuctionBid.player
   */
  export type AuctionBid$playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * AuctionBid without action
   */
  export type AuctionBidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBid
     */
    select?: AuctionBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionBid
     */
    omit?: AuctionBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    PlayerLimit: 'PlayerLimit',
    PlayersCanEditPoints: 'PlayersCanEditPoints',
    PlayersCanEditName: 'PlayersCanEditName',
    EmojisEnabled: 'EmojisEnabled',
    EmojiLimit: 'EmojiLimit',
    EmojiCooldown: 'EmojiCooldown'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    roomId: 'roomId',
    points: 'points'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const RoomEmojiScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    playerId: 'playerId',
    emoji: 'emoji',
    createdAt: 'createdAt'
  };

  export type RoomEmojiScalarFieldEnum = (typeof RoomEmojiScalarFieldEnum)[keyof typeof RoomEmojiScalarFieldEnum]


  export const AuctionScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    item: 'item',
    startingBid: 'startingBid',
    minIncrement: 'minIncrement',
    durationSeconds: 'durationSeconds',
    bidResetSeconds: 'bidResetSeconds',
    status: 'status',
    endsAt: 'endsAt',
    currentBid: 'currentBid',
    leaderId: 'leaderId',
    leaderName: 'leaderName',
    createdAt: 'createdAt',
    finishedAt: 'finishedAt'
  };

  export type AuctionScalarFieldEnum = (typeof AuctionScalarFieldEnum)[keyof typeof AuctionScalarFieldEnum]


  export const AuctionBidScalarFieldEnum: {
    id: 'id',
    auctionId: 'auctionId',
    playerId: 'playerId',
    playerName: 'playerName',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type AuctionBidScalarFieldEnum = (typeof AuctionBidScalarFieldEnum)[keyof typeof AuctionBidScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AuctionStatus'
   */
  export type EnumAuctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionStatus'>
    


  /**
   * Reference to a field of type 'AuctionStatus[]'
   */
  export type ListEnumAuctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    rooms?: RoomListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    rooms?: RoomListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    ownerId?: StringFilter<"Room"> | string
    PlayerLimit?: IntFilter<"Room"> | number
    PlayersCanEditPoints?: BoolFilter<"Room"> | boolean
    PlayersCanEditName?: BoolFilter<"Room"> | boolean
    EmojisEnabled?: BoolFilter<"Room"> | boolean
    EmojiLimit?: IntFilter<"Room"> | number
    EmojiCooldown?: IntFilter<"Room"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: PlayerListRelationFilter
    emojis?: RoomEmojiListRelationFilter
    auctions?: AuctionListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    PlayerLimit?: SortOrder
    PlayersCanEditPoints?: SortOrder
    PlayersCanEditName?: SortOrder
    EmojisEnabled?: SortOrder
    EmojiLimit?: SortOrder
    EmojiCooldown?: SortOrder
    owner?: UserOrderByWithRelationInput
    players?: PlayerOrderByRelationAggregateInput
    emojis?: RoomEmojiOrderByRelationAggregateInput
    auctions?: AuctionOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    ownerId?: StringFilter<"Room"> | string
    PlayerLimit?: IntFilter<"Room"> | number
    PlayersCanEditPoints?: BoolFilter<"Room"> | boolean
    PlayersCanEditName?: BoolFilter<"Room"> | boolean
    EmojisEnabled?: BoolFilter<"Room"> | boolean
    EmojiLimit?: IntFilter<"Room"> | number
    EmojiCooldown?: IntFilter<"Room"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: PlayerListRelationFilter
    emojis?: RoomEmojiListRelationFilter
    auctions?: AuctionListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    PlayerLimit?: SortOrder
    PlayersCanEditPoints?: SortOrder
    PlayersCanEditName?: SortOrder
    EmojisEnabled?: SortOrder
    EmojiLimit?: SortOrder
    EmojiCooldown?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    ownerId?: StringWithAggregatesFilter<"Room"> | string
    PlayerLimit?: IntWithAggregatesFilter<"Room"> | number
    PlayersCanEditPoints?: BoolWithAggregatesFilter<"Room"> | boolean
    PlayersCanEditName?: BoolWithAggregatesFilter<"Room"> | boolean
    EmojisEnabled?: BoolWithAggregatesFilter<"Room"> | boolean
    EmojiLimit?: IntWithAggregatesFilter<"Room"> | number
    EmojiCooldown?: IntWithAggregatesFilter<"Room"> | number
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    avatar?: StringNullableFilter<"Player"> | string | null
    roomId?: StringFilter<"Player"> | string
    points?: IntFilter<"Player"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    emojis?: RoomEmojiListRelationFilter
    leadingAuctions?: AuctionListRelationFilter
    bids?: AuctionBidListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    roomId?: SortOrder
    points?: SortOrder
    room?: RoomOrderByWithRelationInput
    emojis?: RoomEmojiOrderByRelationAggregateInput
    leadingAuctions?: AuctionOrderByRelationAggregateInput
    bids?: AuctionBidOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    avatar?: StringNullableFilter<"Player"> | string | null
    roomId?: StringFilter<"Player"> | string
    points?: IntFilter<"Player"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    emojis?: RoomEmojiListRelationFilter
    leadingAuctions?: AuctionListRelationFilter
    bids?: AuctionBidListRelationFilter
  }, "id">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    roomId?: SortOrder
    points?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    avatar?: StringNullableWithAggregatesFilter<"Player"> | string | null
    roomId?: StringWithAggregatesFilter<"Player"> | string
    points?: IntWithAggregatesFilter<"Player"> | number
  }

  export type RoomEmojiWhereInput = {
    AND?: RoomEmojiWhereInput | RoomEmojiWhereInput[]
    OR?: RoomEmojiWhereInput[]
    NOT?: RoomEmojiWhereInput | RoomEmojiWhereInput[]
    id?: StringFilter<"RoomEmoji"> | string
    roomId?: StringFilter<"RoomEmoji"> | string
    playerId?: StringFilter<"RoomEmoji"> | string
    emoji?: StringFilter<"RoomEmoji"> | string
    createdAt?: DateTimeFilter<"RoomEmoji"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type RoomEmojiOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    playerId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type RoomEmojiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomEmojiWhereInput | RoomEmojiWhereInput[]
    OR?: RoomEmojiWhereInput[]
    NOT?: RoomEmojiWhereInput | RoomEmojiWhereInput[]
    roomId?: StringFilter<"RoomEmoji"> | string
    playerId?: StringFilter<"RoomEmoji"> | string
    emoji?: StringFilter<"RoomEmoji"> | string
    createdAt?: DateTimeFilter<"RoomEmoji"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type RoomEmojiOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    playerId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    _count?: RoomEmojiCountOrderByAggregateInput
    _max?: RoomEmojiMaxOrderByAggregateInput
    _min?: RoomEmojiMinOrderByAggregateInput
  }

  export type RoomEmojiScalarWhereWithAggregatesInput = {
    AND?: RoomEmojiScalarWhereWithAggregatesInput | RoomEmojiScalarWhereWithAggregatesInput[]
    OR?: RoomEmojiScalarWhereWithAggregatesInput[]
    NOT?: RoomEmojiScalarWhereWithAggregatesInput | RoomEmojiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomEmoji"> | string
    roomId?: StringWithAggregatesFilter<"RoomEmoji"> | string
    playerId?: StringWithAggregatesFilter<"RoomEmoji"> | string
    emoji?: StringWithAggregatesFilter<"RoomEmoji"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomEmoji"> | Date | string
  }

  export type AuctionWhereInput = {
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    id?: StringFilter<"Auction"> | string
    roomId?: StringFilter<"Auction"> | string
    item?: StringNullableFilter<"Auction"> | string | null
    startingBid?: IntFilter<"Auction"> | number
    minIncrement?: IntFilter<"Auction"> | number
    durationSeconds?: IntFilter<"Auction"> | number
    bidResetSeconds?: IntFilter<"Auction"> | number
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    endsAt?: DateTimeFilter<"Auction"> | Date | string
    currentBid?: IntNullableFilter<"Auction"> | number | null
    leaderId?: StringNullableFilter<"Auction"> | string | null
    leaderName?: StringNullableFilter<"Auction"> | string | null
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Auction"> | Date | string | null
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    leader?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    bids?: AuctionBidListRelationFilter
  }

  export type AuctionOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    item?: SortOrderInput | SortOrder
    startingBid?: SortOrder
    minIncrement?: SortOrder
    durationSeconds?: SortOrder
    bidResetSeconds?: SortOrder
    status?: SortOrder
    endsAt?: SortOrder
    currentBid?: SortOrderInput | SortOrder
    leaderId?: SortOrderInput | SortOrder
    leaderName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    room?: RoomOrderByWithRelationInput
    leader?: PlayerOrderByWithRelationInput
    bids?: AuctionBidOrderByRelationAggregateInput
  }

  export type AuctionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    roomId?: StringFilter<"Auction"> | string
    item?: StringNullableFilter<"Auction"> | string | null
    startingBid?: IntFilter<"Auction"> | number
    minIncrement?: IntFilter<"Auction"> | number
    durationSeconds?: IntFilter<"Auction"> | number
    bidResetSeconds?: IntFilter<"Auction"> | number
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    endsAt?: DateTimeFilter<"Auction"> | Date | string
    currentBid?: IntNullableFilter<"Auction"> | number | null
    leaderId?: StringNullableFilter<"Auction"> | string | null
    leaderName?: StringNullableFilter<"Auction"> | string | null
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Auction"> | Date | string | null
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    leader?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    bids?: AuctionBidListRelationFilter
  }, "id">

  export type AuctionOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    item?: SortOrderInput | SortOrder
    startingBid?: SortOrder
    minIncrement?: SortOrder
    durationSeconds?: SortOrder
    bidResetSeconds?: SortOrder
    status?: SortOrder
    endsAt?: SortOrder
    currentBid?: SortOrderInput | SortOrder
    leaderId?: SortOrderInput | SortOrder
    leaderName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    _count?: AuctionCountOrderByAggregateInput
    _avg?: AuctionAvgOrderByAggregateInput
    _max?: AuctionMaxOrderByAggregateInput
    _min?: AuctionMinOrderByAggregateInput
    _sum?: AuctionSumOrderByAggregateInput
  }

  export type AuctionScalarWhereWithAggregatesInput = {
    AND?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    OR?: AuctionScalarWhereWithAggregatesInput[]
    NOT?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auction"> | string
    roomId?: StringWithAggregatesFilter<"Auction"> | string
    item?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    startingBid?: IntWithAggregatesFilter<"Auction"> | number
    minIncrement?: IntWithAggregatesFilter<"Auction"> | number
    durationSeconds?: IntWithAggregatesFilter<"Auction"> | number
    bidResetSeconds?: IntWithAggregatesFilter<"Auction"> | number
    status?: EnumAuctionStatusWithAggregatesFilter<"Auction"> | $Enums.AuctionStatus
    endsAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    currentBid?: IntNullableWithAggregatesFilter<"Auction"> | number | null
    leaderId?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    leaderName?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Auction"> | Date | string | null
  }

  export type AuctionBidWhereInput = {
    AND?: AuctionBidWhereInput | AuctionBidWhereInput[]
    OR?: AuctionBidWhereInput[]
    NOT?: AuctionBidWhereInput | AuctionBidWhereInput[]
    id?: StringFilter<"AuctionBid"> | string
    auctionId?: StringFilter<"AuctionBid"> | string
    playerId?: StringNullableFilter<"AuctionBid"> | string | null
    playerName?: StringFilter<"AuctionBid"> | string
    amount?: IntFilter<"AuctionBid"> | number
    createdAt?: DateTimeFilter<"AuctionBid"> | Date | string
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
    player?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
  }

  export type AuctionBidOrderByWithRelationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    playerId?: SortOrderInput | SortOrder
    playerName?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    auction?: AuctionOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type AuctionBidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuctionBidWhereInput | AuctionBidWhereInput[]
    OR?: AuctionBidWhereInput[]
    NOT?: AuctionBidWhereInput | AuctionBidWhereInput[]
    auctionId?: StringFilter<"AuctionBid"> | string
    playerId?: StringNullableFilter<"AuctionBid"> | string | null
    playerName?: StringFilter<"AuctionBid"> | string
    amount?: IntFilter<"AuctionBid"> | number
    createdAt?: DateTimeFilter<"AuctionBid"> | Date | string
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
    player?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
  }, "id">

  export type AuctionBidOrderByWithAggregationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    playerId?: SortOrderInput | SortOrder
    playerName?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: AuctionBidCountOrderByAggregateInput
    _avg?: AuctionBidAvgOrderByAggregateInput
    _max?: AuctionBidMaxOrderByAggregateInput
    _min?: AuctionBidMinOrderByAggregateInput
    _sum?: AuctionBidSumOrderByAggregateInput
  }

  export type AuctionBidScalarWhereWithAggregatesInput = {
    AND?: AuctionBidScalarWhereWithAggregatesInput | AuctionBidScalarWhereWithAggregatesInput[]
    OR?: AuctionBidScalarWhereWithAggregatesInput[]
    NOT?: AuctionBidScalarWhereWithAggregatesInput | AuctionBidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuctionBid"> | string
    auctionId?: StringWithAggregatesFilter<"AuctionBid"> | string
    playerId?: StringNullableWithAggregatesFilter<"AuctionBid"> | string | null
    playerName?: StringWithAggregatesFilter<"AuctionBid"> | string
    amount?: IntWithAggregatesFilter<"AuctionBid"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuctionBid"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    rooms?: RoomCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    rooms?: RoomUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    owner: UserCreateNestedOneWithoutRoomsInput
    players?: PlayerCreateNestedManyWithoutRoomInput
    emojis?: RoomEmojiCreateNestedManyWithoutRoomInput
    auctions?: AuctionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    players?: PlayerUncheckedCreateNestedManyWithoutRoomInput
    emojis?: RoomEmojiUncheckedCreateNestedManyWithoutRoomInput
    auctions?: AuctionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
    players?: PlayerUpdateManyWithoutRoomNestedInput
    emojis?: RoomEmojiUpdateManyWithoutRoomNestedInput
    auctions?: AuctionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    players?: PlayerUncheckedUpdateManyWithoutRoomNestedInput
    emojis?: RoomEmojiUncheckedUpdateManyWithoutRoomNestedInput
    auctions?: AuctionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    ownerId: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    room: RoomCreateNestedOneWithoutPlayersInput
    emojis?: RoomEmojiCreateNestedManyWithoutPlayerInput
    leadingAuctions?: AuctionCreateNestedManyWithoutLeaderInput
    bids?: AuctionBidCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    roomId: string
    points?: number
    emojis?: RoomEmojiUncheckedCreateNestedManyWithoutPlayerInput
    leadingAuctions?: AuctionUncheckedCreateNestedManyWithoutLeaderInput
    bids?: AuctionBidUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutPlayersNestedInput
    emojis?: RoomEmojiUpdateManyWithoutPlayerNestedInput
    leadingAuctions?: AuctionUpdateManyWithoutLeaderNestedInput
    bids?: AuctionBidUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    emojis?: RoomEmojiUncheckedUpdateManyWithoutPlayerNestedInput
    leadingAuctions?: AuctionUncheckedUpdateManyWithoutLeaderNestedInput
    bids?: AuctionBidUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    avatar?: string | null
    roomId: string
    points?: number
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type RoomEmojiCreateInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutEmojisInput
    player: PlayerCreateNestedOneWithoutEmojisInput
  }

  export type RoomEmojiUncheckedCreateInput = {
    id?: string
    roomId: string
    playerId: string
    emoji: string
    createdAt?: Date | string
  }

  export type RoomEmojiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutEmojisNestedInput
    player?: PlayerUpdateOneRequiredWithoutEmojisNestedInput
  }

  export type RoomEmojiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomEmojiCreateManyInput = {
    id?: string
    roomId: string
    playerId: string
    emoji: string
    createdAt?: Date | string
  }

  export type RoomEmojiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomEmojiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionCreateInput = {
    id?: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
    room: RoomCreateNestedOneWithoutAuctionsInput
    leader?: PlayerCreateNestedOneWithoutLeadingAuctionsInput
    bids?: AuctionBidCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateInput = {
    id?: string
    roomId: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderId?: string | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
    bids?: AuctionBidUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: RoomUpdateOneRequiredWithoutAuctionsNestedInput
    leader?: PlayerUpdateOneWithoutLeadingAuctionsNestedInput
    bids?: AuctionBidUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bids?: AuctionBidUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateManyInput = {
    id?: string
    roomId: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderId?: string | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type AuctionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuctionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuctionBidCreateInput = {
    id?: string
    playerName: string
    amount: number
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutBidsInput
    player?: PlayerCreateNestedOneWithoutBidsInput
  }

  export type AuctionBidUncheckedCreateInput = {
    id?: string
    auctionId: string
    playerId?: string | null
    playerName: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutBidsNestedInput
    player?: PlayerUpdateOneWithoutBidsNestedInput
  }

  export type AuctionBidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidCreateManyInput = {
    id?: string
    auctionId: string
    playerId?: string | null
    playerName: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type RoomEmojiListRelationFilter = {
    every?: RoomEmojiWhereInput
    some?: RoomEmojiWhereInput
    none?: RoomEmojiWhereInput
  }

  export type AuctionListRelationFilter = {
    every?: AuctionWhereInput
    some?: AuctionWhereInput
    none?: AuctionWhereInput
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomEmojiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuctionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    PlayerLimit?: SortOrder
    PlayersCanEditPoints?: SortOrder
    PlayersCanEditName?: SortOrder
    EmojisEnabled?: SortOrder
    EmojiLimit?: SortOrder
    EmojiCooldown?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    PlayerLimit?: SortOrder
    EmojiLimit?: SortOrder
    EmojiCooldown?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    PlayerLimit?: SortOrder
    PlayersCanEditPoints?: SortOrder
    PlayersCanEditName?: SortOrder
    EmojisEnabled?: SortOrder
    EmojiLimit?: SortOrder
    EmojiCooldown?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    PlayerLimit?: SortOrder
    PlayersCanEditPoints?: SortOrder
    PlayersCanEditName?: SortOrder
    EmojisEnabled?: SortOrder
    EmojiLimit?: SortOrder
    EmojiCooldown?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    PlayerLimit?: SortOrder
    EmojiLimit?: SortOrder
    EmojiCooldown?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type AuctionBidListRelationFilter = {
    every?: AuctionBidWhereInput
    some?: AuctionBidWhereInput
    none?: AuctionBidWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuctionBidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    roomId?: SortOrder
    points?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    roomId?: SortOrder
    points?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    roomId?: SortOrder
    points?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type RoomEmojiCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    playerId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomEmojiMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    playerId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomEmojiMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    playerId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
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

  export type EnumAuctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusFilter<$PrismaModel> | $Enums.AuctionStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type PlayerNullableScalarRelationFilter = {
    is?: PlayerWhereInput | null
    isNot?: PlayerWhereInput | null
  }

  export type AuctionCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    item?: SortOrder
    startingBid?: SortOrder
    minIncrement?: SortOrder
    durationSeconds?: SortOrder
    bidResetSeconds?: SortOrder
    status?: SortOrder
    endsAt?: SortOrder
    currentBid?: SortOrder
    leaderId?: SortOrder
    leaderName?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type AuctionAvgOrderByAggregateInput = {
    startingBid?: SortOrder
    minIncrement?: SortOrder
    durationSeconds?: SortOrder
    bidResetSeconds?: SortOrder
    currentBid?: SortOrder
  }

  export type AuctionMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    item?: SortOrder
    startingBid?: SortOrder
    minIncrement?: SortOrder
    durationSeconds?: SortOrder
    bidResetSeconds?: SortOrder
    status?: SortOrder
    endsAt?: SortOrder
    currentBid?: SortOrder
    leaderId?: SortOrder
    leaderName?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type AuctionMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    item?: SortOrder
    startingBid?: SortOrder
    minIncrement?: SortOrder
    durationSeconds?: SortOrder
    bidResetSeconds?: SortOrder
    status?: SortOrder
    endsAt?: SortOrder
    currentBid?: SortOrder
    leaderId?: SortOrder
    leaderName?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type AuctionSumOrderByAggregateInput = {
    startingBid?: SortOrder
    minIncrement?: SortOrder
    durationSeconds?: SortOrder
    bidResetSeconds?: SortOrder
    currentBid?: SortOrder
  }

  export type EnumAuctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionStatusFilter<$PrismaModel>
    _max?: NestedEnumAuctionStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type AuctionScalarRelationFilter = {
    is?: AuctionWhereInput
    isNot?: AuctionWhereInput
  }

  export type AuctionBidCountOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    playerId?: SortOrder
    playerName?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionBidAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AuctionBidMaxOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    playerId?: SortOrder
    playerName?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionBidMinOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    playerId?: SortOrder
    playerName?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionBidSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RoomCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RoomUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutOwnerInput | RoomUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutOwnerInput | RoomUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutOwnerInput | RoomUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutOwnerInput | RoomUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutOwnerInput | RoomUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutOwnerInput | RoomUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type PlayerCreateNestedManyWithoutRoomInput = {
    create?: XOR<PlayerCreateWithoutRoomInput, PlayerUncheckedCreateWithoutRoomInput> | PlayerCreateWithoutRoomInput[] | PlayerUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutRoomInput | PlayerCreateOrConnectWithoutRoomInput[]
    createMany?: PlayerCreateManyRoomInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type RoomEmojiCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomEmojiCreateWithoutRoomInput, RoomEmojiUncheckedCreateWithoutRoomInput> | RoomEmojiCreateWithoutRoomInput[] | RoomEmojiUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomEmojiCreateOrConnectWithoutRoomInput | RoomEmojiCreateOrConnectWithoutRoomInput[]
    createMany?: RoomEmojiCreateManyRoomInputEnvelope
    connect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
  }

  export type AuctionCreateNestedManyWithoutRoomInput = {
    create?: XOR<AuctionCreateWithoutRoomInput, AuctionUncheckedCreateWithoutRoomInput> | AuctionCreateWithoutRoomInput[] | AuctionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutRoomInput | AuctionCreateOrConnectWithoutRoomInput[]
    createMany?: AuctionCreateManyRoomInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<PlayerCreateWithoutRoomInput, PlayerUncheckedCreateWithoutRoomInput> | PlayerCreateWithoutRoomInput[] | PlayerUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutRoomInput | PlayerCreateOrConnectWithoutRoomInput[]
    createMany?: PlayerCreateManyRoomInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type RoomEmojiUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomEmojiCreateWithoutRoomInput, RoomEmojiUncheckedCreateWithoutRoomInput> | RoomEmojiCreateWithoutRoomInput[] | RoomEmojiUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomEmojiCreateOrConnectWithoutRoomInput | RoomEmojiCreateOrConnectWithoutRoomInput[]
    createMany?: RoomEmojiCreateManyRoomInputEnvelope
    connect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<AuctionCreateWithoutRoomInput, AuctionUncheckedCreateWithoutRoomInput> | AuctionCreateWithoutRoomInput[] | AuctionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutRoomInput | AuctionCreateOrConnectWithoutRoomInput[]
    createMany?: AuctionCreateManyRoomInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type PlayerUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PlayerCreateWithoutRoomInput, PlayerUncheckedCreateWithoutRoomInput> | PlayerCreateWithoutRoomInput[] | PlayerUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutRoomInput | PlayerCreateOrConnectWithoutRoomInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutRoomInput | PlayerUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PlayerCreateManyRoomInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutRoomInput | PlayerUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutRoomInput | PlayerUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type RoomEmojiUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomEmojiCreateWithoutRoomInput, RoomEmojiUncheckedCreateWithoutRoomInput> | RoomEmojiCreateWithoutRoomInput[] | RoomEmojiUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomEmojiCreateOrConnectWithoutRoomInput | RoomEmojiCreateOrConnectWithoutRoomInput[]
    upsert?: RoomEmojiUpsertWithWhereUniqueWithoutRoomInput | RoomEmojiUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomEmojiCreateManyRoomInputEnvelope
    set?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    disconnect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    delete?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    connect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    update?: RoomEmojiUpdateWithWhereUniqueWithoutRoomInput | RoomEmojiUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomEmojiUpdateManyWithWhereWithoutRoomInput | RoomEmojiUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomEmojiScalarWhereInput | RoomEmojiScalarWhereInput[]
  }

  export type AuctionUpdateManyWithoutRoomNestedInput = {
    create?: XOR<AuctionCreateWithoutRoomInput, AuctionUncheckedCreateWithoutRoomInput> | AuctionCreateWithoutRoomInput[] | AuctionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutRoomInput | AuctionCreateOrConnectWithoutRoomInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutRoomInput | AuctionUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: AuctionCreateManyRoomInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutRoomInput | AuctionUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutRoomInput | AuctionUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PlayerCreateWithoutRoomInput, PlayerUncheckedCreateWithoutRoomInput> | PlayerCreateWithoutRoomInput[] | PlayerUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutRoomInput | PlayerCreateOrConnectWithoutRoomInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutRoomInput | PlayerUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PlayerCreateManyRoomInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutRoomInput | PlayerUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutRoomInput | PlayerUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type RoomEmojiUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomEmojiCreateWithoutRoomInput, RoomEmojiUncheckedCreateWithoutRoomInput> | RoomEmojiCreateWithoutRoomInput[] | RoomEmojiUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomEmojiCreateOrConnectWithoutRoomInput | RoomEmojiCreateOrConnectWithoutRoomInput[]
    upsert?: RoomEmojiUpsertWithWhereUniqueWithoutRoomInput | RoomEmojiUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomEmojiCreateManyRoomInputEnvelope
    set?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    disconnect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    delete?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    connect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    update?: RoomEmojiUpdateWithWhereUniqueWithoutRoomInput | RoomEmojiUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomEmojiUpdateManyWithWhereWithoutRoomInput | RoomEmojiUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomEmojiScalarWhereInput | RoomEmojiScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<AuctionCreateWithoutRoomInput, AuctionUncheckedCreateWithoutRoomInput> | AuctionCreateWithoutRoomInput[] | AuctionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutRoomInput | AuctionCreateOrConnectWithoutRoomInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutRoomInput | AuctionUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: AuctionCreateManyRoomInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutRoomInput | AuctionUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutRoomInput | AuctionUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutPlayersInput = {
    create?: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPlayersInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomEmojiCreateNestedManyWithoutPlayerInput = {
    create?: XOR<RoomEmojiCreateWithoutPlayerInput, RoomEmojiUncheckedCreateWithoutPlayerInput> | RoomEmojiCreateWithoutPlayerInput[] | RoomEmojiUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RoomEmojiCreateOrConnectWithoutPlayerInput | RoomEmojiCreateOrConnectWithoutPlayerInput[]
    createMany?: RoomEmojiCreateManyPlayerInputEnvelope
    connect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
  }

  export type AuctionCreateNestedManyWithoutLeaderInput = {
    create?: XOR<AuctionCreateWithoutLeaderInput, AuctionUncheckedCreateWithoutLeaderInput> | AuctionCreateWithoutLeaderInput[] | AuctionUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutLeaderInput | AuctionCreateOrConnectWithoutLeaderInput[]
    createMany?: AuctionCreateManyLeaderInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionBidCreateNestedManyWithoutPlayerInput = {
    create?: XOR<AuctionBidCreateWithoutPlayerInput, AuctionBidUncheckedCreateWithoutPlayerInput> | AuctionBidCreateWithoutPlayerInput[] | AuctionBidUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: AuctionBidCreateOrConnectWithoutPlayerInput | AuctionBidCreateOrConnectWithoutPlayerInput[]
    createMany?: AuctionBidCreateManyPlayerInputEnvelope
    connect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
  }

  export type RoomEmojiUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<RoomEmojiCreateWithoutPlayerInput, RoomEmojiUncheckedCreateWithoutPlayerInput> | RoomEmojiCreateWithoutPlayerInput[] | RoomEmojiUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RoomEmojiCreateOrConnectWithoutPlayerInput | RoomEmojiCreateOrConnectWithoutPlayerInput[]
    createMany?: RoomEmojiCreateManyPlayerInputEnvelope
    connect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutLeaderInput = {
    create?: XOR<AuctionCreateWithoutLeaderInput, AuctionUncheckedCreateWithoutLeaderInput> | AuctionCreateWithoutLeaderInput[] | AuctionUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutLeaderInput | AuctionCreateOrConnectWithoutLeaderInput[]
    createMany?: AuctionCreateManyLeaderInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionBidUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<AuctionBidCreateWithoutPlayerInput, AuctionBidUncheckedCreateWithoutPlayerInput> | AuctionBidCreateWithoutPlayerInput[] | AuctionBidUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: AuctionBidCreateOrConnectWithoutPlayerInput | AuctionBidCreateOrConnectWithoutPlayerInput[]
    createMany?: AuctionBidCreateManyPlayerInputEnvelope
    connect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoomUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPlayersInput
    upsert?: RoomUpsertWithoutPlayersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutPlayersInput, RoomUpdateWithoutPlayersInput>, RoomUncheckedUpdateWithoutPlayersInput>
  }

  export type RoomEmojiUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<RoomEmojiCreateWithoutPlayerInput, RoomEmojiUncheckedCreateWithoutPlayerInput> | RoomEmojiCreateWithoutPlayerInput[] | RoomEmojiUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RoomEmojiCreateOrConnectWithoutPlayerInput | RoomEmojiCreateOrConnectWithoutPlayerInput[]
    upsert?: RoomEmojiUpsertWithWhereUniqueWithoutPlayerInput | RoomEmojiUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: RoomEmojiCreateManyPlayerInputEnvelope
    set?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    disconnect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    delete?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    connect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    update?: RoomEmojiUpdateWithWhereUniqueWithoutPlayerInput | RoomEmojiUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: RoomEmojiUpdateManyWithWhereWithoutPlayerInput | RoomEmojiUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: RoomEmojiScalarWhereInput | RoomEmojiScalarWhereInput[]
  }

  export type AuctionUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<AuctionCreateWithoutLeaderInput, AuctionUncheckedCreateWithoutLeaderInput> | AuctionCreateWithoutLeaderInput[] | AuctionUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutLeaderInput | AuctionCreateOrConnectWithoutLeaderInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutLeaderInput | AuctionUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: AuctionCreateManyLeaderInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutLeaderInput | AuctionUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutLeaderInput | AuctionUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type AuctionBidUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<AuctionBidCreateWithoutPlayerInput, AuctionBidUncheckedCreateWithoutPlayerInput> | AuctionBidCreateWithoutPlayerInput[] | AuctionBidUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: AuctionBidCreateOrConnectWithoutPlayerInput | AuctionBidCreateOrConnectWithoutPlayerInput[]
    upsert?: AuctionBidUpsertWithWhereUniqueWithoutPlayerInput | AuctionBidUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: AuctionBidCreateManyPlayerInputEnvelope
    set?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    disconnect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    delete?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    connect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    update?: AuctionBidUpdateWithWhereUniqueWithoutPlayerInput | AuctionBidUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: AuctionBidUpdateManyWithWhereWithoutPlayerInput | AuctionBidUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: AuctionBidScalarWhereInput | AuctionBidScalarWhereInput[]
  }

  export type RoomEmojiUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<RoomEmojiCreateWithoutPlayerInput, RoomEmojiUncheckedCreateWithoutPlayerInput> | RoomEmojiCreateWithoutPlayerInput[] | RoomEmojiUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RoomEmojiCreateOrConnectWithoutPlayerInput | RoomEmojiCreateOrConnectWithoutPlayerInput[]
    upsert?: RoomEmojiUpsertWithWhereUniqueWithoutPlayerInput | RoomEmojiUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: RoomEmojiCreateManyPlayerInputEnvelope
    set?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    disconnect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    delete?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    connect?: RoomEmojiWhereUniqueInput | RoomEmojiWhereUniqueInput[]
    update?: RoomEmojiUpdateWithWhereUniqueWithoutPlayerInput | RoomEmojiUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: RoomEmojiUpdateManyWithWhereWithoutPlayerInput | RoomEmojiUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: RoomEmojiScalarWhereInput | RoomEmojiScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<AuctionCreateWithoutLeaderInput, AuctionUncheckedCreateWithoutLeaderInput> | AuctionCreateWithoutLeaderInput[] | AuctionUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutLeaderInput | AuctionCreateOrConnectWithoutLeaderInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutLeaderInput | AuctionUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: AuctionCreateManyLeaderInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutLeaderInput | AuctionUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutLeaderInput | AuctionUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type AuctionBidUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<AuctionBidCreateWithoutPlayerInput, AuctionBidUncheckedCreateWithoutPlayerInput> | AuctionBidCreateWithoutPlayerInput[] | AuctionBidUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: AuctionBidCreateOrConnectWithoutPlayerInput | AuctionBidCreateOrConnectWithoutPlayerInput[]
    upsert?: AuctionBidUpsertWithWhereUniqueWithoutPlayerInput | AuctionBidUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: AuctionBidCreateManyPlayerInputEnvelope
    set?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    disconnect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    delete?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    connect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    update?: AuctionBidUpdateWithWhereUniqueWithoutPlayerInput | AuctionBidUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: AuctionBidUpdateManyWithWhereWithoutPlayerInput | AuctionBidUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: AuctionBidScalarWhereInput | AuctionBidScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutEmojisInput = {
    create?: XOR<RoomCreateWithoutEmojisInput, RoomUncheckedCreateWithoutEmojisInput>
    connectOrCreate?: RoomCreateOrConnectWithoutEmojisInput
    connect?: RoomWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutEmojisInput = {
    create?: XOR<PlayerCreateWithoutEmojisInput, PlayerUncheckedCreateWithoutEmojisInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutEmojisInput
    connect?: PlayerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomUpdateOneRequiredWithoutEmojisNestedInput = {
    create?: XOR<RoomCreateWithoutEmojisInput, RoomUncheckedCreateWithoutEmojisInput>
    connectOrCreate?: RoomCreateOrConnectWithoutEmojisInput
    upsert?: RoomUpsertWithoutEmojisInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutEmojisInput, RoomUpdateWithoutEmojisInput>, RoomUncheckedUpdateWithoutEmojisInput>
  }

  export type PlayerUpdateOneRequiredWithoutEmojisNestedInput = {
    create?: XOR<PlayerCreateWithoutEmojisInput, PlayerUncheckedCreateWithoutEmojisInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutEmojisInput
    upsert?: PlayerUpsertWithoutEmojisInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutEmojisInput, PlayerUpdateWithoutEmojisInput>, PlayerUncheckedUpdateWithoutEmojisInput>
  }

  export type RoomCreateNestedOneWithoutAuctionsInput = {
    create?: XOR<RoomCreateWithoutAuctionsInput, RoomUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAuctionsInput
    connect?: RoomWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutLeadingAuctionsInput = {
    create?: XOR<PlayerCreateWithoutLeadingAuctionsInput, PlayerUncheckedCreateWithoutLeadingAuctionsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLeadingAuctionsInput
    connect?: PlayerWhereUniqueInput
  }

  export type AuctionBidCreateNestedManyWithoutAuctionInput = {
    create?: XOR<AuctionBidCreateWithoutAuctionInput, AuctionBidUncheckedCreateWithoutAuctionInput> | AuctionBidCreateWithoutAuctionInput[] | AuctionBidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: AuctionBidCreateOrConnectWithoutAuctionInput | AuctionBidCreateOrConnectWithoutAuctionInput[]
    createMany?: AuctionBidCreateManyAuctionInputEnvelope
    connect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
  }

  export type AuctionBidUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<AuctionBidCreateWithoutAuctionInput, AuctionBidUncheckedCreateWithoutAuctionInput> | AuctionBidCreateWithoutAuctionInput[] | AuctionBidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: AuctionBidCreateOrConnectWithoutAuctionInput | AuctionBidCreateOrConnectWithoutAuctionInput[]
    createMany?: AuctionBidCreateManyAuctionInputEnvelope
    connect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
  }

  export type EnumAuctionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AuctionStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RoomUpdateOneRequiredWithoutAuctionsNestedInput = {
    create?: XOR<RoomCreateWithoutAuctionsInput, RoomUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAuctionsInput
    upsert?: RoomUpsertWithoutAuctionsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutAuctionsInput, RoomUpdateWithoutAuctionsInput>, RoomUncheckedUpdateWithoutAuctionsInput>
  }

  export type PlayerUpdateOneWithoutLeadingAuctionsNestedInput = {
    create?: XOR<PlayerCreateWithoutLeadingAuctionsInput, PlayerUncheckedCreateWithoutLeadingAuctionsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLeadingAuctionsInput
    upsert?: PlayerUpsertWithoutLeadingAuctionsInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutLeadingAuctionsInput, PlayerUpdateWithoutLeadingAuctionsInput>, PlayerUncheckedUpdateWithoutLeadingAuctionsInput>
  }

  export type AuctionBidUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<AuctionBidCreateWithoutAuctionInput, AuctionBidUncheckedCreateWithoutAuctionInput> | AuctionBidCreateWithoutAuctionInput[] | AuctionBidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: AuctionBidCreateOrConnectWithoutAuctionInput | AuctionBidCreateOrConnectWithoutAuctionInput[]
    upsert?: AuctionBidUpsertWithWhereUniqueWithoutAuctionInput | AuctionBidUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: AuctionBidCreateManyAuctionInputEnvelope
    set?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    disconnect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    delete?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    connect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    update?: AuctionBidUpdateWithWhereUniqueWithoutAuctionInput | AuctionBidUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: AuctionBidUpdateManyWithWhereWithoutAuctionInput | AuctionBidUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: AuctionBidScalarWhereInput | AuctionBidScalarWhereInput[]
  }

  export type AuctionBidUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<AuctionBidCreateWithoutAuctionInput, AuctionBidUncheckedCreateWithoutAuctionInput> | AuctionBidCreateWithoutAuctionInput[] | AuctionBidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: AuctionBidCreateOrConnectWithoutAuctionInput | AuctionBidCreateOrConnectWithoutAuctionInput[]
    upsert?: AuctionBidUpsertWithWhereUniqueWithoutAuctionInput | AuctionBidUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: AuctionBidCreateManyAuctionInputEnvelope
    set?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    disconnect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    delete?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    connect?: AuctionBidWhereUniqueInput | AuctionBidWhereUniqueInput[]
    update?: AuctionBidUpdateWithWhereUniqueWithoutAuctionInput | AuctionBidUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: AuctionBidUpdateManyWithWhereWithoutAuctionInput | AuctionBidUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: AuctionBidScalarWhereInput | AuctionBidScalarWhereInput[]
  }

  export type AuctionCreateNestedOneWithoutBidsInput = {
    create?: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutBidsInput
    connect?: AuctionWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutBidsInput = {
    create?: XOR<PlayerCreateWithoutBidsInput, PlayerUncheckedCreateWithoutBidsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutBidsInput
    connect?: PlayerWhereUniqueInput
  }

  export type AuctionUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutBidsInput
    upsert?: AuctionUpsertWithoutBidsInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutBidsInput, AuctionUpdateWithoutBidsInput>, AuctionUncheckedUpdateWithoutBidsInput>
  }

  export type PlayerUpdateOneWithoutBidsNestedInput = {
    create?: XOR<PlayerCreateWithoutBidsInput, PlayerUncheckedCreateWithoutBidsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutBidsInput
    upsert?: PlayerUpsertWithoutBidsInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutBidsInput, PlayerUpdateWithoutBidsInput>, PlayerUncheckedUpdateWithoutBidsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumAuctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusFilter<$PrismaModel> | $Enums.AuctionStatus
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

  export type NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionStatusFilter<$PrismaModel>
    _max?: NestedEnumAuctionStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type RoomCreateWithoutOwnerInput = {
    id?: string
    name: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    players?: PlayerCreateNestedManyWithoutRoomInput
    emojis?: RoomEmojiCreateNestedManyWithoutRoomInput
    auctions?: AuctionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    players?: PlayerUncheckedCreateNestedManyWithoutRoomInput
    emojis?: RoomEmojiUncheckedCreateNestedManyWithoutRoomInput
    auctions?: AuctionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
  }

  export type RoomCreateManyOwnerInputEnvelope = {
    data: RoomCreateManyOwnerInput | RoomCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutOwnerInput, RoomUncheckedUpdateWithoutOwnerInput>
    create: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutOwnerInput, RoomUncheckedUpdateWithoutOwnerInput>
  }

  export type RoomUpdateManyWithWhereWithoutOwnerInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    ownerId?: StringFilter<"Room"> | string
    PlayerLimit?: IntFilter<"Room"> | number
    PlayersCanEditPoints?: BoolFilter<"Room"> | boolean
    PlayersCanEditName?: BoolFilter<"Room"> | boolean
    EmojisEnabled?: BoolFilter<"Room"> | boolean
    EmojiLimit?: IntFilter<"Room"> | number
    EmojiCooldown?: IntFilter<"Room"> | number
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    name: string
    password: string
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    password: string
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type PlayerCreateWithoutRoomInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    emojis?: RoomEmojiCreateNestedManyWithoutPlayerInput
    leadingAuctions?: AuctionCreateNestedManyWithoutLeaderInput
    bids?: AuctionBidCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    emojis?: RoomEmojiUncheckedCreateNestedManyWithoutPlayerInput
    leadingAuctions?: AuctionUncheckedCreateNestedManyWithoutLeaderInput
    bids?: AuctionBidUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutRoomInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutRoomInput, PlayerUncheckedCreateWithoutRoomInput>
  }

  export type PlayerCreateManyRoomInputEnvelope = {
    data: PlayerCreateManyRoomInput | PlayerCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomEmojiCreateWithoutRoomInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutEmojisInput
  }

  export type RoomEmojiUncheckedCreateWithoutRoomInput = {
    id?: string
    playerId: string
    emoji: string
    createdAt?: Date | string
  }

  export type RoomEmojiCreateOrConnectWithoutRoomInput = {
    where: RoomEmojiWhereUniqueInput
    create: XOR<RoomEmojiCreateWithoutRoomInput, RoomEmojiUncheckedCreateWithoutRoomInput>
  }

  export type RoomEmojiCreateManyRoomInputEnvelope = {
    data: RoomEmojiCreateManyRoomInput | RoomEmojiCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type AuctionCreateWithoutRoomInput = {
    id?: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
    leader?: PlayerCreateNestedOneWithoutLeadingAuctionsInput
    bids?: AuctionBidCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutRoomInput = {
    id?: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderId?: string | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
    bids?: AuctionBidUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutRoomInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutRoomInput, AuctionUncheckedCreateWithoutRoomInput>
  }

  export type AuctionCreateManyRoomInputEnvelope = {
    data: AuctionCreateManyRoomInput | AuctionCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUpsertWithWhereUniqueWithoutRoomInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutRoomInput, PlayerUncheckedUpdateWithoutRoomInput>
    create: XOR<PlayerCreateWithoutRoomInput, PlayerUncheckedCreateWithoutRoomInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutRoomInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutRoomInput, PlayerUncheckedUpdateWithoutRoomInput>
  }

  export type PlayerUpdateManyWithWhereWithoutRoomInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutRoomInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    avatar?: StringNullableFilter<"Player"> | string | null
    roomId?: StringFilter<"Player"> | string
    points?: IntFilter<"Player"> | number
  }

  export type RoomEmojiUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomEmojiWhereUniqueInput
    update: XOR<RoomEmojiUpdateWithoutRoomInput, RoomEmojiUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomEmojiCreateWithoutRoomInput, RoomEmojiUncheckedCreateWithoutRoomInput>
  }

  export type RoomEmojiUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomEmojiWhereUniqueInput
    data: XOR<RoomEmojiUpdateWithoutRoomInput, RoomEmojiUncheckedUpdateWithoutRoomInput>
  }

  export type RoomEmojiUpdateManyWithWhereWithoutRoomInput = {
    where: RoomEmojiScalarWhereInput
    data: XOR<RoomEmojiUpdateManyMutationInput, RoomEmojiUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomEmojiScalarWhereInput = {
    AND?: RoomEmojiScalarWhereInput | RoomEmojiScalarWhereInput[]
    OR?: RoomEmojiScalarWhereInput[]
    NOT?: RoomEmojiScalarWhereInput | RoomEmojiScalarWhereInput[]
    id?: StringFilter<"RoomEmoji"> | string
    roomId?: StringFilter<"RoomEmoji"> | string
    playerId?: StringFilter<"RoomEmoji"> | string
    emoji?: StringFilter<"RoomEmoji"> | string
    createdAt?: DateTimeFilter<"RoomEmoji"> | Date | string
  }

  export type AuctionUpsertWithWhereUniqueWithoutRoomInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutRoomInput, AuctionUncheckedUpdateWithoutRoomInput>
    create: XOR<AuctionCreateWithoutRoomInput, AuctionUncheckedCreateWithoutRoomInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutRoomInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutRoomInput, AuctionUncheckedUpdateWithoutRoomInput>
  }

  export type AuctionUpdateManyWithWhereWithoutRoomInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutRoomInput>
  }

  export type AuctionScalarWhereInput = {
    AND?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
    OR?: AuctionScalarWhereInput[]
    NOT?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
    id?: StringFilter<"Auction"> | string
    roomId?: StringFilter<"Auction"> | string
    item?: StringNullableFilter<"Auction"> | string | null
    startingBid?: IntFilter<"Auction"> | number
    minIncrement?: IntFilter<"Auction"> | number
    durationSeconds?: IntFilter<"Auction"> | number
    bidResetSeconds?: IntFilter<"Auction"> | number
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    endsAt?: DateTimeFilter<"Auction"> | Date | string
    currentBid?: IntNullableFilter<"Auction"> | number | null
    leaderId?: StringNullableFilter<"Auction"> | string | null
    leaderName?: StringNullableFilter<"Auction"> | string | null
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Auction"> | Date | string | null
  }

  export type RoomCreateWithoutPlayersInput = {
    id?: string
    name: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    owner: UserCreateNestedOneWithoutRoomsInput
    emojis?: RoomEmojiCreateNestedManyWithoutRoomInput
    auctions?: AuctionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    ownerId: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    emojis?: RoomEmojiUncheckedCreateNestedManyWithoutRoomInput
    auctions?: AuctionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPlayersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
  }

  export type RoomEmojiCreateWithoutPlayerInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutEmojisInput
  }

  export type RoomEmojiUncheckedCreateWithoutPlayerInput = {
    id?: string
    roomId: string
    emoji: string
    createdAt?: Date | string
  }

  export type RoomEmojiCreateOrConnectWithoutPlayerInput = {
    where: RoomEmojiWhereUniqueInput
    create: XOR<RoomEmojiCreateWithoutPlayerInput, RoomEmojiUncheckedCreateWithoutPlayerInput>
  }

  export type RoomEmojiCreateManyPlayerInputEnvelope = {
    data: RoomEmojiCreateManyPlayerInput | RoomEmojiCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type AuctionCreateWithoutLeaderInput = {
    id?: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
    room: RoomCreateNestedOneWithoutAuctionsInput
    bids?: AuctionBidCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutLeaderInput = {
    id?: string
    roomId: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
    bids?: AuctionBidUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutLeaderInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutLeaderInput, AuctionUncheckedCreateWithoutLeaderInput>
  }

  export type AuctionCreateManyLeaderInputEnvelope = {
    data: AuctionCreateManyLeaderInput | AuctionCreateManyLeaderInput[]
    skipDuplicates?: boolean
  }

  export type AuctionBidCreateWithoutPlayerInput = {
    id?: string
    playerName: string
    amount: number
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutBidsInput
  }

  export type AuctionBidUncheckedCreateWithoutPlayerInput = {
    id?: string
    auctionId: string
    playerName: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidCreateOrConnectWithoutPlayerInput = {
    where: AuctionBidWhereUniqueInput
    create: XOR<AuctionBidCreateWithoutPlayerInput, AuctionBidUncheckedCreateWithoutPlayerInput>
  }

  export type AuctionBidCreateManyPlayerInputEnvelope = {
    data: AuctionBidCreateManyPlayerInput | AuctionBidCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutPlayersInput = {
    update: XOR<RoomUpdateWithoutPlayersInput, RoomUncheckedUpdateWithoutPlayersInput>
    create: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutPlayersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutPlayersInput, RoomUncheckedUpdateWithoutPlayersInput>
  }

  export type RoomUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
    emojis?: RoomEmojiUpdateManyWithoutRoomNestedInput
    auctions?: AuctionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    emojis?: RoomEmojiUncheckedUpdateManyWithoutRoomNestedInput
    auctions?: AuctionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomEmojiUpsertWithWhereUniqueWithoutPlayerInput = {
    where: RoomEmojiWhereUniqueInput
    update: XOR<RoomEmojiUpdateWithoutPlayerInput, RoomEmojiUncheckedUpdateWithoutPlayerInput>
    create: XOR<RoomEmojiCreateWithoutPlayerInput, RoomEmojiUncheckedCreateWithoutPlayerInput>
  }

  export type RoomEmojiUpdateWithWhereUniqueWithoutPlayerInput = {
    where: RoomEmojiWhereUniqueInput
    data: XOR<RoomEmojiUpdateWithoutPlayerInput, RoomEmojiUncheckedUpdateWithoutPlayerInput>
  }

  export type RoomEmojiUpdateManyWithWhereWithoutPlayerInput = {
    where: RoomEmojiScalarWhereInput
    data: XOR<RoomEmojiUpdateManyMutationInput, RoomEmojiUncheckedUpdateManyWithoutPlayerInput>
  }

  export type AuctionUpsertWithWhereUniqueWithoutLeaderInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutLeaderInput, AuctionUncheckedUpdateWithoutLeaderInput>
    create: XOR<AuctionCreateWithoutLeaderInput, AuctionUncheckedCreateWithoutLeaderInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutLeaderInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutLeaderInput, AuctionUncheckedUpdateWithoutLeaderInput>
  }

  export type AuctionUpdateManyWithWhereWithoutLeaderInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutLeaderInput>
  }

  export type AuctionBidUpsertWithWhereUniqueWithoutPlayerInput = {
    where: AuctionBidWhereUniqueInput
    update: XOR<AuctionBidUpdateWithoutPlayerInput, AuctionBidUncheckedUpdateWithoutPlayerInput>
    create: XOR<AuctionBidCreateWithoutPlayerInput, AuctionBidUncheckedCreateWithoutPlayerInput>
  }

  export type AuctionBidUpdateWithWhereUniqueWithoutPlayerInput = {
    where: AuctionBidWhereUniqueInput
    data: XOR<AuctionBidUpdateWithoutPlayerInput, AuctionBidUncheckedUpdateWithoutPlayerInput>
  }

  export type AuctionBidUpdateManyWithWhereWithoutPlayerInput = {
    where: AuctionBidScalarWhereInput
    data: XOR<AuctionBidUpdateManyMutationInput, AuctionBidUncheckedUpdateManyWithoutPlayerInput>
  }

  export type AuctionBidScalarWhereInput = {
    AND?: AuctionBidScalarWhereInput | AuctionBidScalarWhereInput[]
    OR?: AuctionBidScalarWhereInput[]
    NOT?: AuctionBidScalarWhereInput | AuctionBidScalarWhereInput[]
    id?: StringFilter<"AuctionBid"> | string
    auctionId?: StringFilter<"AuctionBid"> | string
    playerId?: StringNullableFilter<"AuctionBid"> | string | null
    playerName?: StringFilter<"AuctionBid"> | string
    amount?: IntFilter<"AuctionBid"> | number
    createdAt?: DateTimeFilter<"AuctionBid"> | Date | string
  }

  export type RoomCreateWithoutEmojisInput = {
    id?: string
    name: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    owner: UserCreateNestedOneWithoutRoomsInput
    players?: PlayerCreateNestedManyWithoutRoomInput
    auctions?: AuctionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutEmojisInput = {
    id?: string
    name: string
    ownerId: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    players?: PlayerUncheckedCreateNestedManyWithoutRoomInput
    auctions?: AuctionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutEmojisInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutEmojisInput, RoomUncheckedCreateWithoutEmojisInput>
  }

  export type PlayerCreateWithoutEmojisInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    room: RoomCreateNestedOneWithoutPlayersInput
    leadingAuctions?: AuctionCreateNestedManyWithoutLeaderInput
    bids?: AuctionBidCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutEmojisInput = {
    id?: string
    name: string
    avatar?: string | null
    roomId: string
    points?: number
    leadingAuctions?: AuctionUncheckedCreateNestedManyWithoutLeaderInput
    bids?: AuctionBidUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutEmojisInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutEmojisInput, PlayerUncheckedCreateWithoutEmojisInput>
  }

  export type RoomUpsertWithoutEmojisInput = {
    update: XOR<RoomUpdateWithoutEmojisInput, RoomUncheckedUpdateWithoutEmojisInput>
    create: XOR<RoomCreateWithoutEmojisInput, RoomUncheckedCreateWithoutEmojisInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutEmojisInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutEmojisInput, RoomUncheckedUpdateWithoutEmojisInput>
  }

  export type RoomUpdateWithoutEmojisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
    players?: PlayerUpdateManyWithoutRoomNestedInput
    auctions?: AuctionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutEmojisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    players?: PlayerUncheckedUpdateManyWithoutRoomNestedInput
    auctions?: AuctionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PlayerUpsertWithoutEmojisInput = {
    update: XOR<PlayerUpdateWithoutEmojisInput, PlayerUncheckedUpdateWithoutEmojisInput>
    create: XOR<PlayerCreateWithoutEmojisInput, PlayerUncheckedCreateWithoutEmojisInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutEmojisInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutEmojisInput, PlayerUncheckedUpdateWithoutEmojisInput>
  }

  export type PlayerUpdateWithoutEmojisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutPlayersNestedInput
    leadingAuctions?: AuctionUpdateManyWithoutLeaderNestedInput
    bids?: AuctionBidUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutEmojisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    leadingAuctions?: AuctionUncheckedUpdateManyWithoutLeaderNestedInput
    bids?: AuctionBidUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type RoomCreateWithoutAuctionsInput = {
    id?: string
    name: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    owner: UserCreateNestedOneWithoutRoomsInput
    players?: PlayerCreateNestedManyWithoutRoomInput
    emojis?: RoomEmojiCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAuctionsInput = {
    id?: string
    name: string
    ownerId: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
    players?: PlayerUncheckedCreateNestedManyWithoutRoomInput
    emojis?: RoomEmojiUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAuctionsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAuctionsInput, RoomUncheckedCreateWithoutAuctionsInput>
  }

  export type PlayerCreateWithoutLeadingAuctionsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    room: RoomCreateNestedOneWithoutPlayersInput
    emojis?: RoomEmojiCreateNestedManyWithoutPlayerInput
    bids?: AuctionBidCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutLeadingAuctionsInput = {
    id?: string
    name: string
    avatar?: string | null
    roomId: string
    points?: number
    emojis?: RoomEmojiUncheckedCreateNestedManyWithoutPlayerInput
    bids?: AuctionBidUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutLeadingAuctionsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutLeadingAuctionsInput, PlayerUncheckedCreateWithoutLeadingAuctionsInput>
  }

  export type AuctionBidCreateWithoutAuctionInput = {
    id?: string
    playerName: string
    amount: number
    createdAt?: Date | string
    player?: PlayerCreateNestedOneWithoutBidsInput
  }

  export type AuctionBidUncheckedCreateWithoutAuctionInput = {
    id?: string
    playerId?: string | null
    playerName: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidCreateOrConnectWithoutAuctionInput = {
    where: AuctionBidWhereUniqueInput
    create: XOR<AuctionBidCreateWithoutAuctionInput, AuctionBidUncheckedCreateWithoutAuctionInput>
  }

  export type AuctionBidCreateManyAuctionInputEnvelope = {
    data: AuctionBidCreateManyAuctionInput | AuctionBidCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutAuctionsInput = {
    update: XOR<RoomUpdateWithoutAuctionsInput, RoomUncheckedUpdateWithoutAuctionsInput>
    create: XOR<RoomCreateWithoutAuctionsInput, RoomUncheckedCreateWithoutAuctionsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutAuctionsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutAuctionsInput, RoomUncheckedUpdateWithoutAuctionsInput>
  }

  export type RoomUpdateWithoutAuctionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
    players?: PlayerUpdateManyWithoutRoomNestedInput
    emojis?: RoomEmojiUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAuctionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    players?: PlayerUncheckedUpdateManyWithoutRoomNestedInput
    emojis?: RoomEmojiUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PlayerUpsertWithoutLeadingAuctionsInput = {
    update: XOR<PlayerUpdateWithoutLeadingAuctionsInput, PlayerUncheckedUpdateWithoutLeadingAuctionsInput>
    create: XOR<PlayerCreateWithoutLeadingAuctionsInput, PlayerUncheckedCreateWithoutLeadingAuctionsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutLeadingAuctionsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutLeadingAuctionsInput, PlayerUncheckedUpdateWithoutLeadingAuctionsInput>
  }

  export type PlayerUpdateWithoutLeadingAuctionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutPlayersNestedInput
    emojis?: RoomEmojiUpdateManyWithoutPlayerNestedInput
    bids?: AuctionBidUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutLeadingAuctionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    emojis?: RoomEmojiUncheckedUpdateManyWithoutPlayerNestedInput
    bids?: AuctionBidUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type AuctionBidUpsertWithWhereUniqueWithoutAuctionInput = {
    where: AuctionBidWhereUniqueInput
    update: XOR<AuctionBidUpdateWithoutAuctionInput, AuctionBidUncheckedUpdateWithoutAuctionInput>
    create: XOR<AuctionBidCreateWithoutAuctionInput, AuctionBidUncheckedCreateWithoutAuctionInput>
  }

  export type AuctionBidUpdateWithWhereUniqueWithoutAuctionInput = {
    where: AuctionBidWhereUniqueInput
    data: XOR<AuctionBidUpdateWithoutAuctionInput, AuctionBidUncheckedUpdateWithoutAuctionInput>
  }

  export type AuctionBidUpdateManyWithWhereWithoutAuctionInput = {
    where: AuctionBidScalarWhereInput
    data: XOR<AuctionBidUpdateManyMutationInput, AuctionBidUncheckedUpdateManyWithoutAuctionInput>
  }

  export type AuctionCreateWithoutBidsInput = {
    id?: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
    room: RoomCreateNestedOneWithoutAuctionsInput
    leader?: PlayerCreateNestedOneWithoutLeadingAuctionsInput
  }

  export type AuctionUncheckedCreateWithoutBidsInput = {
    id?: string
    roomId: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderId?: string | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type AuctionCreateOrConnectWithoutBidsInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
  }

  export type PlayerCreateWithoutBidsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    room: RoomCreateNestedOneWithoutPlayersInput
    emojis?: RoomEmojiCreateNestedManyWithoutPlayerInput
    leadingAuctions?: AuctionCreateNestedManyWithoutLeaderInput
  }

  export type PlayerUncheckedCreateWithoutBidsInput = {
    id?: string
    name: string
    avatar?: string | null
    roomId: string
    points?: number
    emojis?: RoomEmojiUncheckedCreateNestedManyWithoutPlayerInput
    leadingAuctions?: AuctionUncheckedCreateNestedManyWithoutLeaderInput
  }

  export type PlayerCreateOrConnectWithoutBidsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutBidsInput, PlayerUncheckedCreateWithoutBidsInput>
  }

  export type AuctionUpsertWithoutBidsInput = {
    update: XOR<AuctionUpdateWithoutBidsInput, AuctionUncheckedUpdateWithoutBidsInput>
    create: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutBidsInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutBidsInput, AuctionUncheckedUpdateWithoutBidsInput>
  }

  export type AuctionUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: RoomUpdateOneRequiredWithoutAuctionsNestedInput
    leader?: PlayerUpdateOneWithoutLeadingAuctionsNestedInput
  }

  export type AuctionUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlayerUpsertWithoutBidsInput = {
    update: XOR<PlayerUpdateWithoutBidsInput, PlayerUncheckedUpdateWithoutBidsInput>
    create: XOR<PlayerCreateWithoutBidsInput, PlayerUncheckedCreateWithoutBidsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutBidsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutBidsInput, PlayerUncheckedUpdateWithoutBidsInput>
  }

  export type PlayerUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutPlayersNestedInput
    emojis?: RoomEmojiUpdateManyWithoutPlayerNestedInput
    leadingAuctions?: AuctionUpdateManyWithoutLeaderNestedInput
  }

  export type PlayerUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    emojis?: RoomEmojiUncheckedUpdateManyWithoutPlayerNestedInput
    leadingAuctions?: AuctionUncheckedUpdateManyWithoutLeaderNestedInput
  }

  export type RoomCreateManyOwnerInput = {
    id?: string
    name: string
    PlayerLimit?: number
    PlayersCanEditPoints?: boolean
    PlayersCanEditName?: boolean
    EmojisEnabled?: boolean
    EmojiLimit?: number
    EmojiCooldown?: number
  }

  export type RoomUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    players?: PlayerUpdateManyWithoutRoomNestedInput
    emojis?: RoomEmojiUpdateManyWithoutRoomNestedInput
    auctions?: AuctionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
    players?: PlayerUncheckedUpdateManyWithoutRoomNestedInput
    emojis?: RoomEmojiUncheckedUpdateManyWithoutRoomNestedInput
    auctions?: AuctionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PlayerLimit?: IntFieldUpdateOperationsInput | number
    PlayersCanEditPoints?: BoolFieldUpdateOperationsInput | boolean
    PlayersCanEditName?: BoolFieldUpdateOperationsInput | boolean
    EmojisEnabled?: BoolFieldUpdateOperationsInput | boolean
    EmojiLimit?: IntFieldUpdateOperationsInput | number
    EmojiCooldown?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerCreateManyRoomInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
  }

  export type RoomEmojiCreateManyRoomInput = {
    id?: string
    playerId: string
    emoji: string
    createdAt?: Date | string
  }

  export type AuctionCreateManyRoomInput = {
    id?: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderId?: string | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type PlayerUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    emojis?: RoomEmojiUpdateManyWithoutPlayerNestedInput
    leadingAuctions?: AuctionUpdateManyWithoutLeaderNestedInput
    bids?: AuctionBidUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    emojis?: RoomEmojiUncheckedUpdateManyWithoutPlayerNestedInput
    leadingAuctions?: AuctionUncheckedUpdateManyWithoutLeaderNestedInput
    bids?: AuctionBidUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
  }

  export type RoomEmojiUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutEmojisNestedInput
  }

  export type RoomEmojiUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomEmojiUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leader?: PlayerUpdateOneWithoutLeadingAuctionsNestedInput
    bids?: AuctionBidUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bids?: AuctionBidUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomEmojiCreateManyPlayerInput = {
    id?: string
    roomId: string
    emoji: string
    createdAt?: Date | string
  }

  export type AuctionCreateManyLeaderInput = {
    id?: string
    roomId: string
    item?: string | null
    startingBid: number
    minIncrement?: number
    durationSeconds?: number
    bidResetSeconds?: number
    status?: $Enums.AuctionStatus
    endsAt: Date | string
    currentBid?: number | null
    leaderName?: string | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type AuctionBidCreateManyPlayerInput = {
    id?: string
    auctionId: string
    playerName: string
    amount: number
    createdAt?: Date | string
  }

  export type RoomEmojiUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutEmojisNestedInput
  }

  export type RoomEmojiUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomEmojiUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: RoomUpdateOneRequiredWithoutAuctionsNestedInput
    bids?: AuctionBidUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bids?: AuctionBidUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateManyWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    startingBid?: IntFieldUpdateOperationsInput | number
    minIncrement?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    bidResetSeconds?: IntFieldUpdateOperationsInput | number
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBid?: NullableIntFieldUpdateOperationsInput | number | null
    leaderName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuctionBidUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutBidsNestedInput
  }

  export type AuctionBidUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidCreateManyAuctionInput = {
    id?: string
    playerId?: string | null
    playerName: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneWithoutBidsNestedInput
  }

  export type AuctionBidUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidUncheckedUpdateManyWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    playerName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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