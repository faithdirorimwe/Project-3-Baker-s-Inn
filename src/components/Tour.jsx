// import useFetch from "./useFetch";
import data from "../../database/db";
// import Button from "./Button";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const Tour = () => {
    // const { data: Tour, error, isPending } = useFetch('http://localhost:7001/Tour'); 

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalOpen = () => setShowModal(true);

    return (
        <>
            {data.Tour && data.Tour.map((item) => {
                return (
                    <div key={item.id} className="tour-don">
                        <div className="content">
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>

                            <Button onClick={handleModalOpen}>BOOK FACTORY TOUR</Button>

                            <Modal className="modal-custom" show={showModal} onHide={handleModalClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Book A Factory Tour</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleModalClose}>
                                        SUBMIT
                                    </Button>
                                </Modal.Footer>
                            </Modal>



                        </div>
                        <div className="img-container">
                            <img src={item.image} alt="" />
                        </div>

                    </div>
                )
            })}
        </>
    );
}

export default Tour;