import { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: "0", hobbies: [] });

  return (
    <form>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="border border-purple-800 m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        className="border border-purple-800 m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        onChange={(e) => setUser({ ...user, hobbies: [...user.hobbies, e.target.value ]})}
        className="border border-purple-800 m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <input
        className="btn bg-purple-900 text-white"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
export default UserInfoWithUseState;
