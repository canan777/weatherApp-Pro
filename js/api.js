const API_KEY = "2373995dbd82304ca8dc8117a9b7230b";

// fonksiyon şehir ve birim bilgilerini parametre olarak alır
async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    // console.log(response.json());
    // eğer istek başarılı değilse hata fırlat
    if (!response.ok) {
      throw new Error("İstek başarılı değil");
    }
    // api'den gelen yanıtı JSON formatına dönüştür ve geri dönder
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
// fetchWeatherData fonksiyonunu diğer dosyalarda kullanılabilir hale getir.
export default fetchWeatherData;