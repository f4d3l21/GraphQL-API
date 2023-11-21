# :video_game: TP API GraphQL

Ce projet est un exemple de création d'une API GraphQL pour gérer une base de données de jeux vidéo. Il permet de rechercher des jeux par genre, plateforme, éditeur, studio, etc.

## :gear: Dépendances à Installer

Avant de commencer, assurez-vous d'avoir les dépendances suivantes installées sur votre machine :

- Node.js
- npm (Gestionnaire de paquets Node.js)
- MariaDB (ou une autre base de données de votre choix)
- Docker (si vous souhaitez exécuter l'application dans un conteneur Docker)

## :computer: Installation

1. Clonez ce dépôt sur votre machine :

```bash
git clone https://github.com/votre-utilisateur/tp-api-graphql.git
cd tp-api-graphql
npm install
```

Créez un fichier .env à la racine du projet pour configurer vos variables d'environnement. 
Voici un exemple :
makefile

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=videogamedb
Remplacez les valeurs par celles de votre base de données.

Exécutez l'application en utilisant la commande suivante :
bash

npm start
L'API GraphQL sera accessible à l'adresse http://localhost:4000/graphql.

## :rocket: Utilisation
Vous pouvez utiliser un client GraphQL tel que Apollo Client pour interagir avec l'API. Consultez le schéma GraphQL pour connaître les types de requêtes disponibles.

## :whale: Exécution avec Docker (Facultatif)
Si vous préférez exécuter l'application dans un conteneur Docker, suivez ces étapes :

Assurez-vous que Docker est installé sur votre machine.

Créez une image Docker à partir du Dockerfile fourni :

```bash
docker build -t tp-api-graphql .
```
Exécutez un conteneur à partir de l'image créée :

```bash
docker run -p 4000:4000 tp-api-graphql
```

L'API GraphQL sera accessible à l'adresse http://localhost:4000/graphql.

## :bust_in_silhouette: Auteur
Ce projet a été créé par f4d3l21.
