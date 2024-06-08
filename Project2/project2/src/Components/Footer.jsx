import "./Footer.css";

export default function Footer() {
  return (
    <div id="div1">
      <div className="Footer-div2">
        <h3 className="Footer-h3">About</h3>

        <p className="Footer-p1">About Us</p>
        <p className="Footer-p1">Contact Us</p>
        <p className="Footer-p1">Press Coverage</p>
        <p className="Footer-p1">Careers</p>
        <p className="Footer-p1">Business Partnership</p>
        <p className="Footer-p1">Become A Health Partner</p>
        <p className="Footer-p1">Corporate Governance</p>
      </div>
      <div className="Footer-div2">
        <h3 className="Footer-h3">Our Policies</h3>
        <p className="Footer-p1">Privacy Policy</p>
        <p className="Footer-p1">Term And Condition</p>
        <p className="Footer-p1">Editorial Policy</p>
        <p className="Footer-p1">Return Policy</p>
        <p className="Footer-p1">Ip Policy</p>
        <p className="Footer-p1">Grievance Redressal Policy</p>
        <p className="Footer-p1">Fake Jobs and Fraud Disclaimer</p>
      </div>
      <div className="Footer-div2">
        <h3 className="Footer-h3">Our Services</h3>
        <p className="Footer-p1">Order Medicines</p>
        <p className="Footer-p1">Book Lab Tests</p>
        <p className="Footer-p1">Consult a Doctor</p>
        <p className="Footer-p1">Ayurveda Articles</p>
        <p className="Footer-p1">Hindi Articles</p>
        <p className="Footer-p1">Care Plane</p>
      </div>

      <div className="Footer-div2">
        <h3 className="Footer-h3">Our Payment App</h3>
        <img src="https://assets.pharmeasy.in/web-assets/_next/icons/gpay.svg" alt="Logo" className="Footer-img" />
        <img src="https://assets.pharmeasy.in/web-assets/_next/icons/paytm.svg" alt="Logo" className="Footer-img" />
        <img src="https://assets.pharmeasy.in/web-assets/_next/icons/amazon-pay.svg" alt="Logo" className="Footer-img" />
          {/* <img src="https://assets.pharmeasy.in/web-assets/_next/icons/phonepe.svg" alt="Logo" className="Footer-img" /> */}
      </div>
    </div>
  );
}
