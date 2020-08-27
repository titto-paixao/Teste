import React from 'react';
import { View } from 'react-native';

import {useNavigation} from '@react-navigation/native'

import {
  Container,
  Header,
  TextHeader,
  Section,
  TitleSection,
  Items,
  TitleItem,
  SubTitleItem,
  Footer,
  TitleTotal,
  ValorTotal,
  Total
} from './styles';

import {Feather, FontAwesome} from '@expo/vector-icons'

const FirstScreen = () => {
  const navigation = useNavigation()

  return(
    <Container>
      <Header>
        <TextHeader>
          Setembro
        </TextHeader>
        <Feather name="search" size={20} color="#586576" />
      </Header>

      <Section>
        <TitleSection>22 sexta </TitleSection>
        <Items onPress={() => navigation.navigate("SecondScreen")}>
          <View>
          <TitleItem>Alimentação Restaurante</TitleItem>
            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#586576" style={{marginRight:5}}/>           
              <SubTitleItem>Alimentação</SubTitleItem>
            </View>
          </View>

            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#008000" style={{marginRight:5}}/>                 
              <Total>R$26,00</Total>
            </View>

        </Items>
        
        <Items onPress={() => navigation.navigate("SecondScreen")}>
          <View>
          <TitleItem>Alimentação Restaurante</TitleItem>
            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#586576" style={{marginRight:5}}/>           
              <SubTitleItem>Alimentação</SubTitleItem>
            </View>
          </View>

            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#008000" style={{marginRight:5}}/>                 
              <Total>R$26,00</Total>
            </View>

        </Items>
        
      </Section>
      
      <Section>
        <TitleSection>20 quarta </TitleSection>
        <Items onPress={() => navigation.navigate("SecondScreen")}>
          <View>
          <TitleItem>Alimentação Restaurante</TitleItem>
            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#586576" style={{marginRight:5}}/>           
              <SubTitleItem>Alimentação</SubTitleItem>
            </View>
          </View>

            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#008000" style={{marginRight:5}}/>                 
              <Total>R$26,00</Total>
            </View>

        </Items>
        
        <Items onPress={() => navigation.navigate("SecondScreen")}>
          <View>
          <TitleItem>Alimentação Restaurante</TitleItem>
            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#586576" style={{marginRight:5}}/>           
              <SubTitleItem>Alimentação</SubTitleItem>
            </View>
          </View>

            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#008000" style={{marginRight:5}}/>                 
              <Total>R$26,00</Total>
            </View>

        </Items>
        
      </Section>
      
      <Section>
        <TitleSection>14 segunda </TitleSection>
        <Items onPress={() => navigation.navigate("SecondScreen")}>
          <View>
          <TitleItem>Alimentação Restaurante</TitleItem>
            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#586576" style={{marginRight:5}}/>           
              <SubTitleItem>Alimentação</SubTitleItem>
            </View>
          </View>

            <View
              style={{
                flexDirection:"row",
                alignItems:"center",
              }}
            >
              <FontAwesome name="money" size={15} color="#008000" style={{marginRight:5}}/>                 
              <Total>R$26,00</Total>
            </View>

        </Items>
        
      </Section>

      

      <Footer>
        <TitleTotal>TOTAL</TitleTotal>
        <ValorTotal>R$490,00</ValorTotal>
      </Footer>

    </Container>
  );
}

export default FirstScreen;