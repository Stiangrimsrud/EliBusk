import React, { useState } from "react";
import { View } from "react-native";

//import components
import * as Button from "../components/Button";
import Counter from "../components/Counter";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../config/Typography";
import colors from "../config/colors";

//import redux
import { connect } from "react-redux";
import { addAdult, addChild, addInfant } from "../store/search";

const AddGuest = (props) => {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  const onNavigate = () => {
    props.addAdult(adult);
    props.addChild(children);
    props.addInfant(infant);
    props.navigation.navigate("ListStack");
  };

  return (
    <Container>
      <MainWrapper>
        <Flex>
          <View>
            <Typography.H3>EV</Typography.H3>
            <Typography.P color={colors.gray}>All-electric vehicles</Typography.P>
          </View>

          <View style={{ width: "30%" }}>
            <Counter
              result={adult}
              onMinus={(item) => setAdult(item)}
              onPlus={(item) => setAdult(item)}
            />
          </View>
        </Flex>
        <HLine />
        <Flex>
          <View>
            <Typography.H3>PHEV</Typography.H3>
            <Typography.P color={colors.gray}>Plug-in hybrid</Typography.P>
          </View>

          <View style={{ width: "30%" }}>
            <Counter
              result={children}
              onMinus={(item) => setChildren(item)}
              onPlus={(item) => setChildren(item)}
            />
          </View>
        </Flex>
        <HLine />
      </MainWrapper>
      <Next>
        <Left>
          <Button.BtnTxtUnderline
            color={colors.gray}
            label="Skip"
            onPress={() => props.navigation.navigate("ListStack")}
          />
        </Left>
        <BtnContainer>
          {/* {adult > 0 ? (
            <Button.IconButton
              iconName="search"
              label="다음"
              color={colors.red}
              disabled={false}
              onPress={() => onNavigate()}
            />
          ) : (
            <Button.IconButton
              iconName="search"
              label="다음"
              color={colors.lightgray}
              disabled={true}
            />
          )} */}
          {adult > 0 ? (
            <Button.BtnContain
              icon="search"
              label="Next"
              color={colors.red}
              size="small"
              disabled={false}
              onPress={() => onNavigate()}
            />
          ) : (
            <Button.BtnContain
              icon="search"
              label="Next"
              color={colors.lightgray}
              size="small"
              disabled={true}
            />
          )}
        </BtnContainer>
      </Next>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 26px;
`;

const Next = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const Left = styled.View``;

const BtnContainer = styled.View`
  width: 30%;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${colors.faintgray};
  margin: 20px 0;
`;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 10px 0;
`;

export default connect(null, { addAdult, addChild, addInfant })(AddGuest);
