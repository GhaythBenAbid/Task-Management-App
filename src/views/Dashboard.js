import { useStoreActions, useStoreState } from "easy-peasy";
import { Switch  , Route, Router } from "react-router-dom";
import AddNewCollection from "./AddNewCollection";
import NavBar from "./Navbar";
import SideBar from "./SideBar";

const Dashboard = () => {


    return (

        <div class="flex flex-col h-screen bg-gray-100">
            <NavBar />
            <SideBar />

        </div>
    );
}

export default Dashboard;