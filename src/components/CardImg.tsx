import { CardImg as BaseCardImg, type CardImgProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface CardImgProps extends BaseProps {
}

export const CardImg : BsPrefixRefForwardingComponent<'div', CardImgProps> = (props) => {
  return <BaseCardImg {...props} />;
};

export default CardImg;