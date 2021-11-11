import './MenuItem.css'

export default function MenuItem({
    children
}) {
    return (
        <li className="menu-item">
            <a href="#">{children}</a>
        </li>
    );
}
