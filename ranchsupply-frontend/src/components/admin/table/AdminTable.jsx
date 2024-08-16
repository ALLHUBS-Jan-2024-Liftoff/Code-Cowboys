import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import * as productService from '../../../services/ProductService';
import * as categoryService from '../../../services/CategoryService';

const AdminTable = ({ rows, refreshData, type }) => {
  const [editingCell, setEditingCell] = useState({ id: null, field: null });
  const [updatedRow, setUpdatedRow] = useState({});

  const handleDelete = async (id) => {
    try {
      if (type === 'products') {
        await productService.deleteProduct(id);
      } else {
        await categoryService.deleteCategory(id);
      }
      refreshData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleCellClick = (row, field) => {
    setEditingCell({ id: row.productId || row.categoryId, field });
    setUpdatedRow({ ...row });
  };

  const handleBlur = async () => {
    try {
      const id = editingCell.id;
      if (type === 'products') {
        const updatedProduct = {
          ...updatedRow,
          price: parseFloat(updatedRow.price),
          discountedPrice: parseFloat(updatedRow.discountedPrice),
          quantity: parseInt(updatedRow.quantity, 10),
          category: {
            categoryId: updatedRow.category.categoryId,
            categoryTitle: updatedRow.category.categoryTitle,
            description: updatedRow.category.description
          },
          updatedAt: new Date()
        };
        await productService.updateProduct(id, updatedProduct);
      } else {
        const updatedCategory = {
          ...updatedRow,
          updatedAt: new Date()
        };
        await categoryService.updateCategory(id, updatedCategory);
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
    if (editingCell.id === (row.productId || row.categoryId) && editingCell.field === fieldName) {
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
    <Table striped bordered hover>
      <thead>
        <tr>
          {type === 'products' && (
            <>
              <th>Product ID</th>
              <th>Category Title</th>
              <th>Brand</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discounted Price</th>
              <th>Quantity</th>
              <th>Product Image</th>
              <th>Size</th>
              <th>Created At</th>
              <th>Updated At</th>
            </>
          )}
          {type === 'categories' && (
            <>
              <th>Category ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Updated At</th>
            </>
          )}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.productId || row.categoryId}>
            {type === 'products' && (
              <>
                <td>{row.productId}</td>
                <td>{renderCell(row, 'categoryTitle', row.category?.categoryTitle)}</td>
                <td>{renderCell(row, 'brand', row.brand)}</td>
                <td>{renderCell(row, 'title', row.title)}</td>
                <td>{renderCell(row, 'description', row.description)}</td>
                <td>{renderCell(row, 'price', row.price)}</td>
                <td>{renderCell(row, 'discountedPrice', row.discountedPrice)}</td>
                <td>{renderCell(row, 'quantity', row.quantity)}</td>
                <td>{renderCell(row, 'productImage', row.productImage)}</td>
                <td>{renderCell(row, 'size', row.size)}</td>
                <td>{row.createdAt}</td>
                <td>{row.updatedAt}</td>
              </>
            )}
            {type === 'categories' && (
              <>
                <td>{row.categoryId}</td>
                <td>{renderCell(row, 'title', row.title)}</td>
                <td>{renderCell(row, 'description', row.description)}</td>
                <td>{row.createdAt}</td>
                <td>{row.updatedAt}</td>
              </>
            )}
            <td>
              <Button
                variant="danger"
                onClick={() => handleDelete(row.productId || row.categoryId)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminTable;
