import Router from "express"
import OrderProdsController from "../controllers/orderProds.controller.js"

const router = Router()

router.get("/orderPords", OrderProdsController.getOrderProds)
router.get("/orderPords/:id", OrderProdsController.getOneProd)
router.post("/orderPords", OrderProdsController.addOrderProds)



export default router