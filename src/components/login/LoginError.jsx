import React from "react";

export const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }

  if (message) {
    return <div className="form-message valid">{message}</div>;
  }

  return <div className="form-message valid">All good</div>;
};
