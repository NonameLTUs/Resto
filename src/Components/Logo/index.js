import React from 'react'
import classnames from 'classnames'

import classes from './Logo.scss'

export default props => {
    const classesOfLogo = classnames({
        [classes.logo]: true,
        [classes.dark]: props.dark
    });

    return <div className={classesOfLogo} title="Resto"/>
}