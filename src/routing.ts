import { demoController } from "./controllers/DemoController";
import { Auth } from "./controllers/auth";
import { userController } from "./controllers/userController"
import { toolsController } from "./controllers/ToolsController"
import bodyParser from "body-parser";
import { customCss, swaggerDocument } from ".";
import swaggerUi = require('swagger-ui-express');



// @ts-ignore
export const routing = (app) => {
    // Demo
    app.get('/', demoController.demo)
    app.get('/hello', demoController.hello)
    // app.get('/test', demoController.test)
    app.post('/', demoController.save)

    // User

    const jsonParser = bodyParser.json()
    
    app.post('/users/signup',jsonParser, Auth.signup)
    app.post('/users/login',jsonParser, Auth.login)
    app.post('/users', Auth.isToken, userController.save)
    app.get('/users', Auth.isToken, userController.findAll)
    app.get('/users/:id', Auth.isToken, userController.findById)
    app.delete('/users/:id', Auth.isToken, userController.deleteById)
    app.get('/users/username/:username', Auth.isToken, userController.findByUsername)
    
    // swagger docs
    app.use('/api', swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, null, null,customCss))
  
      // Tools
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    // var jsonParser = bodyParser.json()

    // app.post('/users/signup',jsonParser,signup)
    // app.post('/users/login', login)
    app.post('/tools', jsonParser, toolsController.save)
    app.get('/tools', toolsController.findAll)
    app.get('/tools/:id', toolsController.findById)
    app.delete('/tools/:id', toolsController.deleteById)
    // app.get('/tools/username/:username', toolsController.findByUsername)

}