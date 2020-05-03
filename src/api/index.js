import axios from 'axios';

const apiURL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeURL = apiURL;

    if(country){
        changeURL = `${apiURL}/countries/${country}`;
    }

    try {
        const {data} = await axios.get(changeURL);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
            }
        return modifiedData;
    } catch (error) {
console.log(error);
    }
}
export const fetchDailyData = async () => {
    try {
        //fetch daily data for the chart
        const { data } = await axios.get(`${apiURL}/daily`);

const modifiedData = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
}));
    return modifiedData;
    }
    catch (error) {
    }
}

export const fetchCountries = async() => {
    try {
        const { data: { countries }} = await axios.get(`${apiURL}/countries`);

return countries.map((country) => country.name);
    }
    catch(error){
        console.log(error);
    }
}
