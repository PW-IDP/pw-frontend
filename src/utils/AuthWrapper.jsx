import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
function AuthWrapper({ children }) {
    const { isLoading, isAuthenticated, loginWithRedirect, error } = useAuth0();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (!isAuthenticated) {
        return <div>Not Authenticated</div>;
    }

    return <>{children}</>;
}
export default AuthWrapper;