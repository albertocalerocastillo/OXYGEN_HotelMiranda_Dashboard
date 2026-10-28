<div align="center">

# Hotel Miranda · Dashboard

**Panel de administración para un hotel: reservas, habitaciones, empleados y mensajes de clientes en una sola SPA.**

Proyecto del Training React Full Stack de OXYGEN Academy · Sprint 2 y 3 (React Routing, Redux y Context)

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat-square&logo=cypress&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

[**Ver demo**](http://oxygenhotelmirandadashboard.s3-website.eu-west-3.amazonaws.com) · [API REST del proyecto](https://github.com/albertocalerocastillo/OXYGEN_HotelMiranda_REST)

</div>

![Pantalla de login del dashboard](docs/login.jpg)

## Qué es

Hotel Miranda Dashboard es el panel interno de un hotel ficticio: la herramienta con la que el personal gestiona reservas, habitaciones, empleados y los mensajes que dejan los clientes. Es una SPA en React + TypeScript maquetada a partir de un diseño dado que, en su versión final, consume la [API REST de Hotel Miranda](https://github.com/albertocalerocastillo/OXYGEN_HotelMiranda_REST) (Node + Express) mediante thunks de Redux autenticados con JWT.

El objetivo de los sprints era practicar enrutado con rutas privadas, estado global con Redux Toolkit y autenticación con Context API.

## Funcionalidades

- **Login y rutas privadas**: el formulario hace `POST /login` contra la API, guarda el JWT en `localStorage` y marca la sesión en un `AuthContext` (`useReducer`). Todas las rutas internas pasan por un `PrivateRoute` que redirige a `/login` si no hay sesión. Logout desde la barra superior.
- **Dashboard**: tarjetas de KPIs (nuevas reservas, habitaciones programadas, check-in, check-out), calendario con `react-calendar`, gráfico de barras de reservas con `recharts` y tarjetas de últimas reseñas.
- **Reservas** (`/bookings`): listado cargado desde la API con buscador por huésped y vista de detalle (`/bookings/:bookingId`).
- **Habitaciones** (`/rooms`): búsqueda por nombre, tipo o comodidades; ordenación por número, precio o estado; paginación; alta (`/new-room`), edición (`/edit-room/:id`) y borrado.
- **Empleados** (`/users`): pestañas Todos / Activos / Inactivos, búsqueda, paginación, alta (`/new-employee`), edición (`/edit-employee/:id`) y borrado.
- **Contacto** (`/contact`): mensajes de clientes con pestañas Todos / Archivados y acción de archivar o desarchivar.
- **Feedback** con notificaciones `react-toastify` en carga, éxito y error.
- **Sidebar plegable** y layout común para todas las vistas privadas.

## Stack

| Capa | Tecnología |
| --- | --- |
| UI | React 18, TypeScript (con algunos componentes en JSX), styled-components, react-icons |
| Enrutado | React Router DOM 7: rutas anidadas bajo `Layout`, `PrivateRoute` |
| Estado global | Redux Toolkit: un slice + thunks por dominio (`bookings`, `rooms`, `users`, `contact`) |
| Sesión | Context API + `useReducer`, JWT en `localStorage` |
| Gráficos y calendario | recharts, react-calendar |
| Notificaciones | react-toastify |
| Build | Vite 6 |
| Testing | Jest + Testing Library (unitario), Cypress (E2E) |
| Calidad | ESLint 9 (react, react-hooks, react-refresh) |
| Despliegue | AWS S3 (static website hosting) + GitHub Actions |

## Arquitectura / estructura de carpetas

El código se organiza **por dominio**: cada sección agrupa sus páginas, estilos, interfaces de TypeScript y, si usa Redux, su slice y sus thunks.

```text
src/
├── App.tsx                 # Rutas, AuthProvider y Provider de Redux
├── store/store.ts          # configureStore con los 4 reducers
├── context/AuthContext.tsx # Estado de sesión (LOGIN / LOGOUT)
├── components/             # Layout, NavBar, SideBar, Button, CardContact
├── login/                  # Página de login + PrivateRoute
├── dashboard/              # KPIs, Calendar, ReservationStats (recharts)
├── bookings/               # pages/ · features/ (slice + thunks) · interfaces/ · components/ (estilos)
├── rooms/                  # Listado, NewRoomForm, EditRoomForm
├── users/                  # Listado, NewEmployeeForm, EditEmployeeForm
└── contact/                # Mensajes, archivado, popup de detalle
public/data/                # JSON de ejemplo (fase previa a la API)
cypress/e2e/auth.cy.js      # Pruebas E2E de autenticación
.github/workflows/          # Deploy a S3
```

Flujo de datos: la página despacha un thunk (`fetchRooms`, `updateContact`...) → el thunk llama a la API con `Authorization: Bearer <token>` → el slice actualiza `status` y datos → la página se vuelve a renderizar y muestra el toast correspondiente.

## Testing

**Unitario (Jest + Testing Library)**: `src/components/Button/Button.test.jsx` comprueba que `Button` aplica la clase según el color (`primary` / `secondary`) y combina estilos adicionales. Jest corre en `jsdom` con `babel-jest`.

```bash
npm test
```

**E2E (Cypress)**: `cypress/e2e/auth.cy.js` cubre el flujo de autenticación contra la app en `http://localhost:5173`:

- entrar en una ruta privada sin sesión lleva al login;
- un login correcto lleva al dashboard;
- con sesión iniciada se puede navegar a `/bookings`;
- un login con credenciales incorrectas mantiene al usuario en el login.

```bash
npm run dev          # en una terminal (y la API en otra)
npx cypress open     # o: npx cypress run
```

> Nota: el spec localiza los campos del login por `data-cy="emailInput"`, `passwordInput` y `submitButton`, que todavía no están añadidos en `Login.tsx`; hay que incluirlos para que la suite pase.

## Puesta en marcha

Requisitos: Node.js LTS y la [API de Hotel Miranda](https://github.com/albertocalerocastillo/OXYGEN_HotelMiranda_REST) corriendo en `http://localhost:3001` (URL fijada en el login y en los thunks). En desarrollo siempre se usa la API real; el modo demo solo se activa en el build de producción (se puede desactivar con `VITE_DISABLE_DEMO=true`).

```bash
git clone https://github.com/albertocalerocastillo/OXYGEN_HotelMiranda_Dashboard.git
cd OXYGEN_HotelMiranda_Dashboard
npm install
npm run dev
```

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo de Vite (`http://localhost:5173`) |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | ESLint sobre todo el proyecto |
| `npm test` | Tests unitarios con Jest |

**Acceso de demostración**: la pantalla de login muestra el usuario de prueba del proyecto (una cuenta ficticia, solo para la demo del training). Funciona tanto contra la API como en la demo publicada.

El front no usa variables de entorno.

## Despliegue

Cada push a `main` lanza `.github/workflows/deploy-dashboard.yml`:

1. `npm install` y `npm run build` en `ubuntu-latest` con Node LTS.
2. Configura credenciales con `aws-actions/configure-aws-credentials`.
3. `aws s3 sync ./dist s3://<bucket> --delete` al bucket con static website hosting.

Secretos del repositorio que usa: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET_NAME`.

Demo: <http://oxygenhotelmirandadashboard.s3-website.eu-west-3.amazonaws.com>. Lo publicado es el front estático, así que el build de producción arranca en **modo demo** ([`src/demo/demoApi.ts`](src/demo/demoApi.ts)): responde en el propio navegador a las mismas llamadas que se harían a la API, con datos de ejemplo en memoria. Se puede iniciar sesión, navegar, crear, editar, borrar y archivar; al recargar, los datos vuelven al estado inicial.

## Qué aprendí

- Diseñar el enrutado de una SPA con rutas anidadas bajo un `Layout` común y proteger las vistas internas con un `PrivateRoute`.
- Separar el estado de sesión (Context + `useReducer`) del estado de datos (Redux Toolkit), y cuándo encaja cada uno.
- Modelar peticiones asíncronas con `createAsyncThunk` y estados `loading / succeeded / failed` para dar feedback en la interfaz.
- Tipar un proyecto React por dominio y pasar de datos JSON locales a una API real con JWT.
- Automatizar el despliegue de un build de Vite a S3 con GitHub Actions y secretos del repositorio.

---

<div align="center">

**Proyecto relacionado**: [Hotel Miranda · API REST](https://github.com/albertocalerocastillo/OXYGEN_HotelMiranda_REST), el backend que consume este dashboard.

Hecho por [Alberto Calero](https://github.com/albertocalerocastillo) durante el Training React Full Stack de OXYGEN Academy.

</div>
