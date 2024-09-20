import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetDatabase() {
  console.log('Reiniciando la base de datos...');

  try {
    // Eliminar todas las tablas
    await prisma.$executeRawUnsafe(`
      DO $$ DECLARE
          r RECORD;
      BEGIN
          FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
              EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
          END LOOP;
      END $$;
    `);

    console.log('Tablas eliminadas con éxito.');

    // Volver a aplicar las migraciones
    console.log('Aplicando migraciones...');
    await prisma.$executeRawUnsafe('prisma migrate deploy');
    console.log('Migraciones aplicadas.');

    // Sembrar la base de datos (si tienes un script de seed)
    console.log('Sembrando la base de datos...');
    await prisma.$executeRawUnsafe('prisma db seed');
    console.log('Base de datos sembrada con éxito.');
  } catch (error) {
    console.error('Error reiniciando la base de datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase()
  .then(() => console.log('Base de datos reiniciada con éxito.'))
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  });
