const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const hotelsJson = fs.readFileSync(path.join(root, "data", "hotels_data.txt"), "utf8");
const tmpl = fs.readFileSync(path.join(root, "src", "template_v2.html"), "utf8");
const out = tmpl.replace("HOTEL_DATA_PLACEHOLDER", hotelsJson);

fs.writeFileSync(path.join(root, "tools", "UMI酒店地图_V2.html"), out, "utf8");
console.log("V2 built! Size:", (Buffer.byteLength(out) / 1024).toFixed(1) + "KB");
