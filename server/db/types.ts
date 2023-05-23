import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | null | number | string;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type MessageRoleEnum = "assistant" | "user";

export type Numeric = ColumnType<string, string | number, string | number>;

export type SourceTypeEnum = "file" | "url";

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Users {
  id: Generated<string>;
  email: string | null;
  phone: string | null;
  name: string | null;
  picture_url: string | null;
  metadata: Json | null;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
}

export interface DB {
  users: Users;
}
