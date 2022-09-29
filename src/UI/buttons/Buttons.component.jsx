export const BUTTON_TYPES_CLASSES = {
  "primary": "bg-primary text-white hover:bg-white hover:text-primary",
  "white": "bg-white text-primary hover:bg-primary hover:text-white",
};

const Button = (props) => {
  return (
    <button
      className={`${BUTTON_TYPES_CLASSES[props.type]} ${
        props.classnames ? props.classnames : ""
      } px-4 py-2 rounded transition duration-300 border border-primary`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
