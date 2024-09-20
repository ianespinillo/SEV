import { PrismaClient } from "../src/client";
import { categories } from "../src/common/category";
import { signals } from "../src/common/signals";

const prisma = new PrismaClient();
async function main() {
    for (let category of Object.keys(categories)) {
        await prisma.category.create({
            data: {
                name: category
            }
        })
    }

    for (let signal of Object.values(signals)) {
        await prisma.signals.create({
            data: {
                name: signal.nombre,
                description: signal.descripcion,
                image: signal.imagen,
                category_id: signal.idCategoria
            }
        })
    }
}

main()
    .then(() => console.log('Db seeded'))
    .catch(e => console.error(e))