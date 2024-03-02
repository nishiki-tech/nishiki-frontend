# Set up local development environment

<!-- TODO: Add a .env setup instruction -->
<!-- ISSUE: #280 -->

1. Fork this repository to your own GitHub account, and then clone it to your local device.
2. Install the dependencies by running the following command:

```bash
npm ci
```

3. Run the mock backend server by running one of the following commands:

```bash
npm run mock
```

- It will start the mock server at [http://localhost:8080](http://localhost:8080).
- It requires Docker to be installed on your local device and running. If you don't have Docker installed, you can install it from [here](https://www.docker.com/products/docker-desktop).

4. In another terminal tab, run the development server by running the following command:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### How to stop the mock server

Run the following command to stop the mock server:

```bash
npm run mock-down
```
