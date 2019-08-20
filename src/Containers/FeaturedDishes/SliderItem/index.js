import React from 'react'

import classes from './SliderItem.scss'

import Star from './Star'

export default props => {
    const url = `${process.env.PUBLIC_URL}/img/dishes/${props.filename}.jpg`;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push({
            index: i,
            isActive: props.rating >= i
        })
    }

    const renderedRating = stars.map(star => <Star key={star.index} isActive={star.isActive}/>);

    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <img src={url} className={classes.img} alt={props.title} title={props.title}/>
                <div className={classes.details}>
                    <h3 className={classes.title}>{props.title}</h3>
                    <div className={classes.price}>${props.price}</div>
                </div>
                <div className={classes.rating}>{renderedRating}</div>
            </div>
        </div>
    )
}