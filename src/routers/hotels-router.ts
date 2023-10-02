import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { listHotels } from "@/controllers/hotels-controller";

const hotelsRouter = Router();

hotelsRouter
    .all('/*', authenticateToken)
    .get("/hotels", listHotels)
    .get("/hotels/:id",)


export { hotelsRouter }