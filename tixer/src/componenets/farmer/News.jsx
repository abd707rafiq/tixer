import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import Cards from './Cards'

const News = () => {
    const numbers = [2, 3, 4, 5];
    const cardData = [
        {
            date: 'Jul8,2024 10:45',
            sentiment: 'Positive',
            text: 'AtlantaFedGDPNowrisesto2.7%from2.3%',
            labels: ['EURO', 'FED', 'GDP'],
        },
        {
            date: 'Jul8,2024 10:45',
            sentiment: 'Positive',
            text: 'AtlantaFedGDPNowrisesto2.7%from2.3%',
            labels: ['EURO', 'FED', 'GDP'],
        },
        {
            date: 'Jul8,2024 10:45',
            sentiment: 'Neutral',
            text: 'AtlantaFedGDPNowrisesto2.7%from2.3%',
            labels: ['EURO', 'FED', 'GDP'],
        },
        {
            date: 'Jul8,2024 10:45',
            sentiment: 'Negative',
            text: 'AtlantaFedGDPNowrisesto2.7%from2.3%',
            labels: ['EURO', 'FED', 'GDP'],
        },
    ];
    return (
        <div className="w-[1304px] h-[716.74px] px-[14px] py-[24px] gap-[45px] opacity-100 bg-[#141618] flex flex-col">
            <div className="w-[1276px] h-[678.74px] gap-6 opacity-100 flex flex-col ">
                <div className="w-[1276px] h-auto gap-6 opacity-100 flex ">
                    <div className="w-[1276px] h-auto p-0 pb-6 gap-0 justify-between opacity-100 flex">
                        <div className="w-[327.01px] h-[48px] p-[5px] px-[10px] ml-[20px] gap-[10px] rounded-[1999px_1999px_1999px_1999px] opacity-100 flex bg-[#111213] ">



                            <div className="w-[99px] h-[38px] pt-[10px] gap-[10px] bg-[#141618] rounded-[49px_49px_49px_49px] opacity-100 flex items-center justify-center">
                                <div className="w-[55px] h-[18px] gap-0 mt-[-15px] opacity-100 font-['PP Telegraf'] text-[14px] font-normal leading-[55px] flex items-center justify-center">
                                    <h1 className="m-0">Position(3)</h1>
                                </div>
                            </div>

                            <div className="w-[87px] h-[38px] pt-[10px] gap-[10px] rounded-[49px_49px_49px_49px] opacity-100 flex items-center justify-center">
                                <div className="w-[55px] h-[18px] gap-0 mt-[-15px] opacity-100 font-['PP Telegraf'] text-[14px] font-normal leading-[55px] flex items-center justify-center">
                                    <h1 className="m-0">SetUps(4)</h1>
                                </div>

                            </div>
                            <div className="w-[101px] h-[38px] pt-[10px] gap-[10px] rounded-[49px_49px_49px_49px] opacity-100  flex items-center justify-center">
                                <div className="w-[55px] h-[18px] gap-0 mt-[-15px] opacity-100 font-['PP Telegraf'] text-[14px] font-normal leading-[55px] flex items-center justify-center">
                                    <h1 className="m-0">Notifications</h1>
                                </div>


                            </div>



                        </div>


                    </div>
                    <div className="w-[386px] h-[48px] gap-2 opacity-100 mt-[10px]">

                        <div class="w-[330px] h-[48px] p-[15px] px-[16px] gap-[8px] flex justify-center  border-[1px] border-solid border-transparent opacity-100">
                            <div><SearchOutlinedIcon /></div>
                            <input
                                type="text"
                                placeholder="Search address"
                                className="w-[220px] h-[30px] px-[12px] py-[8px] placeholder:text-sm rounded-[4px] border-gray-300 "
                            />
                            <div class="w-[50px] h-[50px] gap-0 rounded-[75px] mt-[-11px] ml-[-10px] border-[0.5px] border-[#00DF80]  opacity-100  ">
                                <div className="w-[50px] h-[50px]    rounded-[4px_4px_4px_4px] opacity-100 flex items-center justify-center">
                                    <div class="w-[15px] h-[20px] mt-[-10px] mr-[8px] gap-0 opacity-100 
  font-poppins text-[23px] font-normal leading-[24px] tracking-[0.02em] text-[#00DF80] text-left">
                                        <RocketLaunchTwoToneIcon />
                                    </div>


                                </div>

                            </div>


                        </div>

                    </div>

                </div>
                <div className="w-[1276px] h-[128.69px] p-[14px_15px_14px_15px] gap-1.5 opacity-100">
                    <div className="w-[1246px] h-[100.69px] gap-[19px] opacity-100 flex flex-col">
                        {cardData.map((data, index) => (
                            <Cards
                                key={index}
                                date={data.date}
                                sentiment={data.sentiment}
                                text={data.text}
                                labels={data.labels}
                            />
                        ))}
                    </div>
                </div>







            </div>



            {/*pagination*/}
            <div className="w-[362px] h-[40px] gap-custom opacity-100  flex ">
                <div className="w-[10px] h-[20px] gap-0  mt-[2px] opacity-[0.48]">
                    <KeyboardArrowLeftIcon />

                </div>
                <div class="w-[30px] h-[30px] gap-0 rounded-[75px]  ml-[20px] flex opacity-100  bg-[#00DF80] ">
                    <div className="w-[30px] h-[30px]    rounded-[4px_4px_4px_4px] opacity-100 flex items-center justify-center">
                        <div class="w-[19px] h-[24px] ml-[8px] gap-0 opacity-100 
  font-poppins text-[15px] font-normal leading-[24px] tracking-[0.02em] ">
                            1
                        </div>


                    </div>
                    {numbers.map((num) => (
                        <div key={num} className="w-[30px] h-[30px] gap-0 rounded-[75px] ml-[10px] opacity-100  flex items-center justify-center">
                            <div className="w-[30px] h-[30px] rounded-[4px_4px_4px_4px] opacity-100 flex items-center justify-center">
                                <div className="w-[19px] h-[24px] ml-[8px] gap-0 opacity-100 font-poppins text-[15px] font-normal leading-[24px] tracking-[0.02em]">
                                    {num}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="w-[10px] h-[20px] gap-0  mt-[2px] opacity-[0.48]">
                        ...

                    </div>
                    <div className="w-[10px] h-[20px] gap-0  ml-[22px] mt-[5px] opacity-[0.48]">
                        <KeyboardArrowRightIcon />

                    </div>

                </div>



            </div>




        </div>
    )
}

export default News