import NextAuth from "next-auth"
import Providers from 'next-auth/providers'
import GithubProvider from "next-auth/providers/github"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import { db } from "../../../firebase";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: FirebaseAdapter(db)
})