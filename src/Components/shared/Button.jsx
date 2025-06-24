const Button = (props) => {
  const { name, onClick,classname } = props;  // ✅ Correct destructuring

  return (
    <button
      className={`bg-[#FCC378] text-center  flex justify-center items-center  text-[#ffffff] h-[34px] w-[124px] rounded-[8px] font-Avenir text-sm  font-normal  z-20 cursor-pointer ${classname}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;