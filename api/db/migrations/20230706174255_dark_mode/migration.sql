-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "darkMode" BOOLEAN NOT NULL DEFAULT false,
    "newsGeneral" BOOLEAN NOT NULL DEFAULT true,
    "newsBusiness" BOOLEAN NOT NULL DEFAULT false,
    "newsEntertainment" BOOLEAN NOT NULL DEFAULT false,
    "newsHealth" BOOLEAN NOT NULL DEFAULT false,
    "newsScience" BOOLEAN NOT NULL DEFAULT false,
    "newsSports" BOOLEAN NOT NULL DEFAULT false,
    "newsTechnology" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
