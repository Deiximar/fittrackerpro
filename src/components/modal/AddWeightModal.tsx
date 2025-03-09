import Field from "../labels/Field";
import CloseButton from "../buttons/CloseButton";
import "./_AddWeightModal.scss";
import { useState } from "react";

interface AddWeightModalProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function AddWeightModal({ onClick }: AddWeightModalProps) {
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

export default AddWeightModal;
