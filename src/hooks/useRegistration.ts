import { useState } from 'react';
import { RegistrationFormData } from '../types/event';

export function useRegistration() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerForEvent = async (formData: RegistrationFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would make an API call here
      console.log('Registration submitted:', formData);
      
      return true;
    } catch (err) {
      setError('Failed to register for the event. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { registerForEvent, isLoading, error };
}