import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <main>
        <h1>About Page</h1>
        <p><Link to={"/"}>back</Link></p>
      </main>
    </>
  );
}

export default About;
