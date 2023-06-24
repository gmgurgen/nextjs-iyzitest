import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [data, setData] = useState(null);
  const [checkoutFormContent, setCheckoutFormContent] = useState("");
  const [token, setToken] = useState(null);
  return (
    <Component
      {...pageProps}
      data={data}
      setData={setData}
      checkoutFormContent={checkoutFormContent}
      setCheckoutFormContent={setCheckoutFormContent}
      token={token}
      setToken={setToken}
    />
  );
}
