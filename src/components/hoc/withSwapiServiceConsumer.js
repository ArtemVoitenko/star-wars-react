import React from "react";
import { SwapiServiceConsumer } from "../swapi-context/swapi-service-context";

const withSwapiServiceConsumer = () => Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          return <Wrapped>{...props} swapiService = {swapiService} /></Wrapped>;
        }}
      </SwapiServiceConsumer>
    );
  };
};
export default withSwapiServiceConsumer;
