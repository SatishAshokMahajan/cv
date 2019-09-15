import React from 'react';
import './App.scss';
import {
  ContactInfo,
  Education,
  Experience,
  Interests,
  ProfileHeader,
  ProfileDetails,
  ProfilePhoto,
  Skills
} from './components';
const App: React.FC = () => {
  return (
    <main className="cv">
      <section className="cv__about">
        <ProfilePhoto />
        <ProfileHeader />
        <ProfileDetails />
        <ContactInfo />
      </section>
      <section className="cv__work">
        <Experience />
        <Education />
        <Skills />
        <Interests />
      </section>
    </main>
  );
}

export default App;
