const submitbtn = document.getElementById("submitbtn");
const default_text = document.getElementById("message");
const temp = document.getElementById("temp-mood")
const temp_val = document.getElementById("temperature");
const city_name = document.getElementById("message");
const week_day = document.getElementById("day");
const month_day = document.getElementById("date");
const val = document.getElementById("text-value");
  const dayinfo = () => {
    const date = new Date();
  const weekday = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  
  return week_day.innerHTML = weekday[date.getDay()];
  }
  const dateinfo = () => {
    const dateknow = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return month_day.innerHTML =`${dateknow.getDate()} ${months[dateknow.getMonth()]}`;
  }
   
  const getInfo = async(event) => {
    let inputval = val.value;
    event.preventDefault();
     if(inputval === ""){
        default_text.innerHTML = "Please enter the city name.."
     }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputval}&units=metric&appid=a0365b37b6eeecd9de5c6b02519eff00`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            // console.log(arrdata[0].main.temp)
            city_name.innerHTML =`${arrdata[0].name} ,${arrdata[0].sys.country}`;
            temp_val.innerHTML =  arrdata[0].main.temp;
            const mood_data = arrdata[0].weather[0].main;
            // temp.innerHTML = mood_data;
            if(mood_data == "Clouds"){
              temp.innerHTML = 
              "<i class='fa-solid fa-cloud'style = 'color : #fff'></i>"
            }
            if(mood_data == "Drizzle"){
              temp.innerHTML = 
              "<i class='fa-solid fa-cloud-rain'style = 'color : #fff'></i>"
            }
            if(mood_data == "Clear"){
              temp.innerHTML = 
              "<i class='fa-solid fa-sun'style = 'color : #fff'></i>"
            }else{
              temp.innerHTML =
              "<i class='fa-solid fa-cloud'style = 'color : #fff'></i>"
            }
            dayinfo();
            dateinfo();
        } catch{
            default_text.innerHTML = "Please enter the city name properly.."
        }
       
     }
  }
submitbtn.addEventListener("click",getInfo)