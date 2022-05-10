import { dataMapper } from "./dataMapper.js";
export const middlewares = {
	async cardsInSessions(req, res, next) {
		req.session.allCards
			? null
			: (req.session.allCards = await dataMapper.getAllCards());
		next();
	},
};
