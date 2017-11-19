const clientId = "DBJfWJiV3KSFFaqFCYeWDg";
const secret = "74WMLP2ZfDosNOYsSy9zunB3JO5B93IMWfjpXQE1vKjWUyLwZFSXfDpohjVci6xo";
let accessToken = "";

const Yelp = {
	getAccessToken(){
		if(accessToken !== ""){
			return new Promise(resolve => resolve(accessToken));
		}
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, 
		{method: 'POST'}).then(response => {
			if(response.ok){
				return response.json();
			}
			throw new Error('Request failed!');
		}).then(jsonResponse => {accessToken = jsonResponse.accessToken});
	},
	
	search(term, location, sortBy){
		return Yelp.getAccessToken().then(()=>{
			return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
				{headers: {Authorization: `Bearer ${accessToken}`}
				});
		}).then(response => {if(response.ok){
			return response.json();
		}}).then(jsonResponse => {
			if(jsonResponse.businesses){
				return jsonResponse.businesses.map(businesses => {
					return {
						id: businesses.id,
						imageSrc: businesses.image_url,
						name: businesses.name,
						address: businesses.location,
						city: businesses.city,
						state: businesses.state,
						zipCode: businesses.zip_code,
						category: businesses.categories,
						rating: businesses.rating,
						reviewCount: businesses.review_count
					}
				});
			}
		})
	}
}

export default Yelp;