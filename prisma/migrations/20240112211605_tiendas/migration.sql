-- CreateTable
CREATE TABLE "Tiendas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Tiendas_pkey" PRIMARY KEY ("id")
);
