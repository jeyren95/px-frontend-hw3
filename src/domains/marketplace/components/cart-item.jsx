import React from "react";
import { TrashIcon } from "@heroicons/react/outline";


export const CartItem = (props) => {
    return (
        <li className="flex px-4 sm:px-6 py-4">
            <img className="h-10 w-10 rounded-full" src={props.imageUrl} alt="" />
            <div className="flex-1 flex justify-between items-center ml-3">
                <div>
                    <p className="text-sm font-medium text-gray-900">{props.title}</p>
                    <p className="text-sm text-gray-500">${props.price} x {props.quantity}</p>   
                </div>
                <div className="flex items-center gap-2">
                    <div>${props.price}</div>
                    <button className="
                        text-red-400
                        p-1
                        rounded-full
                        hover:bg-gray-50
                        focus:outline-none
                        focus:bg-gray-50
                        focus:ring
                        focus:ring-pink-500
                        focus:ring-opacity-30
                        transition
                        duration-150
                        ease-in-out
                      "
                      onClick={props.onClick}
                    >
                        <TrashIcon className="w-6 h-6" />

                    </button>

                </div>
            </div>

        </li>
    )
}