import { useState } from "react";
import axios from "axios";

import ButtonLink1 from "../ButtonLink1";
import Button1 from "../Button1";
import Input1 from "../Input1";

export default function ScreenLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/login", {
        username: email,
        password: senha,
      });
      setMensagem(res.data.message);
    } catch (err) {
      setMensagem(err.response?.data?.error || "Erro no servidor");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-1 flex justify-center items-center font-[Roboto]">
      <div className="h-[500px] w-[700px] bg-gray-2 flex flex-row justify-center items-center rounded-l-[25px] rounded-r-[25px]">
        <div
          className="h-[500px] w-[300px] bg-purple-1 flex flex-col justify-center items-center rounded-l-[25px] rounded-r-[80px]
      gap-[25px]"
        >
          <h1 className="font-bold text-[24px] text-white-1">
            Bem vindo(a) de volta!
          </h1>
          <h2 className="italic text-[18px] text-white-1">
            Ainda não tem uma conta?
          </h2>
          <ButtonLink1 href="/registro" text="Registrar-se!" />
        </div>
        <div className="h-[500px] w-[400px] bg-gray-2 flex flex-col justify-center items-center rounded-r-[25px] gap-[15px]">
          <Input1
            type="text"
            text="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input1
            type="password"
            text="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <a
            href="/esqueci-a-senha"
            className="italic text-[16px] text-white-1 hover:text-purple-1 underline duration-200"
          >
            Esqueceu sua senha?
          </a>
          <Button1 text="Login" onClick={handleLogin} />
          <h4 className="italic text-[16px] text-red-1 underline">
            {mensagem}
          </h4>
        </div>
      </div>
    </div>
  );
}
