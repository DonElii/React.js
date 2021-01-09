//Array of objects
import React, { useState } from "react";
import Tweet from "./Tweet";

function Tweet_objects() {
  const [users, setUsers] = useState([
    { name: "Apple cinnamon pie", message: "recipe of Apple cinnamon pie" },
    { name: "Chocholate mousse", message: "recipe of Chocolate mousse" },
    { name: "Almond cake", message: "recipe of Almond cake" },
    { name: "Cherry strudel", message: "recipe of Cherry strudel" },
  ]);

  return (
    <div className="Tweet_objects">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default Tweet_objects;
