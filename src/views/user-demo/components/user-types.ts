export type User = {
  id?: string
  name: string
  age: string
  work: string
  isMan: boolean
};

export type UserForm = Omit<User, "id">;

export type FormItem = Partial<UserForm>;
