// listing item component should be inside the domains directory
    // has knowledge of business domain

import React from "react";
import { Button } from "components/button";
import { ShoppingCartIcon } from "@heroicons/react/outline"


export const ListingItem = (props) => {
    return (
        <div className="relative flex flex-col">
            <div 
            className="group block w-full rounded-lg 
            bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 
            focus-within:ring-offset-gray-100 focus-within:ring-pink-500
            overflow-hidden
            "
            >
                <img src={props.imageUrl} alt="" className="object-cover pointer-events-none group-hover:opacity-75 h-48 w-full" />
            </div>

            <div className="flex-1 flex md:flex-col justify-between items-start md:items-stretch gap-3 px-2">
                <div className="mt-1 flex-1">
                    <div className="flex justify-between items-center gap-3">
                        <div>
                            $<span className="text-2x1 font-bold">{props.price}</span>
                        </div>
                        {props.onlyOne ? 
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Only One
                            </span>            
                            :
                            <div className="text-sm text-gray-500">
                                {props.numOfStock} piece available
                            </div>
                        }
                    </div>
                    <p className="block text-sm font-medium text-gray-900 truncate pointer-events-none">
                        {props.title}
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                        {props.description}
                    </p>                     
                </div>

                <div className="flex flex-col md:flex-row gap-3 py-3">
                    <Button
                    type="button" 
                    className="js-add-to-cart-btn items-center" 
                    onClick={props.onClick}
                    >
                        <ShoppingCartIcon className="h-5 w-5 mr-2" />
                        ADD TO CART
                    </Button>

                </div>

            </div>
            
        </div>
    )
}