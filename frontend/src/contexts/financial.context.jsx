import { Children, createContext, useContext, useEffect, useState } from "react";
import FinancialService from "../services/financial.service";
import { useUser } from "@clerk/clerk-react"

export const FinancialRecordContext = createContext();

export const FinancialRecordsProvider = ({ children }) => {
    const [records, setRecords] = useState([])
    const {user} = useUser();
    const fetchRecords = async () => {
        if(!user) return;
        try {
            const response = await FinancialService.getAllRecordsByUserId(user.id)
            if(response.status === 200) {
            setRecords(response.data);   
            }
        } catch (error) {
            console.log(error);
        }
    };
     useEffect(() => {
       fetchRecords();
     }, [user]);
    
    const addRecord = async (record) => {
        try {
          const response = await FinancialService.addRecord(record);
          if (response.status === 20) {
            setRecords((prev) => [...prev, response.data]);
          }
        } catch (error) {
          console.log(error);
        }
    };

    const updateRecord = async (id, newRecord) => {
        try {
          const response = await FinancialService.updateFinancialRecord(id,newRecord);
          if (response.status === 200) {
            setRecords((prev) =>
              prev.map((record) => {
                if (record.id === id) {
                    return newRecord;
                }else{
                    return record;
                }
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
    }

    const deleteRecord = async (id) => {
        try {
          const response = await FinancialService.deleteRecord(id);
          if (response.status === 200) {
            setRecords((prev) => prev.filter((record) => record.id !== id));
          }
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <FinancialRecordContext.Provider value={{ records, addRecord, updateRecord, deleteRecord }}>
            {children}
        </FinancialRecordContext.Provider>
    );
};

export const useFinancialRecords = () => useContext(FinancialRecordContext);