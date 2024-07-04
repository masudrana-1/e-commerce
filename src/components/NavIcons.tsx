"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const pathName = usePathname();

    const wixClient = useWixClient();
    const isLoggedIn = wixClient.auth.loggedIn();


    // const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        } else {
            setIsProfileOpen((prev) => !prev);
        }
    };

    // logout 
    const handleLogout = async () => {
        
    };


    // AUTH WITH WIX-MANAGED AUTH
    // login by google / facebook

    // const wixClient = useWixClient();

    // const login = async () => {
    //     const loginRequestData = wixClient.auth.generateOAuthData(
    //     "http://localhost:3000"
    //     );

    //     // console.log(loginRequestData);

    //     // set data local storage 
    //     localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
    //     const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
    //     window.location.href = authUrl;
    // };

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">

            {/* profile  */}
            <Image
                src="/profile.png"
                alt=""
                width={22}
                height={22}
                className="cursor-pointer"
                onClick={handleProfile}
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
                onClick={() => setIsCartOpen((prev) => !prev)}
            >
                <Image src="/cart.png" alt="" width={22} height={22} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-masud rounded-full text-white text-sm flex items-center justify-center">
                    5
                </div>
                {isCartOpen && <CartModal />}
            </div>
        </div>
    );
};

export default NavIcons;