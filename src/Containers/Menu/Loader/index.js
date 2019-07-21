import React from 'react'
import classnames from 'classnames'

import classes from './Loader.scss'

export default props => {
    const classesOfContainer = classnames({
        [classes.container]: true,
        [classes.visible]: props.loading
    });

    return (
        <div className={classesOfContainer}>
            <div className={classes.loader}/>
        </div>
    )
}