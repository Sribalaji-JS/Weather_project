document.addEventListener("DOMContentLoaded", () => {
  window.onload = () => {
    // ANOTHER WAY--->
    const apiKey = "6f7b2752efc147708d5101154250604";
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=7`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const day = data.forecast;
          console.log(day);
          console.log(day.forecastday[0].day.maxtemp_c);
          const hourlyData = data.forecast.forecastday[0].hour;
          const formatted = hourlyData.map((hour) => {
            const time = new Date(hour.time);
            const options = { hour: "numeric", hour12: true }; // 12-hour format
            const formattedTime = time.toLocaleString("en-US", options);
            if (formattedTime === "6 AM") {
              document.getElementById(
                "weather_icon_six"
              ).innerHTML = `<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
            } else if (formattedTime === "10 AM") {
              document.getElementById(
                "weather_icon_ten"
              ).innerHTML = `<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
            } else if (formattedTime === "12 PM") {
              document.getElementById(
                "weather_icon_twelve"
              ).innerHTML = `<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
            } else if (formattedTime === "6 PM") {
              document.getElementById(
                "weather_icon_sixeve"
              ).innerHTML = `<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
            } else {
              document.getElementById(
                "weather_icon_teneve"
              ).innerHTML = `<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
            }
          });

          document.querySelector(
            ".weather_text"
          ).innerHTML = `${data.location.name}`;
          document.querySelector(
            ".weather_degree"
          ).innerHTML = `${data.current.temp_c}°C`;
          document.querySelector(
            ".weather_condition"
          ).innerHTML = `${data.current.condition.text}`;
        })




        .catch((err) => {
          console.error("error fetching weather", err);
        });
    }

    function error() {
      alert("Unable to retrieve your location. ");
    }
  };
});

//Weather Flow chart balaji

const ctx = document.getElementById('weatherChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(225, 64, 99, 0.7)');
gradient.addColorStop(0.5, 'rgba(54, 162, 235, 0.6)');
gradient.addColorStop(1, 'rgba(75, 192, 192, 0.4)');

const weatherChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['','','','NEXT 7 DAYS','','',''],
    datasets: [{
      label: 'Temperature (°C)',
      data: [22, 24, 19, 28, 21, 23, 26],
      borderColor: '#fff',
      backgroundColor: gradient,
      borderWidth: 3,
      fill: true,
      tension: 0.5,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#000',
      pointRadius: 6,
      pointHoverRadius: 8,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#000',
          font: { size: 14, weight: 'bold' }
        }
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeInOutQuart',
        from: 0.3,
        to: 0.5,
        loop: true
      }
    },
    scales: {
      x: {
        ticks: { color: '#000'},
        grid: { display: false }
      },
      y: {
        ticks: { color: '#000' },
        grid: { color: '#ddd' }
      }
    }
  }
});


