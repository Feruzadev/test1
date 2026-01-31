import { Typography } from "@material-tailwind/react";
import Spotify from "../Img/Item → Link → logo-spotify.png@2x.png"
import Feedly from "../Img/Item → logo-feedly.png.png"
import Latice from "../Img/Item → Link → logo-lattice.png.png"
import Hoppin from "../Img/Item → logo-hopin.png.png"
import Upwork from "../Img/Item → Link → logo-upwork.png.png"

export default function Brend() {
    return (
        <div className=" bg-[#F5F5F5] ">
            <div className="Container">
                <div className="mt-[113px] pt-[112px] pb-[98px]">
                    <Typography variant="h7" className="font-bold w-[627px] mx-auto text-center mb-[28px]">
                        “We've got custom T-shirts in a range of fits and sizes, so everyone can wear your brand or message.”
                    </Typography>
                    <div className="flex items-center justify-center gap-[10px] ">
                        <img src={Spotify} alt="" className="w-[219px] h-[85px]" />
                        <img src={Feedly} alt="" className="w-[219px] h-[85px]" />
                        <img src={Latice} alt="" className="w-[219px] h-[85px]" />
                        <img src={Hoppin} alt="" className="w-[219px] h-[85px]" />
                        <img src={Upwork} alt="" className="w-[219px] h-[85px]" />
                        <img src={Hoppin} alt="" className="w-[219px] h-[85px]" />



                    </div>
                </div>

            </div>
        </div>
    )
}