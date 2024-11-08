// import { PrismaClient } from "@/node_modules/.prisma/client/default";

// const client = global.prismadb || new PrismaClient();

// if (process.env.NODE_ENV === 'production') {
//     global.prismadb = client;
// }

// export default client;


import { PrismaClient } from "@prisma/client";


const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === 'production') {
    global.prismadb = client;
}

export default client;
