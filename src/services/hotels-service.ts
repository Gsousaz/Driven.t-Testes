import { notFoundError } from "@/errors";
import { hotelsError } from "@/errors/hotelsError";
import { enrollmentRepository, ticketsRepository } from "@/repositories";
import { hotelsRepository } from "@/repositories/hotels-repository";

async function listHotels(userId: number) {
    await verifyHotels(userId)

    const hotels = await hotelsRepository.listHotels();
    return hotels;
}

async function listHotelRooms(userId: number, hotelId: number) {
    await verifyHotels(userId);
    const hotel = await hotelsRepository.listHotelRooms(hotelId);
    return hotel;
}


async function verifyHotels(userId: number) {
    const enroll = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enroll) {
        throw notFoundError();
    }

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enroll.id)
    if (!ticket || ticket.TicketType.isRemote || !ticket.TicketType.includesHotel || ticket.status === 'RESERVED') {
        throw hotelsError();
    }
}


export const hotelsService = {
    listHotels,
    listHotelRooms
}