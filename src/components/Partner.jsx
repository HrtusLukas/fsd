import owner from "../images/owner.jpg";

const Partner = () => {
  return (
    <section className="mt-[40px] lg:w-[96.5vw] w-[85vw] lg:h-[80vh]  h-auto bg-transparent lg:mx-[20px] m-auto  flex flex-col flex-wrap">
      <div className="lg:h-[50%] h-[80vh] lg:w-[82%] w-[100%] bg-footer m-auto rounded-[25px] mb-[30px] ">
        <div className="lg:h-[50%] h-[30%] flex justify-center items-center text-4xl font-[500] text-primary">
          <h1 className="text-center">Máte zaujem o spoluprácu?</h1>
        </div>
        <div className="h-[50%] w-[100%] px-[10%] flex flex-col lg:flex-row m-auto justify-center flex-wrap">
          <div className="flex-1 items-center flex flex-col h-[100%] justify-center lg:border-r-[1px] border-secondary">
            <p className="text-lg text-secondary">E-MAIL</p>
            <p className="text-primary text-2xl hover:underline cursor-pointer">lukashrtus1@gmail.com</p>
          </div>
          <div className="flex-1 items-center flex flex-col h-[100%] justify-center lg:border-r-[1px] border-secondary">
            <p className="text-lg text-secondary">TEL.</p>
            <p className="text-primary text-2xl hover:underline cursor-pointer">+421 950 562 141</p>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center">
            <p className="text-primary text-xl mr-[5%]">Lukáš Hrtús</p>
            <img className="w-[80px] h-[80px] rounded-[50px]" src={owner} alt="" />
          </div>
        </div>
      </div>

      <div className="h-[25%] w-[80%] m-auto bg-transparent flex flex-col gap-y-4 mb-[30px]">
        <div className="flex justify-center text-4xl text-primary font-[500]">
          <p className="text-center">Už s nami spolupracujete?</p>
        </div>
        <div className="flex justify-center text-3xl font-[500] text-primary">
          <p className="flex relative shrink-border hover:text-secondary">info@fsd.com</p>
        </div>
      </div>
    </section>
  );
};

export default Partner;
