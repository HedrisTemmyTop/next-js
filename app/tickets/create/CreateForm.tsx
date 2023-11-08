"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [priority, setPriority] = useState("low");
  const addTicket = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const ticket = {
      title,
      body,
      priority,
      user_email: "temmy@gmail.com",
    };
    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });

    if (res.status === 201) {
      router.push("/tickets");
    }
  };
  return (
    <form onSubmit={addTicket} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add</span>}
      </button>
    </form>
  );
}
