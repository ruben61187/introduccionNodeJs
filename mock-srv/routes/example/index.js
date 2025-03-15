"use strict";

export default async function (fastify) {
  fastify.get("/", async function (request, reply) {
    return 'this is an example'
  });
}
