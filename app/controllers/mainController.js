import { dataMapper } from "../dataMapper.js";

export const mainController = {
	async homePage(req, res) {
		try {
			res.render("cardList", {
				cards: await dataMapper.getAllCards(),
				title: "Liste des cartes",
			});
		} catch (err) {
			res.redirect("/error");
		}
	},
	async oneCardPage(req, res) {
		try {
			res.render("card", {
				card: await dataMapper.getOneCard(Number(req.params.id)),
			});
		} catch (err) {
			res.redirect("/error");
		}
	},
	errorPage(req, res) {
		res.render("error");
	},
};
