const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/userModel");
const Buses = require("./models/busModel");
const UserReserveds = require("./models/userReservedModel");
const BusRoute = require("./models/routeSchema");
const BusesInfo = require("./models/busInfoModel");

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

app.post("/businfo", async (req, res) => {
  try {
    const busesInfo = await BusesInfo.create(req.body);
    res.status(200).json(busesInfo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get all businfo
app.get("/businfo", async (req, res) => {
  try {
    const busesInfos = await BusesInfo.find({});
    res.status(200).json(busesInfos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//search bus info by bus name
app.get("/businfo/:busno", async (req, res) => {
  try {
    const { busno } = req.params;
    const businfo = await BusesInfo.find({ busno: busno });

    if (businfo.length === 0) {
      return res
        .status(404)
        .json({ message: "No resreved id matching records found" });
    }

    res.status(200).json(businfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update businfo
app.put("/businfo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bus = await BusesInfo.findByIdAndUpdate(id, req.body);

    if (!bus) {
      return res
        .status(404)
        .json({ message: `cannot find any Bus with ID ${id}` });
    }
    const updatedBus = await BusesInfo.findById(id);
    res.status(200).json(updatedBus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//add new reserved to a bus
app.post("/reserved", async (req, res) => {
  try {
    const userReserved = await UserReserveds.create(req.body);
    res.status(200).json(userReserved);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get all reserved
app.get("/reserveds", async (req, res) => {
  try {
    const userReserveds = await UserReserveds.find({});
    res.status(200).json(userReserveds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//count all reserved
app.get("/reserveds/cout", async (req, res) => {
  try {
    const userReserveds = await UserReserveds.find({});
    const reservedCount = userReserveds.length;
    res.status(200).json(reservedCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//search reserved by email
app.get("/reserveds/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const reserved = await UserReserveds.find({ email: email });

    if (reserved.length === 0) {
      return res
        .status(404)
        .json({ message: "No resreved id matching records found" });
    }

    res.status(200).json(reserved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//search reserved
app.get("/reserved/:id/:busId/:userId", async (req, res) => {
  try {
    const { id, busId, userId } = req.params;
    const reserved = await UserReserveds.find({ _id: id });
    const reservedBus = await UserReserveds.find({ busId: busId });
    const userReserved = await UserReserveds.find({ userid: userId });

    if (reserved.length === 0) {
      return res
        .status(404)
        .json({ message: "No resreved id matching records found" });
    }

    if (userReserved.length === 0) {
      return res
        .status(404)
        .json({ message: "No user id matching records found" });
    }

    if (reservedBus.length === 0) {
      return res
        .status(404)
        .json({ message: "No bus id matching records found" });
    }

    res.status(200).json(reserved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//add new route to a bus
app.post("/route", async (req, res) => {
  try {
    const busRoute = await BusRoute.create(req.body);
    res.status(200).json(busRoute);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get all ROUTES
app.get("/bus/routes", async (req, res) => {
  try {
    const busRoute = await BusRoute.find({});
    res.status(200).json(busRoute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//search bus routes
app.get("/route/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const busRoutes = await Buses.find({ busid: id });

    if (busRoutes.length === 0) {
      return res.status(404).json({ message: "No matching records found" });
    }

    res.status(200).json(busRoutes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get bus ticket
app.get("/ticket/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const userReserved = await UserReserveds.find({ email: email });

    if (userReserved.length === 0) {
      return res.status(404).json({ message: "No matching records found" });
    }

    res.status(200).json(userReserved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
        .json({ message: `cannot find any Bus with ID ${id}` });
    }
    const updatedSchedule = await Schedules.findById(id);
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all buses
app.get("/bus", async (req, res) => {
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
        .json({ message: `cannot find any user with ID ${id}` });
    }
    const updatedUser = await Users.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update bus
app.put("/bus/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bus = await Buses.findByIdAndUpdate(id, req.body);

    if (!bus) {
      return res
        .status(404)
        .json({ message: `cannot find any Bus with ID ${id}` });
    }
    const updatedBus = await Buses.findById(id);
    res.status(200).json(updatedBus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/bus/:id/:seatId/:userId/reserve", async (req, res) => {
  try {
    const { id, seatId, userId } = req.params;
    const bus = await Buses.findById(id);

    if (!bus) {
      return res
        .status(404)
        .json({ message: `Cannot find any Bus with ID ${id}` });
    }

    const seatStatus = bus[seatId]; // Access the seat status dynamically

    console.log(seatStatus);

    if (seatStatus === "available") {
      bus[seatId] = userId; // Assuming userId is passed in the route
      await bus.save();
      res.status(200).json({
        message: "Seat reserved successfully.",
        seatStatus: seatStatus,
      });
    } else if (seatStatus === userId) {
      bus[seatId] = "available";
      await bus.save();
      res.status(200).json({ message: "Seat deleted." });
    } else if (seatStatus != userId && seatStatus != "available") {
      res
        .status(409)
        .json({ message: "Seat is already reserved.", seatStatus: seatStatus });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/bus/:id/:seatId/:userEmail", async (req, res) => {
  try {
    const { id, seatId, userEmail } = req.params;
    const bus = await Buses.findById(id);

    if (!bus) {
      return res
        .status(404)
        .json({ message: `Cannot find any Bus with ID ${id}` });
    }

    const seatStatus = bus[seatId]; // Access the seat status dynamically

    let responseMessage;
    let statusCode;

    switch (seatStatus) {
      case "available":
        responseMessage = "available";
        statusCode = 200;
        break;
      case userEmail:
        responseMessage = userEmail;
        statusCode = 200;
        break;
      default:
        responseMessage = "Reserved";
        statusCode = 200;
    }

    res.status(statusCode).json({ message: responseMessage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/bus/:id/:seatId/:userId/seatChecker", async (req, res) => {
  try {
    const { id, seatId, userId } = req.params;
    const bus = await Buses.findById(id);

    if (!bus) {
      return res
        .status(404)
        .json({ message: `Cannot find any Bus with ID ${id}` });
    }

    const seatStatus = bus[seatId]; // Access the seat status dynamically

    let responseMessage;
    let statusCode;

    switch (seatStatus) {
      case "available":
        responseMessage = "available";
        statusCode = 200;
        break;
      case userId:
        responseMessage = userId;
        statusCode = 200;
        break;
      default:
        responseMessage = "Reserved";
        statusCode = 200;
    }
    res.status(statusCode).json({ message: responseMessage });
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
      userPoints: user.points,
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
