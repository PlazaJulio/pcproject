import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function PopupGenerico({color, setVariavelDeEstado, children}) {
    const [isNotHidden, setIsNotHidden] = useState(true);
    const [isLeaveActive, setIsLeaveActive] = useState(false);

    const colorVariants = {
        red: 'bg-red-400 border-l-red-900',
        lime: 'bg-lime-400 border-l-lime-900'
    }
    const closeButtonColor = {
        red: 'text-red-900',
        lime: 'text-lime-900'
    }

    useEffect(() => {
        setTimeout(() => {
            setIsNotHidden(false);
            setVariavelDeEstado(false);
        }, 4000);
        setTimeout(()=>{
            setIsLeaveActive(true)
        }, 3700)

    }, []);

    const closePopup = () => {
        setTimeout(()=>{
            setIsNotHidden(false);
            setVariavelDeEstado(false);
        }, 300)
        setIsLeaveActive(true);
    };

    return (
        <div className="fixed bottom-2 right-1.5 w-1/4 z-20">
            {isNotHidden && (
                <div
                    className={`${colorVariants[color]} flex justify-between bg-opacity-95 border-solid border-l-4 p-4 animate-fadeIn${isLeaveActive ? " animate-fadeOut" : ""}`}
                >
                    <div>{children}</div>
                    <button
                        className={`${closeButtonColor[color]} h-min mt-1.5`}
                        onClick={closePopup}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} size="1x"/>
                    </button>
                </div>
            )}
        </div>
    );
}
