import React from 'react'
import classnames from 'classnames'

import {Icon} from '@/Components'
import classes from './LoadMoreButton.scss'

export default props => {
    const classesOfContainer = classnames({
        [classes.container]: true,
        [classes.invisible]: !props.show
    });

    const classesOfButton = classnames({
        [classes.button]: true
    });

    return (
        <div className={classesOfContainer}>
            <a className={classesOfButton} onClick={props.onClick}>
                <div className={classes.text}>load more</div>
                <div className={classes.divider}/>
                <Icon icon="arrow-to-bottom" className={classes.icon}/>
            </a>
        </div>
    )
}