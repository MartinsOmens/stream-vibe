import React from "react";

const PlanTableRow = ({ row, plans }) => {
  return (
    <tr className="hover:bg-white/[0.02] transition-colors">
      <td className="px-6 py-6 text-gray-400 text-sm border-b border-r border-white/10 w-[24%] align-top">
        {row.label}
      </td>

      {plans.map((plan, index) => (
        <td
          key={index}
          className="px-6 py-6 text-sm text-gray-300 leading-relaxed border-b border-r last:border-r-0 border-white/10 align-top"
        >
          {plan[row.key]}
        </td>
      ))}
    </tr>
  );
};

export default PlanTableRow;
