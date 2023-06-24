import axios from "axios";
import { useRouter } from "next/router";

const Test = ({ data, setData, setCheckoutFormContent }) => {
  // const [data, setData] = useState({});
  // const [checkoutFormContent, setCheckoutFormContent] = useState("");
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/checkout", data);
      // console.log(response.data.token);
      setCheckoutFormContent(response.data.checkoutFormContent);
      const token = response.data.token;
      router.push(`/payment/complete?token=${token}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setData({ ...data, price: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="number"
          placeholder="Enter payment amount"
          className="border-2 border-black p-2"
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-500 p-2 ml-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
