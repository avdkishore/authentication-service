CREATE TABLE IF NOT EXISTS users (
  username       text PRIMARY KEY,
  password       text NOT NULL,
  role           text DEFAULT 'user' NOT NULL,
  email          text NOT NULL UNIQUE,
  "createdAt"    timestamptz DEFAULT NOW(),
  "updatedAt"    timestamptz DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "accessTokens" (
  id             serial PRIMARY KEY,
  username       text NOT NULL,
  token          text UNIQUE NOT NULL,
  "createdAt"    timestamptz DEFAULT NOW(),
  "updatedAt"    timestamptz DEFAULT NOW()
);
