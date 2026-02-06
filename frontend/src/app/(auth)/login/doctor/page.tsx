import AuthForm from "@/components/auth/AuthForm";

// filepath: c:\Users\rachit jain\OneDrive\Desktop\hello\frontend\src\app\(auth)\signup\patient\page.tsx
export const metadata = {
  title: "Doctor Login - MediCare+",
  description:
    "Healthcare provider sign in to MediCare+ platform. Manage your practice and consultations.",
};

export default function DoctorLoginPage() {
  return <AuthForm type="login" userRole="doctor" />;
}
