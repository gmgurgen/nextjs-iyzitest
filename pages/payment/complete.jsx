import axios from "axios";
import PaymentForm from "@/components/paymentform";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Complete = ({ checkoutFormContent, data }) => {
  const router = useRouter();
  useEffect(() => {
    const getPaymentDetails = async () => {
      const token = router.query.token; // Retrieve the token from the query parameter
      if (token) {
        try {
          const response = await axios.post("/api/payment", { token });
          console.log(response.data);
          // Handle the response data here
        } catch (error) {
          console.log(error);
        }
      }
    };

    getPaymentDetails();
  }, [router.query.token]);
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
