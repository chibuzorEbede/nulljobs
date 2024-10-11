const Switch = ({ toggleHandler, toggleValue }) => {

    return <div onClick={toggleHandler}>
  
      <div className='w-10 h-4 bg-white p-2 rounded-lg outline outline-black flex items-center justify-center'>
        <div className={`w-3 h-3 bg-yellow-600 rounded-full ${toggleValue} transition-all`}></div>
      </div>
    </div>
  }

export default Switch