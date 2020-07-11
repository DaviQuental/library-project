import './UnderlineText.css'

export default ({children}) => {

    return{
        ...children,
        props: {
            ...children.props,
            className: `${children.props.className} text-decoration ${children.props.size} ${children.props.color}`
        }
    };
}