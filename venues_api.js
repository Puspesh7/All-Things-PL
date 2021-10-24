const venue_url = "https://v3.football.api-sports.io/teams?league=39&season=2021";
  
// Defining async function
async function getvenueapi(url) {
    
    const response = await fetch(url,{
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": "f210acec723e8576ae94fa2b24081c93"
		}
	});
    var data = await response.json();
	console.log(data);
	stadiums(data);
}

getvenueapi(venue_url);


var venue_columns = [".col-1",".col-2",".col-3",".col-4",".col-5",".col-6",".col-7",".col-8",".col-9",".col-10",".col-11",".col-12",".col-13",".col-14",".col-15",".col-16",".col-17",".col-18",".col-19",".col-20"];

function stadiums(data)
{
    for(var i=0;i<20;i++)
    {
        var element = document.querySelector(`${venue_columns[i]}`);
        var content = `<div class="card">
        <img src="${data.response[i].venue.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${data.response[i].venue.name}</h3>
          <h5>${data.response[i].team.name}</h5>
          <p class="card-text">Address - ${data.response[i].venue.address}</p>
          <p class="card-text">Capacity - ${data.response[i].venue.capacity}</p>
        </div>
        </div>`;
        element.innerHTML = content;
    }
}
