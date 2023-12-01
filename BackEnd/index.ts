import server from "./src/config/server"
import { sequelize } from "./src/config/db"
import "dotenv/config"

let PORT: string | undefined
if (process.env.PORT != null) PORT = process.env.PORT
else PORT = "3000"

//! Syncing all the models at once. CONVINO DB con mi servidor
sequelize
  .sync({ force: true })
  .then(() => {
    //! levanto mi servidor
    server.listen(PORT, () => {
      console.log("Master, servidor levantado en el puerto", PORT)
    })
  })
  .catch((error) => {
    console.error("Error al sincronizar los modelos de Sequelize:", error)
  })
