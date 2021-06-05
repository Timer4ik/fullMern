import Router from "express"
import OrdersController from "../controllers/orders.controller.js"

const router = Router()

router.get("/orders", OrdersController.getOrders)
router.get("/orders/:id", OrdersController.getOneOrder)
router.put("/orders", OrdersController.changeOrder)
router.post("/orders", OrdersController.createOrder)
router.delete("/orders/:id", OrdersController.deleteOrder)


export default router