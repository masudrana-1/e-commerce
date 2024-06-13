"use client"

import { products } from "@wix/stores";
import { useState } from "react";


const CustomizeProducts = ({
        productId,
        variants,
        productOptions,
    }: {
        productId: string;
        variants: products.Variant[];
        productOptions: products.ProductOption[];
    }) => {
    
    // selected state 
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string; }>({});
    

    // selected function 
    const handleOptionSelect = (optionType: string, choice: string) => {
        setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
    };
    
    
    return (
        <div className="flex flex-col gap-6">
            {productOptions.map((option) => (
                <div className="flex flex-col gap-4" key={option.name}>
                    <h4 className="font-medium">Choose a {option.name}</h4>
                    <ul className="flex items-center gap-3">
                        {option.choices?.map((choice) => {
                                [option.name!]: choice.description!,
                            

                            const selected =
                                selectedOptions[option.name!] === choice.description;

                            const clickHandler = disabled
                                ? undefined
                                : () => handleOptionSelect(option.name!, choice.description!);

                            return option.name === "Color" ? (
                                <li
                            className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                            
                                >
                                </li>
                            ) : (
                                <li
                                    className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                                    
                                >
                                    {/* {choice.description} */}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}

            {/* size section */}
            {/* <h4 className="font-medium">Choose a size</h4>
            <ul className="flex items-center gap-3">
                <li className="ring-1 ring-masud text-masud rounded-md py-1 px-4 text-sm cursor-pointer">
                    Small
                </li>
                <li className="ring-1 ring-masud text-white bg-masud rounded-md py-1 px-4 text-sm cursor-pointer">
                    Medium
                </li>
                <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
                    Large
                </li>
            </ul> */}
        </div>
    );
};

export default CustomizeProducts;