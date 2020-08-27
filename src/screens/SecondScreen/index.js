import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native'

import {
  Container,
  Header,
  TitleSection,
  Items,
  TitleItem,
  SubTitleItem,
  Data,
  Section,
  Span,
  Local,
  TitleLocal,
  Image
} from './styles';

import {Feather, FontAwesome} from '@expo/vector-icons'

import image from '../../assets/image.png'

const SecondScreen = () => {
  const navigation = useNavigation()

  return(
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate("FirstScreen")}>
          <Feather name="arrow-left" size={20} color="#778899" />
        </TouchableOpacity>
        <Feather name="edit" size={20} color="#778899" />
      </Header>

      <View
        style={{
          flexDirection:"row",
          justifyContent:"flex-end",
          padding:15,
        }}
      >
        <Text style={{color:"#778899"}}>R$</Text>
        <TitleSection>26,00 </TitleSection>
      </View>

      <Section>
        <View>
          <View
            style={{
              flexDirection:"row",
              alignItems:"center",
              marginBottom:15
            }}
          >
            <FontAwesome name="calendar" size={25} color="#778899" style={{marginRight:5}}/>           
            <Data>14/09/19</Data>
          </View>
        </View>

        <View>
        <TitleItem>Alimentação Restaurante</TitleItem>
          <View
            style={{
              flexDirection:"row",
              alignItems:"center",
            }}
          >
            <FontAwesome name="money" size={15} color="#778899" style={{marginRight:5}}/>           
            <SubTitleItem>Alimentação</SubTitleItem>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection:"row",
              alignItems:"center",
              marginBottom:20,
              marginTop:20,
            }}
          >
            <FontAwesome name="money" size={25} color="#008000" style={{marginRight:5}}/>           
            <Span>Reembolsável</Span>
          </View>
        </View>

        <View
          style={{
            alignItems:"center"
          }}
        >

          <Local>
            <FontAwesome name="calendar-check-o" size={25} color="#778899" style={{marginRight:5}}/> 
            <View>
              <TitleLocal>Contele Filial de Santos - SP</TitleLocal>
              <SubTitleItem>14/09/19 - 13h50</SubTitleItem>
            </View>
          </Local>

          <Image source={image} />

        </View>
        
      </Section>

    </Container>
  );
}

export default SecondScreen;