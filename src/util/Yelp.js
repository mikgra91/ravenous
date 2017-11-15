const clientId = "DBJfWJiV3KSFFaqFCYeWDg";
const secret = "74WMLP2ZfDosNOYsSy9zunB3JO5B93IMWfjpXQE1vKjWUyLwZFSXfDpohjVci6xo";
const accessToken = "";

const Yelp = {


	function getAccessToken(){
		if(accessToken != ""){
			return new Promise(resolve => resolve(accessToken));
		}
		return fetch(`https://cors-anywhere.herokuapp.com/?https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, 
		{method: 'POST'}).then(response => {
			if(response.ok){
				return response.json();
			}
			throw new Error('Request failed!');
		}), networkError => console.log(networkError.message).then(accessToken = jsonResponse.accessToken;)
	}
	function search(term, location, sortBy){
		return Yelp.getAccessToken().then(()=>{
			return fetch(`https://cors-anywhere.herokuapp.com/?https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`, 
				{headers: {Authorization: `Bearer ${accessToken}`}
				});
		}).then(response => {if(response.ok){
			return response.json();
			)}
		});
	}
}