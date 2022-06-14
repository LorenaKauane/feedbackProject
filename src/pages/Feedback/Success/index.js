import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Hand }  from '../../../assets/hand.svg';

function Success() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-screen">
      <div className="flex flex-col">
        <Hand width="50" fill="#6d28d9" />
        <div className="pb-3 mt-12  text-5xl">Thank you!</div>
        <div className="pb-3 text-gray-400">feedback sent successfully</div>

        <strong className="pb-3 text-[#6d28d9]">
          <Link to="/">Back to home</Link>
        </strong>
      </div>
    </div>
  )
}

export default Success;