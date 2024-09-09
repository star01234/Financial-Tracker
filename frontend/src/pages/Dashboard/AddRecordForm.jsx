import React, { useState } from 'react';
import { useFinancialRecords } from '../../contexts/financial.context';

const AddRecordForm = () => {
  const { addRecord } = useFinancialRecords();
  const [formData, setFormData] = useState({
    userId: '',
    description: '',
    date: '',
    amount: '',
    category: '',
    paymentMethod: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRecord = async () => {
    try {
      await addRecord(formData);
      setFormData({
        userId: '',
        description: '',
        date: '',
        amount: '',
        category: '',
        paymentMethod: ''
      });
      setError(null); 
    } catch (error) {
      console.error('Error adding record:', error);
      setError('An error occurred while adding the record. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-200 via-blue-200 to-cyan-200 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Financial Record</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <div className="mb-4">
        <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="mt-1 block w-full p-3 border border-cyan-400 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Enter User ID"
          required
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full p-3 border border-teal-400 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Enter Description"
          required
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 block w-full p-3 border border-blue-400 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="mt-1 block w-full p-3 border border-green-400 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter Amount"
          required
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full p-3 border border-indigo-400 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="">Select Category</option>
          <option value="อาหาร">อาหาร</option>
          <option value="ขนมทานเล่น">ขนมทานเล่น</option>
          <option value="น้ำดื่ม">น้ำดื่ม</option>
          <option value="ของใช้">ของใช้</option>
          <option value="เสื้อผ้า">เสื้อผ้า</option>
          <option value="เครื่องใช้ไฟฟ้า">เครื่องใช้ไฟฟ้า</option>
          <option value="สุขภาพ">สุขภาพ</option>
          <option value="อื่นๆ">อื่นๆ</option>
        </select>
      </div>
  
      <div className="mb-4">
        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="mt-1 block w-full p-3 border border-blue-400 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Payment Method</option>
          <option value="cash">Cash</option>
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="onlineBanking">Online Banking</option>
        </select>
      </div>
  
      <button
        type="button"
        onClick={handleAddRecord}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-md hover:bg-gradient-to-l hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Record
      </button>
    </div>
  );
};

export default AddRecordForm;
