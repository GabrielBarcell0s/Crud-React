import React from 'react'
import styled from '@emotion/styled'

function Rodape() {
  const Footer = styled.footer`
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    margin:20px 0 0 ;
    padding: 10px 30px 10px;
    border: 1px solid black;
    width: 100vw;
    background-color:black;
  `

  const Links = styled.a`
    text-decoration:none;

    :visited{
      color: #1866d3;
    }
    :link{
      color: #1866d3;
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