import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oq8mgk0o9l01xx9ifm1ein/master",
  cache: new InMemoryCache(),
});
