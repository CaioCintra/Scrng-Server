-- Auction timer becomes configurable per auction (initial duration and reset after a bid)
ALTER TABLE "Auction"
ADD COLUMN "durationSeconds" INTEGER NOT NULL DEFAULT 30,
ADD COLUMN "bidResetSeconds" INTEGER NOT NULL DEFAULT 10;
