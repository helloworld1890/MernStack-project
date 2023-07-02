import React from "react";

import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <div className="place-form">
      <form>
        <Input
          element="input"
          type="text"
          label="Title"
          validators={[]}
          errorText="please enter a valid title"
        />
      </form>
    </div>
  );
};

export default NewPlace;
