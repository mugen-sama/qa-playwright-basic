# 🚀 QA Automation with Playwright (TypeScript + POM)

This project demonstrates **UI Automation Testing** using Playwright with **TypeScript** and the **Page Object Model (POM)** design pattern.

Built as part of my journey to become a **QA Automation Engineer (Remote Ready)**.

---

## 🧰 Tech Stack

* Playwright
* TypeScript
* Node.js

---

## 📂 Project Structure

```
pages/
  └── LoginPage.ts        # Page Object Model (Login Page)

tests/
  ├── login.demo.spec.ts  # Basic test (without POM)
  ├── login.test.spec.ts  # Test using POM
  └── example.spec.ts     # Default Playwright example (optional to remove)

playwright.config.ts      # Configuration & test settings
package.json
README.md
```

---

## 🧠 Design Pattern: Page Object Model (POM)

This project implements **POM** to improve:

* ✅ Maintainability
* 🔁 Reusability
* 📖 Readability

### 🔍 Concept

* All **locators** and **actions** are defined in `LoginPage.ts`
* Test files only contain:

  * test scenarios
  * assertions

---

## ✅ Test Scenarios

### 🟢 Positive Test

* Open: https://www.saucedemo.com/
* Input valid username & password
* Click login button
* Verify successful login (redirect to inventory page)

### 🔴 Negative Tests

* Login with empty username
* Login with empty password
* Login with invalid credentials

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

### 5. Run in headed mode (see browser)

```
npx playwright test tests/login.test.spec.ts --headed
```

### 6. Run with UI mode (interactive)

```
npx playwright test --ui
```

---

## 📊 Test Report

### HTML Report (Built-in Playwright)

Generate report:

```
npx playwright test tests/login.test.spec.ts --headed --reporter=html
```

Open report:

```
npx playwright show-report
```

### 🔍 Report Features

* ✅ Pass / Fail status
* 📸 Screenshot on failure
* 🎥 Video recording
* 🧭 Trace Viewer (step-by-step debugging)

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

## 🚀 Future Improvements

* 📊 Allure Report integration
* ⚙️ CI/CD with GitHub Actions
* 🌐 Cross-browser test optimization
* 📈 Test data management
* 🧩 Fixtures for better scalability

---

## 👨‍💻 Author

**Sulton Daud Ul Mukarobin**

---

## 🔥 Notes

This project focuses on:

* Clean test structure
* Scalable automation framework
* Industry best practices:

  * Page Object Model (POM)
  * Reporting
  * Test organization

---

⭐ Feel free to explore, fork, or use this as a reference for your own QA automation projects.
