import React, { useState, useEffect } from 'react';
import { Button, Form, Tab, Tabs, Modal } from 'react-bootstrap';
import AdminTable from './table/AdminTable';
import UsersAndOrdersTable from './table/UsersAndOrdersTable';
import * as productService from '../../services/ProductService';
import * as categoryService from '../../services/CategoryService';
import * as userService from '../../services/UserService';
import * as orderService from '../../services/OrderService';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({});

  useEffect(() => {
    if (activeTab === 'products') {
      loadProducts();
    } else if (activeTab === 'categories') {
      loadCategories();
    } else if (activeTab === 'users') {
      loadUsers();
    } else if (activeTab === 'orders') {
      loadOrders();
    }
  }, [activeTab]);

  const loadProducts = async () => {
    try {
      const productsData = await productService.getAllProducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const loadCategories = async () => {
    try {
      const categoriesData = await categoryService.getAllCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const loadUsers = async () => {
    try {
      const usersData = await userService.getAllUsers();
      setUsers(usersData);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const loadOrders = async () => {
    try {
      const ordersData = await orderService.getAllOrders();
      setOrders(ordersData);
    } catch (error) {
      console.error('Error loading orders:', error);
    }
  };

  const refreshData = () => {
    if (activeTab === 'products') {
      loadProducts();
    } else if (activeTab === 'categories') {
      loadCategories();
    } else if (activeTab === 'users') {
      loadUsers();
    } else if (activeTab === 'orders') {
      loadOrders();
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddItem = async () => {
    try {
      if (activeTab === 'products') {
        const newProduct = {
          brand: newItem.brand,
          title: newItem.title,
          description: newItem.description,
          price: parseFloat(newItem.price),
          discountedPrice: newItem.discountedPrice ? parseFloat(newItem.discountedPrice) : null,
          quantity: parseInt(newItem.quantity, 10),
          productImage: newItem.productImage,
          size: newItem.size ? newItem.size : null,
          category: {
            categoryId: parseInt(newItem.categoryId, 10),
          },
          createdAt: new Date(),
          updatedAt: new Date()
        };
        await productService.addProduct(newProduct);
      } else if (activeTab === 'categories') {
        const newCategory = {
          categoryTitle: newItem.categoryTitle,
          description: newItem.description,
          categoryImage: newItem.categoryImage,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        await categoryService.addCategory(newCategory);
      }
      refreshData();
      handleCloseModal();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Tabs
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)}
        className="mb-3"
      >
        <Tab eventKey="products" title="Products">
          <Button variant="primary" className="mb-3" onClick={handleShowModal}>
            Add Product
          </Button>
          <AdminTable rows={products} refreshData={refreshData} type="products" />
        </Tab>
        <Tab eventKey="categories" title="Categories">
          <Button variant="primary" className="mb-3" onClick={handleShowModal}>
            Add Category
          </Button>
          <AdminTable rows={categories} refreshData={refreshData} type="categories" />
        </Tab>
        <Tab eventKey="users" title="Users">
          <UsersAndOrdersTable rows={users} refreshData={refreshData} type="users" />
        </Tab>
        <Tab eventKey="orders" title="Orders">
          <UsersAndOrdersTable rows={orders} refreshData={refreshData} type="orders" />
        </Tab>
      </Tabs>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{`Add ${activeTab.slice(0, -1)}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {activeTab === 'products' && (
              <>
                <Form.Group controlId="formBrand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter brand"
                    name="brand"
                    value={newItem.brand}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={newItem.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    value={newItem.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    value={newItem.price}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formDiscountedPrice">
                  <Form.Label>Discounted Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter discounted price"
                    name="discountedPrice"
                    value={newItem.discountedPrice}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    name="quantity"
                    value={newItem.quantity}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formProductImage">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product image URL"
                    name="productImage"
                    value={newItem.productImage}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formSize">
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter size"
                    name="size"
                    value={newItem.size}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formCategoryId">
                  <Form.Label>Category ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category ID"
                    name="categoryId"
                    value={newItem.categoryId}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </>
            )}
            {activeTab === 'categories' && (
              <>
                <Form.Group controlId="formCategoryTitle">
                  <Form.Label>Category Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category title"
                    name="categoryTitle"
                    value={newItem.categoryTitle}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    value={newItem.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formCategoryImage">
                  <Form.Label>Category Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category image URL"
                    name="categoryImage"
                    value={newItem.categoryImage}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddItem}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
