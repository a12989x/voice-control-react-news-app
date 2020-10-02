import React from 'react';

import NewsCard from './NewsCard';

const NewsCards = ({ articles }) => {
    return (
        <main className="cards">
            {articles.map((article, i) => (
                <NewsCard article={article} i={i} key={i} />
            ))}
        </main>
    );
};

export default NewsCards;
