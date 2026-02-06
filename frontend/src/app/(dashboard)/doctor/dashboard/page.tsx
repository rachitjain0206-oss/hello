import React, { Suspense } from "react";
import Loader from "@/components/Loader";
import DoctordashboardContent from "@/components/doctor/DoctordashboardContent";

const page = () => {
  return <Suspense fallback={<Loader />}>
    <DoctordashboardContent/>
  </Suspense>;
};

export default page;
