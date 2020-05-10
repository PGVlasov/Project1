import React, { useState } from "react";
import PropTypes from "prop-types";

function AddNewUser({ onCreate }) {
  const [name, setName] = useState("");

  function submitUser(event) {
    event.preventDefault();

    if (name.trim()) {
      onCreate(name);
      setName("");
    }
  }

  return (
    <form
      style={{ marginBottom: "2rem", marginTop: "2rem" }}
      onSubmit={submitUser}
    >
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="enter your name"
      />
      <button type="submit"> enter your name</button>
    </form>
  );
}

AddNewUser.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddNewUser;
