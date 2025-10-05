import { Form } from 'react-bootstrap';

interface FormGroupProps {
  controlId: string;
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  as?: 'input' | 'select';
  options?: Array<{ value: string; label: string; }>;
}

export const FormGroup = ({
  controlId,
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  className = 'mb-3',
  as = 'input',
  options = []
}: FormGroupProps) => {
  return (
    <Form.Group className={className} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      {as === 'select' ? (
        <Form.Select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="">Sélectionnez une classe</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      ) : (
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </Form.Group>
  );
};