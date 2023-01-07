/*
  Warnings:

  - You are about to alter the column `age` on the `Pet` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "diet" TEXT NOT NULL,
    "diseases" TEXT NOT NULL,
    "information" TEXT NOT NULL,
    "isMarked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Pet" ("age", "breed", "createdAt", "diet", "diseases", "id", "information", "isMarked", "name", "photo", "updatedAt") SELECT "age", "breed", "createdAt", "diet", "diseases", "id", "information", "isMarked", "name", "photo", "updatedAt" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
