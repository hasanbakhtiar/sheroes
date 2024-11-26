import GenCompo from "./GenCompo";


const CompoTwo = (props:any) => {

  const {count,incCount} = props;
  
  return (
    <div>
      Compo One {count}
      <button onClick={incCount}>+</button>
    </div>
  )
}

export default GenCompo(CompoTwo)