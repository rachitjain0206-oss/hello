import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: "Patient Sign Up - MediCare+",
  description:
    "Patient sign up for MediCare+ platform. Access your health records and consultations.",
};

export default function PatientSignUpPage() {
  return <AuthForm type="signup" userRole="patient" />;
}
