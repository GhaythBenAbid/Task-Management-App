import NavBar from "./Navbar";
import SideBar from "./SideBar";

const Hello = () => {
    return (
        <div class="flex flex-col h-screen bg-gray-100">
            <NavBar />
            <div className="flex flex-row flex-grow">
                        <SideBar/>
                <div className=" mx-auto w-3/5">
                        <h1 className="bg-red-500">hey</h1>









                </div>
            </div>
        </div>
    );
}


export default Hello;