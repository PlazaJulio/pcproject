import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalGenerico({ setModalEnable, titulo, conteudo, onClickAccept }) {

  const handleKeyDown = event => {
    if (event.key === "Escape" || event.keyCode === 27) {
      setModalEnable(false);
    }
  }

  return (
    <div 
      className="
        bg-stone-800 
        bg-opacity-60 
        w-screen 
        h-screen 
        flex 
        items-center 
        justify-center 
        fixed 
        top-0 
        left-0 
        z-10
      " 
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div 
        className="
          bg-stone-100 
          max-w-5xl 
          w-full 
          max-h-[80%]
          flex
          flex-col
          border-2 
          border-solid 
          border-stone-600 
          rounded-md
        "
      >
        <header className="flex justify-between items-center p-5 border-b-2 border-solid border-b-stone-600">
          <p className="text-2xl text-stone-900 font-bold">{titulo}</p>
          <button className="text-stone-400 hover:text-stone-800 transition-all" onClick={() => setModalEnable(false)}>
            <FontAwesomeIcon icon={faCircleXmark} size="xl" />
          </button>
        </header>
        <section className="p-5 h-full overflow-y-scroll">
          {conteudo}
        </section>
        <footer className="bg-stone-100 flex gap-4 p-5 border-t-2 border-solid border-t-stone-600 rounded-b-md sticky bottom-0">
          {
            onClickAccept &&
            <>
              <button 
                className="
                  shadow
                  shadow-stone-200
                  bg-lime-400
                  text-sm
                  text-lime-800
                  p-2
                  border
                  rounded
                  border-lime-800
                  focus:outline-none
                  hover:bg-lime-200
                  transition-all
                " 
                onClick={onClickAccept}
              >
                Aceitar
              </button>
              <button 
                className="
                  shadow
                  shadow-stone-200
                  bg-red-400
                  text-sm
                  text-red-900
                  p-2
                  border
                  rounded
                  border-red-800
                  focus:outline-none
                  hover:bg-red-200
                  transition-all
                " 
                onClick={() => setModalEnable(false)}
              >
                Cancelar
              </button>
            </>
          }
        </footer>
      </div>
    </div>
  )
}