import { prisma } from '../../lib/prisma';

async function globalSetup() {
  console.log('Ejecutando globalSetup: Inicializando entorno de pruebas...');

  // 1. Limpia la base de datos existente
  await prisma.entradasVendidas.deleteMany();
  await prisma.recitales.deleteMany();

  // 2. Inserta 10 recitales de prueba
  const recitales = [
    {
      ubicacion: 'Teatro Gran Rex',
      descripcion: 'Show íntimo con luces y sonido envolvente.',
      fechaYHora: new Date('2025-06-10T21:00:00'),
      precioDeEntrada: 5500,
      cantidadDisponible: 300,
      genero: 'Rock',
    },
    {
      ubicacion: 'Luna Park',
      descripcion: 'Una noche de pop con bailarines y pantallas LED.',
      fechaYHora: new Date('2025-06-15T20:00:00'),
      precioDeEntrada: 6000,
      cantidadDisponible: 500,
      genero: 'Pop',
    },
    {
      ubicacion: 'Movistar Arena',
      descripcion: 'Festival de bandas emergentes.',
      fechaYHora: new Date('2025-07-01T19:30:00'),
      precioDeEntrada: 4500,
      cantidadDisponible: 800,
      genero: 'Indie',
    },
    {
      ubicacion: 'Niceto Club',
      descripcion: 'Fusión de jazz y música electrónica en vivo.',
      fechaYHora: new Date('2025-05-29T22:00:00'),
      precioDeEntrada: 4200,
      cantidadDisponible: 200,
      genero: 'Jazz',
    },
    {
      ubicacion: 'Estadio Vélez',
      descripcion: 'Concierto masivo con fuegos artificiales.',
      fechaYHora: new Date('2025-08-20T20:00:00'),
      precioDeEntrada: 7500,
      cantidadDisponible: 1000,
      genero: 'Reggaetón',
    },
    {
      ubicacion: 'La Trastienda',
      descripcion: 'Concierto acústico y cercano con el artista.',
      fechaYHora: new Date('2025-06-05T21:00:00'),
      precioDeEntrada: 3800,
      cantidadDisponible: 150,
      genero: 'Folk',
    },
    {
      ubicacion: 'Centro Cultural Kirchner',
      descripcion: 'Espectáculo experimental con proyecciones visuales.',
      fechaYHora: new Date('2025-07-12T18:00:00'),
      precioDeEntrada: 0, // gratuito
      cantidadDisponible: 250,
      genero: 'Electrónica',
    },
    {
      ubicacion: 'Usina del Arte',
      descripcion: 'Concierto de orquesta sinfónica.',
      fechaYHora: new Date('2025-09-10T17:00:00'),
      precioDeEntrada: 3000,
      cantidadDisponible: 400,
      genero: 'Clásica',
    },
    {
      ubicacion: 'Parque Centenario',
      descripcion: 'Festival gratuito al aire libre.',
      fechaYHora: new Date('2025-10-01T16:00:00'),
      precioDeEntrada: 0,
      cantidadDisponible: 1000,
      genero: 'Cumbia',
    },
    {
      ubicacion: 'Konex',
      descripcion: 'Noche de percusión en vivo y danza.',
      fechaYHora: new Date('2025-07-20T21:30:00'),
      precioDeEntrada: 5000,
      cantidadDisponible: 350,
      genero: 'Afrobeat',
    },
  ];

  for (const recital of recitales) {
    await prisma.recitales.create({ data: recital });
  }

  console.log('Recitales de prueba insertados correctamente.');
}

export default globalSetup;
