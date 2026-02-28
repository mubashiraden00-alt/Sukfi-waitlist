import { ContactForm } from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-brand-green">Contact Support</h1>
      <ContactForm />
    </main>
  );
}
