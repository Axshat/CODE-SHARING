import React, { useEffect, useState } from "react";
import HomePage from "./components/homepage/HomePage";
import "./App.css";
import SkillRow from "./components/skill-row/SkillRow";
import AddSkill from "./components/add-skill/AddSkill";
import axios from "axios";

function App() {
  const [skills, setskills] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3200/skill")
      .then((response) => setskills(response.data))
      .catch((error) => console.error("Error fetching skill:", error));
  }, []);

  const onAddSkill = (skill) => {
    setskills([...skills, skill]);
    setShowForm(false);
    axios.post('http://localhost:3200/skill', skill)
      .then(response => {
        setskills([...skill, response.data]);
        setShowForm(false); // Hide form after saving
      })
      .catch(error => console.error('Error adding skill:', error));
  };

  const deleteSkill = (index,id) => {
    if(id){
      const updatedCertificates = skills.filter((skill)=>(skill._id != id));
      setskills(updatedCertificates);
      axios.delete(`http://localhost:3200/skill?id=${id}`)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.error('Error deleting skill:', error));
    } else {
      const updatedCertificates = [...skills];
    updatedCertificates.splice(index, 1);
    setskills(updatedCertificates);
    }
   
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="name">Akshant</div>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </header>
      <HomePage></HomePage>
      <section id="skills" className="skills">
        <h2 className="heading">Skills</h2>
        {skills.map((skill, index) => (
          <SkillRow
            key={index}
            name={skill.name}
            description={skill.description}
            imageUrl={skill.imageUrl}
            onDelete={() => deleteSkill(index, skill._id)}
          />
        ))}
        {!showForm && (
          <button onClick={() => setShowForm(true)} className="add-button">
            Add Skill
          </button>
        )}
        {showForm && <AddSkill onAddSkill={onAddSkill} />}
      </section>
      <section id="contact" className="contact">
        <h2>Contact details</h2>
        <ul>
          <img src="./icons/facebook.svg" alt="facebook" />
          <img src="./icons/instagram.svg" alt="instagram" />
          <img src="./icons/twitter.svg" alt="twitter" />
          <img src="./icons/linkedin.svg" alt="linkedin" />
        </ul>
      </section>
    </div>
  );
}

export default App;
