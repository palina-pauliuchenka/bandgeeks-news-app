-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
