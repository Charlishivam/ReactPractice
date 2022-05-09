import styled from "styled-components";

export const Main = styled.div`
  color: blue;
  background-color: white;
`;

const colWidth = {
  12: (100 / 12) * 12,
  11: (100 / 12) * 11,
  10: (100 / 12) * 10,
  9: (100 / 12) * 9,
  8: (100 / 12) * 8,
  7: (100 / 12) * 7,
  6: (100 / 12) * 6,
  5: (100 / 12) * 5,
  4: (100 / 12) * 4,
  3: (100 / 12) * 3,
  2: (100 / 12) * 2,
  1: (100 / 12) * 1
};

export const Row = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: wrap;
  position: relative;
  border-radius: ${(props) => props.borderRadius};
`;

export const Col = styled.div`
  width: ${(props) =>
    props.width ? props.width : `${colWidth[props.col]}%` || "100%"};
  position: relative;
  box-sizing: border-box;
  margin: 20px;
  border: ${(props) => props.border}px solid black;
  background: ${(props) => props.bg};
  margin-left: ${(props) => props.ml || 0};
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background: ${(props) => props.bg};
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

`;




export const Select = styled.select``;

// Para ->  Select Box, Input , Routing-> 3 page
// props: heigth, width, padding(4), color , bg
