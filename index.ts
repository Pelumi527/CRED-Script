import express from "express";
import { APTOS } from "./config/constant";
import { UserTransactionResponse } from "./types";
const app = express();
const port = 3000;

app.get("/:txnHash", async (Request, Response) => {
  const txhHash = Request.params.txnHash;
  const res = (await APTOS.getTransactionByHash({
    transactionHash: txhHash,
  })) as UserTransactionResponse;
  console.log(res.sender, "result");
});

app.listen(port, () => {
  console.log("listening at http://localhost:" + port);
});
