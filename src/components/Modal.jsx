const Modal = () => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button>X</button>
                <div className="title">
                    <h1>Book A Factory Tour</h1>
                </div>
                <div className="body">
                    <div className="content">
                        <div className="inner">
                            <div className="inner-content">
                                <p>Name of Organization</p>
                            </div>
                            <div className="inner-content">
                                <p>Name of Contact Person</p>
                            </div>
                        </div>
                        <div className="inner">
                            <div className="inner-content">
                                <p>Organization Address</p>
                            </div>
                            <div className="inner-content">
                                <p>Organization’s Resident Town</p>
                            </div>
                        </div>
                        <div className="inner">
                            <div className="inner-content">
                                <p>Contact Person’s Telephone</p>
                            </div>
                            <div className="inner-content">
                                <p>Contact Person’s E-mail</p>
                            </div>
                        </div>
                        <div className="inner">
                            <div className="inner-content">
                                <p>Date of Visit</p>
                            </div>
                            <div className="inner-content">
                                <p>Number of Participants</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner-contentone">
                        <p>Age Range of Participants</p>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    );
}

export default Modal;