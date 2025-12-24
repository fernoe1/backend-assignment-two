import s from './ExchangeSection.module.css';

const ExchangeSection = ({ exchange }) => {
    return (
        <div className={s.exchangeSection}>
            <p>1 {exchange.baseCode} is {exchange.conversionResult} KZT</p>
            <p>1 {exchange.baseCode} is {exchange.usdConversionResult} USD</p>
            <p>1 {exchange.baseCode} is {exchange.euroConversionResult} EUR</p>
        </div>
    )
}

export default ExchangeSection;