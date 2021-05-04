import { demoService } from "../services/demoService"

class DemoController {

    hello(req, res) {
        res.send("Hello")
    }

    // test = (req, res) => {
    //     res.send("Test")
    // }

    demo(req, res) {
        res.send("Demo")
    }

    save(req, res) {
        const data = req.body
        const result = demoService.add(data.x, data.y)
        res.send("" + result)
    }
}
// Singleton
export const demoController = Object.freeze(new DemoController())