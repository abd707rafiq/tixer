import React from 'react'
import Vertical from '../header/Vertical'
import FramerNav from './FramerNav'
import LeftFrame from './LeftFrame'
import RightFrame from './RightFrame'
import News from './News'

const Framer = () => {
    return (
        <div className="w-[1440px] h-[1492.74px]  gap-0 opacity-100 bg-[#111213] ;
        ">
            <Vertical />
            <div className="w-[1352px] h-[1468.74px] px-[110px] py-0 gap-[8px] relative opacity-100 ">
                <FramerNav />
                <div className="w-[1304px] h-[1382.74px] gap-[14px] opacity-100 ">
                    <div className="w-[1304px] h-[652px] mb-[20px] gap-[14px] opacity-100 flex ">
                        <LeftFrame/>
                        <RightFrame/>

                    </div>
                    <News/>


                </div>

            </div>


        </div>



    )
}

export default Framer