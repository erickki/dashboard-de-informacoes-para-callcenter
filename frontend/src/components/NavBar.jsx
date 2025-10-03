import List from "../../public/List.svg";

export default function NavBar() {
  return (
    <div className="h-screen w-[250px] flex flex-row justify-center items-center font-[Roboto]">
      <div className="h-screen w-[50px] bg-amber-300 flex flex-col justify-start items-center pt-[15px]">
        <img src="../../public/List.svg" alt="list" />
      </div>
      <div className="h-screen w-[200px] bg-amber-900 flex flex-col justify-start items-center pt-[15px]">
        <h1>TESTE</h1>
      </div>
    </div>
  );
}
