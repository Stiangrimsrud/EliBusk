import React, { useState } from "react";
import { FlatList } from "react-native";

//import components
import * as List from "../components/List";
import DeleteItem from "../components/DeleteItem";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import { H } from "../config/Typography";

const initialMessages = [
  {
    id: 1,
    fromUser: "Viktor",
    description:
      "Hi Viktor, thank you for your interest in my charger.  My charger is available ",
    image:
      "https://www.topphandball.no/wp-content/uploads/2020/11/viktorglatthardfoto-karlbraanaas-800x450.jpeg",
    dates: "May 10, 2020",
  },
  {
    id: 2,
    fromUser: "Stian",
    description:
      "Hi Emir, thank you for your interest in my charger. The charger is available ",
    image:
      "https://www.seher.no/images/67645000.jpg?imageId=67645000&width=980&height=559&compression=80",
    dates: "March 8, 2020",
  },
  {
    id: 3,
    fromUser: "Binai",
    description:
      "So cool you are interested, my charger is available from tommorow",
    image:
      "https://lindenytt.com/app/uploads/2015/11/10378960_823843671027267_2013781248126488678_n.jpg",
    dates: "Jan 20, 2020",
  },
];

const MessageScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefresing] = useState(false);

  const handleDelete = (message) => {
    const newMesages = messages.filter((m) => m.id !== message.id);
    setMessages(newMesages);
  };

  const handleNavigation = (item) => {
    console.log(item.fromUser);
    navigation.navigate("MessageDetail", item);
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <Header>
            <H>Messages</H>
          </Header>
        }
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <List.UserList
            title={item.fromUser}
            secondary={item.description}
            image={item.image}
            meta={item.dates}
            onPress={() => handleNavigation(item)}
            RightActions={() => (
              <DeleteItem onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <HLine />}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 45px 20px 0;
`;

const Header = styled.View`
  padding: 24px 0;
`;

const HLine = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 1px;
  background-color: ${Colors.lightgray};
`;

export default MessageScreen;
