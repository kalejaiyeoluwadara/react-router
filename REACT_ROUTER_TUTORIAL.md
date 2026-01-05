# React Router Tutorial 🚀

A comprehensive, hands-on tutorial demonstrating React Router concepts with practical examples.

## 📚 What You'll Learn

This tutorial covers all essential React Router concepts:

1. **Basic Routing** - Navigate between pages
2. **Dynamic Routes** - Routes with URL parameters (`:id`)
3. **Programmatic Navigation** - Navigate using code
4. **404 Handling** - Catch-all routes for not found pages
5. **Active Links** - Highlight current page in navigation

## 🏗️ Project Structure

```
src/
├── App.jsx                 # Main app with route definitions
├── main.jsx               # App entry point with BrowserRouter
├── components/
│   ├── Navbar.jsx         # Navigation component with NavLink
│   └── Navbar.css
└── pages/
    ├── Home.jsx           # Landing page
    ├── About.jsx          # Static about page
    ├── Users.jsx          # List of users
    ├── UserProfile.jsx    # Dynamic route: /user/:id
    ├── Products.jsx       # List of products
    ├── ProductDetail.jsx  # Dynamic route: /product/:id
    ├── NotFound.jsx       # 404 page (catch-all route)
    └── pages.css          # Shared styles
```

## 🎯 Key Concepts Explained

### 1. Setting Up React Router

**Install the package:**
```bash
npm install react-router-dom
```

**Wrap your app with BrowserRouter** (`main.jsx`):
```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>
```

### 2. Defining Routes

Routes are defined in `App.jsx` using `Routes` and `Route` components:

```jsx
import { Routes, Route } from 'react-router-dom';

<Routes>
  {/* Basic Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  
  {/* Dynamic Routes with Parameters */}
  <Route path="/user/:id" element={<UserProfile />} />
  
  {/* Catch-all for 404 */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 3. Navigation with Links

**Using Link component:**
```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
<Link to="/user/5">User 5</Link>
```

**Using NavLink for active styling:**
```jsx
import { NavLink } from 'react-router-dom';

<NavLink 
  to="/about" 
  className={({ isActive }) => isActive ? "active" : ""}
>
  About
</NavLink>
```

### 4. Dynamic Routes with URL Parameters

**Define the route with `:paramName`:**
```jsx
<Route path="/user/:id" element={<UserProfile />} />
```

**Access the parameter in the component:**
```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // Get the :id from URL
  // URL: /user/123 → id = "123"
  
  return <h1>User ID: {id}</h1>;
}
```

### 5. Programmatic Navigation

Use the `useNavigate` hook to navigate from code:

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/about');          // Navigate to /about
    navigate(-1);                // Go back
    navigate(1);                 // Go forward
  };
}
```

### 6. Catch-All Routes (404)

Use `*` as the path to catch all unmatched routes:

```jsx
<Route path="*" element={<NotFound />} />
```

**Important:** Place this route last in your route definitions!

## 🎨 Pages in This Tutorial

### Basic Pages
- **Home (`/`)** - Introduction and overview
- **About (`/about`)** - Explains React Router concepts
- **Users (`/users`)** - List of users with links to profiles
- **Products (`/products`)** - List of products with links to details

### Dynamic Pages (with URL parameters)
- **UserProfile (`/user/:id`)** - Shows individual user details
  - Examples: `/user/1`, `/user/2`, etc.
- **ProductDetail (`/product/:id`)** - Shows individual product details
  - Examples: `/product/101`, `/product/102`, etc.

### Error Page
- **NotFound (`*`)** - 404 page for invalid routes

## 🔍 Testing the Tutorial

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Try these examples:**
   - Navigate between pages using the navbar
   - Click on users/products to see dynamic routes
   - Notice URL changes (but page doesn't reload!)
   - Try accessing `/user/999` (invalid ID)
   - Try accessing `/invalid-route` (404 page)
   - Use browser back/forward buttons

## 💡 Key Differences

### Link vs. Button with onClick

```jsx
// ✅ Good: Declarative navigation
<Link to="/about">About</Link>

// ✅ Also good: Programmatic navigation
<button onClick={() => navigate('/about')}>About</button>
```

### Link vs. NavLink

```jsx
// Link: Simple navigation
<Link to="/about">About</Link>

// NavLink: Navigation with active state
<NavLink 
  to="/about"
  className={({ isActive }) => isActive ? "active" : ""}
>
  About
</NavLink>
```

### useParams vs. useLocation

```jsx
// useParams: Get URL parameters
const { id } = useParams(); // /user/5 → id = "5"

// useLocation: Get current location object
const location = useLocation();
console.log(location.pathname); // "/user/5"
```

## 📝 Common Patterns

### Protected Routes
```jsx
<Route 
  path="/admin" 
  element={isLoggedIn ? <Admin /> : <Navigate to="/login" />} 
/>
```

### Nested Routes
```jsx
<Route path="/users" element={<UsersLayout />}>
  <Route index element={<UsersList />} />
  <Route path=":id" element={<UserProfile />} />
</Route>
```

### Multiple Parameters
```jsx
<Route path="/blog/:category/:postId" element={<BlogPost />} />

// Access in component:
const { category, postId } = useParams();
```

## 🚨 Common Mistakes to Avoid

1. **Forgetting BrowserRouter:** Routes won't work without it wrapping your app
2. **Using anchor tags (`<a>`):** These cause full page reloads. Use `<Link>` instead
3. **Wildcard route not last:** The `*` route must be the last route defined
4. **Incorrect parameter syntax:** Use `:id` not `{id}` or `$id`
5. **Not using `end` prop:** NavLink for "/" will always be active without `end` prop

## 🎓 Next Steps

After mastering this tutorial, explore:
- Nested Routes and Outlet
- Route Loaders and Actions (React Router 6.4+)
- Protected Routes and Authentication
- Route-based Code Splitting
- Search Parameters (`useSearchParams`)
- Hash Router vs. Browser Router
- Memory Router for testing

## 📚 Resources

- [React Router Official Docs](https://reactrouter.com/)
- [React Router Tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- [React Router Examples](https://github.com/remix-run/react-router/tree/dev/examples)

## 🎉 Happy Learning!

This tutorial provides a solid foundation for building SPAs (Single Page Applications) with React Router. Experiment with the code, break things, and learn by doing!

