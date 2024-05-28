import { envs } from "./core/config/env";
import { Server } from './server';

(() => {
  main();
})();

function main(): void {
  const server = new Server({
    port: envs.NODE_DOCKER_PORT
  });
  void server.start();
}