import Router from "express"
import EmployeeController from "../controllers/employee.controller.js"

const router = Router()


router.get("/employee", EmployeeController.getEmps)
router.get("/employee/:id", EmployeeController.getOneEmp)
router.post("/employee", EmployeeController.addEmp)
router.put("/employee", EmployeeController.changeEmp)
router.delete("/employee/:id", EmployeeController.deleteEmp)

export default router
