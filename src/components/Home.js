import React from "react";

import Navbar from "./Navbar";
import TodoList from "./TodoList.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
};

export default Home;
