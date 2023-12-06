
const towns = {
  winooski: "https://api.open-meteo.com/v1/forecast?latitude=44.4914&longitude=-73.1857&current=temperature_2m,is_day&temperature_unit=fahrenheit&forecast_days=1",
  williston: "https://api.open-meteo.com/v1/forecast?latitude=44.4376&longitude=-73.0682&current=temperature_2m,is_day&temperature_unit=fahrenheit&forecast_days=1",
  burlington:"https://api.open-meteo.com/v1/forecast?latitude=44.4759&longitude=-73.2121&current=temperature_2m,is_day&temperature_unit=fahrenheit&forecast_days=1",
  LA: "https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&current=temperature_2m,is_day&temperature_unit=fahrenheit&forecast_days=1",
  paris: "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current=temperature_2m,is_day&temperature_unit=fahrenheit&forecast_days=1",
  london: "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,is_day&temperature_unit=fahrenheit&forecast_days=1",
  tokyo: "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m,is_day&temperature_unit=fahrenheit&forecast_days=1"
}

let height = "10em";
let width = "10em";

let sunHTML = "";
let moonHTML = "";

sunHTML += `
			<img src="https://static.vecteezy.com/system/resources/previews/000/551/126/original/vector-sun-icon.jpg"  alt="Day Time" width=160 height=160>
      `;


moonHTML += `
			<img src="https://www.nasa.gov/wp-content/uploads/2020/07/moon-near-side-lro.jpg"  alt="Night Time" width=160 height=160>
      `;



    //Inital iteration of Fetch call
    fetch("https://api.open-meteo.com/v1/forecast?latitude=44.4759&longitude=-73.2121&current=temperature_2m,is_day&temperature_unit=fahrenheit&forecast_days=1")
    .then(response => { 
        return response.json();
    })
    .then((data) => {
        const currentWeather = data.current;
        console.log(currentWeather);

        const Temp = document.getElementById('widgetOne'); 
        Temp.textContent = currentWeather.temperature_2m + "F";

        const isDay = document.getElementById('widgetTwo');

        if(currentWeather.is_day == 1){
          isDay.innerHTML = sunHTML;
        }
        else if (currentWeather.is_day == 0){
          isDay.innerHTML = moonHTML;
        }
    });

    function FetchAPI(link)
    {
      let url = link.value;

      fetch(towns[url])
      .then(response => { 
          return response.json();
      })
      .then((data) => {
        const currentWeather = data.current;
        console.log(currentWeather);

        const Temp = document.getElementById('widgetOne'); 
        Temp.textContent = currentWeather.temperature_2m + "F";

        const isDay = document.getElementById('widgetTwo');

        if(currentWeather.is_day == 1){
          isDay.innerHTML = sunHTML;
        }
        else if (currentWeather.is_day == 0){
          isDay.innerHTML = moonHTML;
        }
    });
    }
    

    function showDropDownMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          let dropdowns = document.getElementsByClassName("dropdown-content");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

      {
        // this is an array/collection of all elements marked w/ temperature class.
        // const Temp = document.getElementsByClassName('temperature');
        

        // requires for-loop to iterate over elements to update them with API info.
        // for (let i = 0; i < Temp.length; i++) {
        //     Temp[i].textContent = currentTemp.temperature_2m;
        // }

        // Useful if both widgets have temp components for calculations of other things if API doesnt provide it ex. Farenheit conversion)


        
        //Good approach but it lacks the ability to actually change the image (images get stacked if different because it only adds an image not change.)
        // let Sun = document.createElement("img");
        // Sun.setAttribute("src","https://static.vecteezy.com/system/resources/previews/000/551/126/original/vector-sun-icon.jpg");
        // Sun.setAttribute("height", 160);
        // Sun.setAttribute("width", 160);

        // let Moon = document.createElement("img");
        // Moon.setAttribute("src","https://www.nasa.gov/wp-content/uploads/2020/07/moon-near-side-lro.jpg");
        // Moon.setAttribute("height", 160);
        // Moon.setAttribute("width", 160);
      }
