import { list } from "@keystone-next/keystone/schema";
import "dotenv/config";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { relationship, text } from "@keystone-next/fields";

const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "sickFit",
};

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: "source",
    }),
    altText: text(),
    product: relationship({ ref: "Product.photo" }),
  },
});
