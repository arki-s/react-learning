import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Category, Transaction } from '../types';
import { useSQLiteContext } from 'expo-sqlite/next';
import TransactionsList from '../Components/TransactionsList';


export default function Home() {
  const [categories, setcategories] = useState<Category[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const db = useSQLiteContext();

  useEffect(() => {
    db.withExclusiveTransactionAsync(async () => {
      await getData();
    })
  }, [db])

  async function getData() {
    const result = await db.getAllAsync<Transaction>(`SELECT * FROM Transactions ORDER BY date DESC;`);
    setTransactions(result);
    // console.log(result);

    const categoryResult = await db.getAllAsync<Category>(`SELECT * FROM Categories;`);
    setcategories(categoryResult);
  }

  async function deleteTransaction(id: number) {
    db.withTransactionAsync(async () => {
      await db.runAsync(`DELETE FROM Transactions WHERE id = ?;`, [id]);
      await getData(); // reload the data from sqlite
    })

  }

  return (
    <ScrollView contentContainerStyle={{ padding: 15, paddingVertical: 170 }}>
      <TransactionsList categories={categories} transactions={transactions} deleteTransaction={deleteTransaction} />
    </ScrollView>
  )
}
