import React from 'react'
import classnames from 'classnames'

import classes from './Navigation.scss'

import {Logo} from '@/Components'
import Link from './Link'

class Navbar extends React.Component {
    state = {
        collapsed: true
    };

    collapse = () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }))
    };

    render() {
        const classesOfMobileNavbar = classnames({
            [classes["mobile-container"]]: true,
            [classes.show]: !this.state.collapsed
        });

        const classesOfHamburger = classnames({
            [classes.hamburger]: true,
            [classes["hamburger-show"]]: !this.state.collapsed
        });

        return (
            <React.Fragment>
                <div className={classes["desktop-container"]}>
                    <div className={classes.content}>
                        <Logo dark={true}/>
                        <div className={classes.navigation}>
                            <Link to="#">Our story</Link>
                            <Link to="#">Menu</Link>
                            <Link to="#">Reservations</Link>
                            <Link to="#">News</Link>
                            <Link to="#">Reviews</Link>
                        </div>
                    </div>
                </div>
                <div className={classesOfHamburger} onClick={this.collapse}>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className={classesOfMobileNavbar}>
                    <div className={classes.content}>
                        <Logo dark={true}/>
                        <div className={classes.navigation}>
                            <Link to="#">Our story</Link>
                            <Link to="#">Menu</Link>
                            <Link to="#">Reservations</Link>
                            <Link to="#">News</Link>
                            <Link to="#">Reviews</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar;