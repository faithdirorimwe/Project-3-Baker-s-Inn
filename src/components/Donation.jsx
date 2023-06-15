// import useFetch from "./useFetch";
import data from "../../database/db";
// import Button from "./Button";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Donations = () => {
    // const { data: Donation, error, isPending } = useFetch('http://localhost:7001/Donation'); 
   const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    setShowModal2(false);
  };

  const handleModalOpen = () => setShowModal(true);

    return (
        <>
            {data.Donation && data.Donation.map((item) => {
                return (
                    <div key={item.id} className="donation tour-don">
                        <div className="img-container">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="content">
                            <h2>{item.title}</h2>
                            <p className="ptext">{item.content}</p>
                            <Button onClick={handleModalOpen}>REQUEST DONATIONS</Button>

                            <Modal className=" modal-don" show={showModal} onHide={handleModalClose}>
                                <div className="content ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="heading">Request Product Donations</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>You can apply for product donations by completing this form, we will contact you should your application <br /> be successful. Please bear in mind that we will need at least 3 weeks’ notice to the date of your event</p>
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
                                                        value="Date of Event"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Intended Use of Donation"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Number of Attendants"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="What Product Are Specifically Looking For?"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                </form>
                                            </div>

                                        </div>
                                    </Modal.Body>

                                    <Button className="button" variant="secondary" onClick={handleModalClose}>
                                        Proceed to next step
                                    </Button>
                                </div>
                            </Modal>

                                             <Modal className=" modal-don" show={showModal} onHide={handleModalClose}>
                                <div className="content ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="heading">Request Product Donations</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>You can apply for product donations by completing this form, we will contact you should your application <br /> be successful. Please bear in mind that we will need at least 3 weeks’ notice to the date of your event</p>
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
                                                        value="Date of Event"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Intended Use of Donation"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="Number of Attendants"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                    <input type="text"
                                                        className="email"
                                                        required
                                                        value="What Product Are Specifically Looking For?"
                                                        onChange={(e) => { item.email = e.target.value }}
                                                    />
                                                </form>
                                            </div>

                                        </div>
                                    </Modal.Body>

                                    <Button className="button" variant="secondary" onClick={handleModalClose}>
                                        Proceed to next step
                                    </Button>
                                </div>
                            </Modal>
                        </div>
                    </div>
                )
            })}

        </>
    );
}

export default Donations;