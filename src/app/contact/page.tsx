import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[문의] ${name}`);
    const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n${message}`);
    window.location.href = `mailto:ridou99@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto max-w-lg px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground">이름</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md bg-background text-foreground border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground">이메일</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md bg-background text-foreground border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground">메시지</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md bg-background text-foreground border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            rows={6}
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">메일 보내기</button>
      </form>
    </div>
  );
} 