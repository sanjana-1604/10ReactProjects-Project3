import style from "styled-components"


export const Button = style.button`

background-color: black;
color: white;
padding:10px;
width:220px;
border-radius:5px;
padding:10px 18px ;
font-weight:600;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor:pointer;
&:hover
{
background:white;
border: 1px solid black;
color:black;
transition: 0.3s background ease-in;
}
`
export const OutlineButton = style(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`