import React from "react";
import { useState, useEffect } from "react";
import {
  ChakraProvider,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tfoot,
  Tbody,
  Td,
} from "@chakra-ui/react";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (data) => {
    let res = await axios.get("http://localhost:3001/apartments");
    setData([...res.data]);
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Block</Th>
            <Th>Number</Th>
            <Th>Residents</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((ele) => {
            return (
              <Tr key={ele.id}>
                <Td>{ele.type}</Td>
                <Td>{ele.block}</Td>
                <Td>{ele.number}</Td>
                <Td>{ele.residents}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
