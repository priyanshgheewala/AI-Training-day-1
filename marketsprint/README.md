# MarketSprint 🚀

**MarketSprint** is a gamified stock-market learning and paper-trading platform concept built for Indian college students.

> **Stop watching the market. Start practicing.**

The core loop is **Learn → Practice → Review → Improve**.

## What has been created

This folder contains the complete MarketSprint concept/MVP package from the project brief:

- `index.html` — modern responsive landing page
- `BUSINESS_CONCEPT.md` — business idea, target customers, MVP and business-model hypotheses
- `MARKET_RESEARCH.md` — market problem, competitors, customer needs and validation hypotheses
- `VALIDATION_SURVEY.md` — survey plan, questions, sample-size targets and validation metrics
- `supabase-schema.sql` — Supabase tables and anonymous insert policies for validation/event tracking
- `vercel.json` — simple static deployment configuration

## Product concept

MarketSprint is designed as a **training ground rather than a brokerage app**. Students learn market concepts, practice decisions using virtual money, review outcomes and improve their risk discipline.

### MVP features

1. Bite-sized lessons
2. Quizzes
3. Paper trading with virtual capital
4. Candlestick/chart challenges
5. Risk-management scoring
6. Campus/cohort leaderboards
7. Progress reports
8. A 7-day learning sprint

## 7-day MVP journey

| Day | Activity |
|---|---|
| 1 | Diagnose current market knowledge |
| 2–3 | Learn through short lessons and quizzes |
| 4–6 | Practice simulated trades with risk rules |
| 7 | Review performance and receive a scorecard |

## Target customer

**Primary:** Indian college students aged roughly 18–25 who are interested in stock markets, trading, investing or finance careers.

**Secondary:** finance clubs, colleges, student communities and beginner investors.

## Competitor positioning

| Existing product | Main strength | MarketSprint opportunity |
|---|---|---|
| TradingView | Charting + paper trading | Guided beginner practice |
| Zerodha Varsity | Financial education | Learning + simulation loop |
| StockGro | Social/gamified experience | Skill and risk-discipline focus |
| Moneycontrol | Market information | Structured practice rather than information consumption |

## Validation

The first goal is **not** to prove the business is successful. It is to learn whether students actually have the problem and whether they will use the solution.

Initial targets:

- 30 responses for a first directional signal
- 100+ responses for a stronger validation dataset
- 30+ early challenge sign-ups as an initial behavioral signal
- Measure 7-day completion and retention

### Survey

The landing page currently points to the Jotform validation survey:

`https://form.jotform.com/262468968933073`

See `VALIDATION_SURVEY.md` for the full survey plan.

## Supabase

The SQL schema is in `supabase-schema.sql`.

Tables:

- `waitlist_signups` — early-access/waitlist information
- `product_events` — anonymous MVP events such as survey clicks, lessons and simulated trades

Enable Row Level Security and only expose the minimum anonymous insert access required by the MVP.

## Vercel deployment

This is a static HTML site, so no framework build is required.

When importing the GitHub repository into Vercel, set:

- **Root Directory:** `marketsprint`
- **Framework Preset:** `Other`
- **Build Command:** leave blank
- **Output Directory:** `.`

The existing repository also contains the original training/trading project, so the `marketsprint` root directory is important. It prevents Vercel from deploying the other application instead of MarketSprint.

## GitHub

Repository: `priyanshgheewala/AI-Training-day-1`

MarketSprint folder: `marketsprint/`

## Next product steps

1. Collect survey responses.
2. Recruit the first 30 students for the 7-day challenge.
3. Build the first lesson + quiz + paper-trading flow.
4. Connect the UI to Supabase.
5. Track completion and retention.
6. Improve the MVP based on observed behavior.
7. Only after validation, consider monetization and larger campus distribution.

## Disclaimer

MarketSprint is an educational simulation concept. It does not provide personalized investment advice, brokerage services or recommendations to buy/sell securities. Paper trading and educational content do not eliminate the risks of real-world investing.
