import NumberContextProvider from "./context/NumberContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import CounterX from "./CounterX";
import CounterY from "./CounterY";


function App() {
  return (
    <>
      <NumberContextProvider>
        <ProductContextProvider>
        <CounterX />
        <CounterY />
        </ProductContextProvider>
      </NumberContextProvider>
    </>  
  );
}

export default App;
