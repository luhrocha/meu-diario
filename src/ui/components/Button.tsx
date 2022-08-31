interface ButtonProps{
    children: string
};

export function Button<ButtonProps>({children}){
    return(
        <button className="bg-orange text-gray-dark text-opacity-80 font-bold p-4">
            {children}
        </button>
    )
};