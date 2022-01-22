import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

const SideBar = () => {
    const getAllCollections = useStoreActions(actions => actions.collection.getAllCollections);
    const collections = useStoreState(state => state.collection.collections);
    const collection = useStoreState(state => state.collection.collection);
    const getCollectionsByUserId = useStoreActions(actions => actions.collection.getCollectionsByUserId);
    const user = useStoreState(state => state.user.user);
    const [listOfColors , setListOfColors] = useState([]);


    const id = user._id;

    useEffect(() => {
        getCollectionsByUserId({ id });
        setListOfColors([
                "bg-red-500",
                "bg-orange-500",
                "bg-yellow-500",
                "bg-green-500",
                "bg-teal-500",
                "bg-blue-500",
            ]
        )

    }, [collection]);

    


    


    return (

            <div class="bg-gradient-to-t from-gray-900 to-gray-800 w-60 flex flex-col  shadow-md hidden md:block">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                <h1 className="text-white pt-8 font-bold text-2xl px-5 mb-8">Collections</h1>
                {collections.map(function (item, index) {

                    var randomnumber = Math.floor(Math.random() * 6);
                    return (
                        <div className="my-1 flex flex-row items-center hover:bg-gray-600 py-2 px-5">
                            <div className={` ${listOfColors[randomnumber]} w-10 h-10 rounded-md flex justify-center items-center mr-5`}>
                                <i class={`fa-solid ${item.icon} text-white`}></i>
                            </div>
                            {item.collection_name.length < 20 ?
                            
                            <h1 className="text-white font-bold italic">{item.collection_name}</h1> : 
                            <h1 className="text-white font-bold italic">{item.collection_name.slice(0,15)}...</h1> 

                        }
                        </div>
                    )
                })}

            </div>
    );
}

export default SideBar;