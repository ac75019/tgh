import React from "react";

// components

import CardLineChart from "src/components/Cards/CardLineChart.js";
import CardBarChart from "src/components/Cards/CardBarChart.js";
import CardPageVisits from "src/components/Cards/CardPageVisits.js";
import CardSocialTraffic from "src/components/Cards/CardSocialTraffic.js";


// layout for page

import Admin from "src/layouts/Admin.js";



export default function Dashboard({props}) {

 
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart props={props}/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
