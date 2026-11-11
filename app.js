import { controllerPost } from './src/controller/post.controller.js';
import { controllerPut } from './src/controller/put.controller.js';
import { clearController } from './src/controller/clear.controller.js';
import { fecthTransfersController } from './src/controller/fetchTransfers.controller.js';

function run() {
  document.addEventListener('DOMContentLoaded', fecthTransfersController);

  document
    .getElementById('btnClear')
    .addEventListener('click', clearController);

  document.getElementById('btnSend').addEventListener('click', (e) => {
    e.preventDefault();

    const inId = document.getElementById('inId');

    if (inId?.value) {
      controllerPut();
    } else {
      controllerPost();
    }
  });
}

run();
