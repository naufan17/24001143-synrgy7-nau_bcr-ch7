import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../components/Login/Login';
import { auth } from '../api/AuthApi';

jest.mock('../../api/AuthApi', () => ({
    auth: () => ({
        requestLoginAdmin: jest.fn()
    })
}));
  
const mockRequestLoginAdmin = auth().requestLoginAdmin as jest.Mock;

describe('Login Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders the Login component correctly', () => {
        render(<Login />);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    test('handles input changes correctly', () => {
        render(<Login />);

        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);

        fireEvent.change(usernameInput, { target: { value: 'Admin 1' } });
        fireEvent.change(passwordInput, { target: { value: 'passwordadmin' } });

        expect(usernameInput).toHaveValue('Admin 1');
        expect(passwordInput).toHaveValue('passwordadmin');
    });

    test('shows loading state when form is submitted', async () => {
        render(<Login />);

        const loginButton = screen.getByRole('button', { name: /login/i });

        fireEvent.click(loginButton);

        expect(loginButton).toBeDisabled();
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test('calls requestLoginAdmin with correct parameters', async () => {
        mockRequestLoginAdmin.mockResolvedValue(true);
        
        render(<Login />);

        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /login/i });

        fireEvent.change(usernameInput, { target: { value: 'Admin 1' } });
        fireEvent.change(passwordInput, { target: { value: 'passwordadmin' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(mockRequestLoginAdmin).toHaveBeenCalledWith('Admin 1', 'passwordadmin');
        });
    });

    test('shows alert when login fails', async () => {
        mockRequestLoginAdmin.mockResolvedValue(false);
        
        render(<Login />);

        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /login/i });

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(screen.getByText(/username dan password tidak sesuai/i)).toBeInTheDocument();
        });
    });

    test('hides alert when close button is clicked', async () => {
        mockRequestLoginAdmin.mockResolvedValue(false);

        render(<Login />);

        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /login/i });

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(screen.getByText(/username dan password tidak sesuai/i)).toBeInTheDocument();
        });

        const closeButton = screen.getByRole('button', { name: /close/i });
        fireEvent.click(closeButton);

        expect(screen.queryByText(/username dan password tidak sesuai/i)).not.toBeInTheDocument();
    });
});