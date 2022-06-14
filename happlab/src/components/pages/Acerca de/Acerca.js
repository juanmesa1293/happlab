import React from 'react'
import Footer from '../../navegation/footer/Footer'
import Navbar1 from '../../navegation/navbar/Navbar1'
import ReactPlayer from 'react-player'
import './Acerca.css'

const Acerca = () => {
    return (
        <div>
            <Navbar1/>
            <div className='Container'>
            <hr className='hr-line-white'/>
            <h2 className='title-standar'>Bienvenido a HappLab</h2>
            <hr className='hr-line-white'/>   
                <div className='row'>
                    <div className='col'>
                    <h3> Contenido destacado 1</h3>
                    <p className='text-lore'>Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.</p>
                    </div>
                    <div className='col'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=N029UUlH1Dc'
                        width='100%'
                        height='100%'
                        controls
                        loop
                        />

                    </div>
                </div>
             </div>
            <Footer/>
        </div>
    )
}
export default Acerca