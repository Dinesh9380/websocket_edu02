"use client";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    fetch("https://websocket-edu02.onrender.com/api/payments")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend Connected ✅</h1>
    </div>
  );
}