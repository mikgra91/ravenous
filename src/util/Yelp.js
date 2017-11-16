const clientId = "DBJfWJiV3KSFFaqFCYeWDg";
const secret = "74WMLP2ZfDosNOYsSy9zunB3JO5B93IMWfjpXQE1vKjWUyLwZFSXfDpohjVci6xo";
const accessToken = "";

const Yelp = {


	function getAccessToken(){
		if(accessToken != ""){
			return new Promise(resolve => resolve(accessToken));
		}
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, 
		{method: 'POST'}).then(response => {
			if(response.ok){
				return response.json();
			}
			throw new Error('Request failed!');
		}), networkError => console.log(networkError.message).then(accessToken = jsonResponse.accessToken;)
	}
	function search(term, location, sortBy){
		return Yelp.getAccessToken().then(()=>{
			return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`, 
				{headers: {Authorization: `Bearer ${accessToken}`}
				});
		}).then(response => {if(response.ok){
			return response.json();
		}}).then(jsonResponse => {
			if(jsonResponse.businesses){
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name:
						address:
						city:
						state:
						zipCode:
						category:
						rating:
						reviewCount:
					}
				});
			}
		})
	}
}






{"businesses":
[{"id": "pizza-mari-wien-2",
 "name": "Pizza Mari",
 "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/9j1osCtz9STk2FXMo6ZvUg/o.jpg",
 "is_closed": false,
 "url": "https://www.yelp.com/biz/pizza-mari-wien-2?adjust_creative=DBJfWJiV3KSFFaqFCYeWDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DBJfWJiV3KSFFaqFCYeWDg",
 "review_count": 81,
 "categories": [{"alias": "pizza",
 "title": "Pizza"}],
 "rating": 4.5,
 "coordinates": {"latitude": 48.219334,
 "longitude": 16.377028},
 "transactions": [],
 "price": "\u20ac\u20ac",
 "location": {"address1": "Leopoldsgasse 23 a",
 "address2": "",
 "address3": "",
 "city": "Vienna",
 "zip_code": "1020",
 "country": "AT",
 "state": "9",
 "display_address": ["Leopoldsgasse 23 a", "1020 Vienna", "Austria"]},
 "phone": "+436766874994",
 "display_phone": "+43 676 6874994",
 "distance": 1662.326232028},








