import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
  },
  // Additional fields based on your requirements
  // For example:
  // discount: {
  //   type: Number,
  //   default: 0,
  // },
  // promotions: [{
  //   type: String,
  // }],
  // bundleDeal: {
  //   type: Boolean,
  //   default: false,
  // },
  // etc.
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const Product = mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
