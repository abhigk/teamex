import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Table } from "reactstrap";
import { mediaMin } from "../../../../shared/style";
import franchisedata from "./franchisedata";

export default () => (
  <Section id="franchise" className="pb-5">
    <Container>
      <Title>Our Franchise</Title>
      <Row>
        <Col>
          <TableWrapper>
            <MainTable>
              <thead>
                <th>
                  <p>Sr.</p>
                </th>

                <th>
                  <p>Name</p>
                </th>
                <th>
                  <p>Address</p>
                </th>
                <th>
                  <p>City</p>
                </th>
                {/* <th>
                  <p>Contact</p>
                </th> */}
              </thead>
              <tbody>
                {franchisedata.map(
                  ({ id, name, address, city, contact }, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{address}</td>
                      <td>{city}</td>
                      {/* <td>
                        <a href={`tel:${contact}`}>{contact}</a>
                      </td> */}
                    </tr>
                  )
                )}
              </tbody>
            </MainTable>
          </TableWrapper>
        </Col>
      </Row>
    </Container>
  </Section>
);
export const Title = styled("div")`
  text-align: center;
  font-size: 36px;
  text-transform: uppercase;
  color: #232526;
  margin-bottom: 20px;
`;
const Section = styled("section")``;

const TableWrapper = styled("div")`

  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    background: rgba(202, 202, 202, 0.51);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 6px;
  }
`;
const MainTable = styled(Table)`
  min-width: 600px;
  thead {
    th {
      border: 0;

      position: sticky;
      top: 0;
      background: #fff;
      z-index: 1;
      padding: 0;
      p {
        padding: 12px;
        border-bottom: 1px solid;
      }
    }
  }
`;
