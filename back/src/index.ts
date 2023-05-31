import "reflect-metadata";
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql";
import { WilderResolver } from "./resolver/wilderResolver";
import dataSource from "./utils";






const port = 5000;

const start = async (): Promise<void> => {
  await dataSource.initialize();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [WilderResolver]
    }),
  })

  try {
    const { url }: { url: string} = await server.listen({port})
    console.log(`Server ready at ${url}`)
  } catch(err) {
    console.log("Error starting the server")
  }
};

void start();
