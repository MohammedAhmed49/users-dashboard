import React from "react";

const ListCard = ({children}) => {
  return (
    <div className="w-1/2">
      <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8">
        {children}
      </div>
    </div>
  );
};

export default ListCard;
