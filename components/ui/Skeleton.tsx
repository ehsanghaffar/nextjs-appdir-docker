import React from "react";

const SkeletonCard = () => {
  return (
    <>
      {/* <div className=""> */}
      <div className="flex w-64 flex-col rounded-lg shadow-md animate-pulse border">
        <div className="h-48 rounded-t bg-gray-100"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-200">
          <div className="w-full h-6 rounded bg-gray-100"></div>
          <div className="w-full h-6 rounded bg-gray-100"></div>
          <div className="w-3/4 h-10 rounded bg-gray-100"></div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default SkeletonCard;
