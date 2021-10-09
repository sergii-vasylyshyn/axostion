import { useSelector, useDispatch } from "react-redux";
import { getData } from './store/Data'
import Canvas from './View/Canvas'

function Display() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  console.log(state);

  const testClick = () => {
    dispatch( 
      getData({
        test: 1,
        test2: 2,
        test3: 3
      }) 
    );
  }

  return (
    <div className="display">
      <Canvas />
    </div>
  );
}

export default Display;
