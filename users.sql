CREATE TABLE "users" (
  "userid" bigint(20) NOT NULL,
  "Username" varchar(50) NOT NULL,
  "Password" varchar(50) NOT NULL,
  "E-mail" varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE "users"
  ADD PRIMARY KEY ("userid");


ALTER TABLE "users"
  MODIFY "userid" bigint(20) NOT NULL AUTO_INCREMENT;

