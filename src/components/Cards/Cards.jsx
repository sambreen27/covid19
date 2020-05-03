import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate }}) => {
    console.log(confirmed);
    if (!confirmed){
        return 'Loading..';
    }

    return (
            <div className={styles.container}>
                <Grid container spacing={2} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography variant = "h5" color = "textPrimary" gutterBottom>Infected</Typography>
                            <Typography variant = "h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color = "initial"> {new Date(lastUpdate).toDateString()}</Typography>
                            <Typography color = "textPrimary" variant = "body2"> Number of Active Cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography variant = "h5" color = "textPrimary" gutterBottom> Recovered</Typography>
                            <Typography variant = "h5">
                                <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color = "inherit"> {new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant = "body2"> Number of Recovered Cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography variant = "h5" color = "secondary" gutterBottom> Deaths</Typography>
                            <Typography variant = "h5">
                                <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color = "inherit"> {new Date(lastUpdate).toDateString()}</Typography>
                            <Typography color = "secondary" variant = "body2"> Number of Deaths</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )
}

export default Cards;
