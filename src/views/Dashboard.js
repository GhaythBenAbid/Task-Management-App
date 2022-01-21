import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import NavBar from "./Navbar";

const Dashboard = () => {
    const getAllCollections = useStoreActions(actions => actions.collection.getAllCollections);
    const collections = useStoreState(state => state.collection.collections);
    const getCollectionsByUserId = useStoreActions(actions => actions.collection.getCollectionsByUserId);
    const user = useStoreState(state => state.user.user);

    const id = user._id;

    useEffect(() => {
        getCollectionsByUserId({id});
        
    }, [user]);


    const listofcolors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-teal-500",
        "bg-blue-500",
    ]




    return (

        <div class="flex flex-col h-screen bg-gray-100">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <NavBar />
            <div class="bg-gradient-to-t from-gray-900 to-gray-800 w-60 flex flex-col flex-grow shadow-md">
                <h1 className="text-white pt-8 font-bold text-2xl px-5 mb-8">Collections</h1>
                {collections.map(function (item, index) {

                    var randomnumber = Math.floor(Math.random() * 6);
                    return (
                        <div className="my-1 flex flex-row items-center hover:bg-gray-600 py-2 px-5">
                            <div className={` ${listofcolors[randomnumber]} w-10 h-10 rounded-md flex justify-center items-center mr-5`}>
                                <i class="fa-solid fa-angle-right text-white"></i>
                            </div>
                            <h1 className="text-white font-bold italic">{item.collection_name}</h1>
                        </div>
                    )
                })}


            </div>
        </div>
    );
}

export default Dashboard;