import React from 'react'

import classes from './Link.scss'

export default props => (
    <a href={props.to} className={classes.link}>{props.children}</a>
)