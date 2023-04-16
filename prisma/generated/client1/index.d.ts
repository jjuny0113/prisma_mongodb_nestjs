
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Chatting
 * 
 */
export type Chatting = {
  id: string
  createdAt: Date
  updatedAt: Date
  chat: string
  socketId: string
}

/**
 * Model Socket
 * 
 */
export type Socket = {
  id: string
  socketId: string
  username: string
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chattings
 * const chattings = await prisma.chatting.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chattings
   * const chattings = await prisma.chatting.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.chatting`: Exposes CRUD operations for the **Chatting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chattings
    * const chattings = await prisma.chatting.findMany()
    * ```
    */
  get chatting(): Prisma.ChattingDelegate<GlobalReject>;

  /**
   * `prisma.socket`: Exposes CRUD operations for the **Socket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sockets
    * const sockets = await prisma.socket.findMany()
    * ```
    */
  get socket(): Prisma.SocketDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Chatting: 'Chatting',
    Socket: 'Socket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SocketCountOutputType
   */


  export type SocketCountOutputType = {
    Chatting: number
  }

  export type SocketCountOutputTypeSelect = {
    Chatting?: boolean
  }

  export type SocketCountOutputTypeGetPayload<S extends boolean | null | undefined | SocketCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SocketCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SocketCountOutputTypeArgs)
    ? SocketCountOutputType 
    : S extends { select: any } & (SocketCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SocketCountOutputType ? SocketCountOutputType[P] : never
  } 
      : SocketCountOutputType




  // Custom InputTypes

  /**
   * SocketCountOutputType without action
   */
  export type SocketCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SocketCountOutputType
     */
    select?: SocketCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Chatting
   */


  export type AggregateChatting = {
    _count: ChattingCountAggregateOutputType | null
    _min: ChattingMinAggregateOutputType | null
    _max: ChattingMaxAggregateOutputType | null
  }

  export type ChattingMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    chat: string | null
    socketId: string | null
  }

  export type ChattingMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    chat: string | null
    socketId: string | null
  }

  export type ChattingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    chat: number
    socketId: number
    _all: number
  }


  export type ChattingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    chat?: true
    socketId?: true
  }

  export type ChattingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    chat?: true
    socketId?: true
  }

  export type ChattingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    chat?: true
    socketId?: true
    _all?: true
  }

  export type ChattingAggregateArgs = {
    /**
     * Filter which Chatting to aggregate.
     */
    where?: ChattingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chattings to fetch.
     */
    orderBy?: Enumerable<ChattingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChattingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chattings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chattings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chattings
    **/
    _count?: true | ChattingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChattingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChattingMaxAggregateInputType
  }

  export type GetChattingAggregateType<T extends ChattingAggregateArgs> = {
        [P in keyof T & keyof AggregateChatting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatting[P]>
      : GetScalarType<T[P], AggregateChatting[P]>
  }




  export type ChattingGroupByArgs = {
    where?: ChattingWhereInput
    orderBy?: Enumerable<ChattingOrderByWithAggregationInput>
    by: ChattingScalarFieldEnum[]
    having?: ChattingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChattingCountAggregateInputType | true
    _min?: ChattingMinAggregateInputType
    _max?: ChattingMaxAggregateInputType
  }


  export type ChattingGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    chat: string
    socketId: string
    _count: ChattingCountAggregateOutputType | null
    _min: ChattingMinAggregateOutputType | null
    _max: ChattingMaxAggregateOutputType | null
  }

  type GetChattingGroupByPayload<T extends ChattingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ChattingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChattingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChattingGroupByOutputType[P]>
            : GetScalarType<T[P], ChattingGroupByOutputType[P]>
        }
      >
    >


  export type ChattingSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean
    socketId?: boolean
    user?: boolean | SocketArgs
  }


  export type ChattingInclude = {
    user?: boolean | SocketArgs
  }

  export type ChattingGetPayload<S extends boolean | null | undefined | ChattingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Chatting :
    S extends undefined ? never :
    S extends { include: any } & (ChattingArgs | ChattingFindManyArgs)
    ? Chatting  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? SocketGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChattingArgs | ChattingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? SocketGetPayload<S['select'][P]> :  P extends keyof Chatting ? Chatting[P] : never
  } 
      : Chatting


  type ChattingCountArgs = 
    Omit<ChattingFindManyArgs, 'select' | 'include'> & {
      select?: ChattingCountAggregateInputType | true
    }

  export interface ChattingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Chatting that matches the filter.
     * @param {ChattingFindUniqueArgs} args - Arguments to find a Chatting
     * @example
     * // Get one Chatting
     * const chatting = await prisma.chatting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChattingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChattingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Chatting'> extends True ? Prisma__ChattingClient<ChattingGetPayload<T>> : Prisma__ChattingClient<ChattingGetPayload<T> | null, null>

    /**
     * Find one Chatting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChattingFindUniqueOrThrowArgs} args - Arguments to find a Chatting
     * @example
     * // Get one Chatting
     * const chatting = await prisma.chatting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChattingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ChattingFindUniqueOrThrowArgs>
    ): Prisma__ChattingClient<ChattingGetPayload<T>>

    /**
     * Find the first Chatting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChattingFindFirstArgs} args - Arguments to find a Chatting
     * @example
     * // Get one Chatting
     * const chatting = await prisma.chatting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChattingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChattingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Chatting'> extends True ? Prisma__ChattingClient<ChattingGetPayload<T>> : Prisma__ChattingClient<ChattingGetPayload<T> | null, null>

    /**
     * Find the first Chatting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChattingFindFirstOrThrowArgs} args - Arguments to find a Chatting
     * @example
     * // Get one Chatting
     * const chatting = await prisma.chatting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChattingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChattingFindFirstOrThrowArgs>
    ): Prisma__ChattingClient<ChattingGetPayload<T>>

    /**
     * Find zero or more Chattings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChattingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chattings
     * const chattings = await prisma.chatting.findMany()
     * 
     * // Get first 10 Chattings
     * const chattings = await prisma.chatting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chattingWithIdOnly = await prisma.chatting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChattingFindManyArgs>(
      args?: SelectSubset<T, ChattingFindManyArgs>
    ): Prisma.PrismaPromise<Array<ChattingGetPayload<T>>>

    /**
     * Create a Chatting.
     * @param {ChattingCreateArgs} args - Arguments to create a Chatting.
     * @example
     * // Create one Chatting
     * const Chatting = await prisma.chatting.create({
     *   data: {
     *     // ... data to create a Chatting
     *   }
     * })
     * 
    **/
    create<T extends ChattingCreateArgs>(
      args: SelectSubset<T, ChattingCreateArgs>
    ): Prisma__ChattingClient<ChattingGetPayload<T>>

    /**
     * Create many Chattings.
     *     @param {ChattingCreateManyArgs} args - Arguments to create many Chattings.
     *     @example
     *     // Create many Chattings
     *     const chatting = await prisma.chatting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChattingCreateManyArgs>(
      args?: SelectSubset<T, ChattingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chatting.
     * @param {ChattingDeleteArgs} args - Arguments to delete one Chatting.
     * @example
     * // Delete one Chatting
     * const Chatting = await prisma.chatting.delete({
     *   where: {
     *     // ... filter to delete one Chatting
     *   }
     * })
     * 
    **/
    delete<T extends ChattingDeleteArgs>(
      args: SelectSubset<T, ChattingDeleteArgs>
    ): Prisma__ChattingClient<ChattingGetPayload<T>>

    /**
     * Update one Chatting.
     * @param {ChattingUpdateArgs} args - Arguments to update one Chatting.
     * @example
     * // Update one Chatting
     * const chatting = await prisma.chatting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChattingUpdateArgs>(
      args: SelectSubset<T, ChattingUpdateArgs>
    ): Prisma__ChattingClient<ChattingGetPayload<T>>

    /**
     * Delete zero or more Chattings.
     * @param {ChattingDeleteManyArgs} args - Arguments to filter Chattings to delete.
     * @example
     * // Delete a few Chattings
     * const { count } = await prisma.chatting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChattingDeleteManyArgs>(
      args?: SelectSubset<T, ChattingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chattings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChattingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chattings
     * const chatting = await prisma.chatting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChattingUpdateManyArgs>(
      args: SelectSubset<T, ChattingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chatting.
     * @param {ChattingUpsertArgs} args - Arguments to update or create a Chatting.
     * @example
     * // Update or create a Chatting
     * const chatting = await prisma.chatting.upsert({
     *   create: {
     *     // ... data to create a Chatting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatting we want to update
     *   }
     * })
    **/
    upsert<T extends ChattingUpsertArgs>(
      args: SelectSubset<T, ChattingUpsertArgs>
    ): Prisma__ChattingClient<ChattingGetPayload<T>>

    /**
     * Find zero or more Chattings that matches the filter.
     * @param {ChattingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatting = await prisma.chatting.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ChattingFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Chatting.
     * @param {ChattingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatting = await prisma.chatting.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ChattingAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Chattings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChattingCountArgs} args - Arguments to filter Chattings to count.
     * @example
     * // Count the number of Chattings
     * const count = await prisma.chatting.count({
     *   where: {
     *     // ... the filter for the Chattings we want to count
     *   }
     * })
    **/
    count<T extends ChattingCountArgs>(
      args?: Subset<T, ChattingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChattingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChattingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChattingAggregateArgs>(args: Subset<T, ChattingAggregateArgs>): Prisma.PrismaPromise<GetChattingAggregateType<T>>

    /**
     * Group by Chatting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChattingGroupByArgs} args - Group by arguments.
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
      T extends ChattingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChattingGroupByArgs['orderBy'] }
        : { orderBy?: ChattingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ChattingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChattingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Chatting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChattingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends SocketArgs= {}>(args?: Subset<T, SocketArgs>): Prisma__SocketClient<SocketGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Chatting base type for findUnique actions
   */
  export type ChattingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * Filter, which Chatting to fetch.
     */
    where: ChattingWhereUniqueInput
  }

  /**
   * Chatting findUnique
   */
  export interface ChattingFindUniqueArgs extends ChattingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chatting findUniqueOrThrow
   */
  export type ChattingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * Filter, which Chatting to fetch.
     */
    where: ChattingWhereUniqueInput
  }


  /**
   * Chatting base type for findFirst actions
   */
  export type ChattingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * Filter, which Chatting to fetch.
     */
    where?: ChattingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chattings to fetch.
     */
    orderBy?: Enumerable<ChattingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chattings.
     */
    cursor?: ChattingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chattings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chattings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chattings.
     */
    distinct?: Enumerable<ChattingScalarFieldEnum>
  }

  /**
   * Chatting findFirst
   */
  export interface ChattingFindFirstArgs extends ChattingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chatting findFirstOrThrow
   */
  export type ChattingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * Filter, which Chatting to fetch.
     */
    where?: ChattingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chattings to fetch.
     */
    orderBy?: Enumerable<ChattingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chattings.
     */
    cursor?: ChattingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chattings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chattings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chattings.
     */
    distinct?: Enumerable<ChattingScalarFieldEnum>
  }


  /**
   * Chatting findMany
   */
  export type ChattingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * Filter, which Chattings to fetch.
     */
    where?: ChattingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chattings to fetch.
     */
    orderBy?: Enumerable<ChattingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chattings.
     */
    cursor?: ChattingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chattings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chattings.
     */
    skip?: number
    distinct?: Enumerable<ChattingScalarFieldEnum>
  }


  /**
   * Chatting create
   */
  export type ChattingCreateArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * The data needed to create a Chatting.
     */
    data: XOR<ChattingCreateInput, ChattingUncheckedCreateInput>
  }


  /**
   * Chatting createMany
   */
  export type ChattingCreateManyArgs = {
    /**
     * The data used to create many Chattings.
     */
    data: Enumerable<ChattingCreateManyInput>
  }


  /**
   * Chatting update
   */
  export type ChattingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * The data needed to update a Chatting.
     */
    data: XOR<ChattingUpdateInput, ChattingUncheckedUpdateInput>
    /**
     * Choose, which Chatting to update.
     */
    where: ChattingWhereUniqueInput
  }


  /**
   * Chatting updateMany
   */
  export type ChattingUpdateManyArgs = {
    /**
     * The data used to update Chattings.
     */
    data: XOR<ChattingUpdateManyMutationInput, ChattingUncheckedUpdateManyInput>
    /**
     * Filter which Chattings to update
     */
    where?: ChattingWhereInput
  }


  /**
   * Chatting upsert
   */
  export type ChattingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * The filter to search for the Chatting to update in case it exists.
     */
    where: ChattingWhereUniqueInput
    /**
     * In case the Chatting found by the `where` argument doesn't exist, create a new Chatting with this data.
     */
    create: XOR<ChattingCreateInput, ChattingUncheckedCreateInput>
    /**
     * In case the Chatting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChattingUpdateInput, ChattingUncheckedUpdateInput>
  }


  /**
   * Chatting delete
   */
  export type ChattingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    /**
     * Filter which Chatting to delete.
     */
    where: ChattingWhereUniqueInput
  }


  /**
   * Chatting deleteMany
   */
  export type ChattingDeleteManyArgs = {
    /**
     * Filter which Chattings to delete
     */
    where?: ChattingWhereInput
  }


  /**
   * Chatting findRaw
   */
  export type ChattingFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Chatting aggregateRaw
   */
  export type ChattingAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Chatting without action
   */
  export type ChattingArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
  }



  /**
   * Model Socket
   */


  export type AggregateSocket = {
    _count: SocketCountAggregateOutputType | null
    _min: SocketMinAggregateOutputType | null
    _max: SocketMaxAggregateOutputType | null
  }

  export type SocketMinAggregateOutputType = {
    id: string | null
    socketId: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocketMaxAggregateOutputType = {
    id: string | null
    socketId: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocketCountAggregateOutputType = {
    id: number
    socketId: number
    username: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocketMinAggregateInputType = {
    id?: true
    socketId?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocketMaxAggregateInputType = {
    id?: true
    socketId?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocketCountAggregateInputType = {
    id?: true
    socketId?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocketAggregateArgs = {
    /**
     * Filter which Socket to aggregate.
     */
    where?: SocketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sockets to fetch.
     */
    orderBy?: Enumerable<SocketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sockets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sockets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sockets
    **/
    _count?: true | SocketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocketMaxAggregateInputType
  }

  export type GetSocketAggregateType<T extends SocketAggregateArgs> = {
        [P in keyof T & keyof AggregateSocket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocket[P]>
      : GetScalarType<T[P], AggregateSocket[P]>
  }




  export type SocketGroupByArgs = {
    where?: SocketWhereInput
    orderBy?: Enumerable<SocketOrderByWithAggregationInput>
    by: SocketScalarFieldEnum[]
    having?: SocketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocketCountAggregateInputType | true
    _min?: SocketMinAggregateInputType
    _max?: SocketMaxAggregateInputType
  }


  export type SocketGroupByOutputType = {
    id: string
    socketId: string
    username: string
    createdAt: Date
    updatedAt: Date
    _count: SocketCountAggregateOutputType | null
    _min: SocketMinAggregateOutputType | null
    _max: SocketMaxAggregateOutputType | null
  }

  type GetSocketGroupByPayload<T extends SocketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SocketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocketGroupByOutputType[P]>
            : GetScalarType<T[P], SocketGroupByOutputType[P]>
        }
      >
    >


  export type SocketSelect = {
    id?: boolean
    socketId?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Chatting?: boolean | Socket$ChattingArgs
    _count?: boolean | SocketCountOutputTypeArgs
  }


  export type SocketInclude = {
    Chatting?: boolean | Socket$ChattingArgs
    _count?: boolean | SocketCountOutputTypeArgs
  }

  export type SocketGetPayload<S extends boolean | null | undefined | SocketArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Socket :
    S extends undefined ? never :
    S extends { include: any } & (SocketArgs | SocketFindManyArgs)
    ? Socket  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Chatting' ? Array < ChattingGetPayload<S['include'][P]>>  :
        P extends '_count' ? SocketCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SocketArgs | SocketFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Chatting' ? Array < ChattingGetPayload<S['select'][P]>>  :
        P extends '_count' ? SocketCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Socket ? Socket[P] : never
  } 
      : Socket


  type SocketCountArgs = 
    Omit<SocketFindManyArgs, 'select' | 'include'> & {
      select?: SocketCountAggregateInputType | true
    }

  export interface SocketDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Socket that matches the filter.
     * @param {SocketFindUniqueArgs} args - Arguments to find a Socket
     * @example
     * // Get one Socket
     * const socket = await prisma.socket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SocketFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SocketFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Socket'> extends True ? Prisma__SocketClient<SocketGetPayload<T>> : Prisma__SocketClient<SocketGetPayload<T> | null, null>

    /**
     * Find one Socket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SocketFindUniqueOrThrowArgs} args - Arguments to find a Socket
     * @example
     * // Get one Socket
     * const socket = await prisma.socket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SocketFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SocketFindUniqueOrThrowArgs>
    ): Prisma__SocketClient<SocketGetPayload<T>>

    /**
     * Find the first Socket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketFindFirstArgs} args - Arguments to find a Socket
     * @example
     * // Get one Socket
     * const socket = await prisma.socket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SocketFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SocketFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Socket'> extends True ? Prisma__SocketClient<SocketGetPayload<T>> : Prisma__SocketClient<SocketGetPayload<T> | null, null>

    /**
     * Find the first Socket that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketFindFirstOrThrowArgs} args - Arguments to find a Socket
     * @example
     * // Get one Socket
     * const socket = await prisma.socket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SocketFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SocketFindFirstOrThrowArgs>
    ): Prisma__SocketClient<SocketGetPayload<T>>

    /**
     * Find zero or more Sockets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sockets
     * const sockets = await prisma.socket.findMany()
     * 
     * // Get first 10 Sockets
     * const sockets = await prisma.socket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socketWithIdOnly = await prisma.socket.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SocketFindManyArgs>(
      args?: SelectSubset<T, SocketFindManyArgs>
    ): Prisma.PrismaPromise<Array<SocketGetPayload<T>>>

    /**
     * Create a Socket.
     * @param {SocketCreateArgs} args - Arguments to create a Socket.
     * @example
     * // Create one Socket
     * const Socket = await prisma.socket.create({
     *   data: {
     *     // ... data to create a Socket
     *   }
     * })
     * 
    **/
    create<T extends SocketCreateArgs>(
      args: SelectSubset<T, SocketCreateArgs>
    ): Prisma__SocketClient<SocketGetPayload<T>>

    /**
     * Create many Sockets.
     *     @param {SocketCreateManyArgs} args - Arguments to create many Sockets.
     *     @example
     *     // Create many Sockets
     *     const socket = await prisma.socket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SocketCreateManyArgs>(
      args?: SelectSubset<T, SocketCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Socket.
     * @param {SocketDeleteArgs} args - Arguments to delete one Socket.
     * @example
     * // Delete one Socket
     * const Socket = await prisma.socket.delete({
     *   where: {
     *     // ... filter to delete one Socket
     *   }
     * })
     * 
    **/
    delete<T extends SocketDeleteArgs>(
      args: SelectSubset<T, SocketDeleteArgs>
    ): Prisma__SocketClient<SocketGetPayload<T>>

    /**
     * Update one Socket.
     * @param {SocketUpdateArgs} args - Arguments to update one Socket.
     * @example
     * // Update one Socket
     * const socket = await prisma.socket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SocketUpdateArgs>(
      args: SelectSubset<T, SocketUpdateArgs>
    ): Prisma__SocketClient<SocketGetPayload<T>>

    /**
     * Delete zero or more Sockets.
     * @param {SocketDeleteManyArgs} args - Arguments to filter Sockets to delete.
     * @example
     * // Delete a few Sockets
     * const { count } = await prisma.socket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SocketDeleteManyArgs>(
      args?: SelectSubset<T, SocketDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sockets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sockets
     * const socket = await prisma.socket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SocketUpdateManyArgs>(
      args: SelectSubset<T, SocketUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Socket.
     * @param {SocketUpsertArgs} args - Arguments to update or create a Socket.
     * @example
     * // Update or create a Socket
     * const socket = await prisma.socket.upsert({
     *   create: {
     *     // ... data to create a Socket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socket we want to update
     *   }
     * })
    **/
    upsert<T extends SocketUpsertArgs>(
      args: SelectSubset<T, SocketUpsertArgs>
    ): Prisma__SocketClient<SocketGetPayload<T>>

    /**
     * Find zero or more Sockets that matches the filter.
     * @param {SocketFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const socket = await prisma.socket.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SocketFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Socket.
     * @param {SocketAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const socket = await prisma.socket.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SocketAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Sockets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketCountArgs} args - Arguments to filter Sockets to count.
     * @example
     * // Count the number of Sockets
     * const count = await prisma.socket.count({
     *   where: {
     *     // ... the filter for the Sockets we want to count
     *   }
     * })
    **/
    count<T extends SocketCountArgs>(
      args?: Subset<T, SocketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocketAggregateArgs>(args: Subset<T, SocketAggregateArgs>): Prisma.PrismaPromise<GetSocketAggregateType<T>>

    /**
     * Group by Socket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketGroupByArgs} args - Group by arguments.
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
      T extends SocketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocketGroupByArgs['orderBy'] }
        : { orderBy?: SocketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SocketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Socket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SocketClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Chatting<T extends Socket$ChattingArgs= {}>(args?: Subset<T, Socket$ChattingArgs>): Prisma.PrismaPromise<Array<ChattingGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Socket base type for findUnique actions
   */
  export type SocketFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * Filter, which Socket to fetch.
     */
    where: SocketWhereUniqueInput
  }

  /**
   * Socket findUnique
   */
  export interface SocketFindUniqueArgs extends SocketFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Socket findUniqueOrThrow
   */
  export type SocketFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * Filter, which Socket to fetch.
     */
    where: SocketWhereUniqueInput
  }


  /**
   * Socket base type for findFirst actions
   */
  export type SocketFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * Filter, which Socket to fetch.
     */
    where?: SocketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sockets to fetch.
     */
    orderBy?: Enumerable<SocketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sockets.
     */
    cursor?: SocketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sockets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sockets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sockets.
     */
    distinct?: Enumerable<SocketScalarFieldEnum>
  }

  /**
   * Socket findFirst
   */
  export interface SocketFindFirstArgs extends SocketFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Socket findFirstOrThrow
   */
  export type SocketFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * Filter, which Socket to fetch.
     */
    where?: SocketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sockets to fetch.
     */
    orderBy?: Enumerable<SocketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sockets.
     */
    cursor?: SocketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sockets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sockets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sockets.
     */
    distinct?: Enumerable<SocketScalarFieldEnum>
  }


  /**
   * Socket findMany
   */
  export type SocketFindManyArgs = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * Filter, which Sockets to fetch.
     */
    where?: SocketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sockets to fetch.
     */
    orderBy?: Enumerable<SocketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sockets.
     */
    cursor?: SocketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sockets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sockets.
     */
    skip?: number
    distinct?: Enumerable<SocketScalarFieldEnum>
  }


  /**
   * Socket create
   */
  export type SocketCreateArgs = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * The data needed to create a Socket.
     */
    data: XOR<SocketCreateInput, SocketUncheckedCreateInput>
  }


  /**
   * Socket createMany
   */
  export type SocketCreateManyArgs = {
    /**
     * The data used to create many Sockets.
     */
    data: Enumerable<SocketCreateManyInput>
  }


  /**
   * Socket update
   */
  export type SocketUpdateArgs = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * The data needed to update a Socket.
     */
    data: XOR<SocketUpdateInput, SocketUncheckedUpdateInput>
    /**
     * Choose, which Socket to update.
     */
    where: SocketWhereUniqueInput
  }


  /**
   * Socket updateMany
   */
  export type SocketUpdateManyArgs = {
    /**
     * The data used to update Sockets.
     */
    data: XOR<SocketUpdateManyMutationInput, SocketUncheckedUpdateManyInput>
    /**
     * Filter which Sockets to update
     */
    where?: SocketWhereInput
  }


  /**
   * Socket upsert
   */
  export type SocketUpsertArgs = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * The filter to search for the Socket to update in case it exists.
     */
    where: SocketWhereUniqueInput
    /**
     * In case the Socket found by the `where` argument doesn't exist, create a new Socket with this data.
     */
    create: XOR<SocketCreateInput, SocketUncheckedCreateInput>
    /**
     * In case the Socket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocketUpdateInput, SocketUncheckedUpdateInput>
  }


  /**
   * Socket delete
   */
  export type SocketDeleteArgs = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
    /**
     * Filter which Socket to delete.
     */
    where: SocketWhereUniqueInput
  }


  /**
   * Socket deleteMany
   */
  export type SocketDeleteManyArgs = {
    /**
     * Filter which Sockets to delete
     */
    where?: SocketWhereInput
  }


  /**
   * Socket findRaw
   */
  export type SocketFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Socket aggregateRaw
   */
  export type SocketAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Socket.Chatting
   */
  export type Socket$ChattingArgs = {
    /**
     * Select specific fields to fetch from the Chatting
     */
    select?: ChattingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChattingInclude | null
    where?: ChattingWhereInput
    orderBy?: Enumerable<ChattingOrderByWithRelationInput>
    cursor?: ChattingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChattingScalarFieldEnum>
  }


  /**
   * Socket without action
   */
  export type SocketArgs = {
    /**
     * Select specific fields to fetch from the Socket
     */
    select?: SocketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SocketInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ChattingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    chat: 'chat',
    socketId: 'socketId'
  };

  export type ChattingScalarFieldEnum = (typeof ChattingScalarFieldEnum)[keyof typeof ChattingScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SocketScalarFieldEnum: {
    id: 'id',
    socketId: 'socketId',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocketScalarFieldEnum = (typeof SocketScalarFieldEnum)[keyof typeof SocketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type ChattingWhereInput = {
    AND?: Enumerable<ChattingWhereInput>
    OR?: Enumerable<ChattingWhereInput>
    NOT?: Enumerable<ChattingWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    chat?: StringFilter | string
    socketId?: StringFilter | string
    user?: XOR<SocketRelationFilter, SocketWhereInput>
  }

  export type ChattingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: SortOrder
    socketId?: SortOrder
    user?: SocketOrderByWithRelationInput
  }

  export type ChattingWhereUniqueInput = {
    id?: string
  }

  export type ChattingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: SortOrder
    socketId?: SortOrder
    _count?: ChattingCountOrderByAggregateInput
    _max?: ChattingMaxOrderByAggregateInput
    _min?: ChattingMinOrderByAggregateInput
  }

  export type ChattingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChattingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChattingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChattingScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    chat?: StringWithAggregatesFilter | string
    socketId?: StringWithAggregatesFilter | string
  }

  export type SocketWhereInput = {
    AND?: Enumerable<SocketWhereInput>
    OR?: Enumerable<SocketWhereInput>
    NOT?: Enumerable<SocketWhereInput>
    id?: StringFilter | string
    socketId?: StringFilter | string
    username?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Chatting?: ChattingListRelationFilter
  }

  export type SocketOrderByWithRelationInput = {
    id?: SortOrder
    socketId?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Chatting?: ChattingOrderByRelationAggregateInput
  }

  export type SocketWhereUniqueInput = {
    id?: string
  }

  export type SocketOrderByWithAggregationInput = {
    id?: SortOrder
    socketId?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocketCountOrderByAggregateInput
    _max?: SocketMaxOrderByAggregateInput
    _min?: SocketMinOrderByAggregateInput
  }

  export type SocketScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SocketScalarWhereWithAggregatesInput>
    OR?: Enumerable<SocketScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SocketScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    socketId?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ChattingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: string
    user: SocketCreateNestedOneWithoutChattingInput
  }

  export type ChattingUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: string
    socketId: string
  }

  export type ChattingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: StringFieldUpdateOperationsInput | string
    user?: SocketUpdateOneRequiredWithoutChattingNestedInput
  }

  export type ChattingUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: StringFieldUpdateOperationsInput | string
    socketId?: StringFieldUpdateOperationsInput | string
  }

  export type ChattingCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: string
    socketId: string
  }

  export type ChattingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: StringFieldUpdateOperationsInput | string
  }

  export type ChattingUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: StringFieldUpdateOperationsInput | string
    socketId?: StringFieldUpdateOperationsInput | string
  }

  export type SocketCreateInput = {
    id?: string
    socketId: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Chatting?: ChattingCreateNestedManyWithoutUserInput
  }

  export type SocketUncheckedCreateInput = {
    id?: string
    socketId: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Chatting?: ChattingUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocketUpdateInput = {
    socketId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chatting?: ChattingUpdateManyWithoutUserNestedInput
  }

  export type SocketUncheckedUpdateInput = {
    socketId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chatting?: ChattingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocketCreateManyInput = {
    id?: string
    socketId: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocketUpdateManyMutationInput = {
    socketId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocketUncheckedUpdateManyInput = {
    socketId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SocketRelationFilter = {
    is?: SocketWhereInput
    isNot?: SocketWhereInput
  }

  export type ChattingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: SortOrder
    socketId?: SortOrder
  }

  export type ChattingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: SortOrder
    socketId?: SortOrder
  }

  export type ChattingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: SortOrder
    socketId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ChattingListRelationFilter = {
    every?: ChattingWhereInput
    some?: ChattingWhereInput
    none?: ChattingWhereInput
  }

  export type ChattingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocketCountOrderByAggregateInput = {
    id?: SortOrder
    socketId?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocketMaxOrderByAggregateInput = {
    id?: SortOrder
    socketId?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocketMinOrderByAggregateInput = {
    id?: SortOrder
    socketId?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocketCreateNestedOneWithoutChattingInput = {
    create?: XOR<SocketCreateWithoutChattingInput, SocketUncheckedCreateWithoutChattingInput>
    connectOrCreate?: SocketCreateOrConnectWithoutChattingInput
    connect?: SocketWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SocketUpdateOneRequiredWithoutChattingNestedInput = {
    create?: XOR<SocketCreateWithoutChattingInput, SocketUncheckedCreateWithoutChattingInput>
    connectOrCreate?: SocketCreateOrConnectWithoutChattingInput
    upsert?: SocketUpsertWithoutChattingInput
    connect?: SocketWhereUniqueInput
    update?: XOR<SocketUpdateWithoutChattingInput, SocketUncheckedUpdateWithoutChattingInput>
  }

  export type ChattingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ChattingCreateWithoutUserInput>, Enumerable<ChattingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChattingCreateOrConnectWithoutUserInput>
    createMany?: ChattingCreateManyUserInputEnvelope
    connect?: Enumerable<ChattingWhereUniqueInput>
  }

  export type ChattingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ChattingCreateWithoutUserInput>, Enumerable<ChattingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChattingCreateOrConnectWithoutUserInput>
    createMany?: ChattingCreateManyUserInputEnvelope
    connect?: Enumerable<ChattingWhereUniqueInput>
  }

  export type ChattingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ChattingCreateWithoutUserInput>, Enumerable<ChattingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChattingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ChattingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ChattingCreateManyUserInputEnvelope
    set?: Enumerable<ChattingWhereUniqueInput>
    disconnect?: Enumerable<ChattingWhereUniqueInput>
    delete?: Enumerable<ChattingWhereUniqueInput>
    connect?: Enumerable<ChattingWhereUniqueInput>
    update?: Enumerable<ChattingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ChattingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ChattingScalarWhereInput>
  }

  export type ChattingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ChattingCreateWithoutUserInput>, Enumerable<ChattingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChattingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ChattingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ChattingCreateManyUserInputEnvelope
    set?: Enumerable<ChattingWhereUniqueInput>
    disconnect?: Enumerable<ChattingWhereUniqueInput>
    delete?: Enumerable<ChattingWhereUniqueInput>
    connect?: Enumerable<ChattingWhereUniqueInput>
    update?: Enumerable<ChattingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ChattingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ChattingScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SocketCreateWithoutChattingInput = {
    id?: string
    socketId: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocketUncheckedCreateWithoutChattingInput = {
    id?: string
    socketId: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocketCreateOrConnectWithoutChattingInput = {
    where: SocketWhereUniqueInput
    create: XOR<SocketCreateWithoutChattingInput, SocketUncheckedCreateWithoutChattingInput>
  }

  export type SocketUpsertWithoutChattingInput = {
    update: XOR<SocketUpdateWithoutChattingInput, SocketUncheckedUpdateWithoutChattingInput>
    create: XOR<SocketCreateWithoutChattingInput, SocketUncheckedCreateWithoutChattingInput>
  }

  export type SocketUpdateWithoutChattingInput = {
    socketId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocketUncheckedUpdateWithoutChattingInput = {
    socketId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChattingCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: string
  }

  export type ChattingUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: string
  }

  export type ChattingCreateOrConnectWithoutUserInput = {
    where: ChattingWhereUniqueInput
    create: XOR<ChattingCreateWithoutUserInput, ChattingUncheckedCreateWithoutUserInput>
  }

  export type ChattingCreateManyUserInputEnvelope = {
    data: Enumerable<ChattingCreateManyUserInput>
  }

  export type ChattingUpsertWithWhereUniqueWithoutUserInput = {
    where: ChattingWhereUniqueInput
    update: XOR<ChattingUpdateWithoutUserInput, ChattingUncheckedUpdateWithoutUserInput>
    create: XOR<ChattingCreateWithoutUserInput, ChattingUncheckedCreateWithoutUserInput>
  }

  export type ChattingUpdateWithWhereUniqueWithoutUserInput = {
    where: ChattingWhereUniqueInput
    data: XOR<ChattingUpdateWithoutUserInput, ChattingUncheckedUpdateWithoutUserInput>
  }

  export type ChattingUpdateManyWithWhereWithoutUserInput = {
    where: ChattingScalarWhereInput
    data: XOR<ChattingUpdateManyMutationInput, ChattingUncheckedUpdateManyWithoutChattingInput>
  }

  export type ChattingScalarWhereInput = {
    AND?: Enumerable<ChattingScalarWhereInput>
    OR?: Enumerable<ChattingScalarWhereInput>
    NOT?: Enumerable<ChattingScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    chat?: StringFilter | string
    socketId?: StringFilter | string
  }

  export type ChattingCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: string
  }

  export type ChattingUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: StringFieldUpdateOperationsInput | string
  }

  export type ChattingUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: StringFieldUpdateOperationsInput | string
  }

  export type ChattingUncheckedUpdateManyWithoutChattingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: StringFieldUpdateOperationsInput | string
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