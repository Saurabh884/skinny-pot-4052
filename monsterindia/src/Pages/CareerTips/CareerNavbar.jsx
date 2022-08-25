import React from 'react'
import styled from "styled-components"
import {Center} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CareerNavbar = () => {
  return (
   <Wrapper>
    <NavbarWrapper1>
        <Div>JOB SEARCH </Div>
        <Div>WORK FROM HOME JOBS</Div>
        <Div>FREE JOB ALERT</Div>
        <Div>PREMIUM SERVICES</Div>
        <Div>FRESHERS PAID INTERNSHIP JOBS</Div>
    </NavbarWrapper1>

    <div>
      <div></div>
        <div>
          <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/monster-logo-1.png" />
        </div>
        <div>
        <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
        </div>
    </div>

    <NavbarWrapper2>
        <LDiv>CAREER MANAGEMENT</LDiv>
        <LDiv>CAREER WOMEN</LDiv>
        <LDiv>COVID-19 CAREER ADVICE</LDiv>
        <LDiv>INTERVIEW TIPS</LDiv>
        <LDiv>JOB SEARCH STRATEGIES</LDiv>
        <LDiv>CATEGORIES</LDiv>

    </NavbarWrapper2>
   </Wrapper>
  )
}

export default CareerNavbar



const Wrapper = styled.div`
display: grid;
grid-template-rows: repeat(3, 1fr);
font-weight: 700;
font-size: 14px;
line-height: 48px;
margin-top:10px;
border-bottom: 1px solid #eaeae1
`
const NavbarWrapper1 = styled.div`
display: flex;
padding: 0px 200px 10px 150px;
height: 50px;
gap:25px;
`
const NavbarWrapper2 = styled.div`
display: Flex;
height: 50px;
justify-content: space-around;
padding: 5px 70px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 1px 0px;
`

const Div= styled.div`
cursor: pointer;
&:hover{
  border-bottom: 3px solid #0066ff;
}`

const LDiv= styled.div`
cursor: pointer;
&:hover{
  color:  #5d4da8;
}`
