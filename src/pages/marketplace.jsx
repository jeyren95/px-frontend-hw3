import React from "react";
import { ListingItem, CartItem, useListings } from "domains/marketplace";
import { LoginForm, useAuth, useLogout } from "domains/auth";
import { Button } from "components/button";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/solid"
import { ShoppingBagIcon } from "@heroicons/react/outline";

// fetch shopping cart
const fetchCart = (accessToken) => 
    fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: "application/json"
        }
    })
    .then((res) =>  res.json())
    .catch((err) => console.log(err))

// add to cart
const addToCart = (item, accessToken) =>
    fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))

// delete item from cart
const removeFromCart = (id, accessToken) => 
    fetch(`https://ecomm-service.herokuapp.com/marketplace/cart/items/${id}`, {
        method:  "DELETE",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))



export const Marketplace = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [shoppingCart, setShoppingCart] = React.useState(undefined)
    const [totalPrice, setTotalPrice] = React.useState(0)
    const { listings, page, setPage } = useListings()
    const { authStatus, accessToken}  = useAuth()
    const logout = useLogout()
    
    // reload shopping cart
    const reloadShoppingCart = () => {
        setIsLoading(true)

        return fetchCart(accessToken)
        .then((data) => {
            if (data.length === 0) {
                setShoppingCart(undefined)
            } else {
                setShoppingCart(data)
            }
        }) 
        .then(() => setIsLoading(false))
    }

    // render shopping cart items
    const renderShoppingCart = () => {
        return shoppingCart.map((item) => 
            <CartItem 
                key={item._id}
                imageUrl={item.listing.imageUrl}
                title={item.listing.title}
                price={item.listing.price}
                onClick={() => {
                    removeFromCart(item.listing._id, accessToken)
                    .then(() => {
                        setTotalPrice((Number(totalPrice) - Number(item.listing.price)*item.quantity).toFixed(2))
                        reloadShoppingCart()
                    })
                }}
                quantity={item.quantity}
            />
        )
    }

    // render the listings 
    const renderListings = () => {
        return listings.map((listing) => 
            <ListingItem 
                key={listing._id}
                id={listing._id}
                title={listing.title}
                description={listing.description}
                price={listing.price}
                condition={listing.condition}
                imageUrl={listing.imageUrl}
                availability={listing.availability}
                numOfStock={listing.numOfStock}
                onlyOne={listing.availability === "single-item"}
                onClick={() => {              
                    addToCart({
                    listingId: listing._id,
                    quantity: 1
                    }, accessToken)
                    .then(() => {
                        setTotalPrice((Number(totalPrice) + Number(listing.price)).toFixed(2))
                        reloadShoppingCart()
                    })
                    
                }}
            />
        )
    }

    return (
        <>
            {authStatus === "anonymous" && 
            <main className="bg-gray-50 p-6 sm:p-12 min-h-screen">
                <div className="max-w-md mx-auto px-4 sm:px-6 py-6 bg-white shadow">
                    <LoginForm />
                </div>
            </main>           
            }
            {authStatus === "authenticated" && 
            <main className="bg-gray-50 lg:flex">
                
            {/** Render items **/}
                <div className="flex-1">
                    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                        <div className="text-right">
                            <Button type="button" onClick={logout}>Logout</Button>
                        </div>
                        
                        <div className="sm:flex sm:flex-col sm:align-center mb-12">
                            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Marketplace</h1>
                            <div className="text-center mt-10">
                                <Button 
                                type="button" 
                                className="ml-5 mr-5"
                                onClick={() => {
                                    if (page !== 1) {
                                        setPage(page - 1)
                                    }
                                }}
                                >
                                    <ArrowCircleLeftIcon className="h-5 w-5 mr-3" />
                                    Previous
                                </Button>
                                <span>Page {page}</span>
                                <Button 
                                type="button" 
                                className="ml-5 mr-5"
                                onClick={() => setPage(page + 1)}            
                                >
                                    <ArrowCircleRightIcon className="h-5 w-5 mr-3" />
                                    Next
                                </Button>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
                            {listings && renderListings()}
                        </div>
                    </div>
                </div>

                {/** Shopping cart **/}
                <div className="flex-initial bg-white w-full lg:max-w-md border-b border-gray-100">
                    <div className="flex flex-col h-full">
                        <div className="py-6 px-4 bg-pink-700 sm:px-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-medium text-white">Your shopping cart</h2>
                                <div className="mt-1">
                                    <div className="text-sm text-pink-300">Listing added into your shopping cart</div>
                                </div>
                            </div>
                        </div>
               
                        {shoppingCart && !isLoading &&
                        <>
                            {/** Shopping cart list and total price**/}
                            <div>
                                <ul id="cart-item-list" className="divide-y divide-gray-200">
                                    {renderShoppingCart()}
                                </ul>
                            </div>
                                
                            <div className="flex-shrink-0 px-4 py-4 flex justify-end border-t border-gray-200">
                                <span>
                                    Total
                                    <span className="text-3xl"> ${totalPrice}</span>
                                </span>
                            </div>

                        </>                        
                        }
            
                        {!shoppingCart && !isLoading &&
                            <div className="px-4 sm:px-6 pb-12">
                                <div className="pt-6 pb-5">
                                    <div id="no-cart-item-message">
                                        <div className="p-4 text-center">
                                            <ShoppingBagIcon className="inline-block w-12 h-12 text-gray-300" />
                                            <p className="text-center text-gray-500">There is no item in your shopping cart</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        }

                        {isLoading &&
                            <h3 className="text-center mt-10">Updating your cart...</h3>
                        }
                        
                    </div>
                </div>
            </main>  
            }
        </>


    )
}