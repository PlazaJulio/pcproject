export default function Input({dataType, name, placeholder, type, valor, onChange, required = false}){
    return (
        <input 
            className="
                shadow-inner 
                shadow-stone-100
                text-stone-600
                bg-stone-50
                border
                rounded-s
                border-stone-300 
                hover:border-stone-400 
                focus:border-stone-500
                focus:outline-none
                py-3
                px-4
            "
            type={type} 
            placeholder={placeholder}
            name={name} 
            value={valor} 
            onChange={onChange}
            required={required}
            data-type={dataType}
        />
    )
}