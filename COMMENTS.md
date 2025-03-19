# General Comments

- The App is deployed on GH pages [https://marwanrizik91.github.io/movie-library-app/](<(https://marwanrizik91.github.io/movie-library-app/)>)
- The backend is deployed on Render free plan, and it takes some time to load the data the first time(15s).
- Since the app is deployed on GH pages the base url should always start with
  ```
  "/movie-library-app/"
  ```
  hence the base config in vite.config.ts
  ```
  base: process.env.NODE_ENV === "production" ? "/movie-library-app/" : "/",
  ```
  and the VITE_BASE_URL in .env file.
- The app is fully responsive and works on all devices.

# Tech Stack Decisions

### React

- React Vite app to have a more robust and performant app.

### Redux Toolkit

- Decided to work with RTK assuming the company is using it and i took this opportunity to learn it.

### React Hook Forms

- Assuming that the company is using and it was included in the bonus requirements. In this case it was only used to handle the search bar in the app(which could've been done with a simple react state).

### Material UI (With Styled Components)

- Decided to use Material UI to have a more consistent and polished design. Also Assuming that the company is using and it was included in the bonus requirements.

### React Router & React Router Dom

- React Router to manage the routes and params of the app.
- I decided to use the QueryParams to manage the current state of the app(search, pagination and filtering by genre), since it's gives a more robust way to share, save and retrieve the state of the app from the URL, which allows to share the links with the users or refresh the page and maintain the current state of the app.

---

# Folder Structure Explanation

**Assuming the project is to grow, I decided to have a more organized folder structure, so that the app is more maintainable and scalable.**

### Focus points

- **Feature-based organization**.
- **Separation of concerns**.
- **Atomic design principles**: Break down components in smaller, focused units.
- **Performance optimizations**: Lazy loading for components, which helps with initial load times.
- **Type safety**.

### Potential improvements

- **Styles organization**
- **Test organization**

---

# Developement flow

- I worked with less organized work flow in the beginning as I was more concerned about the functionality of the app, and to learn new technologies.
  Later on I organized the code structure and took care of performance, scalability and accesssibility.
- Direct pushed to the main branch were done only when the app was working as expected, something i wouldn't do in a production application.
