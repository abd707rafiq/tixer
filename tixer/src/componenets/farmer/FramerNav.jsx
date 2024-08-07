import React from 'react'

import ImportExportIcon from '@mui/icons-material/ImportExport'

const FramerNav = () => {
    return (
        <div className="w-[1304px] h-[78px] pt-[14px] px-0 pb-0 gap-[8px] opacity-100 ">
            <div className="w-[1304px] h-[64px] py-[8px] px-0 gap-0 justify-between opacity-100 flex ">
                <div className="w-[357px] h-[38px] gap-[10px] opacity-100 flex">
                    <div className="w-[220px] h-[38px]  text-[24px] font-normal leading-[38.4px] tracking-[0.02em] text-left gap-0 opacity-100">
                        Goodmorning,Jens
                    </div>
                    <div class="w-[266.01px] h-[48px] pt-[5px] pb-[5px] px-0 gap-[10px] rounded-[1999px] ml-[800px] opacity-100 flex ">
                        <div class="w-[127px] h-[38px] p-[10px] mr-[25px] mb-[10px] px-[14px] gap-[10px] rounded-[49px] opacity-100 flex ">
                            <div><ImportExportIcon/></div>
                            <div>OpenTrade</div>

                        </div>
                        <div class="w-[127px] h-[38px] p-[10px] px-[14px] gap-[10px] rounded-[49px] opacity-100 bg-[#191B1F] flex ">
                            <div>+</div>
                            <div>SetUps</div>

                        </div>


                    </div>



                </div>



            </div>

        </div>

    )
}

export default FramerNav