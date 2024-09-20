import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function main() {
	await db.$connect();
	await db.category.deleteMany();
	await db.signals.deleteMany();
	await db.review.deleteMany();
	await db.$disconnect();
}

main()
	.then(() => console.log('DB Truncated'))
	.catch((err) => console.error(err));
