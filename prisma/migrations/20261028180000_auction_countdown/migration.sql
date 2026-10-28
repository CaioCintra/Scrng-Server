-- Auctions start after a short countdown so the bidding UI reaches every player first
ALTER TABLE "Auction"
ADD COLUMN "startsAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
