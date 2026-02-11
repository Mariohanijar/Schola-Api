import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main(params) {
    const roles = ['admin','director','teacher','student']
    console.log('Seeding database with roles...');

    for (const roleName of roles) {
    await prisma.role.upsert({
      where: { name: roleName },
      update: {}, 
      create: { name: roleName }, 
    });
  }
  console.log('✅ Roles created successfully!');
}
    
main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })