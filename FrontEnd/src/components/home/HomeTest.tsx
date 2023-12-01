import { useCounterStore } from '../../store/home/counterStore'
//import shallow from 'zustand/shallow'
import { useGetAllUsers } from '../../hooks/userRegister'
//import { useEffect } from 'react'

export const HomeTest: React.FC = (): JSX.Element => {

  const count = useCounterStore((state)=> state.count)
  const title = useCounterStore((state)=> state.title)
  //const posts = useCounterStore((state)=> state.posts)

  
  //SHALLOW: En lugar de comparar profundamente todos los valores del estado,
  // una comparación poco profunda verifica si las referencias a los objetos
  // o las primitivas han cambiado. Si las referencias son las mismas,
  // se considera que el estado no ha cambiado y, por lo tanto,
  // el componente no necesita volver a renderizarse.
  
  //FORMA 1
  // const {title, count } = useCounterStore((state)=>({
    //   counter: state.count,
    //   name: state.title,
    //   posts: state.posts
    // }),shallow)
    
    
  //FORM 2
  const { increment , clearStore, multiply} = useCounterStore()
  //const { increment ,getPosts, clearStore, multiply} = useCounterStore()

  
  const { user, isLoading} = useGetAllUsers(1)
  if(isLoading) return <div> Loading...</div>

  // useEffect(()=>{
  //   getPosts()
  // }, [])
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <h1>Titulo: {title}</h1>
      <button onClick={()=> {
        increment(10)
      }}>
        Increment 10
      </button>
      
      <hr/>

      <button onClick={() => clearStore()}>
        Clear
      </button>

      <hr/>

      <button onClick={() => multiply(2)}>
        multiply by 2
      </button>

      <hr/>

      {JSON.stringify(user)}
      {/* {JSON.stringify(posts)} */}

    </div>
  );
}