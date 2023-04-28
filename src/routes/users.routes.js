const {Router} = require ("express")

const UserController = require ("../controllers/UserController")

const usersRoutes = Router();

function myMiddleware(request, response, next) {
    console.log("Você passou pelo Middleware!");
   /*if (!request.body.isAdmin){
    return response.json({message:"user anauthorized"})
   }*/

    next();
}

const userController = new UserController

usersRoutes.post("/", userController.create)
usersRoutes.put("/:id", userController.update)


module.exports = usersRoutes;