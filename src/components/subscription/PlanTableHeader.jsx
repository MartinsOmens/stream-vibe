import React from "react";

const PlanTableHeader = ({ plans }) => {
  return (
    <thead>
      <tr className="bg-(--color-primary)">
        <th className="text-left px-6 py-5 text-sm font-semibold border-b border-r border-white/10">
          Features
        </th>

        {plans.map((plan, index) => (
          <th
            key={index}
            className="px-6 py-5 text-left text-sm font-semibold border-b border-r last:border-r-0 border-white/10"
          >
            <div className="flex items-center gap-2">
              {plan.name}

              {plan.popular && (
                <span className="bg-[#DC2626] text-white text-[10px] px-2 py-1 rounded-md font-medium">
                  Popular
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default PlanTableHeader;