import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Category, Transaction } from '../types'
import { useSQLiteContext } from 'expo-sqlite/next';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddTransaction({
  insertTransaction,
}: {
  insertTransaction(transaction: Transaction): Promise<void>
}) {

  const [isAddingTransaction, setIsAddingTransaction] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [typeSelected, setTypeSelected] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("Expense");
  const [categoryId, setCategoryId] = useState<number>(1);
  const db = useSQLiteContext();

  useEffect(() => {
    getExpenseType(currentTab);
  }, [currentTab]);

  async function getExpenseType(currentTab: number) {
    setCategory(currentTab === 0 ? "Expense" : "Income");
    const type = currentTab === 0 ? "Expense" : "Income";

    const result = await db.getAllAsync<Category>(
      `SELECT * FROM Categories WHERE type = ?:`,
      [type]
    );
    setCategories(result);
  }

  async function handleSave() {
    console.log({
      amount: Number(amount),
      description,
      category_id: categoryId,
      date: new Date().getTime() / 1000,
      type: category as "Expense" | "Income",
    });

    await insertTransaction({
      amount: Number(amount),
      description,
      category_id: categoryId,
      date: new Date().getTime() / 1000,
      type: category as "Expense" | "Income",
    });

    setAmount("");
    setDescription("");
    setCategory("Expense");
    setCategoryId(1);
    setCurrentTab(0);
    setIsAddingTransaction(false);

  }

  function AddButton({
    setIsAddingTransaction,
  }: { setIsAddingTransaction: Dispatch<SetStateAction<boolean>> }) {
    return (
      <TouchableOpacity
        onPress={() => setIsAddingTransaction(true)}
        activeOpacity={0.6}
        style={{
          height: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#007BFF20",
          borderRadius: 15,
        }}
      >
        <MaterialIcons name="add-circle-outline" size={24} color="#007BFF" />
        <Text style={{ fontWeight: "700", color: "#007BFF", marginLeft: 5 }}>New Entry</Text>

      </TouchableOpacity>
    );
  }




  return (
    <View>
      <Text>AddTransaction</Text>
    </View>
  )
}
