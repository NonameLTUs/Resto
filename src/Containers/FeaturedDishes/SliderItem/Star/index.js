import React from 'react'
import classnames from 'classnames'
import {Icon} from '@/Components'

import classes from './Star.scss'

export default props => {
    const classesOfStar = classnames({
        [classes.star]: true,
        [classes.active]: props.isActive
    });

    return <Icon icon="star" className={classesOfStar}/>
}