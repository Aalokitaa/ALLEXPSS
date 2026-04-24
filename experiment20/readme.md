# 🐳 Continuous Deployment (CD) & Docker Integration

## 📌 Title
**Experiment 20: Implement CI/CD pipeline for application deployment**

---

## 🎯 Aim
To containerize the backend testing application using Docker and set up a Continuous Deployment (CD) pipeline using GitHub Actions, integrating it with the Testing Experiment-16 backend.

---

## 🛠️ Tools & Technologies
* **Backend:** Python, Flask, pytest
* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Version Control:** Git & GitHub

---

## ⚙️ Local Docker Setup

### ▶️ Build Docker Image
```bash
cd backend
docker build -t testing-backend:latest .
```

### ▶️ Run Docker Container
```bash
docker run -d -p 5000:5000 --name backend-service testing-backend:latest
```

### ▶️ Verify Container is Running
```bash
docker ps
curl http://localhost:5000/
```

---

## 🤖 GitHub Actions (CD Pipeline)
* **Workflow file:** `.github/workflows/cd.yml`
* **Trigger:** Push to `main` branch (specifically when changes are made to `experiment20/backend/**`).

### 🔄 CD Workflow performs:
1. Checks out the repository code.
2. Sets up Docker Buildx.
3. Builds the Docker image (`testing-backend:latest`).
4. Runs the container locally in the GitHub Actions runner.
5. Pings the application to verify successful deployment.

---

## ✅ Output
* Docker image successfully built and container runs perfectly on port `5000`.
* Continuous Deployment pipeline executed successfully, automatically building and validating the container.

---

## 🎯 Conclusion
Docker containerization ensures our backend application runs consistently across any environment. The GitHub Actions CD pipeline automates the process of building the Docker image and verifying the deployment, establishing a robust Continuous Deployment workflow.
