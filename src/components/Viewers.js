import React from 'react'
import  styled  from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png' />
            <video autoPlay muted loop >
                <source src='/videos/disney.mp4' type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png' />
            <video autoPlay muted loop >
                <source src='/videos/pixar.mp4' type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png' />
            <video autoPlay muted loop >
                <source src='/videos/marvel.mp4' type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png' />
            <video autoPlay muted loop >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png' />
            <video autoPlay muted loop >
                <source src='/videos/geographic.mp4' type='video/mp4' />
            </video>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container= styled.div`
    padding: 30px 0px 26px;
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap= styled.div`
    border: 3px solid rgba(249, 249, 249, 0.2);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px; 
    cursor:pointer;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    position:relative;
    
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index:12;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 /72%) 0px 30px 22px -10px;
        video{
            opacity:1;
        }
    }
    video{
        position:absolute;
        object-fit:cover;
        height:100%;
        width:100%;
        top:0;
        opacity:0;
    }
`