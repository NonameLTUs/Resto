import React from 'react'

import classes from './Gallery.scss'

import Item from './Item'

const items = [
    {
        id: 1,
        filename: 2,
        title: 'La food',
        style: {
            columnSpan: 1,
            rowSpan: 1
        }
    },
    {
        id: 2,
        filename: 1,
        title: 'La food',
        style: {
            columnSpan: 1,
            rowSpan: 2
        }
    },
    {
        id: 3,
        filename: 3,
        title: 'La food',
        style: {
            columnSpan: 1,
            rowSpan: 1
        }
    },
    {
        id: 4,
        filename: 4,
        title: 'La food',
        style: {
            columnSpan: 1,
            rowSpan: 1
        }
    },
    {
        id: 5,
        filename: 5,
        title: 'La food',
        style: {
            columnSpan: 1,
            rowSpan: 1
        }
    }
];

export default class FeaturedDishes extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        activeSlide: 0,
        totalSlides: 0
    };

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <h2 className={classes.heading}>The gallery</h2>
                    <div className={classes.items}>
                        {items.map(item => <Item {...item} key={item.id}/>)}
                    </div>
                </div>
            </div>
        )
    }
}