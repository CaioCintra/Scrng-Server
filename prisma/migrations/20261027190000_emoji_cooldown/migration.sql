-- Emoji limit becomes per player: EmojiLimit emojis every EmojiCooldown seconds
ALTER TABLE "Room"
ADD COLUMN "EmojiCooldown" INTEGER NOT NULL DEFAULT 5;

-- Reactions are transient, so the old tables are dropped instead of migrated
DROP TABLE "RoomEmoji";
DROP TABLE "EmojiSession";

CREATE TABLE "RoomEmoji" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RoomEmoji_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "RoomEmoji_roomId_createdAt_idx" ON "RoomEmoji"("roomId", "createdAt");
CREATE INDEX "RoomEmoji_playerId_createdAt_idx" ON "RoomEmoji"("playerId", "createdAt");
CREATE INDEX "RoomEmoji_createdAt_idx" ON "RoomEmoji"("createdAt");

ALTER TABLE "RoomEmoji"
ADD CONSTRAINT "RoomEmoji_roomId_fkey"
FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "RoomEmoji"
ADD CONSTRAINT "RoomEmoji_playerId_fkey"
FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
