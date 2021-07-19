import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput Running"); //check that whether component rendered or not
  //-> it's still rendered whether props is changed or not. -> useMemo()
  return <MyParagraph>{props.show ? "This is new paragraph" : ""}</MyParagraph>;
};

export default DemoOutput;
