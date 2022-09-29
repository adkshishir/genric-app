import React from "react";
import "./about.css";
import bandImage from "../components/Images/Band Members.png";
const About = () => {
  return (
    <div className="container content-section">
      <h2 class="section-header">ABOUT</h2>
      <img class="about-band-image" src={bandImage} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum
        nulla accusantium perferendis quam explicabo odit quisquam ea natus?
        Saepe ducimus, minima error alias dolorum consectetur officia architecto
        voluptatem iure sunt eveniet nam, recusandae explicabo, itaque vel
        autem. Accusamus suscipit sit labore sed blanditiis a est rem harum
        expedita veritatis numquam voluptatibus dolore voluptatum sunt
        repellendus explicabo, excepturi beatae perferendis. Numquam dicta quis
        ipsum explicabo suscipit alias placeat, ea, vero minus ducimus
        voluptatibus iste repellendus deleniti? Eos, quas! Voluptatem tempora
        explicabo, corrupti dolor hic iure quo, ipsum voluptates quaerat omnis
        accusamus et vel, necessitatibus doloribus optio. Odio nobis ad
        molestias.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio qui
        consequuntur aut. Nobis debitis ipsum soluta sit itaque officiis impedit
        maiores suscipit magni id harum consequuntur quas delectus culpa, saepe
        nostrum, autem ullam! Assumenda molestiae reprehenderit sunt ducimus id
        saepe porro vitae asperiores eum accusantium? Illum aliquid excepturi
        magni quos.
      </p>
    </div>
  );
};

export default About;
