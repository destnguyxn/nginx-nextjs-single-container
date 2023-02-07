import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ScrollDownButton = () => {
  return (
    <div className="text-14-400 flex h-[40px] w-[98px] cursor-pointer flex-col items-center uppercase">
      Scroll Down <MdKeyboardArrowDown size={'16px'} />
    </div>
  );
};

export default ScrollDownButton;
