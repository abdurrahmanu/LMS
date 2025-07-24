import { auth, provider } from 'firebase/auth';
import { signInWithPopup, signOut, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { useRouter } from 'vue-router';

export function useAuth() {
  const router = useRouter()

  const loginWithGoogle = async () => {
    try {
        provider.setCustomParameters({
            prompt: 'select_account'
        });
      
      await signInWithPopup(auth, provider)
      router.push('/')

    } catch (err){
      
    }
  }

  const logout = async () => {
    await signOut(auth);
  };

  return {
    loginWithGoogle,
    logout,
  };
}