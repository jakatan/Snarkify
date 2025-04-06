import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://accounts.spotify.com/",
  }),
  endpoints: (build) => ({
    getCredentials: build.query<string, CredentialsBody>({
      query: () => `api/token`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCredentialsQuery, useLazyGetCredentialsQuery } =
  spotifyApi;
