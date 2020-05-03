import React from 'react';
import { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './CountryPicker.module.css';
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedContries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedContries(await fetchCountries());
        }
    fetchAPI();
    },[setFetchedContries]);

    console.log(fetchedCountries)

    return (
    <FormControl className={styles.formControl}>
        <NativeSelect defaultvalue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;
