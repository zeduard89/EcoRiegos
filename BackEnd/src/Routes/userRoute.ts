import { Router } from "express"
const router = Router()

// Llamo a los controladores
import { userRegister } from "../controllers/User/UserRegister"

router.post("/register", userRegister)

export { router }
