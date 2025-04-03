# Proyecto de Gestión de Reservas

## Tecnologías Utilizadas

- **React**: Framework de JavaScript para construir interfaces de usuario interactivas.
- **CSS**: Para el diseño y la apariencia del proyecto.
- **React Router DOM**: Para la navegación entre páginas dentro de la aplicación.
- **GitHub Actions**: Para la integración y despliegue continuo (CI/CD).
- **Azure Static Web Apps**: Para el despliegue de la aplicación en la nube.
- **Fetch**: Para realizar peticiones HTTP

## Estructura del Proyecto

La estructura del proyecto dentro de la carpeta `src` es la siguiente:

```
src/
│── api/
│   ├── analytics.js
│   ├── laboratoryAPI.js
│   ├── login.js
│   ├── reservesAPI.js
│   ├── user.js
│
│── auth/
│   ├── userSession.js
│
│── components/
│   ├── Analytics.jsx
│   ├── ConsultLaboratories.jsx
│   ├── CreateAdmin.jsx
│   ├── CreateLaboratory.jsx
│   ├── CreateReserve.jsx
│   ├── DeleteReserve.jsx
│   ├── LoginForm.jsx
│   ├── navigation.js
│   ├── navigationAdmin.js
│   ├── RegisterForm.jsx
│
│── img/
│
│── pages/
│   ├── AdminDashboard.jsx
│   ├── AnalyticsPage.jsx
│   ├── ConsultLaboratoriesPage.jsx
│   ├── CreateAdminPage.jsx
│   ├── CreateLaboratoryPage.jsx
│   ├── CreateReservePage.jsx
│   ├── DeleteReservePage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── UserDashboard.jsx
│
│── styles/
│   ├── admin_dashboard.css
│   ├── analytics.css
│   ├── consultLaboratories.css
│   ├── createAdmin.css
│   ├── createLaboratory.css
│   ├── createReserve.css
│   ├── deleteReserve.css
│   ├── register.css
│   ├── style.css
│   ├── user_dashboard.css
│
│── App.jsx
│── config.js
│── index.js
│── logo.svg
```

## Configuración de GitHub Actions

El proyecto está configurado para integrarse con GitHub Actions para la automatización del despliegue en **Azure Static Web Apps**. La configuración se encuentra en `.github/workflows/` dentro del repositorio y sigue esta estructura:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
      - Development
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - Development
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
          lfs: false

      - name: Set up Node.js version
        uses: actions/setup-node@v3
        with:
          node-version: '20.x' # Fuerza Node.js 20

      # Paso adicional para configurar CI a false y evitar errores de ESLint
      - name: Set CI to false
        run: echo "CI=false" >> $GITHUB_ENV

      - name: Install Dependencies
        run: |
          npm install

      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_RED_ROCK_00CB7D11E }}
          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)
          action: "upload"
          ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######
          app_location: "/" # App source code path
          api_location: "" # Api source code path - optional
          output_location: "build" # Built app content directory - optional
          ###### End of Repository/Build Configurations ######

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_RED_ROCK_00CB7D11E }}
          action: "close"
```

## Funcionamiento de la pagina 
A continuación, se presentan imágenes que muestran las diferentes secciones de la aplicación, desde la interfaz de usuario hasta la interfaz de administrador.

Interfaz de administrador: Incluye herramientas para visualizar análisis y gestionar funcionalidades como la creación de laboratorios y usuarios.

![imagenes](images/adminpag.png)

![imagenes](images/analitycs.png)

![imagenes](images/cradmin.png)

![imagenes](images/crlab.png)

Interfaz de usuario: Permite consultar los laboratorios disponibles, realizar reservas y acceder a otras funciones.

![imagenes](images/userpag.png)

![imagenes](images/rspag.png)

![imagenes](images/deletepag.png)

![imagenes](images/cslabpag.png)

Proceso de inicio de sesión: Muestra la autenticación y acceso a las distintas secciones de la plataforma.

![imagenes](images/sincompletarlogin.png)

## Integrantes

* **Santiago Amaya Zapata** - [SantiagoAmaya21](https://github.com/SantiagoAmaya21)
* **Laura Natalia Perilla Quintero** - [Lanapequin](https://github.com/Lanapequin)
* **Juan Miguel Rojas Chaparro** - [juanmiguelrojas](https://github.com/juanmiguelrojas)
* **Cristian David Silva Perilla** - [CRISTIANSILVAP](https://github.com/CRISTIANSILVAP)



