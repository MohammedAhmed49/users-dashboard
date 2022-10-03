export const BUTTON_TYPES_CLASSES = {
  primary:
    "bg-primary text-white border-primary hover:bg-white hover:text-primary dark:bg-slate-500 dark:hover:bg-white",
  white:
    "bg-white text-primary border-primary hover:bg-primary hover:text-white",
  green:
    "bg-green-500 text-white border-green-500 hover:bg-white hover:text-green-500",
  red: "bg-red-500 text-white border-red-500 hover:bg-white hover:text-red-500",
};

const Button = (props) => {
  return (
    <button
      className={`${BUTTON_TYPES_CLASSES[props.type]} ${
        props.classnames ? props.classnames : ""
      } px-4 py-2 rounded transition duration-300 border`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
