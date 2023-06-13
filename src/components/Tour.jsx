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

                            <Modal className="modal-custom modal" show={showModal} onHide={handleModalClose}>
                                <div className="content ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="heading">Book A Factory Tour</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="factory-content">
                                            <div className="contact-form">
                                                <form>
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Name of Organisation"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Name of Contact Person"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Organization Address"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Organization’s Resident Town"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Contact Person’s Telephone"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Contact Person’s E-mail"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Date of Visit"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Number of Participants"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="range"
                                                        required
                                                        value="Age Range of Participants"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                </form>
                                            </div>

                                            <div className="rules">
                                                <div className="terms">
                                                    <p>Plant Visit <span>Terms & Conditions</span></p>
                                                    <p>Plant Visit <span>Safety Regulations</span></p>
                                                </div>
                                                <div className="conditions">

                                                    <form>
                                                        <div className="checkbox">
                                                            <input type="checkbox"
                                                                className=""
                                                                onChange={(e) => { item.email = e.target.value }}
                                                            />
                                                            <p>Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.</p>
                                                        </div>
                                                        <div className="checkbox">
                                                            <input type="checkbox"
                                                                className=""
                                                                onChange={(e) => { item.email = e.target.value }}
                                                            />
                                                            <p>Have Read The Safety Regulations</p>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>

                                    <Button className="button" variant="secondary" onClick={handleModalClose}>
                                        SUBMIT
                                    </Button>
                                </div>
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