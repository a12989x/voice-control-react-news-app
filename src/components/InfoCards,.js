import React from 'react';

import InfoCard from './InfoCard';

const infoCards = [
    {
        title: 'Latest News',
        text: 'Give me the latest news',
    },
    {
        title: 'News by Categories',
        info:
            'Business, Entertainment, General, Health, Science, Sports, Technology',
        text: 'Give me the latest Technology news',
    },
    {
        title: 'News by Terms',
        info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
        text: "What's up with PlayStation 5",
    },
    {
        title: 'News by Sources',
        info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
        text: 'Give me the news from CNN',
    },
];

const InfoCards = () => {
    return (
        <main className="cards">
            {infoCards.map((infoCard, i) => (
                <InfoCard infoCard={infoCard} key={i} />
            ))}
        </main>
    );
};

export default InfoCards;
