"use client"

import { accountingProviders } from "@/components/Constants/AccountingProviderOptions"

export default function Home() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }


  return (
    <main>

      {/* form content */}
      <div className="flex flex-col p-3 gap-2 items-center mt-5 justify-center w-full">
        <form onSubmit={handleSubmit}>
          <p className="font-lg font-bold">
            Business details
          </p>
          <div className="flex flex-col gap-3 mt-3">
            <input type="text" required placeholder="Business name" className="input input-bordered w-[350px]" />
            <input type="text" required placeholder="Year established" className="input input-bordered w-[350px]" />
            <input type="text" required placeholder="Profit/loss summary" className="input input-bordered w-[350px]" />
            <div className="flex flex-row items-center gap-1">
              <label htmlFor="profit-loss">Profit</label>
              <input type="checkbox" id="profit-loss" className="checkbox" />
            </div>

            <p className="font-lg font-bold">
              Accounting provider details
            </p>
            <select required className="select select-bordered w-[350px]">
              <option disabled selected>Choose accounting provider</option>
              {
                accountingProviders.map((provider: string, index: number) => {
                  return <option key={index} value={provider}>
                    {provider}
                  </option>
                })
              }
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
