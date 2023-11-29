import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import MailchimpProvider from "next-auth/providers/mailchimp";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    MailchimpProvider({
      clientId: process.env.MAILCHIMP_CLIENT_ID!,
      clientSecret: process.env.MAILCHIMP_CLIENT_SECRET!,
    }),
  ],
});
