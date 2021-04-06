
const apikey = "Ip1OrM8akBUaVm_k2t9qBS9-nPPiIuN5x13S4UC8f1tThSxi9ZscpPPs_FS2jQEu2YK9PgN40VsnBOOEc0qlBwk-i2XTpNnS1xbVuXKKmA86Fb5xIEVBm5NkZcJrYHYx";

const Yelp = {
searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apikey}`,
        },
    }).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        if(jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                };
            });
        }
    })
}
}

export default Yelp;