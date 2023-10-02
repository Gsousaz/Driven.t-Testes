import { hotelsError } from "@/errors/hotelsError";
import { hotelsRepository } from "@/repositories/hotels-repository";
import { enrollmentRepository, ticketsRepository } from "@/repositories";
import { notFoundError } from "@/errors";

async function listHotelsForUser(userId: number) {
    await verifyUserEnrollment(userId);

    const hotels = await hotelsRepository.listHotels();
    return hotels;
}

async function listRoomsForUser(userId: number, hotelId: number) {
    await verifyUserEnrollment(userId);
    const hotelRooms = await hotelsRepository.listHotelRooms(hotelId);
    return hotelRooms;
}

async function verifyUserEnrollment(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment) {
        throw notFoundError();
    }

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
    if (!ticket) throw notFoundError();
    if (ticket.TicketType.isRemote || !ticket.TicketType.includesHotel || ticket.status === 'RESERVED') {
        throw hotelsError();
    }
}

export const hotelsService = {
    listHotelsForUser,
    listRoomsForUser
};
