import dotenv from 'dotenv';

dotenv.config()

export const getCurrency = async (currencyCode) => {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/pair/${currencyCode}/KZT/1`);
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }
    const resTwo = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/pair/${currencyCode}/USD/1`);
    if (!resTwo.ok) {
        throw new Error(`API error: ${resTwo.status}`);
    }

    const json = await res.json();
    const jsonTwo = await resTwo.json();

    return {
        baseCode: json.base_code,
        conversionResult: json.conversion_result,
        usdConversionResult: jsonTwo.conversion_result,
    };
}