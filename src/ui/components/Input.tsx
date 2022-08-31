import classNames from "../../../node_modules/classnames/index"


interface InputProps{
    name: string,
    type: string,
    cream: boolean
}

export function Input(props){
    return(
        <div className="my-4 flex flex-row w-full">            
                <div className="w-3/12 pt-2">
                    <label className="font-bold text-gray-dark text-base">{props.name}</label>
                </div>
                <div className="text-left">
                    <input className={classNames('p-2 text-gray-dark', {
                        'bg-cream': props.cream,
                        'bg-gray-light': !props.cream
                        })} type={props.type} />
                </div>

        </div>
    )
}