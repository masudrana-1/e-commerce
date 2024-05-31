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
                        src="https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                        fill
                        sizes="25w"
                        className="absolute object-cover rounded-md"
                    />
                </div>
            </Link>
        </div>
    );
};

export default ProductList;