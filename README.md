# QA Playwright Automation (POM Implementation)

This project demonstrates UI automation testing using Playwright with **Page Object Model (POM)** design pattern using TypeScript.

---

## 🚀 Tech Stack

* Playwright
* Node.js
* TypeScript

---

## 📂 Project Structure

```
pages/
  └── LoginPage.ts        # Page Object Model (Login Page)

tests/
  ├── login.demo.spec.ts  # Basic test (without POM)
  ├── login.test.spec.ts  # Test using POM
  └── example.spec.ts

playwright.config.ts      # Playwright configuration & reporter
package.json
README.md
```

---

## 🧠 Design Pattern: Page Object Model (POM)

This project implements **Page Object Model (POM)** to improve:

* Maintainability
* Reusability
* Readability

### Concept:

* All locators and actions are stored inside `LoginPage.ts`
* Test files only contain test scenarios and assertions

---

## ✅ Test Scenario

### Positive Login Test

* Open website https://www.saucedemo.com/
* Input valid username & password
* Click login button
* Validate successful login (redirect to inventory page)

---

## ▶️ How to Run Test

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

### 4. Run with UI mode

```
npx playwright test --ui
```

### 5. Run specific test

```
npx playwright test tests/login.test.spec.ts
```

---

## 📊 Test Report

### HTML Report (Built-in Playwright)

Generate report:

```
npx playwright test
```

Open report:

```
npx playwright show-report
```

### Report Features:

* ✅ Test result (Pass/Fail)
* 📸 Screenshot on failure
* 🎥 Video recording (if enabled)
* 🔍 Trace viewer for debugging

---

## ⚙️ Configuration (playwright.config.ts)

Example configuration:

```
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
},
```

---

## 🎯 Future Improvements

* ❌ Negative test case (invalid login)
* 📊 Allure Report integration
* ⚙️ CI/CD with GitHub Actions
* 🌐 Cross-browser testing
* 📈 Test data management

---

## 👨‍💻 Author

**Sulton Daud Ul Mukarobin**

---

## 🔥 Notes

This project is part of my learning journey to become a **QA Automation Engineer (Remote Ready)**.

Focus:

* Clean test structure
* Scalable automation framework
* Industry best practices (POM, reporting, CI/CD)

---
