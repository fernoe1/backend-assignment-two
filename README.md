# Backend Assignment Two

## Build && run (install node and npm first)

### .dotenv
Create .env file and write your api keys in this format
```env
COUNTRY_API_KEY=yourkey
NEWS_API_KEY=yourkey
EXCHANGE_API_KEY=yourkey
```

### Back
```bash
cd back
npm install
node server.js
```

### Front
```bash
cd ..
cd front
npm install
npm run dev
```

## API Usage
get http://localhost:3000/random-user
returns
```json
{
  "user": {
    "picture": "https://randomuser.me/api/portraits/med/men/70.jpg",
    "first": "Dominic",
    "last": "Walker",
    "gender": "male",
    "age": 26,
    "dob": "1999-09-19",
    "city": "Chipman",
    "country": "Canada",
    "fullAddress": "Richmond Ave 7377"
  },
  "country": {
    "name": "Canada",
    "capital": [
      "Ottawa"
    ],
    "currencyCode": "CAD"
  },
  "exchange": {
    "baseCode": "CAD",
    "conversionResult": 372.0103,
    "usdConversionResult": 0.7301,
    "euroConversionResult": 0.6192
  },
  "articles": [
    {
      "title": "Woman's shock as goose smashes through front door",
      "image": "https://ichef.bbci.co.uk/news/1024/branded_news/7cf3/live/05b7d3c0-dcda-11f0-81cc-998682630b3d.jpg",
      "description": "Wildlife rescuers think the Canada goose misjudged its descent before smashing through the door.",
      "url": "https://www.bbc.com/news/articles/ce3wpwg4e0qo"
    }, ...
  ]
}
```
