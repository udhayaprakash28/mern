import { useState } from 'react';
import Product from './Product';

const App = () => {
  const [products, setProducts] = useState([
    { id: 101, name: 'Chocolate', inStock: true },
    { id: 102, name: 'Groceries', inStock: false },
    { id: 103, name: 'Veggies', inStock: true },
  ]);

  const [backgroundColor, setBackgroundColor] = useState('#f5f5f5');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [address, setAddress] = useState('');
  const [savedCustomer, setSavedCustomer] = useState(null);

  const toggleStatus = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, inStock: !product.inStock }
          : product
      )
    );
  };

  const changeBackground = () => {
    const colors = ['#f5f5f5', '#ffe4e1', '#d4edda', '#d1ecf1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  const saveCustomerDetails = () => {
    const customerData = {
      name: customerName,
      email: customerEmail,
      address: address,
    };
    setSavedCustomer(customerData);
    setCustomerName('');
    setCustomerEmail('');
    setAddress('');
  };

  return (
    <div
      className="bgchange"
      style={{
        backgroundColor: backgroundColor,
        transition: 'background-color 0.8s ease',
        padding: '20px',
      }}
    >
      <h1>Departmental Store Provision System</h1>
      <center><button onClick={changeBackground} style={{ marginBottom: '20px' }}>
        Change Color
      </button></center>
      <Product products={products} onToggle={toggleStatus} />
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Customer Details</h2>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter Customer Name"
          style={{
            padding: '10px',
            fontSize: '18px',
            width: '60%',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <br />
        <input
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          placeholder="Enter Customer Email"
          style={{
            padding: '10px',
            fontSize: '18px',
            width: '60%',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address"
          style={{
            padding: '10px',
            fontSize: '18px',
            width: '60%',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <br />
        <button
          onClick={saveCustomerDetails}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Save Customer Details
        </button>

        {savedCustomer && (
          <div
            style={{
              marginTop: '20px',
              fontSize: '18px',
              color: '#333',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>Saved Customer Details</h3>
            <p>
              <strong>Name:</strong> {savedCustomer.name}
            </p>
            <p>
              <strong>Email:</strong> {savedCustomer.email}
            </p>
            <p>
              <strong>Address:</strong> {savedCustomer.address}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;