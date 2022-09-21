# Tour Management System
> An assignment for ACC to implement as real time segment.

## Technologies
* Node.JS
* Express.JS
    * Cors
    * Nodemon
    * Windows Node Environment
* MongoDB
* Mongoose

## Prerequisite
Make sure must have installed following `tools`:
* `Visual Studio Code` Editor
    * `Prettier` Extension
    * `ESLint` Extension
* `Postman` Rest API Client

## Features
* Initial request: `http://localhost:8080/`
* Insert new tour: `http://localhost:8080/tours/`
```bash
{
    "image": "https://robohash.org/temporaquianam.png?size=500x500&set=set1",
    "name": "The Road Less Traveled Tours",
    "description": "I was starting to worry that my pet turtle could tell what I was thinking.",
    "ratings": 2,
    "price": 819.26,
    "status": "out-of-stock",
    "duration": "4 days & 5 nights",
    "transport": "By Aerial Tramways"
}
```
* Display tours without queries: `http://localhost:8080/tours`
* Display tours with queries: `http://localhost:8080/tours?fields=name,price,ratings,-_id&sort=-price&page=3&limit=5`

## Owing
```bash
git clone https://github.com/hasibulislam999/tour-management-system.git
npm install --force
cd tour-management-system
code .
```