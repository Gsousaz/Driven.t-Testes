import { AuthenticatedRequest } from "@/middlewares";
import { hotelsService } from "@/services/hotels-service";
import { Response } from "express";

export async function listHotels(req: AuthenticatedRequest, res: Response) {
    const { userId } = req
    const hotels = await hotelsService.listHotels(userId);
    res.send(hotels);
}

export async function listHotelRooms(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const { hotelId } = req.params;

    const hotel = await hotelsService.listHotelRooms(userId, Number(hotelId));
    res.send(hotel);
}