import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// types
import { ItemType } from 'data/items.type';

// Components
import { Item } from 'components/Inventory/Item';
import { RootState } from 'features/rootReducer';

// Utils
import {
  goDown,
  goUp,
  goLeft,
  goRight,
  getIndexFromMaxtrixPosition,
  getNumberOfRows,
  getMatrixPositionFromIndex,
} from './utils';

interface Props {
  items: ItemType[];
  onInspect: (index: number) => void;
}

export const ItemsGrid: React.FC<Props> = ({ items, onInspect }) => {
  const selectedItem = useSelector((store: RootState) => store.inventory.inspect);

  useEffect(() => {
    const handleKeyPressed = (event: KeyboardEvent) => {
      let newItemSelected = null;
      const matrix = getMatrixPositionFromIndex(selectedItem || 0);
      const rows = getNumberOfRows(items);
      if (event.key === 'ArrowUp') {
        newItemSelected = goUp(matrix);
      } else if (event.key === 'ArrowDown') {
        newItemSelected = newItemSelected = goDown(matrix, rows);
      } else if (event.key === 'ArrowLeft') {
        newItemSelected = goLeft(matrix);
      } else if (event.key === 'ArrowRight') {
        newItemSelected = goRight(matrix);
      }
      if (newItemSelected !== null) {
        const index = getIndexFromMaxtrixPosition(newItemSelected);
        if ( items.length > index ) {
          onInspect(index);
        }        
      }
    };
    window.addEventListener('keyup', handleKeyPressed);
    return () => {
      window.removeEventListener('keyup', handleKeyPressed);
    };
  }, [items, onInspect, selectedItem]);

  const handleOnClick = (name: string) => {
    const index = items.findIndex((item) => item.name === name);
    if (index !== -1) {
      onInspect(index);
    }
  };

  return (
    <div className='grid grid-cols-3 md:grid-cols-5 gap-6'>
      {items.map((item, index) => (
        <Item
          key={item.name}
          name={item.name}
          icon={item.icon}
          value={item.value}
          selected={selectedItem === index}
          onClick={handleOnClick}
        />
      ))}
    </div>
  );
};
