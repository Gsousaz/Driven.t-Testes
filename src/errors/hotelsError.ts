import { ApplicationError } from "@/protocols";

export function hotelsError ():ApplicationError {
    return {
        name: "VerifyHotelsError",
        message: "Can`t verify hotels"
    }
}