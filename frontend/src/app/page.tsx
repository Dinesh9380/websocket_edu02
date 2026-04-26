"use client";

import { useEffect } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function Home() {

  useEffect(() => {
    fetch("https://websocket-edu02.onrender.com/api/payments")
      .then(res => res.json())
      .then(data => {
        console.log("API DATA:", data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl">
      <Breadcrumbs />
      
      <h1 className="text-4xl font-bold mb-4">
        WebSockets
      </h1>

      <div className="prose prose-lg text-gray-700 mt-6">
        <p className="mb-4">
          WebSockets is an advanced technology...
        </p>
      </div>
    </div>
  );
}