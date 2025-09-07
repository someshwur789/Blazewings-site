export type Message = {
  content: string;
  sender: 'user' | 'bot';
};

export type UserDetails = {
  name: string;
  email: string;
  phone?: string;
};