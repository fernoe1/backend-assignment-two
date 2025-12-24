import express from 'express';
import { getRandomUser } from '../services/user.service.js';
import { getCountry } from '../services/country.service.js';
import { getArticles } from '../services/news.service.js';

const router = express.Router();

router.get("/random-user", async (req, res) => {
    const user = await getRandomUser();
    const country = await getCountry(user.country);
    const articles = await getArticles(user.country);

    res.json({
        user,
        country,
        articles,
    })
});

export default router;