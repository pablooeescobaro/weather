export default interface DataWeather {
    name: string,
    wind: {
        speed: number
    },
    main: {
        humidity: number,
        feels_like: number,
        temp: number,
    },
    weather: [
        {
            main: string
        }
    ]
}