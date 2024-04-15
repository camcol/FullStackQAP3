CREATE TABLE IF NOT EXISTS public."Users"
(
    "User_ID" bigint NOT NULL DEFAULT nextval('"Users_User_ID_seq"'::regclass),
    "Email" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "FirstName" character varying(24) COLLATE pg_catalog."default" NOT NULL,
    "LastName" character varying(24) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY ("User_ID")
)
