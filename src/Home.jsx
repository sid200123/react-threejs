import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div
      style={{
        color: "black",
      }}
      className="home"
    >
      <h1>Siddharth Chauhan</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        excepturi veniam. Ut dignissimos non autem mollitia! Veniam, tempora
        commodi? Explicabo fuga quaerat optio, illum itaque quo quod assumenda
        non id.
      </p>
      <div className="btn-group">
        <button>Show More</button>
      </div>
    </div>
  );
};

export default Home;
