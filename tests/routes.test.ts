const request = require("supertest")
// const app = require("../server")
import { app } from "../src/index"
describe("Post Endpoints", () => {
	it("should login", async () => {
		const res = await request(app).post("/users/login").send({
			email: "philippelmr@caca.com",
			password: "pipopipo",
		})
		expect(res.statusCode).toEqual(200)
		// expect(res.body).toHaveProperty("post")
	})
})
