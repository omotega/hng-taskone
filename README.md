# hng-taskone

## Technologies used

1. Mongoose

2. MongoDb

3. Express

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/omotega/hng-taskone.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Make a copy of the .env.example file to .env

4. Execute yarn start and You will be able to access the API from localhost:7400

## Hosted Api link

Link: https://easy-red-armadillo-toga.cyclic.app/

## APIs

### Create Person

- Route: /api
- Method: POST
- Body:

```

 {
    "name":"john walker"
}

```

- Responses

Success

```
{
    "message": "User created successfully",
    "data": {
        "name": "john walker",
        "_id": "64ff3863cadb63d3d0998657",
        "__v": 0
    }
}

```

---

### Get user Details

- Route: /api/_id
- Method: GET
- Params: _id

```
URL: /api/64ff3863cadb63d3d0998657


```

- Responses

Success

```
{
    "message": "User fetched successfully",
    "data": {
        "_id": "64ff3863cadb63d3d0998657",
        "name": "john walker",
        "__v": 0
    }
}
```

---

### Update User details

- Route: /api/_id
- Method: PUT
- Params: _id
- Body: name

```
URL: /api/64ff3863cadb63d3d0998657


```

-Body:

```
{
    "name":"fada fada"
}


```

- Responses

Success

```
{
    "message": "User Details updated successfully",
    "data": {
        "_id": "64ff3863cadb63d3d0998657",
        "name": "fada fada",
        "__v": 0
    }
}
```

### Delete User details

- Route: /api/_id
- Method: DELETE
- Params: _id

```

 URL:/api/64ff3863cadb63d3d0998657

```

- Responses

Success
{
    "message": "User deleted successfully",
    "data": {
            "id": "64ff3863cadb63d3d0998657",
            "name": "fada fada",
    "v": 0
}
}

```

```
