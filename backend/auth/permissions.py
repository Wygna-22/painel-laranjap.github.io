from fastapi import Depends, HTTPException, status
from auth.current_user import get_current_user

def require_role(*roles):
    def role_checker(current_user=Depends(get_current_user)):
        if current_user.role not in roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Você não possui permissão para acessar este recurso."
            )

        return current_user
    return role_checker
