import { prisma } from '../utils/prisma' // ✅ recommended in Nuxt 3
import type { Post } from '@prisma/client' // ✅ generated automatically

export default defineEventHandler(async (): Promise<Post[]> => {
  return await prisma.post.findMany({
    orderBy: { id: 'desc' }
  })
})