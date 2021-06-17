import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // TODO...add more providers here
  ],

  // TODO
  // database is required to persist accounts in a database
  // database: process.env.DATABASE_URL,
});
