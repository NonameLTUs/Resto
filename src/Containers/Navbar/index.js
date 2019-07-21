import React from 'react'
import classes from './Navigation.scss'

import {Logo} from '@/Components'
import Link from './Link'

class Navbar extends React.Component {
    render() {
        return (
            <div className={classes.container}>
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
        )
    }
}

export default Navbar;