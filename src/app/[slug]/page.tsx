import Add from '@/components/Add';
import CustomizeProducts from '@/components/CustomizeProducts';
import ProductImages from '@/components/ProductImages';
import React from 'react';

const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* img  */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages/>
            </div>

            {/* text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">Product description</p>
                <div className="h-[2px] bg-gray-100" />
                {/* price section  */}
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">
                        $45.00
                    </h3>
                    <h2 className="font-medium text-2xl">
                        $35.00
                    </h2>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <CustomizeProducts />
                <Add />
                
                <div className="h-[2px] bg-gray-100" />
                {/* additionalInfoSections */}
                <div className="text-sm">
                    <h4 className="font-medium mb-4">title</h4>
                    <p>description</p>
                </div>
                <div className="h-[2px] bg-gray-100" />

                {/* Reviews section  */}
                <h1 className="text-2xl">User Reviews</h1>
            </div>
        </div>
    );
};

export default SinglePage;