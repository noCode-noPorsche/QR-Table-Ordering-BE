import { PrismaPg } from '@prisma/adapter-pg'
import envConfig from '@/config.js'
import { PrismaClient } from '@prisma/client'

const connectionString = `${envConfig.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }
