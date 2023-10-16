interface Props {
    shouldRender?: boolean;
}

function renderConditionally<T>(Component: React.ComponentType<T | Omit<T & Props, keyof Props>>) {
    return function (props: T & Props) {
        let { shouldRender, ...newProps } = props;
        return shouldRender ? <Component {...newProps} /> : null;
    };
}

export default renderConditionally;
