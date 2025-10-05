import { Form } from 'react-bootstrap';
import type { ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
  title?: string;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormContainer = ({
  children,
  title,
  className = '',
  onSubmit
}: FormContainerProps) => {
  return (
    <div className={`form-container ${className}`}>
      {title && <h3>{title}</h3>}
      <Form onSubmit={onSubmit}>
        {children}
      </Form>
    </div>
  );
};