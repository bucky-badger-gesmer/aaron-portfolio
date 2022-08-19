import { useEffect, useState } from "react";
import { useTypedHobbies } from "~/hooks/useTypedHobbies";

const hobbies = [
  "code",
  "&#127859; cook",
  "&#8986; collect watches",
  "&#127947; exercise",
  "&#128745; travel",
  "&#127936; watch basketball",
  "&#127928; play guitar",
  "&#128253; watch movies",
  "&#129316; try new foods",
];

const foo = [
  {
    dec: "&#128187;",
  },
];

const TypeWriter = () => {
  const hobby = useTypedHobbies(hobbies);
  const bar = String.fromCodePoint(128187);

  return <p className="blinking-cursor">{hobby}</p>;
};

export default TypeWriter;
