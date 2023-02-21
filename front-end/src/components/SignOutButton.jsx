import { useMsal } from '@azure/msal-react'

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleSignOut = () => {
    instance.logoutRedirect()
  }

  return (
    <button
      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
      onClick={handleSignOut}
    >
      Logout
    </button>
  )
};

export default SignOutButton
