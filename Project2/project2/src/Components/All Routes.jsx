import { Routes, Route } from "react-router-dom";
import Tata from "../Pages/Tata";
import Medicine from "../Pages/Medicine";
import Labtest from "../Pages/Labtest";
import Consult from "../Pages/Consult Docter";
import Cancer from "../Pages/Cancer Care";
import PartnerShip from "../Pages/Partnership";
import CarePlan from "../Pages/Care Plan";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
// import Card from "../Pages/Card";
import Diabetes from "../Pages2/Diabatese";
import DiabateseView from "../Pages2/DiabateseMoreView";
import HeartCare from "../Pages2/Heart Care";
import CardPage from "../Pages/Card";
import ProtectedRoute from "../ProtectedRoute";
import HeartCareView from "../Pages2/Heart CareView";
import StomachCare from "../Pages2/StomachCare";
import StomachCareView from "../Pages2/StomachCareView";
import LiverCare from "../Pages2/LiverCare";
import LiverCareView from "../Pages2/LiverCareView";
import KidneyCare from "../Pages2/KidneyCare";
import KidneyCareView from "../Pages2/KidneyCareView";
import EyeCare from "../Pages2/EyeCare";
import EyeCareView from "../Pages2/EyeCareView";

// Ayurveda
import Chaulai from "../Pages2/Chaulai";
import Patha from "../Pages2/Patha";
import Blackberry from "../Pages2/Blackberry";
import Kutki from "../Pages2/Kutki";

// card page

import CardPage2 from "../Pages/Card2";
import CardPage3 from "../Pages/Card3";
import CardPage4 from "../Pages/Card4";
import CardPage5 from "../Pages/Card5";
import CardPage6 from "../Pages/Card6";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<Tata />} />} />
      <Route
        path="/Medicine"
        element={<ProtectedRoute element={<Medicine />} />}
      />
      <Route
        path="/Labtest"
        element={<ProtectedRoute element={<Labtest />} />}
      />
      <Route
        path="/Consult"
        element={<ProtectedRoute element={<Consult />} />}
      />
      <Route path="/Cancer" element={<ProtectedRoute element={<Cancer />} />} />
      <Route
        path="/Partnership"
        element={<ProtectedRoute element={<PartnerShip />} />}
      />
      <Route
        path="/CarePlan"
        element={<ProtectedRoute element={<CarePlan />} />}
      />
      <Route
        path="/Card/:id"
        element={<ProtectedRoute element={<CardPage />} />}
      />
      <Route
        path="/Diabetes"
        element={<ProtectedRoute element={<Diabetes />} />}
      />
      <Route
        path="/Diabetes/View/:id"
        element={<ProtectedRoute element={<DiabateseView />} />}
      />
      <Route
        path="/Heart/Care"
        element={<ProtectedRoute element={<HeartCare />} />}
      />
      <Route
        path="/Heart/Care/View/:id"
        element={<ProtectedRoute element={<HeartCareView />} />}
      />
      <Route
        path="/Stomach/Care"
        element={<ProtectedRoute element={<StomachCare />} />}
      />
      <Route
        path="/Stomach/Care/View/:id"
        element={<ProtectedRoute element={<StomachCareView />} />}
      />
      <Route
        path="/Liver/Care"
        element={<ProtectedRoute element={<LiverCare />} />}
      />
      <Route
        path="/Liver/Care/View/:id"
        element={<ProtectedRoute element={<LiverCareView />} />}
      />
      <Route
        path="/Kidney/Care"
        element={<ProtectedRoute element={<KidneyCare />} />}
      />

      <Route
        path="/Kidney/Care/view/:id"
        element={<ProtectedRoute element={<KidneyCareView />} />}
      />
      <Route
        path="/Eye/Care"
        element={<ProtectedRoute element={<EyeCare />} />}
      />
      <Route
        path="/Eye/Care/View/:id"
        element={<ProtectedRoute element={<EyeCareView />} />}
      />

      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />

      {/* Ayurveda page*/}

      <Route path="/Chaulai" element={<ProtectedRoute element={<Chaulai/>} />}  />

      <Route path="/Patha" element={<ProtectedRoute  element={<Patha/>} />}  />

      <Route path="/Blackberry" element={<ProtectedRoute element={<Blackberry/>}  />}  />

      <Route path="/Kutki" element={<ProtectedRoute element={<Kutki/>}  />}  />

      {/* for Card */}

      <Route path="/Card2/:id" element={<ProtectedRoute  element={<CardPage2/>}  />}    />
      <Route path="/Card3/:id" element={<ProtectedRoute  element={<CardPage3/>}  />}    />
      <Route path="/Card4/:id" element={<ProtectedRoute  element={<CardPage4/>}  />}    />
      <Route path="/Card5/:id" element={<ProtectedRoute  element={<CardPage5/>}  />}    />
      <Route path="/Card6/:id" element={<ProtectedRoute  element={<CardPage6/>}  />}    />




    </Routes>
  );
}
