import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import mongoClientPromise from "./service/mongoClientPromise";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter:MongoDBAdapter(mongoClientPromise,{databaseName:process.env.AUTHDB_NAME}),
    // session:{
    //     strategy:"jwt",
    //     maxAge:30*24*60*60,
    // },
    providers: [
        CredentialsProvider({
            credentials:{
                
                phoneNumber:{},
                password:{},

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