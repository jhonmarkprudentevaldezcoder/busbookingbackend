const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/userModel");
const Buses = require("./models/busModel");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//default route
app.get("/", (req, res) => {
  res.send("API WORKING SUCCESS");
});

//register bus
app.post("/addbus", async (req, res) => {
  try {
    const bus = await Buses.create(req.body);
    res.status(200).json(bus);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update bus seat
app.put("/schedule/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bus = await Buses.findByIdAndUpdate(id, req.body);

    if (!schedule) {
      return res
        .status(404)
        .json({ message: `cannot find any schedule with ID ${id}` });
    }
    const updatedSchedule = await Schedules.findById(id);
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all buses
app.get("/buses", async (req, res) => {
  try {
    const buses = await Buses.find({});
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all users
app.get("/user", async (req, res) => {
  try {
    // Find all users with the "rfid" field using a filter
    const users = await Users.find({ rfid: { $exists: true, $ne: null } });

    // Check if any users were found
    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "No users with RFID found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update user
app.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res
        .status(404)
        .json({ message: `cannot find any schedule with ID ${id}` });
    }
    const updatedUser = await Users.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//search user
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Users.find({ rfid: id });

    if (users.length === 0) {
      return res.status(404).json({ message: "No matching records found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//search bus
app.get("/bus/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const buses = await Buses.find({ category: id });

    if (buses.length === 0) {
      return res.status(404).json({ message: "No matching records found" });
    }

    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//register
app.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    // Check if the email is already taken
    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already taken." });
    }

    // If the email is not taken, create the user
    const user = await Users.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Users.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. User not found." });
    }

    // Compare the provided password with the stored password
    if (user.password !== password) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Incorrect password." });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    // Set the token as a cookie (optional)
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

    // Respond with the token as a Bearer token
    res.status(200).json({
      message: "Authentication successful",
      token: `${token}`,
      userId: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      userType: user.type,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/loginrfid", async (req, res) => {
  const { rfid } = req.body;

  try {
    // Find the user by email
    const user = await Users.findOne({ rfid });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. User not found." });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    // Set the token as a cookie (optional)
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

    // Respond with the token as a Bearer token
    res.status(200).json({
      message: "Authentication successful",
      token: `${token}`,
      userId: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      userType: user.type,
      rfid: user.rfid,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://busreservation:busreservation4D@cluster0.mck9kkm.mongodb.net/OnlineBusTicketReservationSystem"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
