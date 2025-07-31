// createClothing.js
import { v4 as uuidv4 } from "uuid";

const ALLOWED_TYPES = ["top", "bottom", "jacket", "shoes"];
const ALLOWED_SUBTYPES = ["t-shirt", "jeans", "hoodie", "sneakers", "blazer"];
const ALLOWED_SEASONS = ["spring", "summer", "fall", "winter"];
const ALLOWED_OCCASIONS = ["casual", "formal", "sport", "party"];

const createClothing = ({
  name = "", // user given name
  type = "", // "top, bottom, jacket, shoes"
  subType = "", // "t-shirt, jeans, hoodie"
  imageURL = "", // "path/url to uploaded image"
  color = "", // optional: "blue, black, red"
  material = "", // optional: "cotton, leather, denim"
  season = [], // ["spring", "summer", "fall", "winter"]
  occasion = [], // ["casual", "formal", "sport", "party"] — outfit context
  description = "", // Optional extra user detail //  Timestamp for sorting or history
  tags = [], // for more flexible filtering (e.g., ["vintage", "baggy"])
}) => {
  // filtering

  name = name.trim();
  type = type.toLowerCase();
  subType = subType.toLowerCase();
  color = color.toLowerCase();
  material = material.toLowerCase();
  season = season.filter((s) => ALLOWED_SEASONS.includes(s.toLowerCase()));
  occasion = occasion.filter((o) =>
    ALLOWED_OCCASIONS.includes(o.toLowerCase())
  );
  tags = tags.map((tag) => tag.toLowerCase().trim());

  if (!ALLOWED_TYPES.includes(type)) {
    console.warn(`⚠️ Warning: Unknown type "${type}"`);
  }
  if (subType && !ALLOWED_SUBTYPES.includes(subType)) {
    console.warn(`⚠️ Warning: Unknown subType "${subType}"`);
  }

  return {
    id: uuidv4(),
    name,
    type,
    subType,
    imageURL,
    color,
    material,
    season,
    occasion,
    description,
    tags,
    createdAt: Date.now(),
  };
};

export default createClothing;
