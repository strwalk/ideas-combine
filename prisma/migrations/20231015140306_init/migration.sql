-- CreateTable
CREATE TABLE "words" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,

    CONSTRAINT "words_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ideas" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "word1_id" INTEGER NOT NULL,
    "word2_id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ideas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ideas" ADD CONSTRAINT "ideas_word1_id_fkey" FOREIGN KEY ("word1_id") REFERENCES "words"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ideas" ADD CONSTRAINT "ideas_word2_id_fkey" FOREIGN KEY ("word2_id") REFERENCES "words"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
