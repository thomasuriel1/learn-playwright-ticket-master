import {prisma} from "../lib/prisma";
export async function obtenerTodosLosRecitales() {
  try {
    return prisma.recitales.findMany()
  } catch (error) {
    console.log(error)
    return []
  }
}