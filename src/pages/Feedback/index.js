import React, { useState } from 'react';
import api from '../../services/api';
import Rate from '../../components/Rate';
import ToImprove from '../../components/ToImprove';
import { useNavigate } from 'react-router-dom';

const ratesInit = [{
  value: 1,
  selected: false,
},{
  value: 2,
  selected: false,
},{
  value: 3,
  selected: false,
},{
  value: 4,
  selected: false,
},{
  value: 5,
  selected: false,
},]

const categories = [{
  text: 'Overall service',
  selected: false,
},
{
  text: 'Customer suppport',
  selected: false,
},{
  text: 'Speed and Efficiency',
  selected: false,
},{
  text:'Repair Quality',
  selected: false,
},{
  text:'Pickup and Delivery Service',
  selected: false,
},{
  text:'Transperancy',
  selected: false,
}]

function List() {
  const navigate = useNavigate()
  const [rates, setRates] = useState(ratesInit)
  const [areasToImprove, setAreasToImprove] = useState(categories)
  const [data, setData] = useState({
    rate: null,
    areasToImprove: [],
    feedback:''
  })

  function onChangeAreaToImprove(areaToImprove) {
    const valuesToImprove = []
    const newState = areasToImprove.map((area) => {
      if(area.selected) {
        valuesToImprove.push(area.text)
      }
  
      if(area.text === areaToImprove.text) {
        valuesToImprove.push(area.text)
        return {...area, selected: !areaToImprove.selected}
      }
      return area
    })
    setData({ ...data, areasToImprove: valuesToImprove})
    setAreasToImprove(newState)
  }

  function onChangeRates(ratesValue) {
    const newState = ratesInit.map((rate) => {
      if(rate.value ===  ratesValue.value) {
        return {...rate, selected: !ratesValue.selected}
      }
      if(rate.value < ratesValue.value) {
        return {...rate, selected: !rate.selected}
      }
      return rate
    })
    setData({ ...data, rate: ratesValue.value})
    setRates(newState)
  }

  function isValid() {
    const { rate, areasToImprove } = data
    return rate !== null && areasToImprove.length > 0
  }

  async function onSubmit() {
    try {
      await api.post('/feedback', data)
      navigate('/new')
    } catch (error) {
      alert('Something wrong')
      console.error(error)
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <strong >Feedback</strong>
        <div className="pb-3 mt-5  text-5xl">Rate your Experience</div>
        <div className="pb-3 text-gray-400">Are you satisfied with the service?</div>
        <Rate rates={rates} onChangeRates={onChangeRates}/>
        <hr/>
        <strong className="py-3">Tell us what can be Improved?</strong>
        <ToImprove areasToImprove={areasToImprove} onChangeAreaToImprove={onChangeAreaToImprove}/>
        <div className="flex">
          <textarea 
            className="w-full border" 
            placeholder="Tell us on how can we improve..."
            rows="10"
            value={data.feedback}
            onChange={({target}) => setData({ ...data, feedback:target.value  })}
            ></textarea>
        </div>
        <div className="mt-7">
          <button 
            className="w-full h-12 px-6 text-indigo-100  bg-[#6d28d9] hover:bg-purble disabled:opacity-50" 
            disabled={!isValid()}
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default List;