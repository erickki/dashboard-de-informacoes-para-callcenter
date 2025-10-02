import Button1 from "../Button1";
import Button2 from "../Button2";
import Input1 from "../Input1";

export default function ScreenRegister(props) {
  const textText = props.text;

  return (
    <div className="h-screen w-screen bg-gray-1 flex justify-center items-center font-[Roboto]">
      <div className="h-[500px] w-[700px] bg-gray-2 flex flex-row justify-center items-center rounded-l-[25px] rounded-r-[25px]">
        <div
          className="h-[500px] w-[300px] bg-purple-1 flex flex-col justify-center items-center rounded-l-[25px] rounded-r-[80px]
      gap-[25px]"
        >
          <h1 className="font-bold text-[24px] text-white-1">
            Seja bem vindo(a)!
          </h1>
          <h2 className="italic text-[18px] text-white-1">Já tem uma conta?</h2>
          <Button1 text="Logar-se!" />
        </div>
        <div className="h-[500px] w-[400px] bg-gray-2 flex flex-col justify-center items-center rounded-r-[25px] gap-[15px]">
          <Input1 type="text" text="Matrícula" />
          <Input1 type="text" text="Email" />
          <Input1 type="password" text="Senha" />
          <Input1 type="password" text="Repetir Senha" />
          <Button2 text="Registrar" />
          <h4 className="italic text-[16px] text-red-1 underline">
            {textText}
          </h4>
        </div>
      </div>
    </div>
  );
}
