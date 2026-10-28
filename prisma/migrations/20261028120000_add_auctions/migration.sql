-- Auctions: one running auction per room, bids hold the leader's points until outbid
CREATE TYPE "AuctionStatus" AS ENUM ('RUNNING', 'FINISHED', 'CANCELLED');

CREATE TABLE "Auction" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "item" TEXT,
    "startingBid" INTEGER NOT NULL,
    "minIncrement" INTEGER NOT NULL DEFAULT 1,
    "status" "AuctionStatus" NOT NULL DEFAULT 'RUNNING',
    "endsAt" TIMESTAMP(3) NOT NULL,
    "currentBid" INTEGER,
    "leaderId" TEXT,
    "leaderName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),

    CONSTRAINT "Auction_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "AuctionBid" (
    "id" TEXT NOT NULL,
    "auctionId" TEXT NOT NULL,
    "playerId" TEXT,
    "playerName" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuctionBid_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Auction_roomId_createdAt_idx" ON "Auction"("roomId", "createdAt");
CREATE INDEX "AuctionBid_auctionId_createdAt_idx" ON "AuctionBid"("auctionId", "createdAt");

ALTER TABLE "Auction"
ADD CONSTRAINT "Auction_roomId_fkey"
FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Auction"
ADD CONSTRAINT "Auction_leaderId_fkey"
FOREIGN KEY ("leaderId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "AuctionBid"
ADD CONSTRAINT "AuctionBid_auctionId_fkey"
FOREIGN KEY ("auctionId") REFERENCES "Auction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "AuctionBid"
ADD CONSTRAINT "AuctionBid_playerId_fkey"
FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
