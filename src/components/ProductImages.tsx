import Image from "next/image";


const ProductImages = () => {
    return (
        <div>
            <div className="h-[500px] relative">
                <Image
                    src="https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">

            </div>
        </div>
    );
};

export default ProductImages;