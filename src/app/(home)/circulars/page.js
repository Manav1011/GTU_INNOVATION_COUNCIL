import Circular_container from "./components/Circular_container"
import PartnerALT from "./components/PartnersALT"
import CarouselScrollListener from "@/Components/Client/CarouselScrollListener"

async function page(){
    return (
        <>
            <div className="w-full mt-20 px-7 sm:px-0 gap-3 flex justify-center">
                <div className="lg:w-1/4 h-[100dvh] hidden lg:flex mx-auto">
                    <PartnerALT/>
                </div>
                <div className="lg:w-2/3  w-full text-center flex flex-col mt-5 gap-y-8 mx-auto max-h-[100dvh] overflow-y-auto">
                    <div className="w-full">
                        <p className="w-full text-center text-5xl">
                            CIRCULARS
                        </p>
                    </div>
                    <form className="w-full sm:flex sm:gap-3">
                    <select id="countries" className="rounded-md border-0 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2 sm:my-0" defaultValue={""}>
                        <option value="">Select Year</option>
                        <option value="US">2024</option>
                        <option value="CA">2023</option>
                        <option value="FR">2022</option>
                        <option value="DE">2021</option>
                    </select>
                    <select id="countries" className="rounded-md border-0 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2 sm:my-0" defaultValue={""}>
                        <option value="">Select Month</option>
                        <option value="US">January</option>
                        <option value="CA">February</option>
                        <option value="FR">March</option>
                        <option value="DE">April</option>
                    </select>
                    </form>
                    <div className="w-full flex flex-col gap-y-4">
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                        <Circular_container></Circular_container>
                    </div>
                </div>
            </div>
            <CarouselScrollListener/>
        </>
    )
}

export default page