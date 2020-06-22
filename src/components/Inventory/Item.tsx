import React from 'react';
import cx from 'classnames'

import { TrianglesBox } from './Triangles'

interface Props {
  name: string;
  icon: string;
  value: string;
  selected?: boolean
  onClick: (name: string) => void
}

export const Item: React.FC<Props> = ({ name, icon, value, selected, onClick }) => {
  const handleOnClick = () => {
    onClick(name)
  }

  const classes = cx('relative w-20 h-20 bg-black border border-zelda-darkGray cursor-pointer', {
    'shadow-yellow border-zelda-softYellow border-2': selected,
  });
                    
  return (
    <div className={classes} onClick={handleOnClick}>
      <img alt={name} src={icon} />
      <div className='z-0 bg-black -mx-1 -my-1 text-sm text-white absolute bottom-0 right-0 border border-zelda-darkGray px-2'>
        {value}
      </div>
      {selected && (<TrianglesBox />)}
    </div>
  );
};
