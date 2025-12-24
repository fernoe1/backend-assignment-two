import dotenv from 'dotenv';

dotenv.config()

export const getCurrency = async (currencyCode) => {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/pair/${currencyCode}/KZT/1`);
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    console.log(json);

    return {
        baseCode: json.base_code,
        conversionResult: json.conversion_result,
    };
}