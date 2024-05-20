import { useParams } from "react-router-dom";
import { ITEMS } from "../data";
function ItemDetails() {
  const params = useParams();
  const item = ITEMS.find((i) => i.id === params.id);

  return (
    <>
      <main>
        <h1>Items Details page</h1>
      </main>
      <h1>{params.id}</h1>
      <h2>{item.title}</h2>
      <p>{item.detail}</p>
    </>
  );
}

export default ItemDetails;
