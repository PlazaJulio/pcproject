export default function ButtonEditar({onHandle, children}){
    return (
        <button 
            className="
                w-11
                h-11
                flex
                justify-center
                items-center
                bg-lime-500 
                border 
                border-solid 
                border-lime-800 
                rounded
                text-lime-900 
                hover:bg-lime-200
                focus:outline-none 
                transition-all
            " 
            onClick={onHandle}
        >
                {children}
        </button>
    )
}