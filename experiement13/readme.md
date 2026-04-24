<<<<<<< HEAD
# Microservices Lab – Customer & Order Services

## 📌 Project Overview

This project demonstrates a simple **Microservices Architecture** using Python Flask. It consists of two independent backend services:

* **Customer Service** → Fetch customer details along with their orders
* **Order Service** → Manage and update order status

Both services communicate with each other using HTTP requests and store data **in-memory (no database used)**.

---

## 🛠️ Technologies Used

* Python
* Flask
* Requests Library
* Postman (for API testing)
* Render (for deployment)

---

## 📂 Project Structure

micro-services-lab/
│
├── customer-service/
│   ├── customer_app.py
│   ├── requirements.txt
│
├── order-service/
│   ├── order_app.py
│   ├── requirements.txt
│
├── README.md
└── screenshots/

---

## 🔗 API Endpoints

### 📦 Order Service

#### 1. Get Orders by User

GET /orders/user/<user_id>

#### 2. Update Order Status

PUT /orders/<order_id>/status

Request Body (JSON):
{
"order_status": "Delivered"
}

---

### 👤 Customer Service

#### 1. Get Customer with Orders

GET /customers/<user_id>/orders

This API fetches customer details and calls the Order Service internally to retrieve order data.

-
---

## 🧪 Testing (Postman)

### Step 1: Update Order Status

* Method: PUT
* URL: /orders/1/status
* Body:
  {
  "order_status": "Delivered"
  }

### Step 2: Fetch Customer Orders

* Method: GET
* URL: /customers/101/orders

---

## ⚠️ Important Notes

* Data is stored in-memory, so it resets when the server restarts
* Customer Service communicates with Order Service using HTTP requests
* Replace localhost with deployed URLs when using Render

---

## 📸 Screenshots

Include screenshots of:

* API testing in Postman
* Successful responses
* Render deployment

---

## 🎯 Conclusion

This project demonstrates how microservices interact with each other, handle API communication, and can be deployed independently on cloud platforms like Render.

---
=======
# Student CRUD API

## Overview

This is a simple backend project using Flask and MySQL to perform CRUD operations on student data.

---

## Features

* Add student
* View students
* Update student
* Delete student

---

## Technologies

* Python (Flask)
* MySQL
* Postman

---

## Setup

1. Install dependencies:

```
pip install flask flask-mysqldb
```

2. Create database:

```
CREATE DATABASE college;
USE college;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);
```

3. Run the app:

```
python app.py
```

---

## API Endpoints

* POST `/students` → Add student
* GET `/students` → Get all students
* PUT `/students/<id>` → Update student
* DELETE `/students/<id>` → Delete student

---

## Testing

Use Postman to test the APIs.

---

## Note

* Update MySQL password in `app.py`
* Do not include `venv` folder in submission

---

## Author

Aalokita Chibb
