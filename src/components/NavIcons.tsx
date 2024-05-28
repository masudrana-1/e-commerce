"use client"

import Image from "next/image";

const NavIcons = () => {
    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">

            {/* profile  */}
            <Image
                src="/profile.png"
                alt=""
                width={22}
                height={22}
                className="cursor-pointer"
            />

            {/* notification  */}
            <Image
                src="/notification.png"
                alt=""
                width={22}
                height={22}
                className="cursor-pointer"
            />

            {/* cart  */}
            <div
                className="relative cursor-pointer"
            >
                <Image src="/cart.png" alt="" width={22} height={22} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
                </div>
            </div>
        </div>
    );
};

export default NavIcons;