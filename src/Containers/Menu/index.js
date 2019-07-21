import React from 'react'

import classes from './Menu.scss'

import LoadMoreButton from './LoadMoreButton'
import Item from './Item'
import Loader from './Loader'

const items = [
    {
        id: 1,
        title: 'Voluptate cillum fugiat',
        ingredients: 'Cheese, tomato, mushrooms, onions.',
        price: 50
    },
    {
        id: 2,
        title: 'Arcu pede enim justo.',
        ingredients: 'Tuna, Sweetcorn, Cheese.',
        price: 45
    },
    {
        id: 3,
        title: 'Metus varius laoreet.',
        ingredients: 'Chicken, mozzarella cheese, onions.',
        price: 62
    },
    {
        id: 4,
        title: 'Cras dapibussemper nisi.',
        ingredients: 'Pineapple, Minced Beef, Cheese.',
        price: 32
    },
    {
        id: 5,
        title: 'Voluptate cillum fugiat 2',
        ingredients: 'Cheese, tomato, mushrooms, onions.',
        price: 50
    },
    {
        id: 6,
        title: 'Arcu pede enim justo. 2',
        ingredients: 'Tuna, Sweetcorn, Cheese.',
        price: 45
    },
    {
        id: 7,
        title: 'Metus varius laoreet. 2',
        ingredients: 'Chicken, mozzarella cheese, onions.',
        price: 62
    },
    {
        id: 8,
        title: 'Cras dapibussemper nisi. 2',
        ingredients: 'Pineapple, Minced Beef, Cheese.',
        price: 32
    },
];

export default class Menu extends React.PureComponent {
    constructor(props) {
        super(props);

        this.contentItemsRef = React.createRef();
    }

    state = {
        visibleItems: [],
        containerHeight: 0,
        loading: false
    };

    componentDidUpdate() {
        this.setState({
            containerHeight: this.getContainerHeight()
        });
    }

    componentDidMount() {
        this.loadMore();
    }

    /// Get styles
    getContainerHeight = () => {
        if (null !== this.contentItemsRef.current) {
            const styles = getComputedStyle(this.contentItemsRef.current);
            return styles.height;
        }

        return 0;
    };

    /// Load (show) more items
    loadMore = () => {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            const currentItems = this.state.visibleItems;
            const reversedCurrentKeys = Object.keys(currentItems).reverse();
            let lastKey = reversedCurrentKeys[0];
            if ("undefined" === typeof lastKey) {
                lastKey = 0;
            }
            if (lastKey > 0) {
                lastKey = parseInt(lastKey) + 1;
            }

            const additionalItems = [...items].splice(lastKey, 4);
            const newItems = [...currentItems, ...additionalItems];

            this.setState({
                visibleItems: newItems,
                loading: false
            });
        }, 2500);
    };

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.heading}>
                    The menu
                </div>
                <div className={classes.content} style={{height: this.state.containerHeight}}>
                    <div className={classes["content-items"]} ref={this.contentItemsRef}>
                        {this.state.visibleItems.map(item => <Item {...item} key={item.id}/>)}
                        <Loader loading={this.state.loading}/>
                    </div>
                </div>
                <LoadMoreButton onClick={this.loadMore} show={this.state.visibleItems.length < items.length}/>
            </div>
        )
    }
}