
function Button(props : any) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
            props.backgroundColor
            ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${props.fullWidth && "w-full"}`}
    >
      {props.label}
      <img
        src={props.iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full bg-white w-5 h-5"
      />
    </button>
  );
}

export default Button;
