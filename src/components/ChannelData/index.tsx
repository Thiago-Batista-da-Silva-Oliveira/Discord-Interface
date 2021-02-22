import React from 'react';
import ChannelMessage from '../ChannelMessage'

 import { Container, Messages, InputWrapper,Input,InputIcon } from './styles';

const ChannelData: React.FC = () => {
  return(
       <Container>
           <Messages>
               <ChannelMessage
                 author= "Thiago Oliveira"
                 date = "15/10/2021"
                 content= "teste"
               />

                <ChannelMessage
                 author= "Player2"
                 date = "15/10/2021"
                 content= "teste"
                 hasMention
                 isBot
               />
           </Messages>

           <InputWrapper>
             <Input placeholder="Conversar em #Chat-Livre"/>
             <InputIcon/>
           </InputWrapper>
       </Container>
  )
  ;
}

export default ChannelData;