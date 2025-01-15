import { ActionFunction, json } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import MemberRegistration from '../components/forms/MemberRegistration/MemberRegistration';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import { createMember } from '../utils/db.server';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const memberData = Object.fromEntries(formData);

  try {
    const result = createMember(memberData);
    return json({ success: true, memberId: result.lastInsertRowid });
  } catch (error: any) {
    return json(
      {
        success: false,
        error: error.message || 'Failed to create member'
      },
      { status: 400 }
    );
  }
};

const Register = () => {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <Header />
      <Navigation />
      <main className="container mx-auto p-4">
        {actionData?.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            Member registered successfully!
          </div>
        )}
        {actionData?.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            Error: {actionData.error}
          </div>
        )}
        <MemberRegistration />
      </main>
    </div>
  );
};

export default Register;
