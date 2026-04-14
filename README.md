# QA Playwright Automation (POM + Fixtures + Data-Driven)

This project demonstrates UI automation testing using Playwright with **Page Object Model (POM)**, **Fixtures**, and **Data-Driven Testing** using TypeScript.

---

## 🚀 Tech Stack

* Playwright
* Node.js
* TypeScript

---

## 📂 Project Structure

```
project/
│
├── pages/
│   └── LoginPage.ts        # Page Object Model (Login Page)
│
├── fixtures/
│   └── baseTest.ts         # Custom Playwright Fixture (Dependency Injection)
│
├── test-data/
│   └── loginData.json      # Test data (Data-Driven Testing)
│
├── tests/
│   └── login.test.spec.ts  # Test cases using POM + Fixtures + Data
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## 🧠 Design Pattern

### 1. Page Object Model (POM)

* Encapsulates locators and actions inside `LoginPage.ts`
* Improves maintainability and reusability

---

### 2. Playwright Fixtures

* Custom fixture (`baseTest.ts`) injects `LoginPage` into tests
* Removes repetitive object initialization
* Enables cleaner and scalable test structure

---

### 3. Data-Driven Testing

* Test data stored in external JSON (`loginData.json`)
* Separates test logic from test data
* Improves flexibility and scalability

---

## ✅ Test Scenarios

### Positive Test

* Login with valid credentials
* Validate successful login

### Negative Tests

* Empty username
* Empty password
* Invalid credentials
* Validate error messages

---

## ▶️ How to Run Tests

### Install dependencies

```
npm install
```

### Install Playwright browsers

```
npx playwright install
```

### Run all tests

```
npx playwright test
```

### Run specific test

```
npx playwright test tests/login.test.spec.ts
```

### Run with UI mode

```
npx playwright test --ui
```

### Run with HTML report

```
npx playwright test --reporter=html
npx playwright show-report
```

---

## 📊 Test Report

Playwright provides built-in HTML reporting:

* ✅ Pass / Fail status
* 📸 Screenshot on failure
* 🎥 Video recording
* 🔍 Trace viewer

---

## ⚙️ Configuration

Example (`playwright.config.ts`):

```
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
},
```

---

## 🎯 Key Highlights

* Clean test structure using POM
* Reusable setup with Fixtures (Dependency Injection)
* Scalable testing with Data-Driven approach
* Separation of concerns (Page vs Test vs Data)
* Industry best practices implementation

---

## 🔮 Future Improvements

* Dynamic test generation (loop from JSON)
* CI/CD integration (GitHub Actions)
* Allure reporting
* Multi-page coverage (cart, checkout, etc.)
* Environment-based configuration

---

## 👨‍💻 Author

**Sulton Daud Ul Mukarobin**

---

## 🔥 Notes

This project is part of my journey to become a **QA Automation Engineer (Remote Ready)**.

Focus:

* Writing clean and maintainable automation code
* Applying industry best practices (POM, Fixtures, Data-Driven)
* Building scalable automation frameworks

---
