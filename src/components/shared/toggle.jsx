const Switch = ({ toggleHandler, toggleValue }) => {
  return (
    <div onClick={toggleHandler}>
      <div className="w-10 h-4 bg-white p-2 rounded-lg   flex items-center justify-center">
        <div
          className={`w-3 h-3 bg-rose-800 rounded-full ${toggleValue} transition-all`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
