export const getRandomUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    const user = json.results[0];

    return {
        picture: user.picture.medium,
        first: user.name.first,
        last: user.name.last,
        gender: user.gender,
        age: user.dob.age,
        dob: user.dob.date.split("T")[0],
        city: user.location.city,
        country: user.location.country,
        fullAddress: user.location.street.name + " " + user.location.street.number,
    }
}