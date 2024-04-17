import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function JobPage() {
  const { reference } = useParams();
  useEffect(() => {
    console.log(reference);
  });

  return (
    <div>
      <p>jobpage</p>
    </div>
  );
}
