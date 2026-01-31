import { Typography } from "@material-tailwind/react";
import Girl from "../Img/1 (1).png"
import fut from "../Img/1A-1-800x800.png.png"

export default function Print() {
    return (
        <>
            <div className="Container">
                <div className=" pt-[110px] flex gap-[109px]">
                    <div className="flex flex-col items-start ">
                        <button className="px-4 py-2 mb-[32px] rounded-full bg-[#F3ECFB] text-[#B479D9] hover:bg-[#E9DDF6] transition font-bold">
                            Create your own
                        </button>
                        <Typography variant="h2" className="text-[68px] w-[484px] leading-[81.6px]" >Make the most
                            of o
                        </Typography>
                        <Typography variant="h2" className="text-[68px] w-[484px] leading-[81.6px]" >
                            printing
                        </Typography>
                        <p className="mt-[36px] mb-[40px] font-medium text-[18px] w-[589px] text-[#7E7E7E]">What’s more, we do it right! A full administration printing background.
                            Print shirts for yourself or your online business</p>

                        <div className="flex items-center justify-center gap-3">
                            <button className="px-8 py-2 rounded-lg bg-[#2EBB77] text-[white]">Shop Now</button>
                            <div className="flex items-center justify-center gap-2">
                                <Typography className="font-bold">How We Work</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="currentColor" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1 1 0 0 1 11 23m1-11.382v8.764L20.764 16Z" /><path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2" /></svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-[48px] mt-[62px]">
                            <div>
                                <Typography variant="h1">4k+</Typography>
                                <span className="text-[#7E7E7E]">Collections</span>
                            </div>
                            <div className="h-[60px] w-px bg-gray-400"></div>
                            <div>
                                <Typography variant="h1">9k+</Typography>
                                <span className="text-[#7E7E7E]">items trusted to deliver</span>
                            </div>
                        </div>

                    </div>
                    <div className="relative w-[672px] h-[672px] rounded-full bg-gradient-to-t from-[#D8F2E9] to-[#EAD4F8] flex items-center justify-center shadow-xl">
                        <img
                            src={Girl}
                            alt="model"
                            className="absolute bottom-[-55px] left-1/2 -translate-x-1/2 w-[768px] h-[750px] object-contain"
                        />
                        <img
                            src={fut}
                            alt="tshirt"
                            className="absolute h-[100px] left-[120px] top-61 object-contain"
                        />

                    </div>

                </div>
            </div>

        </>
    )
}