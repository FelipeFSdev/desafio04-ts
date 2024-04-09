export interface User {
    id: number
    name: string
    email: string
}
let id: number = 1;

const db = [
    {
        id,
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ) {
        this.db = database
    }

    createUser = (name: string, email: string) => {
        id++;
        const user = {
            id,
            name,
            email
        }
        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (identificador: number) => {
        for (const i of this.db) {
            const user = this.db.findIndex((i) => {
                return i.id === identificador;
            })
            if (user >= 0) {
                this.db.splice(user, 1)
                break;
            }
        }
    }
}

