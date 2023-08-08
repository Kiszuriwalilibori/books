// interface RenderCondition {
//     renderCondition: boolean;
// }

// function renderConditionally(Component: React.ComponentType<RenderCondition | any>) {
//     return function (props: RenderCondition | any) {
//         let { renderCondition, ...newProps } = props;
//         return props.renderCondition ? <Component {...newProps} /> : null;
//     };
// }

// export default renderConditionally;

interface renderCondition {
    renderCondition?: boolean;
}

function renderConditionally<T>(Component: React.ComponentType<T | Omit<T & renderCondition, keyof renderCondition>>) {
    return function (props: T & renderCondition) {
        let { renderCondition, ...newProps } = props;
        return renderCondition ? <Component {...newProps} /> : null;
    };
}

export default renderConditionally;

