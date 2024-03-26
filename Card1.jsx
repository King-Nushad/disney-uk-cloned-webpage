import './Card1.css'
import Image1 from '../assets/img1.jpg'
import Image2 from '../assets/img2.jpg'
import Image3 from '../assets/img3.jpg'

function Cardone(props) {

    const cardDisplay = [
            
        {
            image: Image1,
            name: "Mary Poppins the Musical UK & Ireland tour",
            description: "Somepne magical is returning. The classic multi award-winning musical will embark on a tour from November. Book your tickets now",
            tag: "DISNEYLAND R PARIS",
        },

        {
            image: Image2,
            name: "Mary Poppins the Musical UK & Ireland tour",
            description: "Somepne magical is returning. The classic multi award-winning musical will embark on a tour from November. Book your tickets now",
            tag: "DISNEYLAND R PARIS",
        },

        {
            image: Image3,
            name: "Mary Poppins the Musical UK & Ireland tour",
            description: "Somepne magical is returning. The classic multi award-winning musical will embark on a tour from November. Book your tickets now",
            tag: "SHOWS",
        },
    ]
    return(
        <>

            <div className='display-card'>

                {cardDisplay.map((list) =>(

                    <div className='show-card'>
                        <img src = {list.image}/>
                        <h5>{list.name}</h5>
                        <p>{list.description}</p>
                        <button>{list.tag}</button>

                    </div>


                ) )}  
            

            </div> 

        </>

    )
  
}

export default Cardone