import React from 'react'

function TooltipButton({ position = 'bottom', colors = ['bg-red-700', 'bg-green-700', 'bg-blue-700'] }) {
  const positionClasses = {
    bottom: {
      tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-1'
    }
  }
  return (
    
      <div className='relative bottom-40 left-24 group'>
        <button className='relative p-4 bg-white/25 rounded-full border border-1 bg-white text-4xl'>
        <div className={`hidden absolute  p-2 rounded-lg space-x-1 bg-white/25 shadow-md group-hover:flex ${positionClasses[position].tooltip}`}>
          {
            colors.map((color, index) => (
              <div key={index} className={`size-6 ${color} border border-white rounded-full`}></div>
            ))
          }
            
            {/* tooltip arrow */}
            <div className={`absolute ${positionClasses[position].arrow} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/25`}>

            </div>
          </div>

        </button>

       

      </div>
  )
}

export default TooltipButton