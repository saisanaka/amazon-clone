const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LJwGjSBLssqvkk7wgS9tXrpU01ENan99pELxp1Zd6J2fU2gZgWpX1oTOeJbPV62krRXLV4wjaHUmTIbxuThYbas00fKKm8REb");
// API 

// APP CONFIG
const app = express()

// MIDDLE WARES
app.use(cors())
app.use(express.json())

// APP ROUTES
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const payment_key = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
  })
  res.status(201);
  res.send({clientSecret: payment_key.client_secret});
})

app.get("/", (req, res)=>{
  res.status(200);
  res.send('Hello world');
})

// LISTENERS
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-28e2e/us-central1/api/payments/create