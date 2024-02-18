"use client";

import React, { useContext, useEffect, useState } from "react";
import { Context, ContextType } from "../context/store";
import { sendMail } from "../lib/mail";
type Props = {};

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = (props: Props) => {
  const { selectedSection, setSelectedSection } = useContext(
    Context
  ) as ContextType;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isInWorkSection = scrollTop >= 1000 && scrollTop <= 1600;
      if (isInWorkSection && selectedSection !== "contact") {
        setSelectedSection("contact");
      } else if (!isInWorkSection && selectedSection === "contact") {
        setSelectedSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedSection]);

  const send = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      // Notification
      return;
    }
    await sendMail({
      to: "bartuportfolio@gmail.com",
      name: formData.name,
      subject: "Portfolio Contact",
      body: `
        <h1>${formData.name}</h1>
        <h3>From ${formData.email}</h3>
        <p>${formData.message}</p>`,
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      id="contact"
      className="flex flex-col w-full text-white p-8 bg-zinc-900 rounded-md"
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
      }}
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-white"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-sky-500 focus:shadow-md"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-sky-500 focus:shadow-md"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-white"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-sky-500 focus:shadow-md"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
        ></textarea>
      </div>
      <div>
        <button
          formAction={() => send()}
          className="hover:bg-sky-600 transition-all rounded-md bg-sky-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
