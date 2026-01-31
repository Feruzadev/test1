import { Button, Card, Typography } from "@material-tailwind/react"
import ideas from "../Img/div.elementor-element.png"
import Tablist from "../Img/Tablist.png"

export default function Ideas() {
    return (
        <div className="bg-[#F5F5F5] pt-[69px]">
            <div className="Container ">
                <div className="flex items-center justify-center pb-[76px]">
                    <img src={ideas} alt="ideas" className="w-[740px]" />
                    <div className="flex flex-col items-start gap-[30px] w-[576px]">
                        <Typography className="font-bold text-[48px] leading-[60px] ">
                            Free and easy way to bring your ideas to life
                        </Typography>
                        <p className="text-18px font-medium text-[#7E7E7E]">Lorem ipsum det, cowec tetur duis necgi det, consec teturlagix adipiscing eliet, cowec tetopak</p>
                        <Button className="bg-[#2EBB77]">Get Started</Button>
                    </div>
                </div>
                <div className="pb-[83px]">
                    <Typography className="font-bold text-[48px] text-center pb-[10px]">
                        T-shirt printing made easy.
                    </Typography>
                    <p className="text-18px font-medium text-[#7E7E7E] text-center w-[682px] mx-auto">Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix adipiscing eliet, cowec tetopak</p>
                </div> 
                <div className="flex">
                    <div>
                        <Typography className="font-bold text-[20px] pb-[37px]">Premium quality custom t-shirts</Typography>
                        <Card className="px-6 py-6 mb-[50px]">
                            <Typography className="font-bold text-[20px] pb-[20px]">Easy to create & customize</Typography>
                            <p className="text-18px font-medium text-[#7E7E7E]">Lorem ipsum det, cowec tetur duis necgi det, consec teturlagix adipiscing eliet</p>
                        </Card>
                            
                        <Typography className="font-bold text-[20px] pb-[68px]">Thousands of free templates</Typography>
                        <Typography className="font-bold text-[20px]">Free standard shipping</Typography>
                    </div>
                    <img src={Tablist} alt="tablist"  className="w-[916px]"/>

                </div>
            </div>

        </div>
    )

}