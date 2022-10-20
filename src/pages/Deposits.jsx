import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import putMoney from "../images/putmoney.jpg"
import depositMoney from "../images/moneydeposit.jpg"

const Deposits = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Deposits Accounts
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto">
        <div className="px-8 mt-12 text-justify">
        <p>
            This account gives you access to unlimited withdrawals, withdrawals
            can be made at any time without prior notice. No interest is offered
            for the deposits account. <br/><br/>The sacco charges a fee of Kshs.50/= for
            all withdrawals partaining to this account.
          </p>
          <button className="btn px-5 w-full mt-4 lg:mt-12 py-3 rounded-md border block bg-gray-900 text-yellow-400 border-gray-400">
            Become a Member
          </button>
        </div>
        <div className="mt-12 ">
          <Carousel>
            <div>
              <img
                alt="saving money"
                src={depositMoney}
                
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img
                alt="saving money"
                src={putMoney}
              />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Deposits