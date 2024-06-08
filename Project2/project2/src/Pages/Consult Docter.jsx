import "./Consult.css";
import Footer from "../Components/Footer";

export default function Consult() {
  return (
    <>
      <div className="Consult-div">
        <div className="Consult-div1">
          <img
            src="http://onemg.gumlet.io/marketing/5e7341e1-0637-4703-a7dc-aa8ea920769b.png"
            alt="logo"
            className="Consult-img1"
          />

          <h4 className="Consult-h4">
            Free consultation and more benefits with Care Plan membership.
          </h4>
        </div>
        {/*  */}

        <div className="Consult-div2">
          <div className="Consult-div3">
            <div className="Consult-div4">
              <img
                src="https://www.1mg.com/images/confidential.svg"
                alt="logo"
                className="Consult-img2"
              />
              <h2 className="Consult-h2">100% Confidential</h2>
              <p className="Consult-p">
                All advice & consultations are completely confidential. You can
                also delete chats whenever you want.
              </p>
            </div>
            <div className="Consult-div4">
              <img
                src="https://www.1mg.com/images/certified.svg"
                alt="logo"
                className="Consult-img2"
              />
              <h2 className="Consult-h2">Certified Doctors</h2>
              <p className="Consult-p">
                We offer quality healthcare through our network of certified and
                experienced doctors.
              </p>
            </div>
            <div className="Consult-div4">
              <img
                src="https://www.1mg.com/images/convenience.svg"
                alt="logo"
                className="Consult-img2"
              />
              <h2 className="Consult-h2">Convenience</h2>
              <p className="Consult-p">
                Forget the hassle of long queues and rush hour. Seek expert
                opinion anytime, anywhere.
              </p>
            </div>
            <div className="Consult-div4">
              <img
                src="https://www.1mg.com/images/costEffective.svg"
                alt="logo"
                className="Consult-img2"
              />
              <h2 className="Consult-h2">Cost Effective</h2>
              <p className="Consult-p">
                We provide medical assistance on non urgent queries for free.
                Fee starting at ₹50 for faster response to queries
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <h1 className="Consult-h1">Frequently Asked Questions</h1>

        {/*  */}

        <div className="Consult-div5">
          <h3 className="Consult-h3">
            When will I get an answer to my query? What happens if I don’t get a
            response?
          </h3>
          <p className="Consult-p1">
            If you opt for a free consult, then we make sure the doctor replies
            within 24 to 48 hours. In case of a paid consult, you will receive a
            reply within 2-4 business hours. However, if you do not get any
            response within the stipulated time, we will refund your money back
            into your account.
          </p>
          <hr />
          <h3 className="Consult-h3">Who are the consulting doctors?</h3>
          <p className="Consult-p1">
            All the doctors are registered medical practitioners. Along with
            qualifying degrees - experience, research and track-record of
            practice are taken into account before a doctor is credentialed with
            Tata 1mg and is given access to answer patient queries.
          </p>
          <hr />
          <h3 className="Consult-h3">
            Will the doctor be able to resolve my issue?
          </h3>
          <p className="Consult-p1">
            Our doctors will give you expert advice on your problem and help you
            identify next steps which may include further tests, medicine
            recommendation or lifestyle tips. Few cases require face-to-face
            examination and we do ask patients to share pictures or reports if
            they can, for a conclusive diagnosis.
          </p>
          <hr />
          <h3 className="Consult-h3">
            Is my consultation private with my doctor?
          </h3>
          <p className="Consult-p1">
            Privacy of data is one of the fundamental human rights and we at
            Tata 1mg understand that. All your medical history and online
            consultation with us are completely private and confidential. We are
            compliant with industry standards to ensure your consultations are
            securely stored.
          </p>
          <hr />
          <h3 className="Consult-h3">
            For how long is the consultation valid?
          </h3>
          <p className="Consult-p1">
            In the case of a paid consult, you can follow-up with your doctor
            for up to 3 days. In case you opt for a free consult, follow-up
            questions are valid for one day only.
          </p>
          <hr />
          <h3 className="Consult-h3">Do you have a refund policy?</h3>
          <p className="Consult-p1">We have a “take-it-easy” policy. If for any reason you’re not convinced with your online consultation, you can write to us at contact@1mgdoctors.com and we will review the consult with the doctor - seeking clarifications on your queries that were answered. 100% refund will be given in genuine cases.</p>
          
        </div>

        {/*  */}
        <Footer/>
        {/*  */}
      </div>
    </>
  );
}
