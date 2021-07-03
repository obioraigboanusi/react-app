import React from "react";
import PropTypes from 'prop-types';

function ArticleCard({card}) {
    const { title, desc, url} = card
    console.log(typeof card)

    return (
        <article>
            <img src={url} alt={desc} />
            <hgroup>
                <h3>{title}</h3>
                <p className="color-green">{desc}</p>
            </hgroup>
        </article>
    );
}
ArticleCard.prototype = {
    children: PropTypes.object
};
export default ArticleCard
