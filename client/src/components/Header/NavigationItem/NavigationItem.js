import style from './NavigationItem.module.css'


export default function NavigationItem(props) {
    return (
        <li className="listItem">
            <a href="#" className={style.navListItem}>{props.children}</a>
        </li>
    )
}
