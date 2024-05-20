import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorHandling() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 5000);
  }, []);
  return (
    <>
      <main>
        <h1>OOPss !!</h1>
      </main>
      <h2>Something went wrong</h2>
    </>
  );
}

export default ErrorHandling;
