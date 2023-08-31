"use client"

import { REGISTER_LOAN } from "@/api/LoanAPI"
import { accountingProviders } from "@/components/Constants/AccountingProviderOptions"
import { BusinessType } from "@/components/types/Business"
import { useState } from "react"

export default function Home() {
  const [name, setName] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [profitSummary, setProfitSummary] = useState<string>("")
  const [isProfit, setIsProfit] = useState(true)
  const [provider, setProvider] = useState<string>("")
  const [userName, setuserName] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const initialiseBusiniess = async () => {
    try {
      const data: BusinessType = {
        name: name,
        yearEst: parseInt(year),
        profitLossSummary: isProfit ? parseInt(profitSummary) : -parseInt(profitSummary),
        userData: {
          name: userName,
          email: email
        }
      }
      const res = await REGISTER_LOAN(data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    initialiseBusiniess()
  }


  return (
    <main>

      {/* form content */}
      <div className="flex flex-col p-3 gap-2 items-center mt-5 justify-center w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <p className="font-lg font-bold">
              User details
            </p>
            <input
              type="text"
              onChange={(e) => setuserName(e.target.value)}
              required
              autoFocus
              placeholder="User name"
              className="input input-bordered w-[350px]" />

            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="input input-bordered w-[350px]" />

            <p className="font-lg font-bold">
              Business details
            </p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
              placeholder="Business name"
              className="input input-bordered w-[350px]" />

            <input
              type="text"
              onChange={(e) => setYear(e.target.value)}
              required
              placeholder="Year established"
              className="input input-bordered w-[350px]" />

            <input
              type="number"
              onChange={(e) => setProfitSummary(e.target.value)}
              required
              placeholder="Profit/loss summary"
              className={isProfit ? 'input input-bordered w-[350px] text-green-600' : 'input input-bordered w-[350px] text-red-600'} />

            <div className="flex flex-row items-center gap-1">
              <label htmlFor="profit-loss">Profit</label>
              <input
                type="checkbox"
                checked={isProfit}
                onChange={() => setIsProfit(!isProfit)}
                id="profit-loss"
                className="checkbox" />
            </div>

            <p className="font-lg font-bold">
              Accounting provider details
            </p>

            <select
              onChange={(e) => setProvider(e.target.value)}
              required
              value={provider}
              className="select select-bordered w-[350px]"
            >
              <option disabled value="">
                Choose accounting provider
              </option>
              {accountingProviders.map((provider: string, index: number) => (
                <option key={index} value={provider}>
                  {provider}
                </option>
              ))}
            </select>

          </div>
          <button type="submit" className="btn btn-neutral mt-3">
            Request balance sheet
          </button>
        </form>
      </div>


    </main>
  )
}
