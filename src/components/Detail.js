import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
        <Background>
            <img src="/images/brave.jpg" alt="" />
        </Background>
        <ImageTitle>
            <img src="/images/viewers-disney.png" alt="" />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="images/play-icon-white.png" alt="" />
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="images/group-icon.png" alt="" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2011 😀 Yeah 😀 This is cool movie
        </SubTitle>
        <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque quas ipsam. Optio architecto aspernatur at doloremque vero hic libero. Ex magni atque vel, accusamus eveniet maxime vitae laboriosam mollitia.
        </Description>
    </Container>
  )
}

export default Detail

const Container= styled.div`
    min-height: calc(100vh- 70px);
    padding : 0 calc(3.5vw + 5px);
    position:relative;
`
const Background= styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
    opacity: 0.8;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`
const ImageTitle= styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    padding:0;
    margin-left: -80px;
    margin-top:60px;
    ${'' /* position: absolute;
    top: 0;
    left: 0; */}
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls= styled.div`
    display: flex;
    align-items:center;

`
const PlayButton= styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    background: rgb(249,249,249);
    border:none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background: rgb(198,198,198);
    }
`
const TrailerButton= styled(PlayButton)`
    background: rgb(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`
const AddButton= styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px   solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    span{
        font-size: 30px;
        color: white;
    }
    &:hover{
        background: rgb(198,198,198);
    }
`
const GroupWatchButton= styled(AddButton)`
    background: rgb(0,0,0);
`

const SubTitle= styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description= styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;
`