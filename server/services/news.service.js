import dotenv from 'dotenv';

dotenv.config();

export const getArticles = async(country) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=6&language=en`)
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();

    const articles = json.articles.map(article => ({
        title: article.title,
        image: article.urlToImage || null, 
        description: article.description,
        url: article.url
    }));

    return articles;
}