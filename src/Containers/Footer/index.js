import React from 'react'

import classes from './Footer.scss'

import {Logo} from '@/Components'

const links = [
    {
        url: '#blog',
        title: 'Blog'
    },
    {
        url: '#careers',
        title: 'Careers'
    },
    {
        url: '#privacy-policy',
        title: 'Privacy Policy'
    },
    {
        url: '#contact',
        title: 'Contact'
    }
];

export default () => (
    <footer className={classes.container}>
        <div className={classes.content}>

            <div className={classes.info}>
                <div className={classes["info-title"]}>
                    New York Restaurant
                </div>
                <br/>
                3926 Anmoore Road<br/>
                New York, NY 10014<br/>
                <b>718-749-1714</b>
            </div>

            <div className={classes.info}>
                <div className={classes["info-title"]}>
                    France Restaurant
                </div>
                <br/>
                68, rue de la Couronne<br/>
                75002 PARIS<br/>
                <b>02.94.23.69.56</b>
            </div>

            <div className={classes.links}>
                {links.map(link => <a href={link.url} title={link.title} key={link.title}>{link.title}</a>)}
            </div>

            <div className={classes.copyright}>
                <Logo/>
                <div className={classes["copyright-text"]}>
                    © All Rights Reserved 2014.<br/>
                    Find More at <a href="https://pixelhint.com" title="Pixelhint">Pixelhint.com</a>
                </div>
            </div>

        </div>
    </footer>
)