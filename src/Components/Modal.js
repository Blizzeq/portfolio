import React from 'react';

function Modal({ showModal, closeModal, message, status }) {
    return (
        <div className={`modal ${showModal ? 'show' : ''}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{message}</h5>
                    </div>
                    {status === false ? (<div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={closeModal}>
                            Close
                        </button>
                    </div>) : null}
                </div>
            </div>
        </div>
    );
}

export default Modal;
