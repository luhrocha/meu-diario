import React from "react";

export const Header = () => {
    return(
        <header className="bg-green flex justify-between p-5">
            <h1 className='text-black text-5xl font-cursive'>Meu Diário</h1>
            <div className="border border-black">Account</div>
        </header>
    );
};

