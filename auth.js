import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/mongoClientPromise";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    handlers,
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter:MongoDBAdapter(clientPromise,{databaseName:"next-auth"}),
    session:{
        strategy:"jwt",
        maxAge:30*24*60*60,
    },
    providers: [
        CredentialsProvider({
            credentials:{
                email:{
                    label:"Email",
                    type:"email",
                    placeholder:"email"
                },
                password:{
                    label:"Password",
                    type:"password",
                    placeholder:"password"

                },
                async authorize(credentials){
                    if(credentials===null){
                        return null
                    }
                    try {
                        
                    } catch (error) {
                        
                    }
                }
            }
        }) ,
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ]

})