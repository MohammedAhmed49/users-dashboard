const FloatingCard = ({ children }) => {
  return (
    <div className="w-1/3 bg-white p-10 h-auto shadow-md rounded-md dark:bg-primary dark:text-white">
      {children}
    </div>
  );
};

export default FloatingCard;
