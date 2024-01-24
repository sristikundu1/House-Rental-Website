import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllHouse = () => {
    const houses = useLoaderData();

    const handleAddHouse = e => {
        e.preventDefault();

        const form = e.target;


        const title = form.title.value;
        const address = form.address.value;
        const city = form.city.value;
        const image = form.image.value;
        const bedroom = form.bedroom.value;
        const bathroom = form.bathroom.value;
        const size = form.size.value;
        const date = form.date.value;
        const rent = form.rent.value;
        const phone = form.phone.value;
        const description = form.description.value;


        const newHouse = { title, address, city,image, bedroom, bathroom, size, date, rent, phone, description };
        console.log(newHouse);


        fetch(" https://house-hunter-server-coral-xi.vercel.app/house", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newHouse)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Inside post response", data);
                if (data.insertedId) {
                    alert("house added!")
                    form.reset();
                }
            })
    }
    return (
        <div>
            <h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">All House</h2>

            <div className=" bg-[#FFF] border mx-6 ">
                <div className="flex justify-start  bg-[#FFF] pl-14 py-5">
                    <h2 className="text-[#151515] font-bold text-4xl font-cinzel ">Total House: </h2>
                </div>

                <div className="overflow-x-auto px-6">

                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#006d77] text-white h-16">
                                <th></th>
                                <th>image</th>
                                <th>Home Title</th>
                                <th>Home location</th>
                                <th>Update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                houses.map((house, index) => <tr key={house._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={house.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {house.title}
                                    </td>
                                    <td>
                                        {house.address}
                                    </td>

                                    <td>
                                        <button
                                            // onClick={() => handleDelete(user)}
                                            className="btn   bg-[#e9d8a6] text-white rounded-lg"><FaRegEdit className="text-xl"></FaRegEdit></button>
                                    </td>
                                    <th>


                                        <button
                                            // onClick={() => handleDelete(food._id)}
                                            className="btn   bg-[#e9d8a6] text-white rounded-lg"><RiDeleteBin6Fill className="text-xl"></RiDeleteBin6Fill></button>
                                    </th>

                                </tr>)
                            }


                        </tbody>

                    </table>

                </div>

                <div className="flex justify-center my-5">
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add House</button>
                </div>

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add New House!</h3>
                        <form onSubmit={handleAddHouse}>

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

                            </div>

                         
                            <div className="w-full flex gap-3">
                            <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">City</span>

                                    </label>
                                    <input required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="city" type="text" name="city" id="city" />
                                </div>

                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Image</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="House Image" type="text" name="image" id="image" />
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
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Bathroom" type="number" name="bathroom" id="bathroom" />
                                </div>
                            </div>
                            <div className="w-full flex gap-3">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Room Size</span>
                                    </label>
                                    <input required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Room Size " type="number" name="size" id="size" />
                                </div>

                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Availability date </span>
                                    </label>
                                    <input required type="date" name="date" className="w-full h-12 border-2 p-4 pl-5 rounded-lg" />
                                </div>
                            </div>

                            <div className="w-full flex gap-3">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Rent Per Month</span>
                                    </label>
                                    <input required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Rent Per Month " type="number" name="rent" id="rent" />
                                </div>

                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Phone Number</span>
                                    </label>
                                    <input required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Phone " type="number" name="phone" id="phone" />
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


