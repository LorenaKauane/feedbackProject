import React from 'react';

function ToImprove({
  areasToImprove,
  onChangeAreaToImprove
}) {
  return (
    <div className="flex pb-3 flex-wrap">
      {areasToImprove.map((areaToImprove) => (
        <div 
          className={`py-2 pl-4 pr-4 mr-4 my-4 rounded-full ${areaToImprove.selected ? 'bg-[#6d28d9]' : 'bg-neutral-200'}`} 
          key={areaToImprove.text}
          onClick={() => onChangeAreaToImprove(areaToImprove)}
        >
          <div className={areaToImprove.selected ? 'text-white' : 'text-neutral-500'}>{areaToImprove.text}</div>
        </div>)
      )}
    </div>
  )
}

export default ToImprove;