import * as React from 'react';
import './style.scss';

interface InterestsProps {
    name?: string,
}

export const Interests: React.SFC<InterestsProps> = (props) => {
    return (
        <div className="interests">
            <div className="interests__header">Hobbies & interests</div>
            <div className="interests__underline" />
            <div className="interests__list">
                <div className="interests__list__row">
                    <div className="fa fa-film interests__list__row__icon"></div>
                    <div className="fa fa-globe interests__list__row__icon"></div>
                    <div className="fa fa-music interests__list__row__icon"></div>
                    <div className="fa fa-gamepad interests__list__row__icon"></div>
                </div>
                <div className="interests__list__row">
                    <div className="fa fa-coffee interests__list__row__icon"></div>
                    <div className="fa fa fa-motorcycle interests__list__row__icon"></div>
                    <div className="fa fa-code interests__list__row__icon"></div>
                    <div className="fa fa-book interests__list__row__icon"></div>
                </div>
            </div>
        </div>
    );

}
