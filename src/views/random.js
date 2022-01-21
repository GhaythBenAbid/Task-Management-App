import { useStoreActions, useStoreState } from "easy-peasy";

const RandomData = () => {
    const x = useStoreState(state => state.x);
    const aadX = useStoreActions(actions => actions.aadX);
    const subX = useStoreActions(actions => actions.subX);
    const setX = useStoreActions(actions => actions.setX);
    
    return ( 
        <div>
            <h1>{x}</h1>
            <button onClick={() => aadX(1)}>+</button>
            <button onClick={() => subX(1)}>-</button>
            <button onClick={() => setX(0)}>reset</button>
        </div>

     );
}
 
export default RandomData;