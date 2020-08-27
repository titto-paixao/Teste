import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   flex:1;
   padding-top:20px;
   background-color:#dce4ef;
`;

export const Header = styled.View`
   flex-direction:row;
   height:50px;
    align-items:center;
    margin-top:15px;
    margin-left:20px;
    margin-right:30px;
    justify-content:space-between;
`;

export const TextHeader = styled.Text`
   font-size:26px;
   font-family:"Roboto_700Bold";
   color:#586576;
`;

export const Section = styled.View`
   flex:1;
   width:100%;
   background-color:#f7f8fc;
   padding:20px;
`;

export const TitleSection = styled.Text`
    padding-left:5px;
    padding-bottom:7px;
    font-size:40px;
    font-family:"Roboto_700Bold";
    color:#778899;
`;

export const Items = styled.View`
    margin-bottom:10px;
    
    height:65px;
`;

export const TitleItem = styled.Text`
   font-size:18px;
   padding-bottom:5px;
   font-family:"Roboto_500Medium";
`;
export const SubTitleItem = styled.Text`
   font-size:14px;
   font-family:"Roboto_500Medium";
   color:#778899;
`;
export const Data = styled.Text`
   font-size:18px;
   font-family:"Roboto_500Medium";
   color:#778899;
`;
export const Span = styled.Text`
   font-size:18px;
   font-family:"Roboto_500Medium";
   color:#008000;
`;

export const TotalItem = styled.Text`
   font-size:14px;
   font-family:"Roboto_500Medium";
`;

export const Total = styled.Text`
   font-size:14px;
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

export const Local= styled.View`
    flex-direction:row;
    border-width:1px;
    border-color:#000;
    border-radius:10px;
    padding:15px;
    align-items:center;
    width:100%;
`;

export const TitleLocal= styled.Text`
    font-size:18px;
    font-family:"Roboto_500Medium";
    color:#1d2236;
`;

export const Image = styled.Image`
    border-radius:10px;
    height:180px;
    width:100%;
    margin-top:10px;
`;