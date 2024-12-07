import { Form } from 'react-bootstrap';
import { SectionType } from '../types.d';

interface Props {
  type: SectionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
}

const commonStyles: React.CSSProperties = { border: 0, height: '200px', resize: 'none' };

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Ingrese texto';
  if (loading === true) return 'Traduciendo...';
  return 'Traducción';
};

export const TextArea = ({ type, loading, onChange, value }: Props) => {
  const styles: React.CSSProperties = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#FFFFFF' };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea' // elemento que se renderiza
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}
