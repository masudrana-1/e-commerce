"use client"

import { currentCart } from "@wix/ecom";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores"
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";


// check 1st time refresh token 
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
    modules: {
        products,
        collections,
        currentCart
    },
    auth: OAuthStrategy({

        // wix client id 
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,

        // create token 
        tokens: {
            refreshToken,
            accessToken: { value: "", expiresAt: 0 },
        },
    }),
});


export type WixClient = typeof wixClient;

export const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientContextProvider = ({
    children,
    }: {
        children: ReactNode;
    }) => {
        return (
            <WixClientContext.Provider value={wixClient}>
                {children}
            </WixClientContext.Provider>
        );
    };