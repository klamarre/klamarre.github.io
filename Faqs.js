import React from 'react';
import './Faqs.css'

const Faqs = () => {
  return <div className='Containe'>
      <div className='faq'>Frequently Asked Questions</div>
      <div className='Questions'>
          <div className='Higheryields'>
              <div className='QA'>
                  <div className='Ques'>How can you offer higher yields?</div>
                  <div className='Ans'>Sencha partners with regulated cryptocurrency lenders and uses 
                  decentralized finance protocols. With lending, funds are placed on platforms that generate 
                  yield from institutional borrowers........ </div>
              </div>
              <div className='Readmore'>Read more</div>
          </div>
          <div className='Areaccounts'>
              <div className='Ques1'>Are accounts FDIC insured?</div>
              <div className='Ans1'>
              DeFi lending is highly collateralized, often over 125%. This means you have access to your funds 
              at all times, even if a borrower defaults. Sencha is not FDIC insured.
              </div>
          </div>
          <div className='Risks'>
              <div className='Ques2'>What are the risks?</div>
              <div className='Ans2'>
              The DeFi ecosystem relies on the integrity of our partners’ closely governed and audited smart 
              contracts. There are risks that exist within the platform such as technology, partner risk, and 
              lending risk.
              </div>
          </div>
      </div>
      <button className='Viewmore'>
          <div className='view'>View more Questions</div>
      </button>
  </div>;
};

export default Faqs;
