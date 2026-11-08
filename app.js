import { controllerPost } from "./src/controller/post.controller.js";
import { fecthTransfersController } from "./src/controller/fetchTransfers.controller.js";

function run() {
  document.addEventListener("DOMContentLoaded", fecthTransfersController);

  document.getElementById("btnSend").addEventListener("click", controllerPost);
}

run();
