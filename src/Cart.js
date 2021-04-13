import React from "react";
import useEffect from "react";
import { Table,ShoppingCartIcon,Button } from 'evergreen-ui';
const Cart = ({ list }) => {
   return(
       <div>
   <Table size={40}>
        <Table.Head>
            <Table.TextHeaderCell>ProductName</Table.TextHeaderCell>
            <Table.TextHeaderCell>Price</Table.TextHeaderCell>
            <Table.TextHeaderCell>Quantity</Table.TextHeaderCell>
            <Table.TextHeaderCell>Total</Table.TextHeaderCell>
            <Table.TextHeaderCell></Table.TextHeaderCell>
        </Table.Head>
        <Table.Body>
            {
                list.map((item)=>(
                    <Table.Row id={item.id}>
                        <Table.Cell>{item.product}</Table.Cell>
                        <Table.Cell>$ {item.price}</Table.Cell>
                        <Table.Cell><Button appearance="success"><ShoppingCartIcon size={20} color={'success'}/></Button></Table.Cell>
                    </Table.Row>
                ))
                
            }
        </Table.Body>
   </Table>

    
    </div>
   )
}
export default Cart;