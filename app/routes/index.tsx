import { useState } from "react";
import Nav from '../components/Nav';

import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-['Poppins']">
      <Nav />
      <div>
        <h1 className="text-3xl font-bold underline text-green-400">
          Hi! My name is Aaron!
          <br />
          <button onClick={() => setCount(count + 1)}>Click Me</button>:{" "}
          <>{count}</>
        </h1>
      </div>
    </div>
  );
}
