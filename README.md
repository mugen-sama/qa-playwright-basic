# QA Playwright Automation (POM + Fixtures)

This project demonstrates UI automation testing using Playwright with **Page Object Model (POM)** and **Fixtures** design pattern using TypeScript.

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
├── tests/
│   └── login.test.spec.ts  # Test cases using POM + Fixtures
│
├── playwright.config.ts    # Playwright configuration
├── package.json
└── README.md
```

---

## 🧠 Design Pattern

### 1. Page Object Model (POM)

* All locators and actions are stored inside `LoginPage.ts`
* Test files only contain test scenarios and assertions

### 2. Playwright Fixtures

* Custom fixture (`baseTest.ts`) is used to inject `LoginPage`
* Eliminates repetitive object creation in test files
* Improves scalability and maintainability

---

## ✅ Test Scenarios

### Positive Test

* Login with valid credentials
* Verify successful login (redirect to inventory page)

### Negative Tests

* Login with empty username
* Login with empty password
* Login with invalid credentials
* Validate error messages

---

## ▶️ How to Run Tests

### 1. Install dependencies

```
npm install
```

### 2. Install Playwright browsers

```
npx playwright install
```

### 3. Run all tests

```
npx playwright test
```

### 4. Run specific test file

```
npx playwright test tests/login.test.spec.ts
```

### 5. Run in headed mode with HTML report

```
npx playwright test tests/login.test.spec.ts --headed --reporter=html
```

---

## 📊 Test Report

### HTML Report (Built-in Playwright)

Generate report:

```
npx playwright test --reporter=html
```

Open report:

```
npx playwright show-report
```

### Report Features:

* ✅ Test results (Pass/Fail)
* 📸 Screenshot on failure
* 🎥 Video recording (if enabled)
* 🔍 Trace viewer for debugging

---

## ⚙️ Configuration (playwright.config.ts)

Example:

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
* Reusable and scalable test setup with Fixtures
* Separation of concerns (Page vs Test vs Setup)
* Real-world automation best practices

---

## 🔮 Future Improvements

* CI/CD integration (GitHub Actions)
* Allure reporting
* Environment configuration (dev/staging)
* Multi-page test coverage (cart, checkout, etc.)

---

## 👨‍💻 Author

**Sulton Daud Ul Mukarobin**

---

## 🔥 Notes

This project is part of my journey to become a **QA Automation Engineer (Remote Ready)**.

Focus:

* Writing clean and maintainable automation code
* Applying industry best practices (POM, Fixtures)
* Building scalable automation frameworks

---
