import { PrismaClient } from '@prisma/client';
import { constants } from '../src/components/config/constants';


const prisma = new PrismaClient();

async function main() {
    await prisma.user.upsert({
        where: { email: constants.SEED_EMAIL },
        create: {
            name: 'Root User',
            email: constants.SEED_EMAIL,
            password: constants.SEED_PASSWORD,
            phone: '00000000000',
        },
        update: {}
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });