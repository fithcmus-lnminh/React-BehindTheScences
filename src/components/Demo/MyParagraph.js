import React from "react";

const MyParagraph = (props) => {
  console.log("MyPara Running"); //check that whether component rendered or not
  return <p>{props.children}</p>;
};

export default MyParagraph;
