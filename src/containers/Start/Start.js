import React, { Component } from 'react';

import Background from '../../components/Background/Background';
import titleText from '../../assets/images/title.png';
import classes from './Start.module.css';

class Start extends Component {
    render() {
        return (
            <div className={classes.Start}>
                <img src={titleText} alt="A Hip Hop History Timeline:" />
                <Background />
                <button>START</button>
            </div>


        );
    }
}

export default Start;
