import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { listHotelRooms, listHotels } from "@/controllers/hotels-controller";

const hotelsRouter = Router();

hotelsRouter
    .all('/*', authenticateToken)
    .get("/hotels", listHotels)
    .get("/hotels/:id", listHotelRooms)


export { hotelsRouter }