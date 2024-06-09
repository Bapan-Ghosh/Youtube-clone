import React, { useState } from 'react';
import Button from './Button';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

const ButtonList = () => {
  const list = ['all','tom&jerry',"Dell","Biriyani","React","bootstrap","javascript", 'Dominar', 'Programming languages', 'mountain trekking', 'iphone', 'Samsung', 'Darjeeling', 'Sikkim', 'travel'];
  const itemsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [offOn, setOffOn] = useState(false);

  const handleNext = () => { 
    const nextIndex = startIndex + itemsPerPage;
    if (nextIndex < list.length) {
      setStartIndex(nextIndex);
      setOffOn(true);
    }
  };

  const handlePrevious = () => {
    const previousIndex = startIndex - itemsPerPage;
    if (previousIndex >= 0) {
      setStartIndex(previousIndex);
    }
    else{
      setOffOn(false);
    }
  };

  const visibleButtons = list.slice(startIndex, startIndex + itemsPerPage);

  return (
     <div className="flex gap-3 ml-3">
      {offOn &&<button onClick={handlePrevious}><GrFormPrevious /></button>}
      {visibleButtons.map((button, index) => (
        <Button key={startIndex + index} name={button}/>
      ))}
      <button onClick={handleNext}><MdNavigateNext /></button>
    </div>
  );
};

export default ButtonList;
