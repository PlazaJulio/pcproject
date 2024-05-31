export default function Button({onHandle, children}){
    return (
        <button 
            className="
                shadow 
                shadow-stone-300
                bg-stone-50
                border
                rounded-[.25rem]
                border-stone-200 
                hover:border-stone-400
                hover:bg-stone-300
                hover:text-stone-700
                focus:border-stone-500
                focus:outline-none
                py-3
                px-4
                text-stone-600
                transition-all" 
            onClick={onHandle}
        >
            {children}
        </button>
    )
}