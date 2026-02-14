import { PrismaClient } from '@prisma/client'
import { MOCK_SCHEMES } from '../lib/data/schemes'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    for (const scheme of MOCK_SCHEMES) {
        const existing = await prisma.scheme.findFirst({
            where: { name: scheme.name }
        })

        if (!existing) {
            await prisma.scheme.create({
                data: {
                    name: scheme.name,
                    description: scheme.description,
                    ministry: scheme.ministry,
                    category: scheme.category,
                    officialLink: scheme.officialLink,
                    applicationProcess: scheme.applicationProcess,
                    eligibilityRules: scheme.eligibilityRules || {},
                    documentsRequired: scheme.documentsRequired || "[]"
                }
            })
            console.log(`Created scheme: ${scheme.name}`)
        } else {
            console.log(`Scheme already exists: ${scheme.name}`)
        }
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
