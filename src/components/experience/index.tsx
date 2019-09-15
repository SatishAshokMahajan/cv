import * as React from 'react';
import './style.scss';

interface ExperienceProps {
    name?: string,
}

export const Experience: React.SFC<ExperienceProps> = (props) => {
    return (
        <div className="experience">
            <div className="experience__header">Experience</div>
            <div className="experience__underline" />
            <div className="experience__job">
                <div className="experience__job__title">Senior Software Developer</div>
                <div className="experience__job__duration">01 Jun 2017 - Present</div>
                <div className="experience__job__company">CompanyOne</div>
                <div className="experience__job__details">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
            <div className="experience__job">
                <div className="experience__job__title">Software Developer</div>
                <div className="experience__job__duration">01 Jun 2014 - 31 May 2017</div>
                <div className="experience__job__company">CompanyTwo</div>
                <div className="experience__job__details">
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </div>
            </div>
        </div>
    );

}
