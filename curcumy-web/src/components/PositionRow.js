import React from 'react';
import { Tr, Text} from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function PositionRow({row}) {
  return (
    <Tr><Link to="/edit-position"><Text>{row.portfolio}</Text></Link></Tr>
  );
  }