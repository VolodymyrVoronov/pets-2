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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isMarked" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Pet" ("age", "breed", "createdAt", "diet", "diseases", "id", "information", "name", "photo", "updatedAt") SELECT "age", "breed", "createdAt", "diet", "diseases", "id", "information", "name", "photo", "updatedAt" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
