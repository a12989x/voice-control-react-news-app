import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import InfoCards from './components/InfoCards,';
import NewsCards from './components/NewsCards';

import Logo from './img/Logo.svg';

const { REACT_APP_ALAN_KEY } = process.env;

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    useEffect(() => {
        alanBtn({
            key: REACT_APP_ALAN_KEY,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle(
                        (prevActiveArticle) => prevActiveArticle + 1
                    );
                } else if (command === 'open') {
                    const parsedNumber =
                        number.length > 2
                            ? wordsToNumbers(number, { fuzzy: true })
                            : number;

                    const article = articles[parsedNumber];

                    if (parsedNumber > 20)
                        alanBtn().playText('Please try that again.');
                    else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }
                }
            },
        });
    }, []);

    return (
        <div className="App">
            <header className="header">
                <img
                    src={Logo}
                    alt="Alan Assistant Logo"
                    className="header__img"
                />
                <h1 className="header__title">Ai News Application</h1>
            </header>
            {newsArticles.length === 0 ? (
                <InfoCards />
            ) : (
                <NewsCards
                    articles={newsArticles}
                    activeArticle={activeArticle}
                />
            )}
        </div>
    );
};

export default App;
