import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import img1 from './images/tixer1.png'



const Header = () => {
    return (
        <div className="w-full max-w-[1440px] h-[83px] bg-[#191B1F] flex  items center opacity-100 ">

            <div className="w-[236px] h-[83px] pt-[22px] pr-[24px] pb-[22px] pl-[40px] gap-[24px] opacity-100  ">
                <img src={img1} alt='hlo' className="w-[85px] h-[30.6px] " />


            </div>
            <div className="w-[1204px] h-[83px] pr-[16px] pb-[16px] pl-[32px] gap-0  flex items-center justify-between opacity-100 ">
                <div className="w-[463px] h-[51px] gap-[10px]   opacity-100 ">
                    <div className="w-[463px] h-[51px] pt-[15px] pr-[16px] pb-[15px] pl-[16px] gap-[8px] rounded-tl-[8px]  opacity-100 bg-[#151618] flex">
                        <div className="w-[18px] h-[18px] gap-0 opacity-100 ">
                        <div className="w-[32px] h-[28px] px-[7px] gap-[10px] border-[2.5px] border-white  flex opacity-100">
                                    <div className="w-[18px] h-[18px] gap-100  opacity-100 ">
                                        <div className="w-[7.29px] h-[6.19px] top-[15.91px] left-[12.35px] gap-0 opacity-100 ">
                                            <h2 className="w-[18px] h-[18px] top-[10px] left-[7px] gap-0 opacity-100] ">
                                                Ai
                                            </h2>

                                        </div>
                                        

                                    </div>
                                    </div>


                        </div>
                        <div className="w-[121px] h-[21px] gap-0 opacity-100  ml-[20px] text-left font-poppins text-[14px] font-normal leading-[21px] tracking-[0.02em]">
                            Ask me anything
                        </div>

                    </div>


                </div>
                <div className="w-[229px] mt-[20px] h-[40px] gap-24 flex justify-between opacity-100 ">
                    <div className="w-[138px] h-[40px] gap-16 flex justify-between opacity-100  flex">
                        <div class="w-[16px] h-[16px] gap-[10px] opacity-100 ">
                            <div class="w-[20px] h-[20px] gap-2 opacity-100 ">
                                <ImportExportIcon />
                            </div>

                        </div>
                        <div class="w-[22px] h-[22px] gap-0 opacity-100 ">
                            <div class="w-[20px] h-[20px] gap-2 opacity-100 ml-[-10px]">
                                <NotificationsRoundedIcon/>
                            </div>

                        </div>
                        <div class="w-[60px] h-[60px] gap-0 rounded-[75px] mt-[-11px] ml-[-10px]   opacity-100  bg-[#262626]">
                            <div className="w-[64px] h-[64px]    rounded-[4px_4px_4px_4px] opacity-100 flex items-center justify-center">
                                <div class="w-[19px] h-[24px] mt-[-10px] gap-0 opacity-100 
  font-poppins text-[23px] font-normal leading-[24px] tracking-[0.02em] text-left">
                                    JS
                                </div>


                            </div>

                        </div>




                    </div>

                </div>



            </div>




        </div>
    )
}

export default Header