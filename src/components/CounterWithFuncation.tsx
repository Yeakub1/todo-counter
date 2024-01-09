import ChildComponent from "./ChildComponent";

type Tprops = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncationComponent = ({ count, setCount }: Tprops) => {
  return (
    <div className="border border-red-500 p-10 m-10">
      <button
        className="btn bg-purple-800 text-white p-5"
        onClick={() => setCount((prev) => prev + 1)}
      >
      Click for Update
          </button>
          <ChildComponent count={count}/>
    </div>
  );
};
export default CounterWithFuncationComponent;
