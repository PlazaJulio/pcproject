export default function ButtonExcluir({onHandle, children}){
    return (
        <button 
            className="
                w-11
                h-11
                flex
                justify-center
                items-center
                bg-red-500 
                border 
                border-solid 
                border-red-800 
                rounded 
                text-red-900 
                hover:bg-red-200
                focus:outline-none 
                transition-all
            " 
            onClick={onHandle}
        >
            {children}
        </button>
    )
}