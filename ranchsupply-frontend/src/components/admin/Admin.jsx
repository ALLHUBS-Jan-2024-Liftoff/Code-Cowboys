import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Tab, Tabs, Modal } from 'react-bootstrap';
import AdminTable from './table/AdminTable';
import * as productService from '../../services/ProductService';
import * as categoryService from '../../services/CategoryService';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({
    brand: '',
    title: '',
    description: '',
    price: '',
    discountedPrice: '',
    quantity: '',
    productImage: '',
    size: '',
    categoryId: '',  // Ensure this matches the backend expectation
    categoryTitle: '',
    categoryDescription: ''
  });

  useEffect(() => {
    if (activeTab === 'products') {
      loadProducts();
    } else {
      loadCategories();
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

  const refreshData = () => {
    if (activeTab === 'products') {
      loadProducts();
    } else {
      loadCategories();
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
          discountedPrice: parseFloat(newItem.discountedPrice),
          quantity: parseInt(newItem.quantity, 10),
          productImage: newItem.productImage,
          size: newItem.size,
          category: {
            categoryId: parseInt(newItem.categoryId, 10),
            categoryTitle: newItem.categoryTitle,
            description: newItem.categoryDescription
          },
          createdAt: new Date(),
          updatedAt: new Date()
        };
        await productService.addProduct(newProduct);
      } else {
        const newCategory = {
          categoryTitle: newItem.title,
          description: newItem.description,
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
      </Tabs>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{activeTab === 'products' ? 'Add Product' : 'Add Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {activeTab === 'products' ? (
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

                <Form.Group controlId="formCategoryDescription">
                  <Form.Label>Category Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category description"
                    name="categoryDescription"
                    value={newItem.categoryDescription}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group controlId="formTitle">
                  <Form.Label>Category Title</Form.Label>
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
