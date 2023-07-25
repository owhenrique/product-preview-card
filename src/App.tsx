import Description from "./components/description";

function App() {
  return (
    <div className="bg-primary-cream flex min-h-screen p-5 justify-center items-center ">
      <div className="flex flex-1 flex-col lg:flex-row lg:max-h-[500px] lg:max-w-[600px] lg:rounded-xl overflow-hidden">
        <img
          src="https://github.com/owhenrique/product-preview-card/blob/main/src/assets/img/mobile/product.jpg"
          className="rounded-t-[0.75rem] lg:hidden mr-0"
          alt="Perfume bottle"
        />
        <img
          src="https://github.com/owhenrique/product-preview-card/blob/main/src/assets/img/desktop/product.jpg"
          className="rounded-t-[0.75rem] hidden lg:block lg:rounded-none w-[50%] mr-0"
          alt="Perfume bottle"
        />
        <Description />
      </div>
    </div>
  );
}

export default App;
