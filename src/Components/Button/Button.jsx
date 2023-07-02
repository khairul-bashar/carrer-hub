import React from 'react';

const Button = ({children}) => {
    return (
      <>
        <button className="text-white text-xl font-semibold py-4 px-7 rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 transition-all">
          {children}
        </button>
      </>
    )
};

export default Button;