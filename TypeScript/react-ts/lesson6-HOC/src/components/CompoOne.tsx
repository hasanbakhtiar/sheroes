import GenCompo from "./GenCompo";


const CompoOne = (props:any) => {

  const {count,incCount} = props;
  
  return (
    <div>
      Compo One {count}
      <button onClick={incCount}>+</button>
    </div>
  )
}

export default GenCompo(CompoOne)