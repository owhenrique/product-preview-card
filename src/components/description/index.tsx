import { RiShoppingCart2Line } from "react-icons/ri";

function Description() {
  return (
    <div className="bg-neutral-white flex flex-1 flex-col rounded-b-[0.75rem] lg:rounded-none py-5 px-4 lg:px-6 text-left gap-5 lg:justify-between">
      <h1 className="text-neutral-grayish_blue flex justify-normal items-start uppercase tracking-[0.35rem] text-xs">Perfume</h1>
      <p className="text-neutral-dark_blue fraunces text-3xl">Gabrielle Essence<br/>Eau de Parfum</p>
      <p className="text-neutral-grayish_blue text-sm">
        A floral, solar and voluptuous<br/>interpretation composed by Olivier<br/>Polge, Perfumer-Creator for the House of<br/>CHANEL.
      </p>
      <div className="flex items-center gap-5">
        <h1 className="text-primary-dark_cyan fraunces text-3xl">$149.99</h1>
        <p className="text-neutral-grayish_blue line-through text-sm">$169.99</p>
      </div>
      <div className="bg-primary-dark_cyan rounded-[0.5rem] flex justify-center items-center p-3 text-neutral-white gap-2">
        <RiShoppingCart2Line size={18}/>
        <p className="">Add to Cart</p>
      </div>
    </div>
  );
}

export default Description;
