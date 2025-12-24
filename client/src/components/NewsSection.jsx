import s from './NewsSection.module.css';
import { Collapse } from 'antd';

const NewsSection = ({ articles }) => {
    const items = articles.map((article, index) => ({
        key: index.toString(),
        label: `${article.title}`,
        children: (
            <div>
                <img src={article.image} />
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read full article
                </a>
            </div>
        ),
    }));


    return (
        <div className={s.newsSection}>
            <Collapse ghost accordion items={items} />;
        </div>
    );
}

export default NewsSection;