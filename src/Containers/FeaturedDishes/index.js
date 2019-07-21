import React from 'react'

import classes from './FeaturedDishes.scss'

import SliderDots from './SliderDots'
import SliderItem from './SliderItem'

const items = [
    {
        id: 1,
        filename: 1,
        title: 'Fugiat nulla sint',
        price: 32,
        rating: 4
    },
    {
        id: 2,
        filename: 2,
        title: 'Fugiat nulla sint',
        price: 30,
        rating: 4
    },
    {
        id: 3,
        filename: 3,
        title: 'Fugiat nulla sint',
        price: 30,
        rating: 4
    },
    {
        id: 4,
        filename: 4,
        title: 'Fugiat nulla sint',
        price: 30,
        rating: 4
    },
    {
        id: 5,
        filename: 3,
        title: 'Fugiat nulla sint',
        price: 350,
        rating: 4
    },
    {
        id: 6,
        filename: 1,
        title: 'Fugiat nulla sint',
        price: 300,
        rating: 4
    },
    {
        id: 7,
        filename: 1,
        title: 'Fugiat nulla sint',
        price: 300,
        rating: 4
    },
    {
        id: 8,
        filename: 1,
        title: 'Fugiat nulla sint',
        price: 300,
        rating: 4
    },
    {
        id: 9,
        filename: 1,
        title: 'ZASIBYS nulsla sint',
        price: 100,
        rating: 4
    },
    {
        id: 10,
        filename: 1,
        title: 'FUGIOOO nulla sint',
        price: 1,
        rating: 6
    }
];

export default class FeaturedDishes extends React.Component {
    constructor(props) {
        super(props);

        this.sliderContainerRef = React.createRef();
        this.sliderItemsRef = React.createRef();
    }

    state = {
        activeSlide: 0,
        totalSlides: 0
    };

    componentDidMount() {
        this.setTotalSlides();
    }

    slideChange = index => {
        this.setState({
            activeSlide: index
        })
    };

    gapBeforeItem = (int) => {
        const sliderItems = this.sliderItemsRef.current;
        let result = null;
        if (null === sliderItems) {
            result = 0 + 'px';
        } else {
            result = getComputedStyle(sliderItems.children[0])["margin-right"];
        }
        if (int) {
            return parseInt(result)
        } else {
            return result
        }
    };

    itemWidth = () => {
        if (null !== this.sliderItemsRef.current) {
            return this.sliderItemsRef.current.children[0].clientWidth + this.gapBeforeItem(true);
        }

        return 0;
    };

    setTotalSlides = () => {
        let slides = 0;

        if (null !== this.sliderItemsRef.current) {
            const itemsPerPage = Math.ceil(this.sliderContainerRef.current.clientWidth / this.itemWidth());
            slides = Math.ceil(items.length / itemsPerPage);
        }

        this.setState({
            totalSlides: slides
        })
    };

    getMarginOfSliderItems = () => {
        const {activeSlide} = this.state;
        let gapBeforeItem = this.gapBeforeItem(true) * activeSlide + 'px';

        if (0 === activeSlide) {
            gapBeforeItem = 0 + 'px';
        }

        const marginInPercentages = -(activeSlide * 100);

        return `calc(${marginInPercentages}% - ${gapBeforeItem})`
    };

    render() {
        const styleOfSliderItems = {
            marginLeft: this.getMarginOfSliderItems()
        };

        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <h2 className={classes.heading}>Featured dishes</h2>
                        <SliderDots activeSlide={this.state.activeSlide} onClick={this.slideChange}
                                    totalSlides={this.state.totalSlides}/>
                    </div>
                    <div className={classes["slider"]} ref={this.sliderContainerRef}>
                        <div className={classes["slider-items"]} style={styleOfSliderItems} ref={this.sliderItemsRef}>
                            {items.map(item => <SliderItem key={item.id} {...item} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}