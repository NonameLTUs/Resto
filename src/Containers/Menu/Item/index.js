import React from 'react'

import classes from './Item.scss'

export default props => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                {props.title}.
            </div>
            <div className={classes.ingredients}>
                {props.ingredients}
            </div>
            <div className={classes.line}>
                <hr/>
            </div>
            <div className={classes.price}>${props.price}</div>
        </div>
    )
}