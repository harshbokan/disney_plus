import React from 'react'
import styled from "styled-components"

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>
                Get All There
            </SignUp>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit alias quibusdam sequi eos iusto, laboriosam similique neque perferendis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>

    </Container>
  )
}

export default Login

const Container= styled.div`
    position:relative;
    height: calc(100vh - 70px);
    display:flex;
    align-items: top;
    justify-content: center;

    &:before{
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content:"";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: -10;
        opacity:0.7;
    }
`
const CTA= styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display:flex;
    flex-direction: column;
    margin-top:100px;
    align-items:center;
`
const CTALogoOne= styled.img`

`
const SignUp= styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin: 8px 0 12px 0;

    &:hover{
        background-color: #0483ee;
    }
`
const Description= styled.p`
    text-align: center;
    font-size:11px;
    letter-spacing:1.5px;
    line-height: 1.5;
`
const CTALogoTwo= styled.img`
    width:90%;
`