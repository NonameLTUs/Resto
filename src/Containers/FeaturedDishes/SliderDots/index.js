import React from 'react'
import classnames from 'classnames'
import classes from './SliderDots.scss'

export default props => {
    const dots = [];
    for (let i = 0; i <= props.totalSlides; i++) {
        dots.push({
            index: i,
            isActive: i === props.activeSlide
        });
    }
    const renderedDots = dots.map(dot => {
        const classesOfDot = classnames({
            [classes.dot]: true,
            [classes.active]: dot.isActive
        });

        return <div className={classesOfDot} onClick={() => props.onClick(dot.index)} key={dot.index}/>
    });

    return (
        <div className={classes.container}>
            {renderedDots}
        </div>
    )
}