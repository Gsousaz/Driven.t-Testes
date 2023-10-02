import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { listHotelRoomsForUser, listUserHotels } from "@/controllers/hotels-controller";

const hotelsRouter = Router();

hotelsRouter
    .all('/*', authenticateToken)
    .get("/", listUserHotels)
    .get("/:id", listHotelRoomsForUser)


export { hotelsRouter }