"use client"

import { GET_BALANCE_SHEET } from "@/api/LoanAPI"
import Sheet from "@/components/BalanceSheet/Sheet"
import Form from "@/components/LoanForm/Form"
import { BalanceSheetRequestType } from "@/components/types/Business"
import { useEffect, useState } from "react"

export default function Home() {
  const [balanceSheet, setBalanceSheet] = useState()
  const [load, setLoad] = useState(false)
  const [newBusiness, setBusiness] = useState<BalanceSheetRequestType | null>({ name: "newUser", businessId: "64f41d3f5f7daeacf9be7d4c", email: "user123@gmail.com" })


  const getBalanceSheet = async () => {
    setLoad(true)
    try {
      // @ts-ignore  // already handled in the use effect
      const res = await GET_BALANCE_SHEET(newBusiness)
      console.log(res.data)
      setBalanceSheet(res.data)
    } catch (error: any) {
      console.log(error?.message)
    }
    setLoad(false)
  }

  useEffect(() => {
    if (!newBusiness) return
    getBalanceSheet()

  }, [newBusiness])

  return (
    <main>
      <Form exportData={(data) => setBusiness(data)} />

      {!load ?
        <div>hi</div>
        :
        <div>
          <Sheet
            data={balanceSheet}
          />
        </div>

      }
    </main>
  )
}
