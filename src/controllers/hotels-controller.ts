import { AuthenticatedRequest } from "@/middlewares";
import { hotelsService } from "@/services/hotels-service";
import { Response } from "express";

export async function listUserHotels(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const userHotels = await hotelsService.listHotelsForUser(userId);
    res.send(userHotels);
}

export async function listHotelRoomsForUser(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const { id } = req.params;

    const hotelRooms = await hotelsService.listRoomsForUser(userId, Number(id));
    res.send(hotelRooms);
}
