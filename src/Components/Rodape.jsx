import React from 'react'
import styled from '@emotion/styled'

function Rodape() {
  const Footer = styled.footer`
    margin-left:10vw;
    margin-right:10vw;
    display:flex;
    width:80vw;
    text-align:center;
    margin-top:20px;
    justify-content:space-between;
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