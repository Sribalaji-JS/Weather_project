document.addEventListener("DOMContentLoaded" , ()=>{
    window.onload = ()=>{

      // ANOTHER WAY--->
      const apiKey ='6f7b2752efc147708d5101154250604';
      navigator.geolocation.getCurrentPosition(success,error);
      
      function success(position){
           const lat = position.coords.latitude;
           const lon = position.coords.longitude;
           const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=7`;
           fetch(url)
           .then(response => response.json())
           .then(data =>{
              const day=data.forecast;
              const hourlyData = data.forecast.forecastday[0].hour;
              const formatted = hourlyData.map(hour => {
               const time = new Date(hour.time);
               const options = { hour: 'numeric', hour12: true }; // 12-hour format
               const formattedTime = time.toLocaleString('en-US', options);
               if(formattedTime === "6 AM"){
                  document.getElementById('weather_icon_six').innerHTML=`<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;

                   console.log(formattedTime);
                   console.log(hour.condition.text);
               }
               else if(formattedTime === "10 AM"){
                  document.getElementById('weather_icon_ten').innerHTML=`<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
               }
               else if(formattedTime === "12 PM"){
                  document.getElementById('weather_icon_twelve').innerHTML=`<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
               }
               else if(formattedTime === "6 PM"){
                  document.getElementById('weather_icon_sixeve').innerHTML=`<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
               }
               else if(formattedTime === "10 PM"){
                  document.getElementById('weather_icon_teneve').innerHTML=`<img src="${hour.condition.icon}" style="width:40px; height:40px; object-fit:contain;">`;
               }
           
             });
              console.log(data);
              console.log(day);
              console.log(hourlyData);

              

              document.querySelector('.weather_text').innerHTML = `${data.location.name}`;
              document.querySelector('.weather_degree').innerHTML = `${data.current.temp_c}°C`;
              document.querySelector('.weather_condition').innerHTML = `${data.current.condition.text}`;
           })
      
           .catch(err =>{
              console.error('error fetching weather',err);
           });
      }
      
      function error(){
          alert("Unable to retrieve your location. ");
      
      }
    }
})

