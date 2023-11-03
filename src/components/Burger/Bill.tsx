import React, { FC } from 'react';
import { IBill } from '../../types';

const Bill: FC<IBill> = ({ total }) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <span className="border border-1 rounded-1 px-3 py-1 mt-3">Price: {total}</span>
    </div>
  );
};

export default Bill;