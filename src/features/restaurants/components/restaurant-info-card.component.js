import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.sizes[1]};
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  backgroundcolor: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Bar Bodega Carol",
    icon,
    photos = ["https://media.timeout.com/images/102872346/image.jpg"],
    address = "Calle Falsa, 123",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
