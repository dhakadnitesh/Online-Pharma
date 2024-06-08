import { Link } from "react-router-dom";
import "./Shop By Health.css";

export default function ShopByHealth() {
  return (
    <>
      <p style={{ margin: "30px", marginLeft: "38px", fontFamily: "cursive" }}>
        Shop by health concerns
      </p>

      <div id="HealthPage">
        <Link className="a1" to="/Diabetes">
          <img
            className="img1"
            src="https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto"
            alt="Diabatice Logo"
          />
          <p className="p1">Diabetes</p>
        </Link>
      
        <Link className="a1" to="/Heart/Care">
          <img
            src="https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto"
            alt="Heart Care"
            className="img1"
          />
          <p className="p1">Heart Care</p>
        </Link>
        <Link className="a1"  to="/Stomach/Care" >
          <img
            src="https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto"
            alt="Stomach Care"
            className="img1"
          />
          <p className="p1">Stomach Care</p>
        </Link>
        <Link className="a1" to="/Liver/Care" >
          <img
            src="https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto"
            alt="Liver Care"
            className="img1"
          />
          <p className="p1">Liver Care</p>
        </Link>
        <Link className="a1" to="/Kidney/Care" >
          <img
            src="https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto"
            alt="Kidney Care"
            className="img1"
          />
          <p className="p1">Kidney Care</p>
        </Link>
        <Link className="a1" to="/Eye/Care"  >
          <img
            src="https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto"
            alt="Eye Care"
            className="img1"
          />
          <p className="p1">Eye Care</p>
        </Link>
      </div>
      {/*  */}
       {/* Ayurveda */}
       <p style={{ margin: "30px", marginLeft: "38px", fontFamily:"sans-serif" }}>
      Ayurveda
      </p>
      <div className="Ayurveda">
        <Link className="Ayurveda1" to="/Chaulai" >
          <img src="https://onemg.gumlet.io/ocom60qmlkxun5x5n5pa.jpg" alt="logo" className="Ayurveda-Img" />
          <p className="Ayurveda-p">Chaulai</p>
        </Link>
        {/*  */}
        <Link className="Ayurveda1"  to="/Patha" >
          <img src="https://onemg.gumlet.io/uy4eiywxbu68tmh3wuod.jpg" alt="logo" className="Ayurveda-Img" />
          <p className="Ayurveda-p">Patha</p>
        </Link>
        {/*  */}
        <Link className="Ayurveda1" to='/Blackberry'>
          <img src="https://onemg.gumlet.io/nlyhkusakfz3njqfppxp.jpg" alt="logo" className="Ayurveda-Img" />
          <p className="Ayurveda-p">Blackberry</p>
        </Link>
        {/*  */}
        <Link className="Ayurveda1" to="/Kutki">
          <img src="https://onemg.gumlet.io/h6hnml6s70kbxa1p6sf9.jpg" alt="logo" className="Ayurveda-Img" />
          <p className="Ayurveda-p">Kutki</p>
        </Link>
      </div>


      {/*  */}
      {/* Featured Brand */}
      <p style={{ margin: "30px", marginLeft: "38px", fontFamily: "cursive" }}>
      Featured brands
      </p>
      <div className="Featured-brands">
        <img src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717564176_Healthkart.png?format=auto" alt="logo" className="Featured-brands-img" />
        <img src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717480231_Morepen.png?format=auto" alt="logo" className="Featured-brands-img" />
        <img src="https://onemg.gumlet.io/diagnostics%2F2024-05%2F1717181436_Dabur.png?format=auto" alt="logo" className="Featured-brands-img" />
        <img src="https://onemg.gumlet.io/diagnostics%2F2024-05%2F1717181230_Cetaphil.png?format=auto" alt="logo" className="Featured-brands-img" />
        <img src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717480239_Baidyanath.png?format=auto" alt="logo" className="Featured-brands-img" />
        <img src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717564187_Nivea.png?format=auto" alt="logo" className="Featured-brands-img" />
        <img src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717564196_Derma+Co.png?format=auto" alt="logo" className="Featured-brands-img" />
        
        
       
      </div>
      {/*  */}
      {/* Ayurveda top brand */}

      <p style={{ margin: "30px", marginLeft: "38px", fontFamily: "cursive" }}>
      Ayurveda top brands
      </p>
      <div className="Ayurveda-Top-Brand">
        <img src="https://onemg.gumlet.io/image/upload/v1627648261/onneibznnitqsn5twumi.png?format=auto" alt="logo" className="Ayurveda-Top-Brand-Img" />
        <img src="https://onemg.gumlet.io/image/upload/v1627648303/dekl61bd9thu21vmypkm.png?format=auto" alt="logo" className="Ayurveda-Top-Brand-Img" />
        <img src="https://onemg.gumlet.io/image/upload/v1627648345/idgjl700nkz6w8lzvjwc.png?format=auto" alt="logo" className="Ayurveda-Top-Brand-Img" />
        <img src="https://onemg.gumlet.io/image/upload/v1627648394/yv774ayhbypuxi28dhs0.png?format=auto" alt="logo" className="Ayurveda-Top-Brand-Img" />
        <img src="https://onemg.gumlet.io/image/upload/v1627648428/xemgonnppssxvagkjxzd.png?format=auto" alt="logo" className="Ayurveda-Top-Brand-Img" />
        <img src="https://onemg.gumlet.io/image/upload/v1630927780/guiy84rk41kgofd5atft.png?format=auto" alt="logo" className="Ayurveda-Top-Brand-Img" />
        <img src="https://onemg.gumlet.io/image/upload/v1627648455/shxhntpjye31tu8frfjs.png?format=auto" alt="logo" className="Ayurveda-Top-Brand-Img" />
      </div>


      {/*  */}
      {/* Health Care Top Brand */}
      <p style={{ margin: "30px", marginLeft: "38px", fontFamily: "cursive" }}>
      Healthcare devices - top brands
      </p>
      <div className="Health-Care-Top-Brand">
         <img src="https://onemg.gumlet.io/25832f67-b59e-4c68-81a0-6b67ce0b1a6e.webp?format=auto" alt="logo" className="Health-Care-Top-Brand-Img" />
         <img src="https://onemg.gumlet.io/5b24fd4f-ddbe-4b53-b1d3-97107c44762b.webp?format=auto" alt="logo" className="Health-Care-Top-Brand-Img" />
         <img src="https://onemg.gumlet.io/c3015a12-3ac7-48d2-92c9-072bc9113010.webp?format=auto" alt="logo" className="Health-Care-Top-Brand-Img" />
         <img src="https://onemg.gumlet.io/c932de9c-ee8b-4edf-ae6b-8b9c882bcb79.webp?format=auto" alt="logo" className="Health-Care-Top-Brand-Img" />
         <img src="https://onemg.gumlet.io/751cc51d-a84e-499e-afe6-7f2197684471.webp?format=auto" alt="logo" className="Health-Care-Top-Brand-Img" />
         <img src="https://onemg.gumlet.io/d6f2e4a2-1dd8-43fe-ae99-fe61777f478d.webp?format=auto" alt="logo" className="Health-Care-Top-Brand-Img" />
         <img src="https://onemg.gumlet.io/32571bdc-487c-4ebe-98f9-9aa91464fd76.webp?format=auto" alt="logo" className="Health-Care-Top-Brand-Img" />
      </div>
      

      {/*  */}

     


    </>
  );
}
