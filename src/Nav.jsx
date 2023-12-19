import "./Nav.css";
export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src="images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
}
