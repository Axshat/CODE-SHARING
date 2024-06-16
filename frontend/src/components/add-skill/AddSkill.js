import React, {useState} from 'react'
import "./AddSkill.css"

function AddSkill({onAddSkill}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imageUrl);
    onAddSkill({ name, description, imageUrl });
    setName('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Skill Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        ></textarea>
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL (optional)</label>
        <input 
          type="text" 
          id="imageUrl" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
        />
      </div>
      <button type="submit">Add Skill</button>
    </form>
  );
}

export default AddSkill