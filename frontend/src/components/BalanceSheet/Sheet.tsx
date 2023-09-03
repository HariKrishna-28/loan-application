import React from 'react'

interface Props {
    data: any
}
const Sheet: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Year</th>
                            <th>Month</th>
                            <th>ProfitOrLoss</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((element: any, index: number) => {
                                return <tr key={index}>
                                    <th>{element.year}</th>
                                    <td>{element.month}</td>
                                    <td>{element.profitOrLoss}</td>
                                    <td>{element.assetsValue}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sheet