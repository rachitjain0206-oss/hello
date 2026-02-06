import React, { Suspense } from "react";
import Loader from "@/components/Loader";
import PatientDashboardContent from "@/components/patient/PatientDashboardContent";

const page = () => {
  return <Suspense fallback={<Loader />}>
    <PatientDashboardContent/>
  </Suspense>;
};

export default page;