import Iyzipay from "iyzipay";
import * as Checkouts from "@/methods/checkouts";

const getFormPaymentDetails = (req, res, data) => {
  const token = req.body.token; // Retrieve the token from the request body

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
