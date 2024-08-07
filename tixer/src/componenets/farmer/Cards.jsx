import React from 'react';

const Cards = ({ date, sentiment, text, labels }) => (
    <div className="w-[1246px] h-[100.69px] gap-[19px] opacity-100 flex flex-col ml-[10px]">
    <div className="w-[290px] h-[53.5px] gap-0 opacity-100">
      <div className="w-[128px] h-[28px] gap-[10px] opacity-100 flex">
        <div className="w-[72px] h-[28px] gap-0 opacity-100 text-left text-[10px] font-light leading-[28px] custom-font">
          {date}
        </div>
        <div className="w-[46px] h-[19px] gap-0 opacity-100 mt-[5px] text-left text-[12px] font-normal leading-[19.2px]">
          <h1 className={`text-${sentiment === 'Positive' ? 'green-700' : sentiment === 'Neutral' ? 'gray-700' : 'red-700'}`}>
            {sentiment}
          </h1>
        </div>
      </div>
      <div className="w-[290px] h-[28px] gap-0 opacity-100 mt-[-23px] text-left text-[14px] font-normal leading-[28px] custom-font relative top-[25.5px]">
        {text}
      </div>
    </div>
    <div className="w-[242px] h-[28.19px] gap-[10px] opacity-100 flex ml-[-13px]">
      {labels.map((label, index) => (
        <div
          key={index}
          className="w-[62px] h-custom-labelheight px-2 py-0 gap-1 rounded-[32px] opacity-100 bg-[#919EAB14] flex ml-[12px]"
        >
          {label}
        </div>
      ))}
    </div>
  </div>
);

export default Cards;
