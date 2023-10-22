-- CreateTable
CREATE TABLE "ideas" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "word1_id" INTEGER NOT NULL,
    "word2_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ideas_pkey" PRIMARY KEY ("id")
);
