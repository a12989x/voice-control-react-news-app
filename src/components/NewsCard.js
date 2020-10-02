import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const NewsCard = ({
    article: { description, publishedAt, source, title, url, urlToImage },
    i,
}) => {
    return (
        <section className="new-card">
            <img src={urlToImage} alt="" target="_blank" />
            <div>
                <span className="new-card__date">
                    {new Date(publishedAt).toDateString()}
                </span>
                <h5 className="new-card__source">{source.name}</h5>
            </div>
            <h2 className="new-card__title">{title}</h2>
            <p className="new-card__description">{description}</p>
            <div>
                <a
                    href={url}
                    className="new-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More <BsArrowRight />
                </a>
                <span className="new-card__number">{i + 1}</span>
            </div>
        </section>
    );
};

export default NewsCard;
