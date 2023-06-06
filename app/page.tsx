import prisma from "../lib/prisma";

// export const revalidate = 3600; // revalidate every hour

async function getCount() {
  const count = await prisma.user.count();
  return count;
}

export default async function Page() {
  const count = await getCount();

  return <h1>User Count:{count}</h1>;
}
