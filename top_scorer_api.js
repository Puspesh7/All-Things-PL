
const api_url = "https://v3.football.api-sports.io/players/topscorers?season=2021&league=39";
  
// Defining async function
async function getapi(url) {
    
    const response = await fetch(url,{
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": "f210acec723e8576ae94fa2b24081c93"
		}
	});
    var data = await response.json();
	console.log(data);
	topscorerstats(data);
}

getapi(api_url);


// Function to display top scorers details
var player_column = [".top-scorer-col-1",".top-scorer-col-2",".top-scorer-col-3",".top-scorer-col-4",".top-scorer-col-5"]

function topscorerstats(data)
{
	for(var i=0;i<5;i++)
	{
		var element = document.querySelector(`${player_column[i]}`);
		var content = `<div class="card">
		<img src="${data.response[i].player.photo}" class="card-img-top" alt="...">
		<div class="card-body">
		<h3 class="Player 1">${data.response[i].player.name}</h3>
		<p class="card-text">Team - ${data.response[i].statistics[0].team.name}</p>
		<p class="card-text">Appearences - ${data.response[i].statistics[0].games.appearences}</p>
		<p class="card-text">Goals - ${data.response[i].statistics[0].goals.total}</p>
		</div>
		</div>`;
		element.innerHTML = content;
	}
}

// function to display top assists

const api_url_2 = "https://v3.football.api-sports.io/players/topassists?season=2021&league=39";
  
// Defining async function
async function getapiassist(url) {
    
    const response = await fetch(url,{
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": "f210acec723e8576ae94fa2b24081c93"
		}
	});
    var result = await response.json();
	console.log(result);
	topassiststats(result);
}

getapiassist(api_url_2);

var player_column_assist = [".top-assist-col-1",".top-assist-col-2",".top-assist-col-3",".top-assist-col-4",".top-assist-col-5"];

function topassiststats(result)
{
	for(var i=0;i<5;i++)
	{
		var element = document.querySelector(`${player_column_assist[i]}`);
		var content = `<div class="card">
		<img src="${result.response[i].player.photo}" class="card-img-top" alt="...">
		<div class="card-body">
		<h3 class="Player 1">${result.response[i].player.name}</h3>
		<p class="card-text">Team - ${result.response[i].statistics[0].team.name}</p>
		<p class="card-text">Appearences - ${result.response[i].statistics[0].games.appearences}</p>
		<p class="card-text">Assists - ${result.response[i].statistics[0].goals.assists}</p>
		</div>
		</div>`;
		element.innerHTML = content;
	}
}


// program for most red cards

const api_url_3 = "https://v3.football.api-sports.io/players/topredcards?season=2021&league=39";
  
// Defining async function
async function getapiredcard(url) {
    
    const response = await fetch(url,{
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": "f210acec723e8576ae94fa2b24081c93"
		}
	});
    var result_2 = await response.json();
	console.log(result_2);
	topredcardstats(result_2);
}

getapiredcard(api_url_3);

var player_column_red_card = [".top-redcard-col-1",".top-redcard-col-2",".top-redcard-col-3",".top-redcard-col-4",".top-redcard-col-5"];

function topredcardstats(result)
{
	for(var i=0;i<5;i++)
	{
		var element = document.querySelector(`${player_column_red_card[i]}`);
		var content = `<div class="card">
		<img src="${result.response[i].player.photo}" class="card-img-top" alt="...">
		<div class="card-body">
		<h3 class="Player 1">${result.response[i].player.name}</h3>
		<p class="card-text">Team - ${result.response[i].statistics[0].team.name}</p>
		<p class="card-text">Appearences - ${result.response[i].statistics[0].games.appearences}</p>
		<p class="card-text">Red Cards - ${result.response[i].statistics[0].cards.red}</p>
		</div>
		</div>`;
		element.innerHTML = content;
	}
}

// program for most yellow cards

const api_url_4 = "https://v3.football.api-sports.io/players/topyellowcards?season=2021&league=39";
  
// Defining async function
async function getapiyellowcard(url) {
    
    const response = await fetch(url,{
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": "f210acec723e8576ae94fa2b24081c93"
		}
	});
    var result_3 = await response.json();
	console.log(result_3);
	topyellowcardstats(result_3);
}

getapiyellowcard(api_url_4);

var player_column_yellow_card = [".top-yellowcard-col-1",".top-yellowcard-col-2",".top-yellowcard-col-3",".top-yellowcard-col-4",".top-yellowcard-col-5"];

function topyellowcardstats(result)
{
	for(var i=0;i<5;i++)
	{
		var element = document.querySelector(`${player_column_yellow_card[i]}`);
		var content = `<div class="card">
		<img src="${result.response[i].player.photo}" class="card-img-top" alt="...">
		<div class="card-body">
		<h3 class="Player 1">${result.response[i].player.name}</h3>
		<p class="card-text">Team - ${result.response[i].statistics[0].team.name}</p>
		<p class="card-text">Appearences - ${result.response[i].statistics[0].games.appearences}</p>
		<p class="card-text">Yellow Cards - ${result.response[i].statistics[0].cards.yellow}</p>
		</div>
		</div>`;
		element.innerHTML = content;
	}
}
