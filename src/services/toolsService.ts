import { toolsRepository } from './../repositories/toolsRepository';

class ToolsService {

    save(tools){
        return toolsRepository.save(tools)
    }

    findAll(){
        return toolsRepository.findAll()
    }

    findById(id){
        return toolsRepository.findById(id)
    }

    deleteById(id){
        return toolsRepository.deleteById(id)
    }

    // findByUserName(toolsName){
    //     return toolsRepository.findByUsername(toolsName)
    // }

}

export const toolsService = Object.freeze(new ToolsService())