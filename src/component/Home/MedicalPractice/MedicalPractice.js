import React from 'react';
import './MedicalPractice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faFileAlt,faFeather ,faFileMedical} from '@fortawesome/free-solid-svg-icons'

const MedicalPractice = () => {
    const fileIcon = <FontAwesomeIcon icon={faFileAlt} />
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    const featherIcon=<FontAwesomeIcon icon={faFeather} />
    const medicalIcon=<FontAwesomeIcon icon={faFileMedical} />
    return (
        <div>
            <h3 className="text-center section-title text-danger fw-bold">We maintain all  best <br /> practices</h3>
            <div className="row   custom-container mx-auto">
                <div className=" col-md practice-card">
                <h4>{fileIcon}</h4>
                <h5>Fill up form in medical application</h5>
                <p>Platforms that engage patients before and after surgery produce better results than traditional approaches.</p>
                </div>

                <div className=" col-md practice-card">
                <h4>{searchIcon}</h4>
                <h5>Review family medical history</h5>
                <p>To stop the spread of hard-to-treat infections, hospitals are sending weekly emails to hospital leaders.</p>
                </div>


                <div className=" col-md practice-card">
                <h4>{featherIcon}</h4>
                <h5>Choose Between core programs</h5>
                <p>Providers' use of medical scribes has been shown to reduce wait times for patients and encourage more patient-centered care.</p>
                </div>

                <div className="col-md practice-card">
                <h4>{medicalIcon}</h4>
                <h5>Introduced to qualified doctors</h5>
                <p>Doctor residency-type programs can help meet demand for trained nurses while cutting costs for hospitals..</p>
                </div>
              
            </div>
        </div>
    );
};

export default MedicalPractice;