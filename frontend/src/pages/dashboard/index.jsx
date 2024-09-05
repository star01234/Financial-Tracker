import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { useFinancialRecords } from '../../contexts/financial.context';
import addRecordFrom from './addRecordFrom';
import FinancialRecordTable from './FinancialRecordTable';

const index = () => {
  const { user } = useUser();
  return (
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      <div className=''>
        Welcome{user?.firstName}! Here are your Finance:
      </div>
      <addRecordFrom />
      <div>Tabla Mo</div>
      <FinancialRecordTable />
    </div>
  );
}

export default index