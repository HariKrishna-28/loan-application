"use client"

import { GET_BALANCE_SHEET } from "@/api/LoanAPI"
import Sheet from "@/components/BalanceSheet/Sheet"
import Form from "@/components/LoanForm/Form"
import { BalanceSheetRequestType, BalanceSheetType } from "@/components/types/Business"
import { useEffect, useState } from "react"

export default function Home() {
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheetType[] | null>(null)
  const [load, setLoad] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [newBusiness, setBusiness] = useState<BalanceSheetRequestType | null>(null)


  const getBalanceSheet = async (data: BalanceSheetRequestType) => {
    setLoad(true)
    try {
      // @ts-ignore  // already handled in the use effect
      const res = await GET_BALANCE_SHEET(data)
      console.log(res.data)
      setBalanceSheet(res.data.balanceSheet)
    } catch (error: any) {
      console.log(error?.message)
    }
    setLoad(false)
  }

  // useEffect(() => {
  //   if (!newBusiness) return
  //   getBalanceSheet()

  // }, [newBusiness])

  return (
    <main>
      {
        showForm &&
        < Form exportData={(data) => {
          setBusiness(data)
          getBalanceSheet(data)
          setShowForm(false)
        }
        } />
      }

      <div className="flex min-h-screen flex-col ">

        {load ?
          <div className="flex text-3xl font-bold flex-col items-center justify-center h-screen">
            Fetching balance sheet please wait
          </div>
          :
          <div>
            {balanceSheet &&
              <>

                <Sheet
                  data={balanceSheet}
                />
              </>
            }

            {balanceSheet &&
              <div className="flex flex-row gap-3 items-center justify-center">
                <button className="btn btn-neutral">
                  submit application
                </button>
              </div>
            }
          </div>
        }

      </div>




    </main>
  )
}
