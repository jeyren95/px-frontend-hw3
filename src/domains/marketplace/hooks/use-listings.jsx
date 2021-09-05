// create a custom use-listings hook
    // there may be more than 1 page that require to fetch the listings
    // and to use the listings as state
    // e.g. 
        // page to allow user to add listings to cart 
        // page to allow seller to edit their own listings

import React from "react";

// Fetch listings
const fetchListings = (page, signal) => 
    fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${page}&limit=6`,
    {
        signal
    })
    .then((res => res.json()))


export const useListings = () => {
    const [listings, setListings] = React.useState(undefined)
    const [page, setPage] = React.useState(1)

    // on load of page, fetch listings
    // whenever page state changes, make api request again to fetch the listings
    React.useEffect(() => {
        // rmb that abort controller has a signal prop used to communicate with the fetch request
        // this signal prop allows fetch request to be aborted whenever necessary
        const ab = new AbortController()
        fetchListings(page, ab.signal)
        .then((data) => setListings(data))

        return () => ab.abort()
    }, [page])

    return {
        listings,
        page,
        setPage
    }
}