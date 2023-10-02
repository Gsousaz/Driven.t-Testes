import { prisma } from "@/config";

function listHotels() {
    const hotels = prisma.hotel.findMany();
    return hotels;
}

function listHotelRooms(hotelId: number) {
    const hotels = prisma.hotel.findUnique({
        where: {
            id: hotelId
        },
        include: {
            Rooms: true
        }
    })
}

export const hotelsRepository = {
    listHotels,
    listHotelRooms
}