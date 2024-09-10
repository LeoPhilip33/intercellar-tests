# Playwright Tests

Ce projet utilise Playwright pour les tests de bout en bout. Ce guide vous expliquera comment configurer et exécuter les tests Playwright dans votre environnement local. Assurez-vous également que l'application React soit en cours d'exécution pour que les tests puissent interagir avec elle.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 16.x ou ultérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gestionnaire de paquets)

## Installation
   ```bash
   git clone https://github.com/LeoPhilip33/intercellar-tests/
   cd intercellar-tests
   npm install
   npx playwright install
  ```

## Lancement
   ```bash
  npx playwright test --ui
  ```
