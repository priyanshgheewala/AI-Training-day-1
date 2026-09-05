-- MarketSprint MVP: validation + product-event tables
-- Run this in the Supabase SQL editor for the MarketSprint project.

create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  college text,
  year_of_study text,
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_signups_email_unique
  on public.waitlist_signups (lower(email));

alter table public.waitlist_signups enable row level security;

drop policy if exists "Allow anonymous waitlist signup" on public.waitlist_signups;
create policy "Allow anonymous waitlist signup"
  on public.waitlist_signups
  for insert
  to anon
  with check (
    length(trim(email)) between 5 and 254
  );

create table if not exists public.product_events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  anonymous_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.product_events enable row level security;

drop policy if exists "Allow anonymous product events" on public.product_events;
create policy "Allow anonymous product events"
  on public.product_events
  for insert
  to anon
  with check (
    length(trim(event_name)) between 1 and 100
  );

-- Recommended MVP events:
-- landing_view, survey_click, challenge_signup, lesson_started,
-- lesson_completed, quiz_completed, simulated_trade, challenge_completed
