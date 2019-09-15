import * as React from 'react';
import './style.scss';

interface EducationProps {
    name?: string,
}

export const Education: React.SFC<EducationProps> = (props) => {
    return (
        <div className="education">
            <div className="education__header">Education</div>
            <div className="education__underline" />
            <div className="education__college">
                <div className="education__college__name">College of Engineering, City</div>
                <div className="education__college__duration">01 Jun 2011 - 01 Jun 2014</div>
                <div className="education__college__branch">Computer Engineering</div>
                <div className="education__college__address">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
            <div className="education__college">
                <div className="education__college__name">College of Science and technology</div>
                <div className="education__college__duration">01 Jun 2009 - 31 May 2011</div>
                <div className="education__college__branch">Science</div>
                <div className="education__college__address">
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
