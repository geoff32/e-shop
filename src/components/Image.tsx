import { Image as BaseImage, type ImageProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface ImageProps extends BaseProps {
}

export const Image : BsPrefixRefForwardingComponent<'div', ImageProps> = (props) => {
  return <BaseImage {...props} />;
};

export default Image;