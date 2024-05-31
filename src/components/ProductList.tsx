import Image from "next/image";
import Link from "next/link";


const ProductList = () => {
    return (
        <div
            className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap"
        >
            <Link
                href="/product"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div
                    className="relative w-full h-80"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                        fill
                        sizes="25w"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="25w"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">T-Shirt</span>
                    <span className="font-semibold">$79</span>
                </div>
                <div className="text-sm text-gray-500">
                    Discription
                </div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
                    Add to Cart
                </button>
            </Link>
        </div>
    );
};

export default ProductList;