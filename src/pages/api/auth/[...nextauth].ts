import { signIn } from "@/utils/db/services";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                };

                const user: any = await signIn({username});
                // const user: any = { id: 1, username: username, password: password };

                if (user) {
                    const passwordConfirm = await compare(password, user.password);

                    if (passwordConfirm) {
                        return user;
                    }
                    return null;
                } else {
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
        }),
    ],
    callbacks: {
        jwt({token, account, profile, user}: any) {
            if(account?.provider === "credentials") {
                token.username = user.username;
                token.email = user.email;
                token.name = user.name;
                token.role = user.role;
            }
            if(account?.provider === "google") {
                const data = {
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    type: "google",
                }

                token.name = data.name;
                token.email = data.email;
                token.image = data.image;
                token.type = data.type;
            }

            return token;
        },
        async session({session, token}: any) {
            if ("username" in token) {
                session.user.username = token.username;
            }
            if ("email" in token) {
                session.user.email = token.email;
            }
            if ("name" in token) {
                session.user.name = token.name;
            }
            if ("role" in token) {
                session.user.role = token.role;
            }
            if ("image" in token) {
                session.user.image = token.image;
            }

            return session;
        }
    },
    pages: {
        signIn: "/auth/login",
    }
}

export default NextAuth(authOptions);