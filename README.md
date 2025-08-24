#  Currency Converter 💸

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A sleek, responsive, and user-friendly currency converter web application that provides real-time exchange rates. It features a beautiful UI with both light and dark modes, dynamic flag icons, and persistent user preferences.

---

## ✨ Demo

**[➡️ View Live Demo](https://poisabodol.netlify.app/)**

---

## 🚀 Features

-   **Real-time Exchange Rates**: Fetches the latest conversion rates from the Frankfurter API.
-   **Light & Dark Mode**: A stylish and persistent theme toggle that saves the user's choice in their browser's local storage.
-   **Dynamic Country Flags**: Displays the flag of the selected currency for better visual recognition.
-   **Swap Currencies**: Instantly swap the "from" and "to" currencies with a single click.
-   **Responsive Design**: A fluid layout that looks great on desktops, tablets, and mobile phones.
-   **Keyboard Friendly**: Press the 'Enter' key to trigger the conversion without needing to click the button.
-   **Interactive UI**: Smooth animations and hover effects for a modern user experience.

---

## 🛠️ Technologies Used

-   **HTML5**: For the structure and content of the application.
-   **CSS3**: For styling, including Flexbox for layout, CSS Variables for theming, and Media Queries for responsiveness.
-   **JavaScript (ES6+)**: For the application's logic, including API calls, DOM manipulation, and event handling.
-   **APIs**:
    -   **[Frankfurter API](https://www.frankfurter.app/)**: Used to fetch up-to-date currency exchange rates.
    -   **[Flags API](https://flagsapi.com/)**: Used to display country flags based on currency codes.

---

## ⚙️ Setup and Installation

This is a front-end project and requires no special backend setup.

1.  **Clone the repository:**
    ```
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```
    cd your-repo-name
    ```
3.  **Open the `index.html` file in your browser.**
    -   For the best experience, it is recommended to use a live server extension (like "Live Server" in VS Code) to avoid potential CORS issues with API calls.

---

## 📂 File Structure

```

project-root/
├── index.html         \# The main HTML file
├── style.css          \# Main styles for light mode
├── darkmode.css       \# Styles for the dark theme
├── mobilestyle.css    \# Responsive styles for mobile and tablets
├── script.js          \# Main application logic and API calls
└── codes.js           \# Contains the currency to country code mapping

```

---

## 🧠 How It Works

The application operates based on a few key JavaScript functions:

1.  **Initialization**: On page load, the script populates the "from" and "to" currency dropdowns using the `countryList` object from `codes.js`. It also checks `localStorage` to apply a previously saved dark mode preference.
2.  **API Fetching**: When the user clicks the "Convert" button, an `async` function makes a `fetch` request to the Frankfurter API, requesting the latest rates for the selected base currency.
3.  **Calculation**: The script extracts the specific exchange rate for the target currency from the API response and calculates the converted amount.
4.  **DOM Manipulation**: The calculated result is then displayed in the output field. The country flags are updated whenever a new currency is selected in the dropdowns.
5.  **Theme Toggling**: The dark mode toggle adds or removes a `.dark-mode` class to the `<html>` or `<body>` element, and the corresponding styles are applied. The user's choice ("enabled" or "disabled") is saved in `localStorage`.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


<div style="text-align: center">⁂</div>

[^1]: index.html

[^2]: darkmode.css

[^3]: mobilestyle.css

[^4]: style.css

[^5]: codes.js

[^6]: script.js

