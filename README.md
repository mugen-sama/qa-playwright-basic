# QA Playwright Basic Automation

This project demonstrates basic UI automation testing using Playwright with JavaScript/TypeScript.

## 🚀 Tech Stack

* Playwright
* Node.js
* JavaScript / TypeScript

## 📂 Project Structure

```
tests/
  ├── login.demo.spec.ts
  ├── example.spec.ts
```

## ✅ Test Scenario

* Open website https://www.saucedemo.com/
* Input valid username & password
* Click login button
* Validate successful login (redirect to inventory page)

## ▶️ How to Run Test

1. Install dependencies

```
npm install
```

2. Install Playwright browsers

```
npx playwright install
```

3. Run test

```
npx playwright test
```

4. Run with UI mode

```
npx playwright test --ui
```

## 📊 Report

After running test:

```
npx playwright show-report
```

## 👨‍💻 Author

Sulton Daud Ul Mukarobin

---

🔥 This project is part of my QA Automation learning journey.
