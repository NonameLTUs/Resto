import React from 'react';

const url = `${window.location.origin}/sprite.svg`;

export default props => (
    <svg viewBox='0 0 16 16' className={props.className}>
        <use xlinkHref={`${url}#icon-${props.icon}`}/>
    </svg>
);