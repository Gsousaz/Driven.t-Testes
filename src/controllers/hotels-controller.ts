import { AuthenticatedRequest } from "@/middlewares";
import { hotelsService } from "@/services/hotels-service";
import { Response } from "express";
export async function listHotels(req: AuthenticatedRequest, res: Response) {
    const { userId } = req
    const hotels = await hotelsService.listHotels(userId);
    return res.send(hotels);
}