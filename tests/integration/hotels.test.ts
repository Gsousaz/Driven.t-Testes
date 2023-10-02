import app, { init } from "@/app";
import supertest from "supertest";
import { cleanDb } from "../helpers";

const server = supertest(app);

beforeAll(async () => {
    await init();
    await cleanDb();
});
beforeEach(async () => {
    await cleanDb();
});

describe("GET hotels/", () => {
    it("should respond with status 401 if no token is given", async () => {
    })

    it("should respond with status 401 if token is not valid", async () => {
    })

    it("should respond with status 401 if there is no session for given token", async () => {
    })

})



describe("GET hotels/:id", () => {

})