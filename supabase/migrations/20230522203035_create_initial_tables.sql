create table "public"."users" (
    "id" uuid not null default uuid_generate_v4(),
    "email" varchar,
    "phone" text,
    "name" text,
    "picture_url" text,
    "metadata" jsonb,
    "created_at" timestamp(6) with time zone not null default now(),
    "updated_at" timestamp(6) with time zone not null default now()
);

alter table "public"."users" enable row level security;


-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, phone, name, picture_url, metadata)
  values (new.id, new.email, new.phone, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data::jsonb);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";