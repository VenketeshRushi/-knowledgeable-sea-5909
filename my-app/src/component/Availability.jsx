import { Box, Button, Container, Grid, GridItem, Heading, Img, Input, useStatStyles,Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Availability = () => {
    const [hotelData,setHotelData] = useState([])

    useEffect(()=>{
     getData()
    },[])

    const getData=async ()=>{
     const res=await axios.get("http://localhost:8080/results")
     const data=res.data
     setHotelData(data)

    }
    console.log(hotelData);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



  return (
    <div>
      <Container
        maxW="90vw"
        color="black"
        border="1px solid"
        borderColor="transparent"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        margin="auto"
        padding="30px"
        marginTop="40px"
      >
        <Heading fontSize="28px" textAlign="center" fontWeight="100">{"Goa"} Holiday Homes</Heading>
        <Heading fontSize="20px" textAlign="center" fontWeight="100" marginTop="20px">We have 300 Vacation Rentals - search by dates for availability</Heading>
        <Box height={"100px"} display="flex" alignItems="center" justifyContent="center">
            <Input padding="10px" placeholder="Check In" border="1px solid grey"></Input>
            <Input padding="10px" placeholder="Check Out" border="1px solid grey"></Input>
            <Input padding="10px" placeholder="Select Guests" border="1px solid grey"></Input>
            <Button padding="10px 60px" bg="#1e87f0" color="white" border="1px solid grey">SEARCH</Button>
        </Box>
      </Container>

      <Box
      maxW="90vw"
      color="black"
      margin="auto"
      marginTop="40px">


    {/* -----------------------Homes Goa----------------------------------------- */}
       
       
       
        <Heading fontSize="20px" fontWeight="400" >{"Goa"} Holiday Homes</Heading>

     
     <Box width="90vw" margin="auto" height="350px" marginTop="40px" >
       <Slider className="Slider-Hotels" {...settings}>
          {hotelData.map((el)=>{
            if(el.property_type=="Villa"){
             return <Box height="350px" >
                <Img width="100%" height="200px" src={el.images_large[1]}></Img>
                <Text marginTop="10px" fontWeight={"500"}>{el.title}</Text>
                <Text marginTop="10px" fontWeight={"300"}>{el.city}, {el.state_slug}, {el.country}</Text>
                <Box marginTop="10px" display={"flex"}  flexWrap="nowrap">
                {el.prop_tags.map((pt)=>{
                    return <Text fontWeight={"100"} fontSize="12px">{pt} | </Text>
                })}
                </Box> 

                <Text marginTop="30px" color="blue" fontWeight={"500"}>{el.starting_price_in_usd} Per night</Text>

             </Box>
            }
          })}
        </Slider>

        </Box>

{/* -----------------------Top Rated Hotels----------------------------------------- */}

        <Heading fontSize="20px" fontWeight="400" marginTop={"80px"}>{"Goa"} Top Rated Hotels</Heading>


        <Box width="90vw" margin="auto" height="350px" marginTop="40px" >
       <Slider className="Slider-Hotels" {...settings}>
          {hotelData.map((el)=>{
            if(el.property_type=="Apartment"){
                if(el.state_slug=="goa-11"){

                
             return <Box height="350px" >
                <Img width="100%" height="200px" src={el.images_large[1]}></Img>
                <Text marginTop="10px" fontWeight={"500"}>{el.title}</Text>
                <Text marginTop="10px" fontWeight={"300"}>{el.city}, {el.state_slug}, {el.country}</Text>
                <Box marginTop="10px" display={"flex"}  flexWrap="nowrap">
                {el.prop_tags.map((pt)=>{
                    return <Text fontWeight={"100"} fontSize="12px">{pt} | </Text>
                })}
                </Box> 

                <Text marginTop="30px" color="blue" fontWeight={"500"}>{el.starting_price_in_usd} Per night</Text>

             </Box>
            }
        }
        
          })}
        </Slider>

        </Box>


      
{/* -----------------------Top Rated Hotels----------------------------------------- */}
      
        </Box>
       

     
    </div>
  );
};
export default Availability;
