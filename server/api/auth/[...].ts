import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from '@auth/core/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default NuxtAuthHandler({
  // List of login methods (providers)
  providers: [
    // Email + Password login
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: any) {
        // 1. Validate input
        if (!credentials?.email || !credentials?.password) return null

        // 2. Find user in DB
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })
        if (!user) return null

        // 3. Compare password hash
        const isValid = await bcrypt.compare(credentials.password, user.password!)
        if (!isValid) return null

        // 4. Return user object (added to session)
        return { id: user.id, email: user.email, name: user.name }
      }
    })
  ],

  // Session + security config
  secret: process.env.AUTH_SECRET,

  pages: {
    signIn: '/login', // Optional: redirect users to your custom login page
  }
})
