import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="bg-header  min-h-screen bg-cover bg-no-repeat md:rounded-full md:bg-contain lg:bg-cover xl:bg-contain xl:rounded-full xl:mx-[200px] xl:size-[1400px] 2xl:size-[1700px] 2xl:rounded-full ">
      <div className="md:absolute flex flex-col p-9 items-start gap-1  bottom-16 left-5 ">
        <h2
          className="font-semibold text-slate-300 text-3xl md:text-4xl lg:text-5xl xl:text:6xl 2xl:text-7xl lg:mb-1 mt-[200px]
         "
        >
          Παρηγγειλε τα αγαπημενα σου Cocktail..
        </h2>
        <p
          className="text-slate-400 text-xl xl:text-2xl 2xl:text-2xl lg
        mb-2 "
        >
          Ξεχωριστα Cocktails σε ενα ποικιλομορφο menu φτιαγμενα απο φρεσκα
          υλικα ειναι στην διαθεση σου...
        </p>
        <a
          href="#explore-menu"
          className="btn btn-primary btn-sm md:btn-md lg:btn-lg text-slate-900 xl:btn-xl  "
        >
          Menu
        </a>
      </div>
    </section>
  );
};

export default Header;
