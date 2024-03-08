import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Category, Transaction } from '../types';
import { useSQLiteContext } from 'expo-sqlite/next';


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
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
