import axios from "axios";
import { useEffect } from "react";

const Complete = () => {
  const getPaymentDetails = async () => {
    try {
      const response = await axios.get("/api/payment");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPaymentDetails();
  }, []);
  return (
    <>
      <div className="payment-status w-28 h-40 bg-red-500"></div>
    </>
  );
};

export default Complete;
