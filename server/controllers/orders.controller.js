import db from "../db.js"

class OrdersController {
	async createOrder(req, res) {
		try {
			const { emp_id, info, status } = req.body

			const newOrder = await db.query("insert into orders(emp_id,info,status) values($1,$2,$3) returning *", [emp_id, info, status])

			res.json(newOrder.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async getOrders(req, res) {
		try {
			const orders = await db.query("select * from orders")

			res.json(orders.rows)
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async getOneOrder(req, res) {
		try {
			const { id } = req.params

			const order = await db.query("select * from orders where id=$1", [id])
			res.json(order.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async changeOrder(req, res) {
		try {
			const { id } = req.query
			const { emp_id, status, info } = req.body

			const changedOrder = await db.query("update orders set emp_id=$1,status=$2,info=$3 where id=$4 returning *", [emp_id, status, info, id])

			res.json(changedOrder.rows[0])

		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async deleteOrder(req, res) {
		try {
			const { id } = req.params

			const order = await db.query("delete from orders where id=$1 returning *", [id])
			res.json(order.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
}

export default new OrdersController()