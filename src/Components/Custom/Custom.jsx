import { Typography } from "@material-tailwind/react";
import Main from "../Img/Main.png"
import main1 from "../Img/Main (1).png"
import main2 from "../Img/Main (2).png"

export default function Custom() {
    return (
        <div>
            <div className="Container mb-[130px]">
                <div className="flex flex-col items-center justify-center mt-[92px]">
                    <Typography className="font-bold text-[30px] mb-[20px]">
                        How to create custom shirts
                    </Typography>
                    <p className="font-medium text-[18px] text-[#7E7E7E] w-[680px] text-center mb-[85px]" >Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,cowec tetopak ec tetur duis necgi</p>
                </div>
                <div className="w-[1170px] mx-auto">
                    <div className="flex items-center justify-between mb-[85px]">
                        <img src={Main} alt="main" className="w-[473px]" />

                        <div className="flex items-center justify-center bg-white">
                            <button className=" w-16 h-16 rounded-full bg-white flex items-center justify-center text-lg font-medium  shadow-lg hover:shadow-xl transition ">
                                1 </button>
                        </div>
                        <div className="flex flex-col gap-[14px]">
                            <Typography className="font-bold text-[28px]">
                                Add your shirt design
                            </Typography>
                            <p className="w-[461px] font-medium text-[18px] text-[#7E7E7E]">Lorem ipsum det, cowec tetur duis nec fringi det,consec t eturlagix adipiscing eliet, cowec tetopak nec
                                fringi det adipiscing</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between  mb-[85px]">
                        <div className="flex flex-col gap-[14px]">
                            <Typography className="font-bold text-[28px]">
                                Custom artwork &review
                            </Typography>
                            <p className="w-[461px] font-medium text-[18px] text-[#7E7E7E]">Lorem ipsum det, cowec tetur duis nec fringi det,consec t eturlagix adipiscing eliet, cowec tetopak nec
                                fringi det adipiscing</p>
                        </div>
                        <div className="flex items-center justify-center bg-white">
                            <button className=" w-16 h-16 rounded-full bg-white flex items-center justify-center text-lg font-medium  shadow-lg hover:shadow-xl transition ">
                                2 </button>
                        </div>
                        <img src={main1} alt="main" className="w-[473px]" />
                    </div>

                    <div className="flex items-center justify-between">
                        <img src={main2} alt="main" className="w-[473px]" />
                        <div className="flex items-center justify-center bg-white">
                            <button className=" w-16 h-16 rounded-full bg-white flex items-center justify-center text-lg font-medium  shadow-lg hover:shadow-xl transition ">
                                3  </button>
                        </div>
                        <div className="flex flex-col gap-[14px]">
                            <Typography className="font-bold text-[28px]">
                                Enjoy your product
                            </Typography>
                            <p className="w-[461px] font-medium text-[18px] text-[#7E7E7E]">Lorem ipsum det, cowec tetur duis nec fringi det,consec t eturlagix adipiscing eliet, cowec tetopak nec
                                fringi det adipiscing</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}