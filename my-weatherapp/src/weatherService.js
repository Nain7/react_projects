const API_KEY = "5e66fc9da1d0651b249597bb3daefd6c";

const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    try {
        const data = await fetch(URL)
            .then((res) => res.json())
            .then((data) => data);

        const {
            weather,
            main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
            wind: { speed },
            sys: { country },
            name,
        } = data;

        const { description, icon } = weather[0];
        const iconURL = makeIconURL(icon);
console.log("Icon URL:", iconURL);
        return {
            description,
            iconURL: makeIconURL(icon),
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity,
            speed,
            country,
            name,
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error accordingly
    }
};

export { getFormattedWeatherData };
