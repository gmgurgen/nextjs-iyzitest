import Iyzipay from "iyzipay";
import * as Checkouts from "@/methods/checkouts";

const getFormPaymentDetails = (req, res) => {
  const token = req.query.token; // Retrieve the token from the query parameters

  Checkouts.getFormPayment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: "132546978",
    token: token,
  })
    .then((result) => {
      console.log("basarili", result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching payment details" });
    });
};

export default getFormPaymentDetails;
