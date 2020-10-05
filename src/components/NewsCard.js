import React, { useState, useEffect, createRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const NewsCard = ({
    article: { description, publishedAt, source, title, url, urlToImage },
    i,
    activeArticle,
}) => {
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
    useEffect(() => {
        setElRefs((refs) =>
            Array(20)
                .fill()
                .map((_, j) => refs[j] || createRef())
        );
    }, []);

    useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);

    return (
        <section
            ref={elRefs[i]}
            className={`new-card ${activeArticle === i ? 'active' : ''}`}
        >
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
