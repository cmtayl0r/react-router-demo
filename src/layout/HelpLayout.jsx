import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim
        accusamus similique sunt, eos laborum voluptatum perspiciatis dolor at
        minus, neque odio qui. Quisquam molestiae id doloremque voluptatem.
        Reiciendis, doloribus.
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
