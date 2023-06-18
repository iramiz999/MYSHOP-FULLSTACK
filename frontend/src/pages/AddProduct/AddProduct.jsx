import  { useState, useEffect } from 'react';
import { useGetproductsByNameQuery } from "../../Redux/productsApi";
import { Box, CircularProgress, Typography } from '@mui/material';


const AddProduct = () => {
  const [mydata, setData] = useState('');
  const { data, error, isLoading } = useGetproductsByNameQuery();
  useEffect(() => {
    // Function to send data to API
    const sendDataToAPI = async () => {
      try {
        const response = await fetch('http://localhost:5000/products', {
          method: 'POST',
          headers:{
          'Content-Type':'application/json'
          },
          
          body: JSON.stringify({ data })
        });
        
        if (response.ok) {
          // Handle successful response
          console.log('Data sent successfully');
        } else {
          // Handle error response
          console.log('Error sending data');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
      }
    }
    
    // Call the function to send data when the component mounts
    sendDataToAPI();
  }, [data]);
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" color="error">
          {" "}
          ERROR{" "}
        </Typography>
      </Box>
    );
  }
 
  
  const handleChange = (event) => {
    setData(event.target.value);
  }
  
  return (
    <div>
      <input placeholder='ID' type="text" value={mydata} onChange={handleChange} />
      <input type="submit" />

    </div>
  );
}

export default AddProduct;
