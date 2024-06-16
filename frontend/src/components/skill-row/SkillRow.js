import React from 'react'
import './SkillRow.css'

function SkillRow({ name, description, imageUrl,  onDelete}) {
    return (
        <div className="certificate">
          <div className="certificate-content">
            <h2 className="certificate-name">{name}</h2>
            <p className="certificate-description">{description}</p>
          </div>
          {imageUrl && <img src={imageUrl} alt={`${name} certificate`} className="certificate-image" />}
          <button onClick={onDelete} className="delete-button">Delete</button>
        </div>
      );
}

export default SkillRow