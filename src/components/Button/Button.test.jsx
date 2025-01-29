import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('debería renderizar con el color primario', () => {
    const { getByText } = render(<Button color="primary">Click Me</Button>);
    const buttonElement = getByText(/click me/i);
    expect(buttonElement).toHaveClass('primary');
  });

  test('debería renderizar con el color secundario', () => {
    const { getByText } = render(<Button color="secondary">Click Me</Button>);
    const buttonElement = getByText(/click me/i);
    expect(buttonElement).toHaveClass('secondary');
  });

  test('debería aplicar estilos adicionales', () => {
    const { getByText } = render(<Button color="primary" style="extra-style">Click Me</Button>);
    const buttonElement = getByText(/click me/i);
    expect(buttonElement).toHaveClass('primary extra-style');
  });
});