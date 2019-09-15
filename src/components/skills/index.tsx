import * as React from 'react';
import './style.scss';

interface SkillsProps {
    name?: string,
}

export const Skills: React.SFC<SkillsProps> = (props) => {
    return (
        <div className="skills">
            <div className="skills__header">Skills</div>
            <div className="skills__underline" />
            <div className="skills__list">
                <div className="skills__list__column">
                    <div className="skills__list__column__header">Main skills</div>
                    <div className="skills__list__column__name">React and React Native</div>
                    <div className="skills__list__column__name">Node.js and basic Java</div>
                    <div className="skills__list__column__name">Javascript and Typescript</div>
                    <div className="skills__list__column__name">HTML and CSS3</div>
                </div>
                <div className="skills__list__column">
                    <div className="skills__list__column__header">Additional skills</div>
                    <div className="skills__list__column__name">SQL and PL/SQL</div>
                    <div className="skills__list__column__name">Shell Script</div>
                    <div className="skills__list__column__name">Angular 1.6</div>
                </div>
            </div>
        </div>
    );

}
