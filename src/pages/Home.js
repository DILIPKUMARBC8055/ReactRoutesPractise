import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <p><Link to={"/about"}>about</Link></p>
      </main>
    </>
  );
}

export default Home;
