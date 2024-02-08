import React from 'react'
import "./featured.css"
import {ArrowDownward,ArrowUpward} from "@mui/icons-material"
export default function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
           <span className="featuredtitle">Revenue</span>
           <div className="featuredMoneycontainer">
            <span className="featuredMoney">$2,425</span>
            <span className="featuredMoneyrate">-11.4 <ArrowDownward className="ficon negative"/>
            </span>
           </div>
           <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
           <span className="featuredtitle">Sales</span>
           <div className="featuredMoneycontainer">
            <span className="featuredMoney">$2,425</span>
            <span className="featuredMoneyrate">-1.4 <ArrowDownward className="ficon negative"/>
            </span>
           </div>
           <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
           <span className="featuredtitle">Cost </span>
           <div className="featuredMoneycontainer">
            <span className="featuredMoney">$2,425</span>
            <span className="featuredMoneyrate">+21.4 <ArrowUpward className="ficon"/>
            </span>
           </div>
           <span className="featuredSub">Compared to last month</span>
        </div>
     </div>
  )
}
