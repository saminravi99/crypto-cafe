const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    console.log("decoded", decoded);
    req.decoded = decoded;
    next();
  });
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.q4ici.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const run = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("toolsDB");
    const toolsCollection = db.collection("toolsCollection");
    const ordersCollection = db.collection("ordersCollection");
    const usersCollection = db.collection("usersCollection");
    const reviewsCollection = db.collection("reviewsCollection");
    const blogsCollection = db.collection("blogsCollection");
    const adminsCollection = db.collection("adminsCollection");

    //Verify Admin Role
    const verifyAdmin = async (req, res, next) => {
      const requester = req.decoded.email;
      const requesterAccount = await adminsCollection.findOne({
        email: requester,
      });
      if (requesterAccount.role === "admin") {
        next();
      } else {
        res.status(403).send({ message: "Forbidden" });
      }
    };

    //API to get all reviews
    app.get("/reviews", async (req, res) => {
      const reviews = await reviewsCollection.find({}).toArray();
      res.send(reviews);
    });

    //API to post a review
    app.post("/review", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;

      if (email === decodedEmail) {
        const review = req.body;
        const result = await reviewsCollection.insertOne(review);
        res.send(result);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API for payment
    app.post("/create-payment-intent", async (req, res) => {
      const { totalPrice } = req.body;
      const amount = parseInt(totalPrice) * 100;
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",

        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    //API to get blogs

    app.get("/blogs", async (req, res) => {
      const query = {};
      const blogs = await blogsCollection.find(query).toArray();
      res.send(blogs);
    });

    // API to Run Server
    app.get("/", async (req, res) => {
      res.send("Manufacturer Server Running");
    });

    //Authentication API
    app.post("/login", async (req, res) => {
      const user = req.body;
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res.send({ accessToken });
    });

    //API to get all users
    app.get("/users", verifyJWT, verifyAdmin, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const users = await usersCollection.find({}).toArray();
        res.send(users);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to get single user   
    app.get("/user/:email", verifyJWT, async (req, res) => {     
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const email = req.params.email;
        const user = await usersCollection.findOne({ email: email });
        res.send(user);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to post a user
    app.put("/user/:email", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
       if (email === decodedEmail) {
       const email = req.params.email;
       const user = req.body;
       console.log("user", user);
       const query = {
         email: email,
       };
       const options = {
         upsert: true,
       };
       const updatedDoc = {
         $set: {
           email: user?.email,
           role: user?.role,
         },
       };
       const result = await usersCollection.updateOne(
         query,
         updatedDoc,
         options
       );
       res.send(result);
       } else {
         res.send("Unauthorized access");
       }
    });
    //API to update a user
    app.put("/update/user/:email", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const email = req.params.email;
        const user = req.body;
        console.log("user", user);
        const query = {
          email: email,
        };
        const options = {
          upsert: true,
        };
        const updatedDoc = {
          $set: {
            displayName: user?.displayName,
            institution: user?.institution,
            phoneNumber: user?.phoneNumber,
            address: user?.address,
            dateOfBirth: user?.dateOfBirth,
          },
        };
        const result = await usersCollection.updateOne(
          query,
          updatedDoc,
          options
        );
        res.send(result);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to make Admin
    app.put("/user/admin/:email", verifyJWT, verifyAdmin, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const email = req.params.email;
        console.log("email", email);
        const filter = { email: email };
        const options = { upsert: true };
        const updateDoc = {
          $set: {
            email: email,
            role: "admin",
          },
        };
        const result = await adminsCollection.updateOne(
          filter,
          updateDoc,
          options
        );
        res.send(result);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to remove admin
    app.delete(
      "/user/admin/:email",
      verifyJWT,
      verifyAdmin,
      async (req, res) => {
        const decodedEmail = req.decoded.email;
        const email = req.headers.email;
        if (email === decodedEmail) {
          const email = req.params.email;
          const filter = { email: email };
          const result = await adminsCollection.deleteOne(filter);
          res.send(result);
        } else {
          res.send("Unauthorized access");
        }
      }
    );

    //API to get 1 admin
    app.get("/admin/:email", verifyJWT, async (req, res) => {
       const decodedEmail = req.decoded.email;
       const email = req.headers.email;
       if (email === decodedEmail) {
         const email = req.params.email;
         const user = await adminsCollection.findOne({ email: email });
          res.send(user);
       } else {
         res.send("Unauthorized access");
       }
    });

    //API to verify 1 admin
    app.get("/verify/admin/:email", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const email = req.params.email;
        const user = await adminsCollection.findOne({ email: email });
        const isAdmin = user?.role === "admin";
        res.send({ admin: isAdmin });
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to get all admin
    app.get("/admin", verifyJWT, verifyAdmin, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const admins = await adminsCollection.find({}).toArray();
        res.send(admins);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to get all tools
    app.get("/tools", async (req, res) => {
      const tools = await toolsCollection.find({}).toArray();
      res.send(tools);
    });

    //API to get single tools
    app.get("/tools/:id", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const id = req.params.id;
        const tool = await toolsCollection.findOne({ _id: ObjectId(id) });
        res.send(tool);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to post a tool
    app.post("/product", verifyJWT, verifyAdmin, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const product = req.body;
        console.log("product", product);
        await toolsCollection.insertOne(product);
        res.send(product);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API delete a tool
    app.delete("/product/:id", verifyJWT, verifyAdmin, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const id = req.params.id;
        const result = await toolsCollection.deleteOne({ _id: ObjectId(id) });
        res.send(result);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to update a tool
    app.put("/product/:id", verifyJWT, verifyAdmin, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const id = req.params.id;
        const product = req.body;
        console.log("product", product);
        const options = { upsert: true };
        const result = await toolsCollection.updateOne(
          { _id: ObjectId(id) },
          { $set: product },
          options
        );
        res.send(result);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to get all orders
    app.get("/orders", verifyJWT, verifyAdmin, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const orders = await ordersCollection.find({}).toArray();
        res.send(orders);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to update a order
    app.put("/orders/:id", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const orderId = req.params.id;
        const order = req.body;
        console.log("order", order);
        const query = { _id: ObjectId(orderId) };
        const options = { upsert: true };
        const updatedOrder = await ordersCollection.updateOne(
          query,
          {
            $set: order,
          },
          options
        );
        res.send(updatedOrder);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to get orders by user email
    app.get("/orders/:email", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const emailHeader = req.headers.email;
      if (emailHeader === decodedEmail) {
        const email = req.params.email;
        const orders = await ordersCollection
          .find({ userEmail: email })
          .toArray();
        res.send(orders);
      } else {
        res.send("Unauthorized access");
      }
    });
    //API to get orders with multiple query parameters
    app.get("/orders/:email/:isPaid", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const emailHeader = req.headers.email;
      if (emailHeader === decodedEmail) {
        const email = req.params.email;
        const isPaid = req.params.isPaid;
        const orders = await ordersCollection
          .find({ userEmail: email, isPaid: true })
          .toArray();
        res.send(orders);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to post a order
    app.post("/orders", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const order = req.body;
        const result = await ordersCollection.insertOne(order);
        res.send(result);
      } else {
        res.send("Unauthorized access");
      }
    });

    //API to delete a order
    app.delete("/orders/:id", verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.headers.email;
      if (email === decodedEmail) {
        const id = req.params.id;
        console.log("id", id);
        const result = await ordersCollection.deleteOne({
          _id: ObjectId(id),
        });
        res.send(result);
      } else {
        res.send("Unauthorized access");
      }
    });
  } finally {
    // client.close();
  }
};

run().catch(console.dir);

app.listen(port, () => console.log(`Listening on port ${port}`));
