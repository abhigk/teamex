import React from "react";
import { Element } from "react-scroll/modules";
import Coverflow from "react-coverflow";
import achiversData from "./achiversData";

export default class Achivers extends React.Component {
  render() {
    return (
      <Element id="achievers-teamex" name="achievers-teamex">
        <Coverflow
          displayQuantityOfSide={
            window.matchMedia("(max-width: 600px)").matches ? 1 : 2
          }
          navigation={false}
          enableScroll={false}
          clickable={true}
          active={0}
          backgroundColor={"red"}
          media={{
            "@media (max-width: 600px)": {
              width: "100%",
              height: "300px"
            },
            "@media (min-width: 900px)": {
              width: "960px",
              height: "600px"
            }
          }}
          id="testcover"
          style={{
            width: "100%",
            height: "400px"
          }}
        >
          {achiversData.map(({ img, alt = "" }, index) => (
            <img key={index} src={img} alt={alt} />
          ))}
        </Coverflow>
      </Element>
    );
  }
}
