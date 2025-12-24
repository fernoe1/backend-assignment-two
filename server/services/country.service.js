import dotenv from 'dotenv';

dotenv.config()

export const getCountry = async (country) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    const countryData = json[0]; 
    const currencyCode = Object.keys(countryData.currencies)[0];

    return {
        name: countryData.name.common,
        capital: countryData.capital,
        currencyCode: currencyCode,
    };
}