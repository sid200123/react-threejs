import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1
        style={{
          color: "#536f93",
        }}
      >
        Siddharth Chauhan
      </h1>
      <p
        style={{
          color: "#836450",
        }}
      >
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
