import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"
import UserModel from "../models/UserModel"
dotenv.config()

//! RAILWAY config
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env // Original
// const sequelize = new Sequelize(
//   `postgres://${DB_USER ?? ""}:${DB_PASSWORD ?? ""}@${DB_HOST ?? ""}:${
//     DB_PORT ?? ""
//   }/${DB_NAME ?? ""}`, // Original
//   {
//     dialect: "postgres",
//     logging: false,
//     native: false,
//     models: [
//       UserModel,
//       ProjectModel,
//       CommentModel,
//       AdminModel,
//       UserFavoritesModel,
//       PaymentsModel,
//       ImagesModel
//     ]
//   }
// )

//! RENDER config
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
// const sequelize = new Sequelize(
//   `postgres://${DB_USER ?? ""}:${DB_PASSWORD ?? ""}@${DB_HOST ?? ""}/${
//     DB_NAME ?? ""
//   }`,
//   {
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false // Solo si estás utilizando un certificado autofirmado y no uno emitido por una autoridad de certificación reconocida.
//       }
//     },
//     logging: false,
//     native: false,
//     models: [
//       UserModel,
//       ProjectModel,
//       CommentModel,
//       AdminModel,
//       UserFavoritesModel,
//       PaymentsModel,
//       ImagesModel
//     ]
//   }
// )

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

// Configure Sequelize
const sequelize = new Sequelize(
  `postgres://${DB_USER ?? ""}:${DB_PASSWORD ?? ""}@${DB_HOST ?? ""}:${
    DB_PORT ?? ""
  }/${DB_NAME ?? ""}`,
  {
    dialect: "postgres",
    dialectOptions: {},
    logging: false,
    native: false,
    models: []
  }
)

// Initialize the User model
sequelize.addModels([UserModel])

export { sequelize, UserModel }
