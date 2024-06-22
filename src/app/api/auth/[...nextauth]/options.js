
import GoogleProvider from "next-auth/providers/google"

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
      ],
}