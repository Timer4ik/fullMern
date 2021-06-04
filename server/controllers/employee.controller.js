import db from "../db.js"

class EmployeeController {

	async addEmp(req, res) {
		const { firstName, secondName, rating } = req.body
		try {
			const newEmp = await db.query("insert into employee(firstName,secondName,rating) values($1,$2,$3) returning *",
				[firstName, secondName, rating])

			res.json(newEmp.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async getEmps(req, res) {
		try {
			const emps = await db.query("select * from employee")

			res.json(emps.rows)
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async getOneEmp(req, res) {
		try {
			const { id } = req.params
			const emp = await db.query("select * from employee where id=$1", [id])

			res.json(emp.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}

	async changeEmp(req, res) {
		try {
			const { id } = req.query
			const { firstName, secondName, rating } = req.body
			const emp = await db.query("update employee set firstname=$1,secondname=$2,rating=$3 where id=$4 returning *"
				, [firstName, secondName, rating, id])

			res.json(emp.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async deleteEmp(req, res) {
		try {
			const { id } = req.params

			const deletedEmp = await db.query("delete from employee where id=$1", [id])

			res.json(deletedEmp.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}

}

export default new EmployeeController()