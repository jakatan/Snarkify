export async function redirectToAuthCodeFlow(clientId: string) {
  const verifier = localStorage.getItem("verifier");

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://127.0.0.1:5173/callback");
  params.append("scope", "user-read-private user-read-email");
  params.append("code_verifier", verifier);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}
