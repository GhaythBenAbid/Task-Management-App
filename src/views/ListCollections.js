import { useStoreState } from "easy-peasy";
import NavBar from "./Navbar";
import SideBar from "./SideBar";

const ListCollections = () => {
    const collections = useStoreState(state => state.collection.collections);



    return (
        <div class="flex flex-col h-screen bg-gray-100">
            <NavBar />
            <div className="flex flex-row flex-grow">
                <div className="flex-grow text-center">
                    <div className="grid grid-cols-4">

                        {collections.map(collection => (

                            <div onClick={
                                () => {
                                    window.location.href = `/collection/${collection._id}`;
                                }
                            } className="w-auto h-48 m-2 rounded-lg bg-gradient-to-t from-gray-900 to-gray-800 flex flex-col justify-center items-center break-all shadow-lg">
                                <i class={`fa-solid ${collection.icon} text-white text-3xl p-5 border border-white-300 border-x-2 border-y-2 rounded-xl`}></i>

                                <h1 className="text-white font-bold text-2xl italic break-words mx-2">{collection.collection_name}</h1>
                            </div>



                        ))}

                    </div>

                    








                </div>
            </div>
        </div>
    );
}

export default ListCollections;