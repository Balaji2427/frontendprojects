import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';

const SendMail = () => {

    const { register, handleSubmit, watch, formState: {errors} } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());
    };

    const dispatch = useDispatch();

  return (
    <div className="sendMail">
        <div className="sendMail_header">
            <h3>New Message</h3>
            <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                name="to"
                placeholder="To" 
                type="email" 
                {...register('to',{required: true})}
            />
            {errors.to && <p className="sendMail_error">To is required</p>}
            <input 
                name="subject"
                placeholder="Subject" 
                type="text"
                {...register('subject',{required: true})} 
            />
            {errors.subject && <p className="sendMail_error">Subject is required</p>}
            <input 
                name="message"
                placeholder="Type your message" 
                type="text" 
                className="sendMail_message"
                {...register('message',{required: true})} 
            />
            {errors.message && <p className="sendMail_error">Message is required</p>}

            <div className="sendMail_options">
                <Button 
                    className="sendMail_send"
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Send
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail
