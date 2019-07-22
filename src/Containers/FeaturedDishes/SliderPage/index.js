import React from 'react'

import classes from './SliderPage.scss'
import SliderItem from "../SliderItem";

export default props => {
    if ("object" !== typeof props.items) {
        return <div className={classes.container}/>
    }

    return (
        <div className={classes.container}>
            {props.items.map(item => <SliderItem key={item.id} {...item} />)}
        </div>
    )
}