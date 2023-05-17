import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjsConfig from './emailjs.config';
import image1 from '../assets/img/ending-image-1.svg';
import Modal from "./Modal";

function Ending(props) {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [sendingStatus, setSendingStatus] = useState(false);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            setShowModal(true);
            setModalMessage('Sending email...');
            setSendingStatus(true);

            await emailjs.send(
                emailjsConfig.serviceID,
                emailjsConfig.templateID,
                {
                    user_email: values.email,
                    message: values.message,
                },
                emailjsConfig.userID
            );

            console.log('E-mail sent successfully');
            setSendingStatus(false);
            setModalMessage('Your message has been sent successfully!');
            resetForm();
        } catch (error) {
            console.error('Error sending e-mail:', error);
            setSendingStatus(false);
            setModalMessage('An error occurred while sending the message. Please try again later.');
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid e-mail address').required('E-mail is required'),
        message: Yup.string().required('Message is required'),
    });

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className={'ending'} id={'contact-link'}>
            <div className={'ending-container'}>
                <div className={'ending-text'}>
                    <p>WANT TO HAVE AN AWESOME PROJECT DONE?</p>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        message: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className={'ending-input'}>
                        <Field type="text" name="email" placeholder={'Enter your e-mail here'} />
                        <ErrorMessage name="email" component="div" className="ending-input-error" />
                        <Field as="textarea" name="message" placeholder="Enter your message here" />
                        <ErrorMessage name="message" component="div" className="ending-input-error" />
                        <button className={'ending-button'} type="submit">
                            Contact
                        </button>
                    </Form>
                </Formik>
            </div>
            <div className={'ending-image-1'}>
                <img src={image1} alt={'ending-image-1'} />
            </div>
            {showModal && <Modal message={modalMessage} closeModal={closeModal} status={sendingStatus}/>}
        </div>
    );
}

export default Ending;
