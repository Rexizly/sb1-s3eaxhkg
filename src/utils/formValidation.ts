interface FormData {
  name: string;
  email: string;
  phone: string;
  studentId: string;
}

export function validateForm(data: FormData): Record<string, string> {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Student ID validation
  if (!data.studentId.trim()) {
    errors.studentId = 'Student ID is required';
  } else if (data.studentId.trim().length < 5) {
    errors.studentId = 'Please enter a valid student ID';
  }

  return errors;
}