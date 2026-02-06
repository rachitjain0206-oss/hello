import AuthForm from "@/components/auth/AuthForm";

// filepath: c:\Users\rachit jain\OneDrive\Desktop\hello\frontend\src\app\(auth)\signup\patient\page.tsx
export const metadata = {
  title: "Doctor Sign Up - MediCare+",
  description:
    "Healthcare provider sign up for MediCare+ platform. Manage your practice and consultations.",
};

export default function DoctorSignUpPage() {
  return <AuthForm type="signup" userRole="doctor" />;
}
