import { Link } from "react-router-dom";
import { ITEMS } from "../data";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      {ITEMS.map((item) => {
        return (
          <Link to={`${item.id}`}>
            <h1>{item.title}</h1>
          </Link>
        );
      })}
    </>
  );
}

export default Items;
