-- Players mark their poll answer as ready when they finish writing
ALTER TABLE "PollAnswer" ADD COLUMN "ready" BOOLEAN NOT NULL DEFAULT false;
