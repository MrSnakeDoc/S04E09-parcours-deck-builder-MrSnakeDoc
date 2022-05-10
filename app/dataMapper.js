import databaseConnect from "./database";

export const dataMapper = {
	dbQuery(query) {
		const client = databaseConnect();
		return client
			.query(query)
			.then((res) => res.rows)
			.catch((err) => {
				if (err.code === "42P01") {
					console.log(`Query error, undefined table!, ${err}`);
				} else {
					console.log(error.message);
				}
			})
			.finally(() => {
				client.end();
			});
	},
	async getAllCards() {
		return await dataMapper.dbQuery(`SELECT * FROM "card"`);
	},
	async getOneCard(param) {
		let card = await dataMapper.dbQuery(
			`SELECT * FROM card WHERE id = ${param}`
		);
		return card[0];
	},
	getCardByElement(param) {
		return param !== "null"
			? dataMapper.dbQuery(`SELECT * FROM card WHERE element ILIKE '${param}'`)
			: dataMapper.dbQuery(`SELECT * FROM card WHERE element IS NULL`);
	},
	getCardByLevel(param) {
		return dataMapper.dbQuery(`SELECT * FROM card WHERE level = ${param}`);
	},
	getCardByDirection(direction, param) {
		return dataMapper.dbQuery(
			`SELECT * FROM card WHERE ${direction} >= ${param}`
		);
	},
	getCardByName(param) {
		return dataMapper.dbQuery(
			`SELECT * FROM card WHERE name ILIKE '%${param}%'`
		);
	},
};
