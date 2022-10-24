import { Link } from "react-router-dom";

const Search = () => {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-center h-screen ">
            <div className="text-center">
                <h1 className="text-white text-4xl font-bold mt-20">What are you looking for?</h1>
                <h1 className="text-white text-3xl font-bold mt-5">Best Rate | Best Service | Best Policy</h1>
            </div>
            <div className="ml-4 bg-white p-5 rounded-xl ">
                <div action="" className="space-y-6 ng-untouched ng-pristine ng-valid text-black w-96 h-68 ">
                    <div className="space-y-1 text-sm" bis_skin_checked="1">
                        <label htmlFor="origin" className="block ">Origin</label>
                        <input type="text" name="origin" id="origin" placeholder="Dhaka" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-400 text-black focus:border-violet-400 placeholder-gray-600" />
                    </div>
                    <div className="space-y-1 text-sm" bis_skin_checked="1">
                        <label htmlFor="destination" className="block ">Destination</label>
                        <input type="text" name="destination" id="destination" placeholder="Kuakata " className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-400  focus:border-violet-400 placeholder-gray-600" />
                        <form className='flex justify-between'>
                            <div className="">
                                <label >Form</label> <br />
                                <input type="date" name="" id="" />
                            </div>
                            <div className="">
                                <label >To</label> <br />
                                <input type="date" name="" id="" />
                            </div>

                        </form>
                    </div>
                    <Link to='/hotels'>
                        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-[#F9A51A]">Start Booking</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Search;