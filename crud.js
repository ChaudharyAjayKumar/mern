const { model } = require("mongoose");
const { mongoose, connectDB } = require("./db.js");

// schema
const empSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sal: {
      type: Number,
      min: 20000,
      max: 50000,
      required: true,
    },
    dept: {
      type: String,
      enum: ["cs", "it", "ds"],
      required: true,
    },
    add: {
      type: String,
      default: "malad",
    },
  },
  { timestamps: true },
);

// model
const empModel = mongoose.model("emp1", empSchema);

// db call
connectDB();

// crud
// insert
async function insert() {
  try {
    const data = new empModel({
      name: "ram",
      sal: 45000,
      dept: "cs",
    });

    const result = await data.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

insert();
// update
async function update() {
  try {
    const result = await empModel.updateOne(
      { name: "ram" },
      { $set: { sal: 40000 } },
    );
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

// update()
// delete
async function delete1() {
  try {
    const result = await empModel.deleteOne({ name: "ram" });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

// delete1();
// show

async function show() {
  try {
    const result = await empModel.find();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

// show();
