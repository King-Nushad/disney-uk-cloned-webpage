

import Image1 from '../assets/show1.jpg'
import Image2 from '../assets/show2.jpg'

function Show(props) {


    const showCard = [
            
        {
            image: Image1,
            
        },

        {
            image: Image2,
        }
    ]
    return(
        <>
        
            <div>
                <h4>Shows</h4>

                <div className='shows-card'>
                    {showCard.map ((list) =>(
                        <div className='show-card-image'>
                            <img src = {list.image} />

                        </div>

                    ))}

                </div >
            
            
            </div>
        
        
        </>
    )
  
}

export default Show