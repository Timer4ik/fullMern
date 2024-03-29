import express from "express"
import ProdsRouter from "./routes/prods.route.js"
import EmployeeRouter from "./routes/employee.route.js"
import OrdersRouter from "./routes/orders.route.js"
import OrderProdsRouter from "./routes/orderProds.route.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const { PORT } = process.env

app.use(express.json())
app.use(cors())

app.use("/api", ProdsRouter)
app.use("/api", EmployeeRouter)
app.use("/api", OrdersRouter)
app.use("/api", OrderProdsRouter)

async function start() {
	try {
		app.listen(PORT, () => console.log(`App has been started on port http://localhost:${PORT}`))
	} catch (error) {
		console.log({ message: "Problem with localhost", error });
	}
}
start()