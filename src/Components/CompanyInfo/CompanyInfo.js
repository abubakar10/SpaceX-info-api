import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react'
import CompanyIcon from "./../../Assets/Icons/companyicon.png"
import FounderIcon from "./../../Assets/Icons/foundericon.png"
import ValuationIcon from "./../../Assets/Icons/valuationicon.png"
import {ReactComponent as ArrowUp} from "./../../Assets/Icons/Arrowup.svg"
import {ReactComponent as ArrowDown} from "./../../Assets/Icons/ArrowDown.svg"
import "./CompanyInfo.css"
const CompanyInfo = () => {
  const [companyData, setCompanyData] = useState({
   
  });
  const [growth, setGrowth] = useState(0); 
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/info');        // Set company data including nested headquarters data
      setCompanyData({
        name: response.data.name,
        founder: response.data.founder,
        valuation: response.data.valuation,
        city: response.data.headquarters.city,          
        state: response.data.headquarters.state,         
        address: response.data.headquarters.address      
      });
      
      setGrowth(response.data.growth || 16);
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className='container'>
      <h1>Company Info</h1>
      <div className='basic-info'>
        <div className='name'>
          <div className='company-icon'>
            <img src={CompanyIcon} alt="" />
          </div>
          <div className='company-name'>
            <h6>Name</h6>
            <h2>{companyData.name}</h2>
            <div className='growth'>
              <div className='growth-icon'>
                <ArrowUp className="arrow-up"/>
              </div>
              <div className='growth-info'>
                <p><span>{growth}%</span> this month</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='founder'>
          <div className='founder-icon'>
            <img src={FounderIcon} alt="" />
          </div>
          <div className='founder-name'>
            <h6>Founder</h6>
            <h2>{companyData.founder}</h2>
            <div className='growth'>
              <div className='growth-icon'>
                <ArrowDown className="arrow-down"/>
              </div>
              <div className='growth-info'>
                <p><span>-1%</span> this month</p>
              </div>
            </div>
          </div>
        </div>

        <div className='valuation'>
          <div className='valuation-icon'>
            <img src={ValuationIcon} alt="" />
          </div>
          <div className='valuation-name'>
            <h6>Valuation</h6>
            <h2>{companyData.valuation}</h2>
          </div>
        </div>
      </div>

      <div className='address'>
        <h1>Headquarters</h1>
        <div className='details'>
          <div className='address-info'>
            <div className='address-icon'>
              <img src={CompanyIcon} alt="" />
            </div>
            <div className='info'>
              <h6>City</h6>
              <h2>{companyData.city}</h2>
            </div>
          </div>

          <div className='address-info'>
            <div className='address-icon'>
              <img src={CompanyIcon} alt="" />
            </div>
            <div className='info'>
              <h6>State</h6>
              <h2>{companyData.state}</h2>
            </div>
          </div>

          <div className='address-info'>
            <div className='address-icon'>
              <img src={CompanyIcon} alt="" />
            </div>
            <div className='info'>
              <h6>Address</h6>
              <h2>{companyData.address}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfo
