import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   flex:1;
   padding-top:20px;
   background-color:#f7f8fc;
`;

export const Header = styled.View`
   flex-direction:row;
   height:50px;
    align-items:center;
    margin-top:15px;
    margin-left:20px;
    margin-bottom:20px;
    margin-right:30px;
    justify-content:space-between;
`;

export const TextHeader = styled.Text`
   font-size:26px;
   font-family:"Roboto_700Bold";
   color:#586576;
`;

export const Section = styled.View`
   height:auto;
   width:100%;
`;

export const TitleSection = styled.Text`
    padding-left:20px;
    padding-bottom:5px;
    font-size:20px;
    font-family:"Roboto_500Medium";
    color:#9ca7ad;
`;

export const Items = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-bottom:7px;
    padding:20px;
    height:65px;
    width:100%;
    background-color:#fff;
`;

export const TitleItem = styled.Text`
   font-size:18px;
   font-family:"Roboto_500Medium";
`;
export const SubTitleItem = styled.Text`
   font-size:14px;
   font-family:"Roboto_500Medium";
   color:#586576;
`;

export const TotalItem = styled.Text`
   font-size:14px;
   font-family:"Roboto_700Bold";
`;

export const Total = styled.Text`
   font-size:16px;
   font-family:"Roboto_700Bold";
`;

export const Footer = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:20px;
    padding-bottom:10px;
`;
export const TitleTotal= styled.Text`
    font-size:20px;
    font-family:"Roboto_500Medium";
    color:#1d2236;
`;
export const ValorTotal= styled.Text`
    font-size:20px;
    font-family:"Roboto_500Medium";
    color:#1d2236;
`;