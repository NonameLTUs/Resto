import React from 'react'

import classes from './Gallery.scss'

import Item from './Item'

import items from './items'

export default class Gallery extends React.Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <h2 className={classes.heading}>The gallery</h2>
                    </div>
                    <div className={classes.items}>
                        {items.map(item => <Item {...item} key={item.id}/>)}
                    </div>
                </div>
            </div>
        )
    }
}