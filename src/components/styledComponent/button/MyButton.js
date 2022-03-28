import styled from "styled-components";

 export const MyButton = styled.button`

    background-color: ${(props =>(props.renk ? "blue" : "purple"))};
    border: none;
    margin: 2px;
    color: #fff;
    display: inline-block;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 25px;






`;
// export default MyButton