/*
  Warnings:

  - You are about to drop the column `darkMode` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "newsGeneral" BOOLEAN NOT NULL DEFAULT true,
    "newsBusiness" BOOLEAN NOT NULL DEFAULT false,
    "newsEntertainment" BOOLEAN NOT NULL DEFAULT false,
    "newsHealth" BOOLEAN NOT NULL DEFAULT false,
    "newsScience" BOOLEAN NOT NULL DEFAULT false,
    "newsSports" BOOLEAN NOT NULL DEFAULT false,
    "newsTechnology" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("email", "hashedPassword", "id", "name", "newsBusiness", "newsEntertainment", "newsGeneral", "newsHealth", "newsScience", "newsSports", "newsTechnology", "resetToken", "resetTokenExpiresAt", "salt") SELECT "email", "hashedPassword", "id", "name", "newsBusiness", "newsEntertainment", "newsGeneral", "newsHealth", "newsScience", "newsSports", "newsTechnology", "resetToken", "resetTokenExpiresAt", "salt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
