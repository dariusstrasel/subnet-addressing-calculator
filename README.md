# Configuring Webstorm to support nodejs language server
To enable Node.js coding assistance, you need to configure WebStorm as follows:
1. Open **Settings** (`Ctrl` + `Alt` + `S`).
2. Navigate to **Languages & Frameworks | Node.js**.
3. In the **Node Interpreter** field:
    - Select or configure a valid Node.js installation. If none is listed, add your local Node.js binary.

4. Check the option **Coding assistance for Node.js** to enable it.
    - This will configure the Node.js Core module sources and associate them with your project, providing better code completion and validation for Node.js APIs like `path`.

