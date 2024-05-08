import React from 'react'
import './style.css'
import img from  '../../../../public/assets/decimal_logo.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div style={{paddingLeft: '20px' , paddingRight:'10px' , paddingTop:'20px'}}>
        <div>
        <img src={img} style={{width:'100px'}} />
        </div>
         <p style={{color:'white', fontSize:'10px'}}>Decimal© 2023-2024. All Rights Reserved.</p>
         <p  style={{color:'white', fontSize:'12px'}}>THE APPLICATION IS PENDING AUDIT. DYOR AND USE AT YOUR OWN RISK.</p>
         <p  style={{color:'white' , fontSize:'15px'}}>These materials are for general information purposes only and are not investment advice or a recommendation or solicitation to buy, sell, stake or hold any cryptoasset or to engage in any specific trading strategy. Decimal does not and will not work to increase or decrease the price of any particular cryptoasset it makes available. Some crypto products and markets are unregulated, and you may not be protected by government compensation and/or regulatory protection schemes. The unpredictable nature of the crypto-asset markets can lead to loss of funds. Tax may be payable on any return and/or on any increase in the value of your cryptoassets and you should seek independent advice on your taxation position. Geographic restrictions may apply.</p>
      </div>
      <div style={{ zIndex:-1, height: "30px", backgroundColor:'#25304c'}}/>
    </div>
  )
}
