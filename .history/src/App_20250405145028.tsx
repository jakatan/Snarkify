import "./App.css";

function App() {
  return (
    <>
      <h1>Your Spotify Top 5</h1>
      <body className="card">
        <script src="src/script.ts" type="module"></script>
        <section id="profile">
          <h2>
            Logged in as <span id="displayName"></span>
          </h2>
          <span id="avatar"></span>
          <ul>
            <li>
              User ID: <span id="id"></span>
            </li>
            <li>
              Email: <span id="email"></span>
            </li>
            <li>
              Spotify URI: <a id="uri" href="#"></a>
            </li>
            <li>
              Link: <a id="url" href="#"></a>
            </li>
            <li>
              Profile Image: <span id="imgUrl"></span>
            </li>
          </ul>
        </section>
      </body>
    </>
  );
}

export default App;
