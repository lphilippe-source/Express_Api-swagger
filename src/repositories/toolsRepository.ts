import mongoose from "mongoose";

export const toolsSchema = new mongoose.Schema({
    price:Number,
    toolsName:String,
    categoryTools:String,
    lieu:String,
    donationoutils:String
})


export const toolsModel = mongoose.model('tools',toolsSchema)
// console.log(JSON.stringify(toolsSchema));

class ToolsRepository {
    save(tools){
        return new toolsModel(tools).save()
    }

    findAll(){
        return toolsModel.find().exec()
    }

    findById(id){
        return toolsModel.findById(id).exec()
    }

    deleteById(id){
        return toolsModel.deleteOne({_id:id}).exec()
    }

    // findByUsername(toolsName){
    //     return toolsModel.find({toolsName:toolsName}).exec()
    // }
}

export const toolsRepository = Object.freeze(new ToolsRepository())