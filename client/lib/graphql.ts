import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { API_URI } from "./const";

const httpLink = createHttpLink({
  uri: API_URI,
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  ssrMode: !typeof window,
});

export default apolloClient;
