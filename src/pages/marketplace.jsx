import React from "react";
import { ListingItem } from "domains/marketplace/components/listing-item";
import { LoginForm } from "domains/auth/components/login-form";
import { useListings } from "domains/marketplace/hooks/use-listings";
import { AuthContext } from "domains/auth/auth.state";


// Attempt login
const attemptLogin = (loginDetails) => 
    fetch("https://ecomm-service.herokuapp.com/login", {        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails)
    })
    .then((res) => {
        if (res.ok) {
            return res.json()
        }
        throw new Error(res.statusText)
    })



export const Marketplace = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")


    const listings = useListings()
    const { authStatus, login, logout }  = React.useContext(AuthContext)


    // map items 
    const renderItems = () => {
        return listings.map((listing) => 
            <ListingItem 
                key={listing._id}
                title={listing.title}
                description={listing.description}
                price={listing.price}
                condition={listing.condition}
                imageUrl={listing.imageUrl}
                availability={listing.availability}
                numOfStock={listing.numOfStock}
                onlyOne={listing.availability === "single-item"}
            />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        attemptLogin({username, password})
        .then((data) => {       
            login(data.accessToken)
        })
        .catch((err) => console.log(err))

    }


    return (
        <>
            {authStatus === "anonymous" && 
            <main className="bg-gray-50 p-6 sm:p-12 min-h-screen">
                <div className="max-w-md mx-auto px-4 sm:px-6 py-6 bg-white shadow">
                    <LoginForm 
                    setUsername={(e) => setUsername(e.target.value)}
                    setPassword={(e) => setPassword(e.target.value)}
                    handleSubmit={handleSubmit}
                    />
                </div>
            </main>           
            }
            {authStatus === "authenticated" && 
            <main className="bg-gray-50 lg:flex">
            {/** Render items **/}
                <div className="flex-1">
                    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:flex-col sm:align-center mb-12">
                            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Marketplace</h1>
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
                            {listings && renderItems()}
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
                        
                        {/** Shopping cart list **/}
                        <div>
                            <ul id="cart-item-list" className="divide-y divide-gray-200">

                            </ul>
                        </div>

                        <div className="flex-shrink-0 px-4 py-4 flex justify-end border-t border-gray-200">
                            <span className="text-3xl">
                                "Total"
                                <span>2,650.00</span>
                            </span>
                        </div>

                    </div>
                </div>
            </main>  
            }
        </>


    )
}