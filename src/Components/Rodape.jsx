import React from 'react'
import styled from '@emotion/styled'

function Rodape() {
  const Footer = styled.footer`
  position: relative;
    left:5vw;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    margin:20px 0 0 ;
    padding: 10px 30px 10px;
    border-radius:25px 25px 0 0 ;
    border: 1px solid black;
    width: 90vw;
  `

  const Links = styled.a`
    text-decoration:none;

    :visited{
      color:black;
    }
    :link{
      color:black;
    }
  `

  return (
    <Footer>
      <Links href='#' target="_blank">@GabrielBarcSoftware</Links> 
      <Links href='https://www.linkedin.com/in/gabriel-p-barcellos/' target="_blank">@Linkedin</Links> 
      <Links href='https://github.com/GabrielBarcell0s' target="_blank">@Github</Links> 
      <Links href='https://www.instagram.com/gabrielpbarcellos/' target="_blank">@Instagram</Links> 
    </Footer>
  )
}

export default Rodape