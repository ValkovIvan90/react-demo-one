// import style from './Navigation.module.css';


export default function NavigationItem(props) {
    return (
        <li className="listItem"><a href="#">{props.children}</a></li>
    )
}
