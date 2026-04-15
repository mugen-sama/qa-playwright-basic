# QA Playwright Automation (POM + Fixtures + Data-Driven + Dynamic Tests)

This project demonstrates UI automation testing using Playwright with **Page Object Model (POM)**, **Fixtures**, **Data-Driven Testing**, and **Dynamic Test Generation** using TypeScript.

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

### 4. Dynamic Test Generation 🔥

* Negative test cases are generated dynamically using a loop (`forEach`)
* Each dataset automatically creates a new test case
* No need to manually write repetitive test scripts

#### Example:

```ts
loginData.invalidUsers.forEach((loginCase) => {

  test(`Login gagal - ${loginCase.name}`, async ({ loginPage }) => {
    await loginPage.login(loginCase.username, loginCase.password);
    await loginPage.verifyLoginErrorMessage(loginCase.error);
  });

});
```

#### Benefits:

* ✅ Automatically scales with additional test data
* ✅ Reduces code duplication
* ✅ Improves maintainability
* ✅ Cleaner and more professional test structure

---

## ✅ Test Scenarios

### Positive Test

* Login with valid credentials
* Validate successful login

### Negative Tests (Dynamic)

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
* Dynamic test generation for automatic test creation
* Separation of concerns (Page vs Test vs Data)
* Industry best practices implementation

---

## 🔮 Future Improvements

* CI/CD integration (GitHub Actions)
* Allure reporting
* Test tagging & filtering
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
* Applying industry best practices (POM, Fixtures, Data-Driven, Dynamic Tests)
* Building scalable automation frameworks

---
