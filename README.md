# Petful

This is where dogs and cats are adopted. Adoption here is first in, first out. Adoption is possible after the early adopter is over.

## Link

Live app : https://petful-client-template-sigma.vercel.app/

Client Repo : https://github.com/HyunwooMoon-developer/petful-app.git

![Screenshot](https://github.com/HyunwooMoon-developer/petful-app/blob/master/src/Image/screenshot1.png)
![Screenshot](https://github.com/HyunwooMoon-developer/petful-app/blob/master/src/Image/screenshot2.png)

## What I Use for App

### Back End

- Node and Express
  - RESTful Api

- Production
  - Deployed via Heoku

### Front End

- React
  - Create React
  - React Router
  - React Context

- Testing
  - Jest(Somke tests)

- Production
  - Deployed via Vercel


## Documentation of API


### Petful's Endpoint

#### People Endpoint

```http
GET  /api/people
```

Provides array of all people in the queue

```http
POST  /api/people
```

|  Key         | Values               |
| :------------|----------------------|
|   name       | string, required     |

Create a new person to the queue


```http
DELETE  /api/people
```

Delete first person in the queue


#### Cat Endpoint

```http
GET  /api/cats
```

Provides array of all cats in the queue

```http
DELETE  /api/cats
```

Delete first cat in the queue

#### Dog Endpoint

```http
GET  /api/dogs
```

Provides array of all dogs in the queue

```http
DELETE  /api/dogs
```

Delete first dog in the queue