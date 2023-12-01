import Carrousel from './Carrousel'

export const Home: React.FC = (): JSX.Element => {  return (
    <div className=' pt-14'>
      <p>Home</p>
      <Carrousel/>
      <p className=' pt-[3.5rem]' >HOME</p>
    
    </div>
  )
}

export default Home