
---

# Kernel.js - Command Line Process Manager

Kernel.js is a **command-line process manager** written in JavaScript. It simulates a basic operating system environment, allowing users to manage processes within virtual folders. Users can start processes, list them, and stop them using simple commands, all through a command-line interface embedded in a web application.

## 🚀 Features

- **Start Processes**: Launch processes inside virtual folders.
- **List Processes**: View all running processes within a specific folder.
- **Stop Processes**: Stop a process by its unique ID.
- **Command-Line Interface**: A terminal-like interface for interacting with the system.

## 🏗️ Project Structure

The project is organized as follows:

```
/project-root
├── /src/                     # Source files (for production code)
│   ├── /styles               # CSS/Styling
│   │   └── stylus.css        # Styling for the application
│   ├── /scripts              # JavaScript files
│   │   └── kernel.js         # Core logic for process management
│   └── /markup               # HTML files
│       └── index.html        # Main HTML file with the UI
├── /test                     # Test files
│   └── kernelTests.js        # Unit tests for Kernel.js functionality
├── /docs                     # Documentation (README, Contribution Guidelines, etc.)
│   └── README.md             # Project Overview and Instructions
├── /public                   # Public assets (images, icons, etc.)
│   └── /images               # Store images/icons here
├── package.json              # Project metadata and dependencies (if using npm)
├── .gitignore                # Git ignore file to exclude unnecessary files
└── LICENSE                   # License for the project
```

## 🛠️ Installation

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16.x or higher)
- **npm** (Node Package Manager)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pawvan/kernel.js.git
   cd kernel.js
   ```

2. **Install dependencies**:
   If your project requires any dependencies, install them using:
   ```bash
   npm install
   ```

3. **Run the application**:
   Open the `src/markup/index.html` file in your web browser. This will load the UI and allow you to interact with the command-line interface.

4. **Test the setup**:
   Run the kernel.js script to check if everything is working:
   ```bash
   node src/scripts/kernel.js
   ```

## ⚙️ Usage

### Available Commands

- **Start a Process**:
  ```bash
  start /folder_name process_name
  ```
  Example:
  ```bash
  start /folder1 process1
  ```
  This command starts a process named `process1` in the `/folder1` folder.

- **List Running Processes in a Folder**:
  ```bash
  list /folder_name
  ```
  Example:
  ```bash
  list /folder1
  ```
  This will display all processes currently running in `/folder1`.

- **Stop a Process by ID**:
  ```bash
  stop /folder_name process_id
  ```
  Example:
  ```bash
  stop /folder1 1234567890
  ```
  This will stop the process with ID `1234567890` in the `/folder1` folder.

### Example Commands:

1. **Start a process**:
   ```bash
   start /folder1 process1
   ```

2. **List processes**:
   ```bash
   list /folder1
   ```

3. **Stop a process by ID**:
   ```bash
   stop /folder1 1234567890
   ```

## 📈 Testing

To ensure that the core functionality works as expected, unit tests are provided in the `/test` directory.

### Running the Tests

Run the tests by executing the following command:

```bash
npm test
```

### Example Test:

```js
import { kernel } from '../src/scripts/kernel.js';

test('Starting, listing, and stopping processes', () => {
  let result = kernel.handleCommand('start /folder1 process1');
  expect(result).toContain('Started process: process1');

  result = kernel.handleCommand('list /folder1');
  expect(result).toContain('process1');

  const processId = kernel.folders['/folder1'][0].id;
  result = kernel.handleCommand(`stop /folder1 ${processId}`);
  expect(result).toContain('Stopped process');
});
```

## 🎯 Roadmap

1. **Add Decoding**: Implement the decoding functionality to convert byte sequences back into the original string (coming soon).
2. **Expand Process Management**: Implement features such as pausing and resuming processes.
3. **Enhance User Interface**: Improve the UI for better user interaction and visual feedback.
4. **Cross-platform Support**: Ensure the command-line interface works on all major operating systems (Windows, macOS, Linux).

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Create a pull request.

Please ensure that your code adheres to the existing style and includes relevant tests.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📚 Resources

- **JavaScript Documentation**: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Node.js Documentation**: [Node.js](https://nodejs.org/)

## **Contact**

If you have any questions or feedback, feel free to reach out:

- **Email**: pawanpediredla@gmail.com
- **GitHub**: [github.com/pawvan/kernel.js](https://github.com/pawvan/kernel.js)

---

### Key Highlights:

- **Kernel.js** is a lightweight **process manager** with a simple, easy-to-use command-line interface.
- The **UI** is built using HTML, CSS, and JavaScript, offering an interactive command-line simulation.
- **Unit tests** are included to verify functionality and ensure everything works as expected.

---

