import React from 'react';
import "./modal.css";

const Modal = ({modalData, onClose}) => {
    if (!modalData) return null;
  return (
    <div className="overlay" onClick={onClose}>
        <div className="modalContainer" onClick={ (e) => e.stopPropagation()}>
            <div className="modalHeader">
                <div className="modalTitle">
                    {modalData.name}
                </div>
                <p onClick={onClose} className="modalCloseBtn">X</p>
            </div>
            <div className="container modalImage">
                <img src={require(`../../assets/recipes/${modalData.picture}.jpg`)} alt={modalData.name} />
            </div>
            <div className="modalIngredients">
                <h3>Ingrediente</h3>
                <p>{modalData.ingredients}</p>
            </div>
            <div className="modalDescription">
                <h3>Descriere</h3>
                <p>{modalData.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Modal;