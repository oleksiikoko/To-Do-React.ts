import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        accusantium quidem consectetur assumenda, soluta cupiditate repellendus,
        praesentium distinctio ullam perferendis nesciunt quam. Nostrum, aliquam
        ipsum deserunt architecto velit quo omnis?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Todo
      </button>
    </>
  );
};
