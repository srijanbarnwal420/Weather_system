let loc = document.getElementById("location")
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


searchButton.addEventListener('click' , (e)=>
{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
});

const getWeather=async (city)=>
{
    console.log(city)

    const api1 = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=29b51ca850783d544321f353c36abeab`

    console.log(api1)
    
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29b51ca850783d544321f353c36abeab`).then((response) => {
         return response.json()
     }).then(weatherData => {


        // const res = response.json()

        // console.log(res)

        // const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);


                if(id<300 && id>200)
                {
                    tempicon.src ="./icons/thunderstorm.png"
                }

                if(id<400 && id>300)
                {
                    tempicon.src ="./icons/cloudy.png"
                }

                if(id<600 && id>500)
                {
                    tempicon.src ="./icons/rain.png"
                }

                if(id<700 && id>600)
                {
                    tempicon.src ="./icons/snowman.png"
                }

                if(id<800 && id>700)
                {
                    tempicon.src ="./icons/cloudy.png"
                }

                if(id==800)
                {
                    tempicon.src ="./icons/sun.png"
                }


    })

    // catch(error)
    // {
    //     alert('city not found');
    // }

}


window.addEventListener("load" ,()=>
{
    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(lat , long)
            

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=29b51ca850783d544321f353c36abeab `

            fetch(api).then((response)=>{
                return response.json();
            })

            .then(data =>
            {
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);

                if(id<300 && id>200)
                {
                    tempicon.src ="./icons/thunderstorm.png"
                }

                if(id<400 && id>300)
                {
                    tempicon.src ="./icons/cloudy.png"
                }

                if(id<600 && id>500)
                {
                    tempicon.src ="./icons/rain.png"
                }

                if(id<700 && id>600)
                {
                    tempicon.src ="./icons/snowman.png"
                }

                if(id<800 && id>700)
                {
                    tempicon.src ="./icons/cloudy.png"
                }

                if(id==800)
                {
                    tempicon.src ="./icons/sun.png"
                }




                console.log(data);

            })

        }

        )}
})
