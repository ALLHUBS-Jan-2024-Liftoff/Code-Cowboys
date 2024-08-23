import React, { useState } from 'react';
import { Table, Form, Button, Container } from 'react-bootstrap';
import * as userService from '../../../services/UserService';
import * as orderService from '../../../services/OrderService';

const UsersAndOrdersTable = ({ rows, refreshData, type }) => {
  const [editingCell, setEditingCell] = useState({ id: null, field: null });
  const [updatedRow, setUpdatedRow] = useState({});

  const handleDelete = async (id) => {
    try {
      if (type === 'users') {
        await userService.deleteUser(id);
      } else if (type === 'orders') {
        await orderService.deleteOrder(id);
      }
      refreshData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleCellClick = (row, field) => {
    const id = row.id || row.userId || row.orderId;
    if (id) {
      setEditingCell({ id, field });
      setUpdatedRow({ ...row });
    } else {
      console.error('No valid ID found for editing');
    }
  };

  const handleBlur = async () => {
    try {
      const id = editingCell.id;
      if (type === 'users') {
        const updatedUser = {
          ...updatedRow,
        };
        await userService.updateUser(updatedUser);
      } else if (type === 'orders') {
        const updatedOrder = {
          ...updatedRow,
        };
        await orderService.updateOrder(id, updatedOrder);
      }
      setEditingCell({ id: null, field: null });
      refreshData();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderCell = (row, fieldName, fieldValue) => {
    if (editingCell.id === (row.id || row.userId || row.orderId) && editingCell.field === fieldName) {
      return (
        <Form.Control
          type="text"
          name={fieldName}
          value={updatedRow[fieldName] || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      );
    }
    return (
      <div onClick={() => handleCellClick(row, fieldName)}>
        {fieldValue}
      </div>
    );
  };

  return (
    <Container fluid>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            {type === 'users' && (
              <>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Role</th>
              </>
            )}
            {type === 'orders' && (
              <>
                <th>Order ID</th>
                <th>Order Name</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Order Amount</th>
                <th>Shipping Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Shipping Phone</th>
                <th>Delivery Date</th>
              </>
            )}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id || row.userId || row.orderId}>
              {type === 'users' && (
                <>
                  <td>{row.username}</td>
                  <td>{renderCell(row, 'firstName', row.firstName)}</td>
                  <td>{renderCell(row, 'lastName', row.lastName)}</td>
                  <td>{renderCell(row, 'email', row.email)}</td>
                  <td>{renderCell(row, 'phoneNumber', row.phoneNumber)}</td>
                  <td>{renderCell(row, 'address', row.address)}</td>
                  <td>{renderCell(row, 'city', row.city)}</td>
                  <td>{renderCell(row, 'state', row.state)}</td>
                  <td>{renderCell(row, 'zipCode', row.zipCode)}</td>
                  <td>{renderCell(row, 'role', row.role)}</td>
                </>
              )}
              {type === 'orders' && (
                <>
                  <td>{row.orderId}</td>
                  <td>{renderCell(row, 'orderName', row.orderName)}</td>
                  <td>{renderCell(row, 'orderStatus', row.orderStatus)}</td>
                  <td>{renderCell(row, 'paymentStatus', row.paymentStatus)}</td>
                  <td>{renderCell(row, 'orderAmount', row.orderAmount)}</td>
                  <td>{renderCell(row, 'shippingAddress', row.shippingAddress)}</td>
                  <td>{renderCell(row, 'city', row.city)}</td>
                  <td>{renderCell(row, 'state', row.state)}</td>
                  <td>{renderCell(row, 'zipCode', row.zipCode)}</td>
                  <td>{renderCell(row, 'shippingPhone', row.shippingPhone)}</td>
                  <td>{renderCell(row, 'deliveryDate', row.deliveryDate)}</td>
                </>
              )}
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(row.id || row.userId || row.orderId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersAndOrdersTable;
