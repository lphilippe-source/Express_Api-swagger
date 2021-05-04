import mongoose, { Model, model, Schema,Document } from "mongoose"

mongoose.set('useCreateIndex', true);

export interface User extends Document{
    id:Number,
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phone:String,
    __v:number
}
export const userSchema:Schema = new Schema({
    id:Number,
    firstName:String,
    lastName:String,
    email:{type:String,unique:true,required:true},
    password:String,
    phone:String
})


export const userModel:Model<User> = model('user',userSchema)

class UserRepository {
    save(user:User){
        return new userModel(user).save()
    }

    findAll(){
        return userModel.find().exec()
    }

    findById(id:number){
        return userModel.findById(id).exec()
    }

    deleteById(id:number){
        return userModel.deleteOne({_id:id}).exec()
    }

    findByUsername(username:string){
        return userModel.find({username:username}).exec()
    }

    findByMail(mail:string){
        return userModel.find({email:mail}).exec()
    }
}

export const userRepository = Object.freeze(new UserRepository())