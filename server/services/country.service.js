import dotenv from 'dotenv';

dotenv.config()

export const getCountry = async (country) => {
    const res = await fetch(`https://api.countrylayer.com/v2/name/${country}?access_key=${process.env.COUNTRY_API_KEY}`);
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    const countryData = json[0]; 

    return {
        name: countryData.name,
        capital: countryData.capital,
    };
}