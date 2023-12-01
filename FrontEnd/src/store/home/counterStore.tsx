import {create} from 'zustand'

interface Post {
    id:number,
    title: string,
    body:string
}

interface CounterState{
    count:number,
    title:string,
    posts: Post[]
    increment: (value:number) => void,
    getPosts: () => Promise<void>,
    clearStore: () => void,
    multiply: (value: number)=> void
}

//STORE con elementos que almacena y sus acciones/funciones
//Set=>Permite actualizar el estado/otro valores
//Get=>Permite obtener alguno de sus valores internos de la funcion
export const useCounterStore = create<CounterState>((set, get)=>({
    count: 20,
    title:"some title",
    posts: [],
    increment: (value:number) => {
        set( state => ({
            count:state.count + value
        }))
    },
    getPosts: async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json()
        set(state=>({
            ...state, //copio todo el estado
            posts //luego agrego
        }))
    },
    
    //Limpia todo el estado Incluido las ACTIONS.
    clearStore: () => {
        set({}, true)
    },

    //Utilizando GET para obtener el valor de count y modificarlo
    multiply : (value: number) => {
        const { count } = get() 
        set({ count : count * value })
    }
}))

