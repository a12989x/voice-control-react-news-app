import React from 'react';

import NewsCard from './NewsCard';

const NewsCards = ({ articles, activeArticle }) => {
    return (
        <main className="cards">
            {articles.map((article, i) => (
                <NewsCard
                    article={article}
                    i={i}
                    key={i}
                    activeArticle={activeArticle}
                />
            ))}
        </main>
    );
};

export default NewsCards;
