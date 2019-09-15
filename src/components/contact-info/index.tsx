import * as React from 'react';
import './style.scss';

interface ContactInfoProps {
    dob?: string;
    address?: string;
    email?: string;
    phone?: string;
}

export const ContactInfo: React.SFC<ContactInfoProps> = (props) => {
    return (
        <div className="contact-info">
            <div className="contact-info__header">Contact Me</div>
            <div className="contact-info__row">
                <span className="contact-info__row__label">Date of Birth:</span>
                <span className="contact-info__row__value">11 January 1993</span>
            </div>
            <div className="contact-info__row">
                <span className="contact-info__row__label">Address:</span>
                <span className="contact-info__row__value">Australia</span>
            </div>
            <div className="contact-info__row">
                <span className="contact-info__row__label">Email:</span>
                <span className="contact-info__row__value">email@email.com</span>
            </div>
            <div className="contact-info__row">
                <span className="contact-info__row__label">Phone:</span>
                <span className="contact-info__row__value">+91 9876543210</span>
            </div>
        </div>
    );

}
