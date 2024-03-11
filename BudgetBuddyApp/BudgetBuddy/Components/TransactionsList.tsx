import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { Category, Transaction } from '../types'
import TransactionListItem from './TransactionListItem'

export default function TransactionsList({
  transactions, categories, deleteTransaction
}: {
  transactions: Transaction[],
  categories: Category[],
  deleteTransaction: (id: number) => Promise<void>
}) {


  return (
    <View style={{ gap: 15 }}>
      {transactions.map((ts) => {
        const categoryForCurrentItem = categories.find((ct) => ct.id === ts.category_id);

        return (
          <TouchableOpacity key={ts.id} activeOpacity={.7} onLongPress={() => deleteTransaction(ts.id)}>
            <TransactionListItem transaction={ts} categoryInfo={categoryForCurrentItem} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
