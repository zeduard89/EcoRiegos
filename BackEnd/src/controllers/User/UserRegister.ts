import { Request, Response } from "express"
import { UserModel } from "../../config/db"
import { IUser } from "../../types/IUser"

// Cargamos las variables de entorno con config y la ejecuto para conectar
import dotenv from "dotenv"
dotenv.config()

const userRegister = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email }: IUser = req.body
    console.log(email)

    const user: IUser | null = await UserModel.findOne({ where: { email } })
    if (user != null) {
      throw new Error("Email already used")
    }

    res.status(200).send("User was registered successfully")
  } catch (error) {
    const errorMessage =
      (error as Error).message || "Unknown error registering user"
    res.status(400).send(errorMessage)
  }
}

export { userRegister }
