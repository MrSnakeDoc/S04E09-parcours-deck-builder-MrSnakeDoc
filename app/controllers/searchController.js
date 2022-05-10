import { dataMapper } from "../dataMapper.js";

export const searchController = {
	searchPage(req, res) {
		res.render("search");
	},
	async elementPage(req, res) {
		res.render("cardList", {
			cards: await dataMapper.getCardByElement(req.query.element),
			title: `Liste des Cartes ${req.query.element}`,
		});
	},
	async levelPage(req, res) {
		res.render("cardList", {
			cards: await dataMapper.getCardByLevel(Number(req.query.level)),
			title: `Liste des Cartes du level ${req.query.level}`,
		});
	},
	async directionPage(req, res) {
		res.render("cardList", {
			cards: await dataMapper.getCardByDirection(
				req.query.direction,
				Number(req.query.value)
			),
			title: `Liste des Cartes du level ${req.query.value} direction ${req.query.direction}`,
		});
	},
	async namePage(req, res) {
		res.render("cardList", {
			cards: await dataMapper.getCardByName(req.query.name),
			title: `Liste des Cartes dont le nom contient ${req.query.name}`,
		});
	},
};
