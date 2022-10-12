// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { users } from "../../../usersData";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
  }
  else if (req.method === "POST") {
    const customer = req.body.customer;
    const newCustomer = {
      id:Date.now(),
      name: customer,
    };
    users.push(newCustomer);
    res.status(200).json(newCustomer);
  }
}
