import { redirectToAuthCodeFlow } from "./redirectToAuthCodeFlow";

const clientId = "0deb27fdbab845cf80e515fd5c975b39"; // Replace with your client id
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  const accessToken = await getAccessToken(clientId, code);
  const profile = await fetchProfile(accessToken);
  populateUI(profile);
}

async function getAccessToken(clientId: string, code: string) {
  // TODO: Get access token for code
}

async function fetchProfile(token: string): Promise<any> {
  // TODO: Call Web API
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await result.json();
}

function populateUI(profile: any) {
  // TODO: Update UI with profile data
}
