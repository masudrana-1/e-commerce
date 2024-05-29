"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();


    const isLoggedIn = false;

    const login = () => {
        if (!isLoggedIn) {
            router.push('/login')
        }
        setIsProfileOpen((prev)=> !prev)
    }

    // logout 
    const handleLogout = async () => {
        
    };

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">

            {/* profile  */}
            <Image
                src="/profile.png"
                alt=""
                width={22}
                height={22}
                className="cursor-pointer"
                onClick={login}
            />
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="/profile">Profile</Link>
                    <div className="mt-2 cursor-pointer" onClick={handleLogout}>
                        logout
                        {/* {isLoading ? "Logging out" : "Logout"} */}
                    </div>
                </div>
            )}

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