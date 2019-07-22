import React from 'react'

import classes from './FeaturedDishes.scss'

import SliderDots from './SliderDots'
import SliderPage from './SliderPage'

import items from './items'

export default class FeaturedDishes extends React.Component {
    constructor(props) {
        super(props);

        this.sliderContainerRef = React.createRef();
        this.sliderItemsRef = React.createRef();
    }

    state = {
        activeSlide: 0,
        totalSlides: 0,
        itemsPerSlide: 4,
        slides: [{page: 0, items: [items[0]]}]
    };

    componentDidMount() {
        this.setTotalSlides();
        this.mount();
    }

    slideChange = index => {
        this.setState({
            activeSlide: index
        })
    };

    getItemsPerSlide = () => {
        if (null === this.sliderItemsRef.current) {
            return 1;
        }

        if (this.sliderItemsRef.current.children.length === 0) {
            return 1;
        }

        const object = this.sliderItemsRef.current.children[0];
        const styleOfObject = getComputedStyle(object);
        const countOfColumns = styleOfObject["grid-template-columns"].split(' ').length;
        const countOfRows = styleOfObject["grid-template-rows"].split(' ').length;
        return countOfColumns * countOfRows;
    };

    mount = () => {
        const itemsPerSlide = this.getItemsPerSlide();
        const slides = this.splitItemsBySlides(itemsPerSlide);

        if (this.state.itemsPerSlide !== itemsPerSlide || this.state.slides !== slides) {
            this.setState({
                itemsPerSlide,
                slides
            })
        }
    };

    setTotalSlides = () => {
        const itemsPerSlide = this.getItemsPerSlide();
        const totalSlides = Math.ceil(items.length / itemsPerSlide);

        if (this.state.totalSlides !== totalSlides) {
            this.setState({
                totalSlides
            })
        }
    };

    splitItemsBySlides = itemsPerSlide => {
        const splittedItems = [];
        let count = 1;
        let page = 0;

        for (let i in items) {
            if (items.hasOwnProperty(i)) {
                const item = items[i];
                if (!splittedItems.hasOwnProperty(page)) {
                    splittedItems[page] = {page: page, items: []};
                }
                splittedItems[page].items.push(item);

                if (count === itemsPerSlide) {
                    page++;
                    count = 0;
                }

                count++;
            }
        }

        return splittedItems;
    };

    render() {
        const styleOfSliderItems = {
            marginLeft: `${-(this.state.activeSlide * 100)}%`,
            width: `${(this.state.totalSlides) * 100}% `
        };

        const pages = this.state.slides;

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
                            {pages.map(page => <SliderPage key={page.page} items={page.items}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}