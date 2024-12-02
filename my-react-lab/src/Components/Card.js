import React from 'react';
import '../Styles/Card.css';

function Card(props) {
const { name, age, occupation, location, image } = props;
return (
    <div>
        <div className="id-card">
            {/* Header */}
            <div className="card-header">
                <h1>University ID Card</h1>
            </div>

            {/* Body */}
            <div className="card-body">
                {/* Profile Image */}
                <div className="image-container">
                    <img src={image} alt="Profile" />
                </div>

                {/* Info Section */}
                <div className="info">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Occupation:</strong> {occupation}</p>
                    <p><strong>Location:</strong> {location}</p>
                </div>
            </div>
        </div>
    </div>
);
}
export default Card;