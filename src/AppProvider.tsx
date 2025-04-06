import { useDispatch } from "react-redux";
import {
  useGetCredentialsQuery,
  useLazyGetCredentialsQuery,
} from "./spotifyApi";
import { setAppConfigs } from "./AppSlice";
import { ReactNode, useEffect } from "react";
import {
  fetchProfile,
  getAccessToken,
  redirectToAuthCodeFlow,
} from "./utils/accessService";

const clientId = "0deb27fdbab845cf80e515fd5c975b39";
const params = new URLSearchParams(window.location.search);

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    const code = params.get("code");
    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } else {
      getAccessToken(clientId, code).then((resp) => {
        console.log(resp);
        dispatch(setAppConfigs({ accessToken: resp }));
      });
    }
  });

  return <>{children}</>;
}

export { AppProvider };
