export const fetchOwmData = async ({ lat = "20", lon = "20"}) => {
    try {
        const data = axios.get('https://api.openweathermap.org/data/2.5/weather?lat=20&lon=20&appid=7213143cbd4f174b431dca2af5390707',);

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}