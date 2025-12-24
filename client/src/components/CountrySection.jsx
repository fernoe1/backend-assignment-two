import s from './CountrySection.module.css';

const CountrySection = ({ country }) => {
    return (
        <div className={s.countrySection}>
            <p>Country name: {country.name}</p>
            <p>Capital city: {country.capital}</p>
        </div>
    );
}

export default CountrySection