import Image from "next/image";
import Link from "next/link";


const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/product" className="relative w-full h-80">
                <Image
                    src="https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    fill
                    sizes="25w"
                />
            </Link>
        </div>
    );
};

export default ProductList;