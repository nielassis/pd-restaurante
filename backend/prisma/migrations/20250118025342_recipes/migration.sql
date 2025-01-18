-- CreateTable
CREATE TABLE "Receitas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ingredients" TEXT[],
    "instructions" TEXT NOT NULL,

    CONSTRAINT "Receitas_pkey" PRIMARY KEY ("id")
);
