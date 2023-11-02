import React, { FC } from 'react';
import { IBill } from '../../types';


const Bill: FC<IBill> = ({total}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <span>{total}</span>
    </div>

  );
};

export default Bill;