import { useStoreState } from "easy-peasy";

const Dashboard = () => {
    const user = useStoreState(state => state.user);

    return ( 
        <div>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>

        </div>
     );
}
 
export default Dashboard;