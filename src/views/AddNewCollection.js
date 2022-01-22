import { useStoreActions, useStoreState } from "easy-peasy";
import NavBar from "./Navbar";
import SideBar from "./SideBar";
import Style from "./AddNewCollection.module.css";
import IconsList from "./IconsList";
import { useEffect, useState } from "react";

const AddNewCollection = () => {
    const userId = useStoreState(state => state.user.user)._id;
    const [option, setOption] = useState("");
    const [collectionname, setCollectionName] = useState("");

    const createCollection = useStoreActions(actions => actions.collection.createCollection);




    return (
        <div class="flex flex-col h-screen bg-gray-100">
            <NavBar />
            <div className="flex flex-row flex-grow">
                <SideBar />
                <div className="flex-grow text-center">
                    <h1>
                        <i className="fas fa-address-book text-8xl mt-8 p-8 rounded-3xl bg-gradient-to-t from-blue-900 to-blue-500 text-white"></i>
                    </h1>
                    <h1 className="text-center mt-2 font-semibold  text-3xl text-gray-800 underline">Add New Collection</h1>
                    <div>
                        <h1 className=" text-left mt-5 w-2/3 mx-auto py-3 text-gray-600">Collection Name <span className="text-red-500">*</span></h1>
                        <input className="w-2/3  p-2 shadow-sm rounded-sm outline outline-gray-400 outline-2 bg-gray-100  focus:outline-blue-500" placeholder="Ex: Study" onChange={
                            (e) => {
                                setCollectionName(e.target.value)
                            }}></input>
                    </div>
                    <div>
                        <h1 className=" text-left mt-5 w-2/3 mx-auto py-3 text-gray-600">Icon<span className="text-red-500">*</span></h1>
                        <IconsList selectIconOption={iconOption => setOption(iconOption)} />
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                createCollection({ collectionname, option, userId });
                            }}
                            type="submit"
                            className="mx-auto mt-8 group relative w-2/3 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Collection
                        </button>
                    </div>

                </div>
            </div>

        </div >


    );
}

export default AddNewCollection;