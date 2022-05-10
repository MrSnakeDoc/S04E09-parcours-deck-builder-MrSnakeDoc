import express from "express";
import { mainController } from "./controllers/mainController";
import { searchController } from "./controllers/searchController";
import { deckController } from "./controllers/deckController";
import { middlewares } from "./middlewares";

export const router = express.Router();

router.use(express.static("./app/public"));

// router.use((req, res, next) => {
// 	console.log(`[${new Date().toISOString()} ${req.ip}] ${req.originalUrl}`)
// 	next()
// })

router.use("/favicon.ico", function (req, res) {
	res.status(204);
	res.end();
});

router.use(middlewares.cardsInSessions);

router.get("/", mainController.homePage);

router.get("/card/:id", mainController.oneCardPage);

router.get("/search", searchController.searchPage);

router.get("/search/element", searchController.elementPage);

router.get("/search/level", searchController.levelPage);

router.get("/search/values", searchController.directionPage);

router.get("/search/name", searchController.namePage);

router.get("/deck/add/:id", deckController.addCard);

router.get("/deck/remove/:id", deckController.deleteCard);

router.get("/deck", deckController.deckPage);

router.get("/error", mainController.errorPage);
