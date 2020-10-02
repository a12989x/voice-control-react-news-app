import React from 'react';

const InfoCard = ({ infoCard: { color, title, info, text } }) => {
    return (
        <section className="info-card">
            <h5 className="info-card__title">{title}</h5>
            {info && (
                <p>
                    <strong>{title.split(' ')[2]}</strong>: <br />
                    {info}
                </p>
            )}
            <p>
                Try Saying: <br /> <i>{text}</i>
            </p>
        </section>
    );
};

export default InfoCard;
