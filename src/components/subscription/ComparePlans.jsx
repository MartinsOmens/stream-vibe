// pages/ComparePlans.jsx

import React from "react";
import PlanTableHeader from "../subscription/PlanTableHeader";
import PlanTableRow from "../subscription/PlanTableRow";
import { plans, rows } from "../../data/plansData";

const ComparePlans = () => {
  return (
    <section className="min-h-screen text-white px-6 sm:py-5 md:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Compare our plans and find the right one for you
          </h2>

          <p className="text-gray-400 max-w-3xl text-sm leading-relaxed">
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for you.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 ">
          <table className="w-full border-collapse">
            <PlanTableHeader plans={plans} />
            <tbody>
              {rows.map((row, index) => (
                <PlanTableRow key={index} row={row} plans={plans} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
