CREATE TYPE enum_referrals_status AS ENUM ('ANNONYMOUS', 'NEW', 'RETURNING');
CREATE TABLE public.referrals (
  id SERIAL PRIMARY KEY ,
  username CHARACTER VARYING(255),
  "userType" "enum_referrals_status" DEFAULT 'ANNONYMOUS'::enum_referrals_status NOT NULL,
  lifetime INTEGER DEFAULT 30,
  referrer CHARACTER VARYING(255),
  "sourceName" CHARACTER VARYING(255) NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  FOREIGN KEY ("sourceName") REFERENCES public.sources ("shortName")
  MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);
