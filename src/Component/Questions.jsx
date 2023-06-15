import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './First.css';

const Questions = ({question,Route,array}) => {
  const navigate=useNavigate();
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);

  const [clicked,setClicked]=useState(null);
  
  

  const [data, setData] = useState([]);

  const star=[1,2,3,4,5]
  const tenstar=[1,2,3,4,5,6,7,8,9,10];
  

  
  const Next = async ()=> {
    
      if (Number(Route) < array.length){
        
        navigate(`/${ 1 + Number(Route) }`)
        
      }
      else {
        
          if (data.length > 0){

            console.log({Data:data});
            axios.post('https://weak-tan-mite-belt.cyclic.app/api/data', data)
            .then(response => {
              console.log(response.data);
              navigate('/submitted');
              localStorage.setItem('flag', 'COMPLETED');

              setTimeout(() => {
                navigate('/')
              }, 5000);
              // Handle the response from the backend
            })
           .catch(error => {
             console.error('Error:', error);
              // Handle any error that occurred
            });

          }

          else {
            alert("Please fill out atleast a input");
          }
           // Make axios call here 
            

            
          
        }
    
      }
      
      
  

            const Prev =()=> { 
              
                  if (Number(Route) > 1){
                    
                    navigate(`/${Number(Route)-1 }`)
                  }
                  else {
                    navigate('/');
                  }
              
             }

 
             
const handleInputChange = (e, Route) => {
  const { value } = e.target;
  setData((prevAnswers) => {
    const updatedAnswers = [...prevAnswers];
    const index = updatedAnswers.findIndex((answer) => answer.id === Route);
    if (index !== -1) {
      updatedAnswers[index].answer = value;
    } else {
      updatedAnswers.push({ id: Route, answer: value });
    }
    return updatedAnswers;
  });
};

const handleRatingChange = (e, Route) => {
  setClicked(true);
  const { value } = e.target;
  setData((prevAnswers) => {
    const updatedAnswers = [...prevAnswers];
    const index = updatedAnswers.findIndex((answer) => answer.id === Route);
    if (index !== -1) {
      updatedAnswers[index].answer = Number(value);
    } else {
      updatedAnswers.push({ id: Route, answer: Number(value) });
    }
    return updatedAnswers;
  });
};

  return (
    <div className='fullpage'>
           <div className='heading'>Customer Survey</div>
           <div className='index'>{Route}/{array.length}</div>

           <div className='question'>{Route}.&nbsp; &nbsp;{question}</div>
              {
               ( Number(Route) === 1 ) && 
                      <div className='ratingflex'>
                        {star.map((star)=> {
                          return(
                            <div className='rating-container' key={star}>
                            <button
                              key={star}
                              type="button"
                              className={`rating-button ${rating1 === star ? 'active' : ''}`}
                              onClick={(e) => {handleRatingChange(e, Route)
                                              if (rating1 === star) {
                                                setRating1(0);
                                              } else {
                                                setRating1(star);
                                              }
                              }}
                              value={star}
                            >
                              {star}
                            </button>
                          
                          </div>
                            )
                        })}

                      </div>
              }
              {
               ( Number(Route) === 2 ) && 
                      <div  className='ratingflex'>
                        {star.map((star)=> {
                          return(
                            <div className='rating-container' key={star}>
                            <button
                              key={star}
                              type="button"
                              className={`rating-button ${rating2 === star ? 'active' : ''}`}
                              onClick={(e) => {handleRatingChange(e, Route)
                                              if (rating2 === star) {
                                                setRating2(0);
                                              } else {
                                                setRating2(star);
                                              }
                              }}
                              value={star}
                            >
                              {star}
                            </button>
                          
                          </div>
                            )
                        })}

                      </div>
              }
              {
               ( Number(Route) === 3 ) && 
                      <div  className='ratingflex'>
                        {star.map((star)=> {
                          return(
                            <div className='rating-container' key={star}>
                            <button
                              key={star}
                              type="button"
                              className={`rating-button ${rating3 === star ? 'active' : ''}`}
                              onClick={(e) => {handleRatingChange(e, Route)
                                              if (rating3 === star) {
                                                setRating3(0);
                                              } else {
                                                setRating3(star);
                                              }
                              }}
                              value={star}
                            >
                              {star}
                            </button>
                          
                          </div>
                            )
                        })}

                      </div>
              }
              {
               ( Number(Route) === 4 ) && 
                      <div  className='ratingflex'>
                        {tenstar.map((star)=> {
                          return(
                            <div className='rating-container' key={star}>
                            <button
                              key={star}
                              type="button"
                              className={`rating-button ${rating4 === star ? 'active' : ''}`}
                              onClick={(e) => {handleRatingChange(e, Route)
                                              if (rating4 === star) {
                                                setRating4(0);
                                              } else {
                                                setRating4(star);
                                              }
                              }}
                              value={star}
                            >
                              {star}
                            </button>
                          
                          </div>
                            )
                        })}

                      </div>
              }
              
              {Number(Route)===5 && <textarea
            
                  type="text"
                  onChange={(e) => handleInputChange(e, Route)}
                  value={data.find((answer) => answer.id === Route)?.answer || ''}
                /> }
      
          
    
    
      <div className='btncontainer'>
          
           <div onClick={Prev} className="tobtns">Prev</div>
           <div onClick={Next} className="tobtns">{Number(Route)===array.length?'Submit':'Next'}</div>

      </div>
    
    </div>
  )
}

export default Questions