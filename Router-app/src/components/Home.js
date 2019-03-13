import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    state= {
        photos: []
    }

    componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
        this.setState({
          photos: res.data.slice(0, 50)
        })
      })
    }

    render(){

       // Here we are destrucuting the posts and we are cycling through the list we have and then outputting it on out home page
       const { photos } = this.state;
       const photoImage = photos.length ? (
         photos.map( photos => {
           return (
             <div className='post card' key={photos.id}>
                    <img src={photos.thumbnailUrl} alt='Image Here' />
               <div className='card-content'>
                 {
                     
                 }
                   <span className='card-title'>{photos.title}</span>
               </div>
             </div>
           )
         })
     ) : (<div className='center'>No Images have been Loaded!</div>)

       return(
         <div>
           <div className='container center'>
             <h4>Gallery</h4>
             { photoImage }
           </div>
         </div>
       )
     }
}

export default Home;
