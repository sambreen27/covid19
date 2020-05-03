import React from 'react';
import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from "./api";
import styles from './App.module.css';
import coronaImage from './images/image.png';
import Particles from "react-particles-js";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";


class App extends React.Component{
    state ={
        data: {},
        country:'',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country:country });


    }
    handleChange;
    handleClick;
    render() {
        const {data, country} = this.state;
            return (
                <div>
                    <Particles
                        style={{ position: "absolute" }}
                        height="100%"
                        width="100%"
                        params={{
                            particles: {
                                "number": {
                                    "value": 200,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "speed": 4,
                                        "size_min": 0.3
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": true,
                                    "speed": 1,
                                    "direction": "bottom",
                                    "out_mode": "out"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                    }
                                }
                        }}
                    />
                <div className={styles.container}>
                    <div>
                    <div>
                    <img className={styles.image} src={coronaImage} alt="Covid-19" />
                    <Cards data={data}/>
                    <br />
                    <div align="center">
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Charts data={data} country={country}/>
                    </div>
                    <br />
                    <br />
                    </div>
                    <BottomNavigation value={data} onChange={this.handleChange}>
                        <BottomNavigationAction click href="https://github.com/sambreen27/covid19" color="#ab0909" label="Github" value="github" icon={<GitHubIcon />} />
                    </BottomNavigation>
                    <br />
                    <Typography align = "center" color = "error" variant = "body2"> Built in React JS with:
                        <Link color="error" href="https://github.com/mathdroid/covid-19-api" onClick={this.handleClick}> Covid-19 API
                        </Link>
                        <br />
                        <br />
                    </Typography>
                    </div>
                </div>
                </div>
            )
    }
}
export default App;
