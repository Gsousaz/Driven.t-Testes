import { prisma } from "@/config";

async function listHotels() {
    const hotels = await prisma.hotel.findMany();
    return hotels;
}

async function listHotelRooms(hotelId: number) {
    const hotel = await prisma.hotel.findUnique({
        where: {
            id: hotelId
        },
        include: {
            Rooms: true
        }
    });
    return hotel;
}

export const hotelsRepository = {
    listHotels,
    listHotelRooms
};
