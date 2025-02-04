import Field from "../labels/Field";
import CloseButton from "../buttons/ CloseButton";
import "./_AddWeightModal.scss";
import { useState } from "react";

function addWeightModal({ onClick }) {
  return (
    <div className="weight-container">
      <CloseButton onClick={onClick}></CloseButton>
      <div className="weight-form">
        <h4>Add Weight</h4>
        <Field type="text" placeholder={"70 kg"} name="weight"></Field>
        <button className="log-weight-button">Save</button>
      </div>
    </div>
  );
}

export default addWeightModal;
