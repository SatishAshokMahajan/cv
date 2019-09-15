import * as React from 'react';
import './style.scss';

interface ProfileHeaderProps {
    name?: string,
}

export const ProfileHeader: React.SFC<ProfileHeaderProps> = (props) => {
    return (
        <div className="profile-header">
            <div className="profile-header__title">Satish Mahajan</div>
            <div className="profile-header__role">Web developer</div>
        </div>
    );

}
