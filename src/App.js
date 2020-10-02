import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import InfoCards from './components/InfoCards,';
import NewsCards from './components/NewsCards';

import Logo from './img/Logo.svg';

const { REACT_APP_ALAN_KEY } = process.env;

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: REACT_APP_ALAN_KEY,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
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
                <NewsCards articles={newsArticles} />
            )}
        </div>
    );
};

export default App;
