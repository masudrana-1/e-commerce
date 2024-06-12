"use client"

import Image from "next/image";
import { useState } from "react";

// const images = [
//     {
//         _id: 1,
//         url: "https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//         _id: 2,
//         url: "https://plus.unsplash.com/premium_photo-1670282392820-e3590c1c5c54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//         _id: 3,
//         url: "https://plus.unsplash.com/premium_photo-1687850859076-b8e74a1ac8fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//         _id: 4,
//         url: "https://images.unsplash.com/photo-1622445275649-b1922cc3e837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
//     },
// ];



const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((img:any, i:number) => (
                    <div
                        className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                        key={img._id}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={img.url}
                            alt=""
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;