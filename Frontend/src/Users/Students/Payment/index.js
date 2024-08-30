import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './Success';


const Payment = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Select Payment Method</h2>
      <div className="nav nav-tabs mb-4" id="paymentTabs" role="tablist">
        <a className="nav-item nav-link active" id="creditCard-tab" data-bs-toggle="tab" href="#creditCard" role="tab">Credit Card</a>
        <a className="nav-item nav-link" id="netBanking-tab" data-bs-toggle="tab" href="#netBanking" role="tab">Net Banking</a>
        <a className="nav-item nav-link" id="paypal-tab" data-bs-toggle="tab" href="#paypal" role="tab">PayPal</a>
        <a className="nav-item nav-link" id="debitCard-tab" data-bs-toggle="tab" href="#debitCard" role="tab">Debit Card</a>
      </div>

      <div className="tab-content" id="paymentTabsContent">
        <div className="tab-pane fade show active" id="creditCard" role="tabpanel">
          <div className="card p-4 mb-4">
            <h3>Credit Card Info</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input type="text" className="form-control" id="amount" defaultValue="₹.00" />
              </div>
              <div className="mb-3">
                <label htmlFor="cardName" className="form-label">NAME ON CARD</label>
                <input type="text" className="form-control" id="cardName" defaultValue="Enter the name" />
                <label htmlFor="cardNumber" className="form-label mt-3">CARD NUMBER</label>
                <input type="text" className="form-control" id="cardNumber" defaultValue="0000-0000-0000-0000" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <label htmlFor="expiryMonth" className="form-label">EXPIRATION</label>
                  <div className="d-flex">
                    <input type="number" className="form-control me-2" id="expiryMonth" defaultValue="0" min="1" />
                    <input type="number" className="form-control" id="expiryYear" defaultValue="2000" min="1" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cvv" className="form-label">CVV NUMBER</label>
                  <input type="password" className="form-control" id="cvv" defaultValue="xxx" />
                </div>
              </div>
              <button type="button" className="btn btn-primary" onClick={() => handleNavigation('/student/success')}>SEND</button>
            </form>
          </div>
        </div>

        <div className="tab-pane fade" id="netBanking" role="tabpanel">
          <div className="card p-4 mb-4">
            <h3>Net Banking</h3>
            <form>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="bank" id="andhraBank" defaultChecked />
                <label className="form-check-label" htmlFor="andhraBank">SBI</label>
              </div>
              {/* Add other bank options here */}
              <button type="button" className="btn btn-primary mt-3" onClick={() => handleNavigation('/student/success')}>CONTINUE</button>
            </form>
          </div>
        </div>

        <div className="tab-pane fade" id="paypal" role="tabpanel">
          <div className="card p-4 mb-4">
            <h3>PayPal</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="paypalEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="paypalEmail" defaultValue="name@email.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="paypalPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="paypalPassword" defaultValue="PASSWORD" />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me?</label>
              </div>
              <button type="button" className="btn btn-primary mt-3" onClick={() => handleNavigation('/student/success')}>LOGIN</button>
            </form>
          </div>
        </div>

        <div className="tab-pane fade" id="debitCard" role="tabpanel">
          <div className="card p-4 mb-4">
            <h3>Debit Card Info</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="amountDebit" className="form-label">Amount</label>
                <input type="text" className="form-control" id="amountDebit" defaultValue="₹.00" />
              </div>
              <div className="mb-3">
                <label htmlFor="cardNameDebit" className="form-label">NAME ON CARD</label>
                <input type="text" className="form-control" id="cardNameDebit" defaultValue="Enter the name" />
                <label htmlFor="cardNumberDebit" className="form-label mt-3">CARD NUMBER</label>
                <input type="text" className="form-control" id="cardNumberDebit" defaultValue="0000-0000-0000-0000" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <label htmlFor="expiryMonthDebit" className="form-label">EXPIRATION</label>
                  <div className="d-flex">
                    <input type="number" className="form-control me-2" id="expiryMonthDebit" defaultValue="6" min="1" />
                    <input type="number" className="form-control" id="expiryYearDebit" defaultValue="1988" min="1" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cvvDebit" className="form-label">CVV NUMBER</label>
                  <input type="password" className="form-control" id="cvvDebit" defaultValue="xxx" />
                </div>
              </div>
              <button type="button" className="btn btn-primary" onClick={() => handleNavigation('/student/success')}>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
