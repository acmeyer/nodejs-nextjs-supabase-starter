import LoginForm from "@/components/auth/LoginForm";

export default async function Login() {
  return (
    <div className="bg-white dark:bg-zinc-900 px-6 py-8 sm:px-12">
      <LoginForm />
    </div>
  );
};