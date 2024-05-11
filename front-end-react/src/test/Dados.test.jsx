import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Dados } from '../components/Game/Turno/Dados';
import { Turno } from '../components/Game/Turno/Turno'
import { TurnoContext } from '../context/turno';
import React from 'react';
import '@testing-library/jest-dom';

describe('Dados', () => {
  const mockSetDados = jest.fn();
  const mockSetParteTurno = jest.fn();

  beforeEach(() => {
    render(
      <TurnoContext.Provider value={{ setDados: mockSetDados, setParteTurno: mockSetParteTurno }}>
        <Dados buttonText="Roll" />
      </TurnoContext.Provider>
    );
  });

  test('renders Dados component', () => {
    expect(screen.getByRole('button', { name: /Roll/i })).toBeInTheDocument();
  });
});