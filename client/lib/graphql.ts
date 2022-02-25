import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { RootStore } from "@/models";
import { API_URI } from "./const";
import { createHttpClient } from "mst-gql";

// const httpLink = createHttpLink({
//   uri: API_URI,
// });

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient(API_URI),
});

// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
//   ssrMode: !typeof window,
// });

export default rootStore;
