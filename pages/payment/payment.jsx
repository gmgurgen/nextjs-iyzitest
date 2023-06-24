import PaymentForm from "@/components/paymentform";

const Payment = ({ checkoutFormContent }) => {
  return (
    <>
      <div>
        {checkoutFormContent && (
          <PaymentForm checkoutFormContent={checkoutFormContent} />
        )}
      </div>
    </>
  );
};

export default Payment;
