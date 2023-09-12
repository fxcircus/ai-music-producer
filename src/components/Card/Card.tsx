import React, { FC } from "react";
import { useState, useEffect } from "react";
import './Card.css'

interface LoaderProps {
    cardTitle?: string;
    modalText?: string
}

 const Card: FC<LoaderProps> = ({cardTitle, modalText}) => {
    const [isOpen, setIsOpen ] = useState(false)

    const openCard = () => {
        setIsOpen(true)
    }

    const closeCard = () => {
        setIsOpen(false)
    }

    // Event listeners for "Escape" key and clicking outside the modal
    useEffect(() => {
        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeCard();
            }
        };

        const handleClickOutsideModal = (event: MouseEvent) => {
            const modal = document.querySelector(".modal-content");
            if (modal && !modal.contains(event.target as Node)) {
                closeCard();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEscapeKeyPress);
            window.addEventListener("mousedown", handleClickOutsideModal);
        }

        return () => {
            window.removeEventListener("keydown", handleEscapeKeyPress);
            window.removeEventListener("mousedown", handleClickOutsideModal);
        };
    }, [isOpen]);

    return (
        <div>
            {isOpen ? (
            <div className="modal-background">
                <div className="modal-content">
                    <span className="close-button" onClick={closeCard}>
                        &times;
                    </span>
                    <h3>{modalText}</h3>
                </div>
            </div>
            ) : (
            <div className="card-closed" onClick={openCard}>
                <h2>{cardTitle}</h2>
            </div>
             )}
        </div>
    )
}

export default Card