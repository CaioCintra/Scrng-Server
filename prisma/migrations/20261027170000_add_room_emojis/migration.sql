-- Add room emoji settings
ALTER TABLE "Room"
ADD COLUMN "EmojisEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "EmojiLimit" INTEGER NOT NULL DEFAULT 10;

-- Store each remote access session and its submitted reactions
CREATE TABLE "EmojiSession" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "sentCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmojiSession_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "RoomEmoji" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RoomEmoji_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "EmojiSession_roomId_createdAt_idx" ON "EmojiSession"("roomId", "createdAt");
CREATE INDEX "EmojiSession_createdAt_idx" ON "EmojiSession"("createdAt");
CREATE INDEX "RoomEmoji_sessionId_createdAt_idx" ON "RoomEmoji"("sessionId", "createdAt");
CREATE INDEX "RoomEmoji_createdAt_idx" ON "RoomEmoji"("createdAt");

ALTER TABLE "EmojiSession"
ADD CONSTRAINT "EmojiSession_roomId_fkey"
FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "EmojiSession"
ADD CONSTRAINT "EmojiSession_playerId_fkey"
FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "RoomEmoji"
ADD CONSTRAINT "RoomEmoji_sessionId_fkey"
FOREIGN KEY ("sessionId") REFERENCES "EmojiSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
