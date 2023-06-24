import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [data, setData] = useState(null);
  const [checkoutFormContent, setCheckoutFormContent] = useState("");
  return (
    <Component
      {...pageProps}
      data={data}
      setData={setData}
      checkoutFormContent={checkoutFormContent}
      setCheckoutFormContent={setCheckoutFormContent}
    />
  );
}
