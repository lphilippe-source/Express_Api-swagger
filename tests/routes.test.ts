import { userRepository } from "./../src/repositories/userRepositories"
const request = require("supertest")
// const app = require("../server")
const repo = require("../src/repositories/userRepositories")

import { app } from "../src/index"
import { Mock } from "../src/repositories/mock"
describe("Post Endpoints", () => {
	it("should login", async () => {
		repo.userRepository = new Mock("philippelmr@caca.com")
		const res = await request(app).post("/users/login").send({
			email: "philippelmr@caca.com",
			password: "pipopipo",
		})
		console.log(res.body)
		expect(res.statusCode).toEqual(200)
		// expect(res.body).toHaveProperty("userId")
	})
})
