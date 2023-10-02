import { prisma } from "@/config";

function listHotels() {
    return prisma.hotel.findMany();
}

export const hotelsRepository = {
    listHotels
}