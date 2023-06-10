import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { apiKey ,imageUrl} from '../../Constants/constants'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlId,seturlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data)
      setmovies(response.data.results)
  }).catch(err=>{
    alert('network error')
  })
}, []);

  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1,
      
    },
  }

  const handletrailer=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else{
        console.log('Empty Array')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj)=>{
            return(
              <div className='wrap'>
                  <img onClick={()=>handletrailer(obj.id)} className={props.isSmall ?'smallposter' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                  <div class="middle">
                  <div class="text">{props.originals_title}</div>
                  </div>
              </div>
              

            )
          })
        }
        
      </div>
     { urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
