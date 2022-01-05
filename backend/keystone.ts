import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import { createAuth } from "@keystone-next/auth";
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";

const databaseURL = process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits";

const sessionConfig = {
  maxAge: 60 * 60 * 40 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: { fields: ["name", "email", "password"] },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
    },
    lists: createSchema({
      User,
      Product,
      ProductImage,
    }),
    ui: { isAccessAllowed: ({ session }) => session?.data },
    session: withItemData(statelessSessions(sessionConfig), {
      User: "name email",
    }),
  })
);
