import { useEffect, useState } from "react"
import { searchImages } from "./services"
import { GetImagesResult, ImageDto } from "./types"

function App() {

  const [images, setImages] = useState<ImageDto[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { error, success }: GetImagesResult = await searchImages(1, 5)
      if(error){
        return console.log(error)
      }
      setImages(success!.data)
    }
    fetchData()
  }, [])
  

  return (
    <>
      {images.map( ( _, ind ) => (
          <h1 key={ind} >Hola mundo</h1>
      ) )}
    </>
  )
}

export default App
