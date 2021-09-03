// create a custom use-listings hook
    // there may be more than 1 page that require to fetch the listings
    // and to use the listings as state
    // e.g. 
        // page to allow user to add listings to cart 
        // page to allow seller to edit their own listings

import React from "react";

// Fetch listings
const fetchListings = () => 
    fetch("https://ecomm-service.herokuapp.com/marketplace?limit=6")
    .then((res => res.json()))


export const useListings = () => {
    const [listings, setListings] = React.useState(undefined)

    // on load of page, fetch listings
    React.useEffect(() => {
        fetchListings()
        .then((data) => setListings(data))
    }, [])

    return listings
}