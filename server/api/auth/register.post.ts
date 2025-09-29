import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email: string; password: string; name?: string }>(event)

  if (!body.email || !body.password) {
    throw createError({ statusCode: 400, statusMessage: 'Email and password are required' })
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: body.email }
  })
  if (existingUser) {
    throw createError({ statusCode: 400, statusMessage: 'User already exists' })
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(body.password, 10)

  // Create new user
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: hashedPassword,
      name: body.name
    }
  })

  return { id: user.id, email: user.email }
})
