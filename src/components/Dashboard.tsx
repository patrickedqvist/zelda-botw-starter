import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import { ItemsGrid } from 'components/Inventory/ItemsGrid';

// Features
import { RootState } from 'features/rootReducer';
import { inspectItem, changeItemsCategory } from 'features/items/actions';
import { ItemsCategory } from 'features/items/types';

export const Dashboard: React.FC = () => {

  const dispatch = useDispatch()

  const items = useSelector((store: RootState) => {
    const selectedItems = store.inventory.items[store.inventory.category];
    return selectedItems;
  });

  const handleOnInspect = (index: number) => {
    dispatch(inspectItem(index));
  }

  const handleOnChangeCategory = (category: ItemsCategory) => {
    dispatch(changeItemsCategory(category))
  }

  return (
    <div className='container mx-auto flex flex-col xl:flex-row items-center h-full'>
      <div className='w-full xl:w-1/2'>
        <div>
          <button onClick={() => handleOnChangeCategory('weapons')}>Weapons</button>
          <button onClick={() => handleOnChangeCategory('armors')}>Armor</button>
          <button onClick={() => handleOnChangeCategory('shields')}>Shields</button>
        </div>
        <ItemsGrid items={items} onInspect={handleOnInspect} />
      </div>
      <div className='w-full xl:w-1/2'></div>
    </div>
  );
};
