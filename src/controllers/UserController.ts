import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ) {
        this.userService = userService
    }

    createUser = (request: Request, response: Response): Response => {
        const user = request.body

        if (!user.name || !user.email) {
            return response.status(400).json({ message: "You need to fill all fields to regist an user." })
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado' })
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }

    deleteUser = (req: Request, res: Response) => {
        const { id } = req.params;
        this.userService.deleteUser(Number(id))

        return res.status(204).json()
    }
}
