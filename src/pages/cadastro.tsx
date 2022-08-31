import React from "react";
import { Button } from "../ui/components/Button";
import { Input } from "../ui/components/Input";

function Cadastro(){
    return (
        <div className="mt-3 md:mt-auto md:py-24 lg:py-32 bg-green">
            <div className="m-5 p-5 bg-cream">
                <h1 className="text-green-dark font-bold text-xl">Criar uma conta</h1>
                <hr className="text-gray-light my-2" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-start w-full">
                    <Input name={'Nome'} type={'text'} cream={false}/>
                    <Input name={'Sexo'} type={'text'} cream={false}/>
                    <Input name={'Data de Nasc.'} type={'date'} cream={false}/>
                    <Input name={'Email'} type={'email'} cream={false}/>
                    <Input name={'Login'} type={'text'} cream={false}/>

                    <Input name={'Senha'} type={'password'} cream={false}/>
                    <Input name={'Confirmar Senha'} type={'password'} cream={false}/>                    
                </div>
                <div className="text-center py-4">
                    <Button>Cadastrar</Button>
                </div>

            </div>

        </div>
    );
};

export default Cadastro;
