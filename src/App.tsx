import './App.css'
import ParallexCard from './components/ParallexCard'

function App() {
  const data = [
    {
      image: "https://i.pinimg.com/736x/e8/bf/e8/e8bfe8d27e9f2b2aa4f2abc981eb0cf7.jpg",
      heading: "Devil in Heaven",
      subheading: "Rise Of The Cult Leader"
    },
    {
      image: "https://i.pinimg.com/736x/49/7d/63/497d638e2b758be850d8e57d0c35e721.jpg",
      heading: "Shadows of Eternity",
      subheading: "Whispers in the Dark"
    },
    {
      image: "https://i.pinimg.com/736x/09/0e/c2/090ec24643252bad463fd8d6cb642371.jpg",
      heading: "Midnight Echoes",
      subheading: "Secrets Unbound"
    },
    {
      image: "https://i.pinimg.com/736x/ef/e5/06/efe50630357f425757b5fdb11ab7a977.jpg",
      heading: "Crimson Horizons",
      subheading: "Beyond the Veil"
    }
  ]

  return (
    <div className='h-screen w-screen' >
        <div className='flex h-full w-full flex-wrap gap-4 items-center justify-center'>
          {data.map((d,idx)=>{
            return <ParallexCard key={idx} {...d}/>
          })}
        </div>
    </div>
  )
}

export default App
