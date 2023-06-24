import { useEffect } from "react";

const PaymentForm = ({ checkoutFormContent }) => {
  useEffect(() => {
    // Inject the checkout form content into the HTML document
    // const script = checkoutFormContent;
    // script.type = "text/javascript";
    const scriptTagRegex = /<\/?script[^>]*>/g;
    const cs = checkoutFormContent.replace(scriptTagRegex, "");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = cs;
    document.head.appendChild(script);

    // Cleanup the injected script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, [checkoutFormContent]);

  return (
    <div>
      {/* Place where the payment form will be rendered */}
      <div id="iyzipay-checkout-form" className="responsive" />
    </div>
  );
};

export default PaymentForm;
