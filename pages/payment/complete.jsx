import axios from "axios";
import PaymentForm from "@/components/paymentform";
import { useEffect } from "react";

const Complete = ({ checkoutFormContent, data }) => {
  // const getPaymentDetails = async () => {
  //   try {
  //     const response = await axios.post("/api/payment", { token: data.token });
  //     console.log(response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getPaymentDetails();
  // }, []);
  return (
    <>
      <div>
        {checkoutFormContent && (
          <PaymentForm checkoutFormContent={checkoutFormContent} />
        )}
      </div>
      {/* <div className="payment-status">{response.data}</div> */}
    </>
  );
};

export default Complete;
