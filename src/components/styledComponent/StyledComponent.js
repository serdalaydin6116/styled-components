import React from 'react';

import {MyButton} from './button/MyButton';
import Header from './Header/Header';
import Wrapper from './Wrapper/Wrapper';
import Link from './Link/Link';



const StyledComponent = () => {
  return (
    <Wrapper bgColor="bisque">
      <Header titleColor = "yellow">Hello COHORT-10</Header>
      <Link href='https://www.google.com' target="_blank" rel="noopener" secondary>Clarusway</Link>
      <MyButton renk>Mavi  Button</MyButton>
       <br />
      <MyButton>Mor  Button</MyButton>
    </Wrapper>
   
  )
}

export default StyledComponent;