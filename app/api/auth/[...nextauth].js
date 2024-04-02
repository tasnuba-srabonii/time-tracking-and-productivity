import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Use JSON Web Tokens (JWT) for session management
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/dashboard", // Redirect users to "/login" when signing in
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
