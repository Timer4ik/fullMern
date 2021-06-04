import db from "../db.js"

class ProdsController {

	async addNewProd(req, res) {

		const { cat_id, name, cost, descr, amount } = req.body
		try {
			const newProd = await db.query("insert into prods(cat_id,name,cost,descr,amount) values($1,$2,$3,$4,$5) returning *",
				[cat_id, name, cost, descr, amount])

			res.json(newProd.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async getProds(req, res) {
		try {
			const prods = await db.query("select * from prods")
			res.json(prods.rows)
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async getOneProd(req, res) {
		try {
			const { id } = req.params

			const prod = await db.query("select * from prods where id=$1", [id])

			res.json(prod.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async changeProds(req, res) {
		try {
			const { id } = req.query
			const { cat_id, name, cost, descr, amount } = req.body

			const prod = await db.query("update prods set cat_id=$1,name=$2,cost=$3,descr=$4,amount=$5 where id=$6 returning *",
				[cat_id, name, cost, descr, amount, id])

			res.json(prod.rows[0])
		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}
	async deleteProd(req, res) {
		try {
			const { id } = req.params

			const deletedProd = await db.query("delete from prods where id=$1 returning *", [id])

			res.json(deletedProd.rows[0])

		} catch (error) {
			res.status(400).json({ message: error.message, error })
		}
	}

}

export default new ProdsController()