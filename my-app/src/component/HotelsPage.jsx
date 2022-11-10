import { Box, Heading, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react"

const HotelsPage=()=>{
    const [hotelsData,setHotelsData] = useState([]);

useEffect(()=>{
getData()
},[])

    const getData=async ()=>{
     const res=await axios.get("http://localhost:8080/results");
     const data=res.data
     setHotelsData(data)

    }
    console.log(hotelsData);
   return (
   <Box w={["100vw","90vw"]}  margin="auto" marginTop={"40px"}>
   
        {hotelsData.map((el)=>{
            if(el.state_slug=="goa-11"){
                return  <Box  w={"100%"} display="flex" marginBottom={'15px'} shadow="md">
                <Box  w={["50%","40%","35%","30%"]}>
                 <Img src={el.images_large[0]} ></Img>
                 </Box>

                 <Box w={"60%"} p={["5px","7px","10px"]}>
                   <Heading fontSize={["7px","12px","18px","20px","22px"]}>{el.title}</Heading>
                   <Text marginTop={["1px", "2px" ,"3px","5px"]} color={"blue.400"} fontSize={["7px","10px","14px","18px","20px"]} >{el.city}, {el.state_slug=="goa-11"?"Goa":"Goa"},{el.country}</Text>
                 
                 <Box marginTop={["2px","4px","6px","8px","10px"]} display={"flex"} gap="10px" flexWrap={"wrap"} >{el.prop_tags.map((el)=>{
                    return <Box fontSize={["5px","6px","8px","10px","12px"]} border={"1px solid grey"} borderRadius={"10%"} p={["1px","2px","4px","5px"]} >{el}</Box>
                 })}</Box>
                 
                 <Box display={"flex"} gap="2px">
                 <Text fontWeight="bold" marginTop={["8px", "15px" ,"20px","30px"]}  fontSize={["7px","10px","14px","16px","18px"]} >Rs {el.starting_price_in_usd}.00  </Text>
                 
                 <Text marginTop={["8px", "15px" ,"20px","30px"]} fontSize={["3px","4px","6px","8px","10px"]} color="grey" >Per Night </Text>

                 </Box>

                 </Box>

                 </Box>
            }
           
        })}
    
   </Box>
   )    
}

export default HotelsPage