import React from 'react';

const Add = () => {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a Quantity</h4>
            <div className="flex justify-between">
                <div>
                    
                </div>
                <button
                    className="w-36 text-sm rounded-3xl ring-1 ring-masud text-masud py-2 px-4 hover:bg-masud hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Add;