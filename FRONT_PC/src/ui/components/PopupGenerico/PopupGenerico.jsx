import { useEffect, useState } from "react";
import "./style.css";

export default function PopupGenerico({conteudo}) {
    const [isNotHidden, setIsNotHidden] = useState(true);
    const [isLeaveActive, setIsLeaveActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsNotHidden(false);
        }, 4000);
        setTimeout(()=>{
            setIsLeaveActive(true)
        }, 3700)
    }, []);

    const closePopup = () => {
        setTimeout(()=>{
            setIsNotHidden(false);
        }, 300)
        setIsLeaveActive(true)
    };

    return (
        <>
            {isNotHidden && (
                <div
                    id="notification-popup"
                    className={`notification fade-enter-active zi-1 ${isLeaveActive ? "fade-leave-active" : ""
                        }`}
                >
                    <button
                        id="close-notification"
                        className="delete"
                        onClick={closePopup}
                    ></button>
                    <div id="notification-content">{conteudo}</div>
                </div>
            )}
        </>
    );
}
