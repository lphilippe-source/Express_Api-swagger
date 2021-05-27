import { DIContainer } from "./IContainer"
import { User, userRepository } from "./userRepositories"
const bcrypt = require("bcrypt")

export class Mock implements DIContainer {
	userDefault
	mockRepository?: Promise<User[]>
	constructor(email, mock = null) {
		if (mock) {
			this.mockRepository = new Promise((resolve, reject) => {
				const hash = bcrypt.hash("pipopipo", 10)
				return [
					{
						firstname: "phil",
						email: "philippelmr@caca.com",
						password: hash,
						lastname: "toto",
						phone: "2989824724",
						_v: 23,
					},
				]
			})
			// this.mockRepository = {
			// 	email: "philippelmr@caca.com",
			// 	password: "pipopipo",
			// }
		} else {
			this.userDefault = userRepository.findByMail(email)
		}
		// this.getInstance()
	}
	// on doit modifier le userRepository si on est en test on renvoie le mock
	//sinon valeur par default
	static getInstance(email, mock = null) {
		return new this(email)
	}
	findByMail(mail: string) {
		return new Promise(async (resolve, reject) => {
			const hash = await bcrypt.hash("pipopipo", 10)
			resolve([
				{
					firstname: "philippe",
					email: "philippelmr@caca.com",
					password: hash,
					lastname: "toto",
					phone: "2989824724",
					_v: 23,
				},
			])
		})
	}
}
