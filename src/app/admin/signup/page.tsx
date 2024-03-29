"use client";

import React from "react";
import Form from "@/app/components/Form";

type Props = {};

const Signup = () => {
  return (
    <div className="wrapper">
      <Form
        endpoint="/api/signup"
        title="Registrera dig på Kebappen"
        redirect="/admin/dashboard"
      />
    </div>
  );
};

export default Signup;
