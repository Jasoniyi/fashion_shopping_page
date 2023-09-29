import React from "react";

const CardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-4 animate-pulse">
      <div className="h-[24rem] bg-slate-200"></div>

      <div className="flex space-x-4">
        <div className="flex-grow">
          <div className="flex flex-col space-y-2">
            <span className="bg-slate-200 w-24 h-4"></span>
            <span className="bg-slate-200 w-10 h-4"></span>
          </div>
        </div>
        <div className="bg-slate-200 rounded-full w-12 h-12"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
