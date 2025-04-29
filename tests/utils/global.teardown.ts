import { prisma } from '../../lib/prisma';

async function globalTeardown() {
  console.log('Ejecutando globalTeardown: Limpiando entorno de pruebas...');

  // Elimina todas las entradas vendidas primero (por la relación con recitales)
  await prisma.entradasVendidas.deleteMany();
  await prisma.recitales.deleteMany();

  console.log('Datos de prueba eliminados correctamente.');
}

export default globalTeardown;
