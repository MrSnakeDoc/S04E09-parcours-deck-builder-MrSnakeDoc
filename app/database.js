import { Client } from "pg";
import config from "./config";

const databaseConnect = () => {
	try {
		const client = new Client({
			user: config.db_user,
			host: config.db_host,
			database: config.db,
			password: config.db_pwd,
			port: config.db_port,
		});
		client.connect();
		return client;
	} catch (error) {
		console.log(`Something went wrong ${error}`);
	}
};

export default databaseConnect;
