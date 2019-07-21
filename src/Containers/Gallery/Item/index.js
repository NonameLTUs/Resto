import React from 'react'

import classes from './Item.scss'

export default props => {
    const url = `${window.location.origin}/img/gallery/${props.filename}.jpg`;

    const style = {
        gridColumn: `auto / span ${props.style.columnSpan}`,
        gridRow: `auto / span ${props.style.rowSpan}`
    };

    return (
        <div className={classes.container} style={style}>
            <img src={url} title={props.title} alt={props.title} className={classes.img}/>
        </div>
    )
}