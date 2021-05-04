import { toolsModel } from "../repositories/toolsRepository";
import { toolsService } from "../services/toolsService";



class ToolsController {

    save(req, res){
        console.log("TEST")
        const body = req.body
        toolsService.save(req.body).then(data => {
            res.json(data)
        })
    }

    findAll(req, res){
        toolsService.findAll().then(data => {
            res.json(data)
        })
    }

    findById(req, res){
        const id = req.params.id;
        toolsService.findById(id).then(data => {
            return res.json(data)
        })
    }

    deleteById(req, res){
        toolsService.deleteById(req.params.id).then(ok=>{
            res.send("OK")
        }, err => {
            res.sendStatus(404)
        })
    }

    // findByUsername(req, res){
    //     const tools = req.params.tools
    //     toolsService.findByUserName(tools).then(data => {
    //         res.json(data)
    //     })
    // }
    //token

    

}

export const toolsController = Object.freeze(new ToolsController())