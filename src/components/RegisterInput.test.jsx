/**
 * skenario testing
 *
 * - RegisterInput component
 * - Should handle name typing correctly
 * - Should handle email typing correctly
 * - Should handle password typing correctly
 * - Should call register function when register button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput'; 


expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should handle name typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const nameInput = screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'nametest');
    expect(nameInput).toHaveValue('nametest');
  });

  it('Should handle email typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'testemail@example.com');
    expect(emailInput).toHaveValue('testemail@example.com');
  });

  it('Should handle password typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('Should call register function when register button is clicked', async () => {
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'nametest');
    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'testemail@example.com');
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = screen.getByRole('button', { name: 'Register' });
    await userEvent.click(registerButton);
    expect(mockRegister).toHaveBeenCalledWith({
      name: 'nametest',
      email: 'testemail@example.com',
      password: 'passwordtest',
    });
  });
});
