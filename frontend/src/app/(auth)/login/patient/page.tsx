import AuthForm from "@/components/auth/AuthForm";

// filepath: c:\Users\rachit jain\OneDrive\Desktop\hello\frontend\src\app\(auth)\signup\patient\page.tsx
export const metadata = {
  title: "Patient Login - MediCare+",
  description:
    "Patient sign in to MediCare+ platform. Access your health records and consultations.",
};

export default function PatientLoginPage() {
  return <AuthForm type="login" userRole="patient" />;
}
