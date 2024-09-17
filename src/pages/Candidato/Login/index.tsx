import React, { useState } from 'react';
import { Description, DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../../../assets/components/button/button";
import Input from "../../../assets/components/input/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

// Importando funções do data.ts
import { maskCPF, validateCPF, validateEmail } from './data';

export function LoginC() {
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [inputCode, setInputCode] = useState('');

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedCPF = maskCPF(e.target.value);
    setCPF(maskedCPF);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendCode = async () => {
    if (validateCPF(cpf) && validateEmail(email)) {
      const code = "123456";
      setVerificationCode(code);
      toast.success('Código enviado para seu email!');
    } else {
      toast.error('CPF ou Email inválido!');
    }
  };

  const handleCodeVerification = () => {
    if (inputCode === verificationCode) {
      toast.success('Código confirmado com sucesso!', {description:"Você sera redirecionado em instantes...",});
    } else {
      toast.error('Código inválido!');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen min-w-full w-full bg-[#ecf0f1]">
    
      <div className="flex absolute justify-between items-center w-[1060px] h-[85%] border-2 border-white rounded bg-white">
        <div className="w-[60%] flex flex-col items-center">
          <h2 className="text-3xl font-bold capitalize text-[#351AA0]">Entrar</h2>
          <form className="flex flex-col w-[55%] justify-center items-center">
            <Input
              className="inputForm"
              type="text"
              id="cpfInput"
              maxLength={14}
              value={cpf}
              onChange={handleCPFChange}
              placeholder="Digite seu CPF..."
              label="CPF:"
            />
            <Input
              type="email"
              placeholder="Digite seu Email..."
              value={email}
              onChange={handleEmailChange}
              label="Email Institucional :"
            />
            <Dialog>
              <DialogTrigger
                onClick={handleSendCode}
                className="bg-[#351AA0] rounded-sm p-2  text-white w-[165px] h-[35px] flex justify-center items-center font-poppins font-bold text-xs border border-[#351AA0] hover:bg-white hover:text-[#351AA0] duration-500"
              >
                Entrar
              </DialogTrigger>
              <DialogContent className="w-[578px] h-[188px] border border-[#351AA0]">
                <DialogHeader>
                  <DialogTitle className="text-[#2B124C]">Validação de email</DialogTitle>
                  <DialogDescription className="text-[#2B124C]">
                    Insira o código de 6 dígitos que foi enviado ao seu email
                  </DialogDescription>
                  <Input
                    type="text"
                    placeholder="Digite o código..."
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="relative right-4 bottom-[20%]"
                  />
                  <Button onClick={handleCodeVerification} className="btn btnPrimaryC max-w-fit absolute bottom-[5%] left-[5%]">
                    Confirmar
                  </Button>
                  <DialogFooter>
                    <DialogClose className="bg-[#351AA0] rounded-sm p-2 text-white absolute bottom-[5%] right-[5%] h-[35px] flex justify-center items-center font-poppins font-bold text-xs border border-[#351AA0] hover:bg-white hover:text-[#351AA0] duration-500">
                      Voltar
                    </DialogClose>
                  </DialogFooter>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </form>
        </div>
        <div className="bg-[#351AA0] w-[40%] h-full flex justify-center items-center">
          <h2 className="text-white mt-1 font-poppins font-normal text-5xl">JobMatch!</h2>
        </div>
      </div>
      <Toaster/>
    </div>
    
  );
}

export default LoginC;
