import { useState } from "react";

const GenCompo = (OrginalCompo:any) => {
  const newCompo = () => {
    const [count, setCount] = useState<number>(0);
    return <OrginalCompo incCount={() => setCount((count) => count + 1)} count={count} />;
  };
  return newCompo;
};

export default GenCompo;
