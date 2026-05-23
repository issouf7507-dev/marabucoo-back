-- AddColumn FNE fields to clients table
ALTER TABLE "clients" ADD COLUMN IF NOT EXISTS "ncc"              TEXT;
ALTER TABLE "clients" ADD COLUMN IF NOT EXISTS "fneTemplate"      TEXT;
ALTER TABLE "clients" ADD COLUMN IF NOT EXISTS "fnePointOfSale"   TEXT;
ALTER TABLE "clients" ADD COLUMN IF NOT EXISTS "fneEstablishment" TEXT;
