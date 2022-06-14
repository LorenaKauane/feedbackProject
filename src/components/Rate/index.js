import React from 'react';
import { ReactComponent as Star }  from '../../assets/star.svg';
import { ReactComponent as StarFull }  from '../../assets/starFull.svg';

function Rate({
  rates,
  onChangeRates
}) {
  return (
    <div className="flex pb-3 flex-wrap">
      {rates.map((rate) => (
        <div className="pr-4 cursor-pointer" onClick={() => onChangeRates(rate)} key={rate.value}>
          {rate.selected ? (
            <StarFull fill="#6d28d9" width="50"/>
          ) : (
            <Star width="50"/>
          )}
        </div>
      ))}
  </div>
  )
}

export default Rate;