const { gql } = require('apollo-server');

const typeDefs = gql`
  type Game {
    id: ID!
    name: String!
    genres: [String]
    publicationDate: Int
    editors: [Editor]
    studios: [Studio]
    platform: String
  }

  type Editor {
    id: ID!
    name: String!
    games: [Game]
  }

  type Studio {
    id: ID!
    name: String!
    games: [Game]
  }

  
  type Query {
    games(genre: String, platform: String, studio: String): [Game]
    game(id: ID!): Game
    editors: [Editor]
    editor(id: ID!): Editor
    studios: [Studio]
    studio(id: ID!): Studio
  }

`;

module.exports = typeDefs;
