export interface Speaker {
  name: string;
  role: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  registeredCount: number;
  speaker: Speaker;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  studentId: string;
  eventId: string;
}