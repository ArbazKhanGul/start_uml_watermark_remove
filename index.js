import fs from "fs";
import starumlWatermarkRemover from "staruml-watermark-remover";

const svg = fs.readFileSync("project flow.svg", "utf8");

fs.writeFileSync("project flow.svg", starumlWatermarkRemover(svg));
