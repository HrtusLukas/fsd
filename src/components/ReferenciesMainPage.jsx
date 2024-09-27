import { FaRegCheckSquare } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import Category from "./Category";

const ReferenciesMainPage = ({ theme }) => {
  return (
    <section className="pt-[100px] w-[96.5vw] h-auto bg-transparent mx-[20px] flex flex-col">
      <div className="w-full flex flex-col text-primary mt-[5%] px-[7%]">
        <div>
          <p className="text-xl">References</p>
        </div>
        <div className="my-4">
          <h1 className="text-6xl">Úspešné príbehy našich klientov</h1>
        </div>
        <div className="w-full lg:w-[60%] mb-3">
          <p className="text-[22px] mb-[14.4px]">
            Vo FSD milujeme úspech našich klientov a vieme, ako Vám ho pomôcť dosiahnuť. Naši klienti, ako Annemarie Börlind, SENSET, Najlepsinabytok.sk, BOSP.sk, Ku-Li Therm sú skvelým príkladom toho, ako sa dá premeniť vízia v oblasti e-commerce a aplikácií na realitu.
          </p>
          <p>
            Pomáhame najmä zabehnutým e-shopom dosiahnuť ich biznisové ciele a expandovať na ďalšie trhy. Sme hrdí na e-shopy aj aplikácie vyrobené našou rukou, pretože okúzľujú zákazníkov jedinečným dizajnom, jednoduchou použiteľnosťou a bezchybnou funkčnosťou. Chcete sa aj vy stať súčasťou úspešných online firiem?
          </p>
        </div>
        <Category />
      </div>
    </section>
  );
};

export default ReferenciesMainPage;
