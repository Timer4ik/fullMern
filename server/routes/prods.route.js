import Router from "express"
import ProdsController from "../controllers/prods.controller.js"

const router = Router()


router.get("/prods", ProdsController.getProds)
router.get("/prods/:id", ProdsController.getOneProd)
router.post("/prods", ProdsController.addNewProd)
router.put("/prods", ProdsController.changeProds)
router.delete("/prods/:id", ProdsController.deleteProd)

export default router
