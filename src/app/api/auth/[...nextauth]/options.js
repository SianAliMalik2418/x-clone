import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserModel } from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const authOptions = {
  providers: [
    GoogleProvider({
      // To get these go to google cloud console create a new project go to crednetials create on OAuth and create screen after that come back to create Oauth CLient ID and in js origin add ur localhost 3000 url and in redirect URI put the url from auth js google provider dev url

      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      //   ADD THESE TO ENV TOO:
      // NEXTAUTH_SECRET = hulabulhulabooo
      // NEXTAUTH_URL = http://localhost:3000/
    }),

    CredentialsProvider({
      name: "credentials",

      credentials: {},

      async authorize(credentials, req) {
        console.log("CREDS" , credentials)
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }

        try {
          const user = await UserModel.findOne({ email });

          if (!user) {
            return null;
          }

          const isPasswordMatch = bcryptjs.compareSync(password, user.password);

          if (!isPasswordMatch) {
            return null;
          }

          // Return additional user properties
          return { id: user._id, name: user.username, email: user.email };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  //   callbacks: {
  //     async jwt({ token, user }) {
  //       if (user) {
  //         token.id = user.id;
  //         token.name = user.name;
  //         token.email = user.email;
  //       }
  //       return token;
  //     },

  //     async session({ session, token }) {
  //       if (token) {
  //         session.user.id = token.id;
  //         session.user.name = token.name;
  //         session.user.email = token.email;
  //       }
  //       return session;
  //     },
  // },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
};
