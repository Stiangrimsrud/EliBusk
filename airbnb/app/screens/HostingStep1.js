import React from "react";
import { View } from "react-native";

//import components
import * as Button from "../components/Button";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../config/Typography";
import colors from "../config/colors";

//import data
import { hostdata } from "../data/hostdata";

const HostingStep1 = ({ navigation }) => {
  return (
    <Container>
      <Main>
        <Top>
          <Header>
            <Typography.H color={colors.red}>Register your charger</Typography.H>
            <View style={{ marginTop: 14, marginBottom: 20 }}>
              <Typography.P colors={colors.gray}>
              Free registration of various types of chargerss,
                 Share it.
              </Typography.P>
            </View>
            <BtnContainer>
              <Button.BtnContain
                label="Registration"
                color={colors.red}
                onPress={() => navigation.navigate("Hosting")}
              />
            </BtnContainer>
          </Header>
        </Top>
        <HostStory>
          <Card elevation={5}>
            <ImageContainer>
              <MainImage
                source={{
                  uri:
                    "https://image.shutterstock.com/image-photo/woman-charging-electro-car-electric-600w-1393632893.jpg",
                }}
              />
            </ImageContainer>
            <TextContainer>
              <View style={{ marginBottom: 8 }}>
                <Typography.H3>Listen to the host's story</Typography.H3>
              </View>

              <Typography.P colors={colors.gray}>
              Dorothy is a Oslo host who wants to share her charger with others.
              </Typography.P>
            </TextContainer>
          </Card>
        </HostStory>
      </Main>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 45px;
`;

const Main = styled.ScrollView``;

const Top = styled.View`
  flex: 1;
  padding: 24px;
`;

const HostStory = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: white;
`;

const Card = styled.View`
  background-color: #ffffff;
  height: 260px;
  border-radius: 12px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 140px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
`;

const MainImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.View`
  padding: 20px;
`;

const Header = styled.View`
  margin-bottom: 40px;
`;

const BtnContainer = styled.View`
  width: 50%;
`;

export default HostingStep1;
