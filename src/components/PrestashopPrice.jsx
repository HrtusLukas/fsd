import data from "../prestashop";

const PrestashopPrice = () => {
  return (
    <>
      <div className="bg-transparent gap-x-8 h-auto flex-wrap lg:h-[32vh] w-[90%] my-8 md:w-[80%] mx-auto rounded-[25px] border-blue-400 border-[1px] p-[5%] flex flex-col md:flex-row justify-center">
        {data.map((oneData) => {
          const { id, header, text } = oneData;

          return (
            <div className="flex flex-1 h-[100%] justify-center flex-col items-start px-[5%] md:px-[1%] gap-y-2 mb-2 md:mb-0" key={id}>
              <h1 className="text-primary text-3xl md:text-5xl">{header}</h1>
              <p className="text-primary text-lg md:text-xl">{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PrestashopPrice;
