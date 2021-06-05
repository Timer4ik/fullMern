import db from "../db.js"

class OrderProdsController {
	async getOneProd(req, res) {
		try {

		} catch (error) {

		}
	}
	async getOrderProds(req, res) {
		try {
			const orderProds = db.query("select * from prods_orders")

			res.json(orderProds.rows)
		} catch (error) {
			res.status(400).json({ message: error.message, message })
		}
	}
	async addOrderProds(req, res) {
		try {
			const { prod_id, order_id } = req.body
			const orderProds = db.query("insert into prods_orders(prod_id,order_id) values($1,$2)", [prod_id, order_id])

			res.json(orderProds.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, message })
		}
	}
}
export default new OrderProdsController()