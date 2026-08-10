import { useState } from "react";

const Six = () => {
  let [profile, setProfile] = useState({ name: "", age: 0, email: "" });

  return (
    <div>
      <h2>profile editor</h2>
      <input
        type="text"
        onChange={(e) => setProfile({...profile,  name: e.target.value })}
      />{" "}
      <br />
      <input
        type="number"
        onChange={(e) => setProfile({...profile,  age: e.target.value })}
      />{" "}
      <br />
      <input
        type="text"
        onChange={(e) => setProfile({...profile,  email: e.target.value })}
      />{" "}
      <br />
      <h2>
        name:{profile.name} age:{profile.age} email:{profile.email}
      </h2>
    </div>
  );
};

export default Six;
