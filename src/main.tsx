import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import { spotifyApi } from "./spotifyApi.ts";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AppProvider } from "./AppProvider.tsx";

const store = configureStore({
  reducer: {
    App: AppSlice,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
  },
  // adds caching, invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyApi.middleware),
});

setupListeners(store.dispatch);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="/something" element={<App />} />
            <Route path="/callback/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </Provider>
  </StrictMode>
);
