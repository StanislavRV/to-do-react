import './button.css'

export default function Button({text, type_hover, ...props}) {
    return (
        <button {...props} className={"button " + "button__" + type_hover}>{text}</button>
    )
}