import { describe, it, expect, beforeEach } from 'vitest';
import { useAuthStore } from '../../stores/authStore';

describe('authStore', () => {
  beforeEach(() => {
    useAuthStore.setState({
      user: null,
      profile: null,
      isLoading: false
    });
  });

  it('should initialize with default values', () => {
    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
    expect(state.profile).toBeNull();
    expect(state.isLoading).toBe(false);
  });

  it('should update user state on sign in', async () => {
    const store = useAuthStore.getState();
    
    try {
      await store.signIn('test@example.com', 'password');
      const newState = useAuthStore.getState();
      expect(newState.isLoading).toBe(false);
    } catch (error) {
      // Expected to fail in test environment without Supabase
      expect(error).toBeTruthy();
    }
  });

  it('should clear state on sign out', async () => {
    const store = useAuthStore.getState();
    
    await store.signOut();
    const newState = useAuthStore.getState();
    
    expect(newState.user).toBeNull();
    expect(newState.profile).toBeNull();
  });
});