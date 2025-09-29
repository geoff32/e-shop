import { Container as BaseContainer, type ContainerProps as BaseProps } from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers";

interface ContainerProps extends BaseProps {
}

const Container: BsPrefixRefForwardingComponent<'div', ContainerProps> = (props) => (
    <BaseContainer {...props} />
);

export default Container;
