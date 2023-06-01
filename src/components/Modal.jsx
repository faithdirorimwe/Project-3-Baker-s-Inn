import { useState } from "react";
const Modal = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)

    }
    return (
        <div className="tour-modal">
        <button onClick={toggleModal} className="btn-modal">
            x
        </button>
        <div className="modalContainer">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>Hello world</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquid ipsam earum cumque omnis itaque, molestiae iure eius, aliquam laboriosam quaerat, veniam repudiandae? Debitis vitae blanditiis cumque id, qui ad velit voluptatem inventore quasi culpa sunt quidem, maiores ut doloribus architecto? Ab voluptas laborum voluptatibus illo veritatis voluptates accusamus ratione?</p>
                <button className="close-modal" 
                onClick={toggleModal}>
                    x
                </button>
            </div>
        </div>
        </div>
      );
}
 
export default Modal;