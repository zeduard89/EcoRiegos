import express, { ErrorRequestHandler } from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import morgan from "morgan"
import cors from "cors"

// Dinamic Routes
import { router } from "../Routes/index"

// Express
const server = express()

server.use(
  cors({
    origin: "*", // Allow All Origins
    credentials: true
  })
)

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
server.use(bodyParser.json({ limit: "50mb" }))
server.use(cookieParser())
server.use(morgan("dev"))

// Routes
server.use("/", router)

// Error catching middleware.
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status: number = err.status !== undefined ? err.status : 500
  const message: string = err.message !== undefined ? err.message : String(err)
  console.error(err)
  res.status(status).send(message)
}

server.use(errorHandler)

export default server
