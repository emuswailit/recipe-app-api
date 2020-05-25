import React, { Fragment } from "react";
import Form from "./Form";
import Recipe from "./Recipe";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Recipe />
    </Fragment>
  );
}
