import Pagination from "./Pagination";

const data = [
  "Sản phẩm 1", "Sản phẩm 2", "Sản phẩm 3", "Sản phẩm 4", "Sản phẩm 5",
  "Sản phẩm 6", "Sản phẩm 7", "Sản phẩm 8", "Sản phẩm 9", "Sản phẩm 10",
  "Sản phẩm 11", "Sản phẩm 12"
];

function App() {
  return (
    <div>
      <Pagination items={data} />
    </div>
  );
}

export default App;
