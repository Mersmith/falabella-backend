-- CreateTable
CREATE TABLE "Tareas" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Tareas_pkey" PRIMARY KEY ("id")
);
