import { useEffect, useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [Count , setCount] = useState (0)
    const [ShowButton , setShowButton] = useState (true)
    const [showPopup, setShowPopup] = useState(false);



        function ShowButtonFunc (){
          setShowButton(false)
        }
        function IncreaseCounter () {
            if(Count < 10){
                setCount (Count +1 ) ;
            }
            else if(Count < 100){
                setCount (Count +10 ) ;
            }
            else if(Count < 1000){
                setCount (Count +100 ) ;
            }       
            else if(Count == 1000){
              ShowButtonFunc() ;
            }       
        }
        function DecreaseCounter () {
            if(Count < 1000 ){
                setCount (Count -100 ) ;
            } 
            if(Count > 100){
                setCount (Count -100 ) ;
            } 
            else if(Count > 10){
            setCount (Count -10 ) ;
            }
            else if(Count > 0){
            setCount (Count -1 ) ;
            }

            }

            useEffect(() => {
              setTimeout(() => {
                setShowPopup(true);
              } , 5000)
            }, []); 

        return (
          <>

          
            <section className= {Count == 10 ? 'Couter-Section-red' : Count == 100 ? 'Couter-Section-green' : Count == 1000 ? 'Couter-Section-pink' : 'Couter-Section'}>
              {Count == 0 ? (
                            <div className={showPopup ? 'PoP-UP2' : 'PoP-UP' }>
                            <p>Welcome To Our Counter</p>
                          </div>
              ) :
                Count == 10 ? (
                            <div className={!showPopup ? 'PoP-UP2' : 'PoP-UP' }>
                            <p>It's Ten !!</p>
                          </div>
                          )
              :
              Count == 100 ? (
                <div className={!showPopup ? 'PoP-UP2' : 'PoP-UP' }>
                <p>It's Hundred !!</p>
              </div>
            )
              :
              Count == 1000 ? (
                <div className={!showPopup ? 'PoP-UP2' : 'PoP-UP' }>
                <p>It's Thousand !!</p>
              </div>)
              : ' '

              }
              <p className='paragraph'>Counter</p>
              <p className='paragraph'>{Count}</p>
              <button  className={ShowButton ? 'button' : 'hidden'} onClick={IncreaseCounter}>Increase Count</button>
              <button className={!ShowButton ? 'button' : 'hidden'} onClick={DecreaseCounter}>Decrease Count</button>
            </section>
          </>
  )
}





