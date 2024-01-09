import { useReducer } from "react";

const initialState = {
    name: '',
    age: '',
    hobbies: []
}
const reducer =(currentState, action) => {
    switch (action.type) {
        case 'addName':
            
           return {...currentState, name: "Yeakub" }
    
        default:
            break
    }
}

const UserInfoWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <form>
            <input
                onChange={()=> dispatch({type: 'addName'})}
          className="border border-purple-800 m-10"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          className="border border-purple-800 m-10"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
         
          className="border border-purple-800 m-10"
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobbies"
        />
        <input
          className="btn bg-purple-900 text-white"
          type="submit"
          value="Submit"
        />
      </form>
    );
}
export default UserInfoWithUseReducer;
