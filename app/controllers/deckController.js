export const deckController = {
	// méthode pour afficher le panier
	deckPage(req, res) {
		!req.session.deck ? (req.session.deck = []) : null;
		res.render("deck", {
			cards: req.session.deck,
			title: `Liste des Cartes du Deck`,
		});
	},

	async addCard(req, res) {
		req.session.deck ? null : (req.session.deck = []);
		const result = req.session.allCards.find(
			(element) => element.id === Number(req.params.id)
		);
		if (req.session.deck.length < 5) {
			if (!result) {
				res.status(400).send({ message: "Carte non trouvée" });
			} else {
				req.session.deck.find(
					(element) => Number(req.params.id) === element.name
				)
					? null
					: req.session.deck.push(result);
				res.redirect("/deck");
			}
		} else {
			res.redirect("/deck");
		}
	},

	async deleteCard(req, res) {
		req.session.deck = req.session.deck.filter(
			(element) => element.id !== Number(req.params.id)
		);
		res.redirect("/deck");
	},
};
