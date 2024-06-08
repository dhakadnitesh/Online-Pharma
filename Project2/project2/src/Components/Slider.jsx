import React, { useEffect, useState } from 'react';
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image,Container } from '@chakra-ui/react';
import "./Slider.css"

const ImageSlider = () => {
  const images = [
    'https://onemg.gumlet.io/0c9aa6f4-1d6b-459c-8410-c2454248e0aa_1675409324.png?w=899&h=200&format=auto',
    'https://onemg.gumlet.io/9d46c129-a6c4-4770-a1bc-21de31328191_1700468301.png?w=899&h=200&format=auto',
    // 'https://onemg.gumlet.io/e84d656e-bd74-4e1b-a822-af2a2b035846_1708002794.jpg?w=899&h=200&format=auto',
    'https://osads.gumlet.io/onlinesales/image/upload/v1716787213/jwixcm7f2hcncawfcnhq.jpg',
    'https://onemg.gumlet.io/bb95bdaa-55e1-4d51-94d4-fa6e368877d3_1679553922.png?w=899&h=200&format=auto',
    'https://onemg.gumlet.io/33eab3f0-49a1-476d-8c1f-2fe4159bcf4d_1679394544.png?w=899&h=200&format=auto'
  ];

  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderValue(prevValue => (prevValue + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    console.log('Current slider value:', sliderValue);
  }, [sliderValue]);

  return (
    <Box width="100%" height="210px" mx="auto" textAlign="center" position="relative" mt="30px" id="box1">
      <Image src={images[sliderValue]} alt={`Slide ${sliderValue + 1}`} width="100%" height="100%" objectFit="cover" />
      <Slider
        aria-label="image-slider"
        value={sliderValue}
        min={0}
        max={images.length - 1}
        step={1}
        onChange={(val) => setSliderValue(val)}
        mt={4}
        position="absolute"
        bottom="10px"
        left="0"
        right="0"
        px="4"
      >
        <SliderTrack bg="transparent">
          <SliderFilledTrack bg="transparent" />
        </SliderTrack>
        <SliderThumb display="none" />
      </Slider>
    </Box>
  );
};

// for div1 text

 export function Container1(){

    return(
        <>

        <div style={{width:"100%",border:"1px solid none",padding:"20px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
            <p style={{textAlign:"center",fontFamily:"sans-serif",fontWeight:"500",fontSize:"20px",color:"#83746b"}}>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
</p>
        </div>
 
       </>
    )

}

// for div2 img

export function Container2(){
    return (
        <div  id="Container2" style={{width:"94%",border:"1px solid white",margin:"auto",marginTop:"20px",}}>

            <img src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png" alt="Care Plane" id="img1"/>
        </div>
    )
}

export default ImageSlider;

