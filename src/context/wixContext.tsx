"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores"
import Cookies from "js-cookie";


// check 1st time refresh token 
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const myWixClient = createClient({
    modules: {
        products,
        // currentCart
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
