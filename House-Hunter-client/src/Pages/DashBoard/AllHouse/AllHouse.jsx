import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const AllHouse = () => {
    return (
        <div>
            <h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">All House</h2>

            <div className=" bg-[#FFF] border mx-6 ">
                <div className="flex justify-start  bg-[#FFF] pl-14 py-5">
                    <h2 className="text-[#151515] font-bold text-4xl font-cinzel ">Total House: </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Brice Swyre</div>
                                            <div className="text-sm opacity-50">China</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Carroll Group
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                </td>
                                <td>Red</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Marjy Ferencz</div>
                                            <div className="text-sm opacity-50">Russia</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Rowe-Schoen
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                </td>
                                <td>Crimson</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Yancy Tear</div>
                                            <div className="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Wyman-Ledner
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                </td>
                                <td>Indigo</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>

                <div className="flex justify-center my-5">
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add House</button>
                </div>

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add New House!</h3>
                        <form >

                            <div className="w-full flex gap-3">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">House name</span>
                                    </label>
                                    <input required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="House name" type="text" name="title" id="title" />
                                </div>

                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">House  Address</span>

                                    </label>
                                    <input required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Addresss" type="text" name="address" id="address" />
                                </div>

                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">City</span>

                                    </label>
                                    <input required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="city" type="text" name="city" id="city" />
                                </div>
                            </div>

                            <div className="w-full flex gap-3">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">BedRoom</span>
                                    </label>
                                    <input required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Bedroom" type="number" name="bedroom" id="bedroom" />
                                </div>

                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">BathRoom</span>
                                    </label>
                                    <input  className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Bathroom" type="number" name="prbathroomice" id="bathroom" />
                                </div>
                            </div>
                            <div className="w-full flex gap-3">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Room Size</span>
                                    </label>
                                    <input  required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Room Size " type="number" name="size" id="size" />
                                </div>

                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Availability date </span>
                                    </label>
                                    <input  required type="date" name="date" className="w-full h-12 border-2 p-4 pl-5 rounded-lg" />
                                </div>
                            </div>

                            <div className="w-full flex gap-3">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Rent Per Month</span>
                                    </label>
                                    <input  required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Rent Per Month " type="number" name="rent" id="rent" />
                                </div>

                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Phone Number</span>
                                    </label>
                                    <input  required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Phone " type="number" name="phone" id="phone" />
                                </div>
                            </div>

                            <div className="w-full flex gap-3 mb-10">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Description</span>
                                    </label>
                                    <textarea className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="House  Description" name="description" id="description" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                           

                            <div className="flex justify-center">

                                <input className="text-[#FFF] btn font-extrabold uppercase mr-3 bg-[#9d0208] my-10 " type="submit" value="Add House" />
                               
                            </div>

                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default AllHouse;


