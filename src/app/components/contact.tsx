"use client";

import React, { useContext, useEffect, useState } from "react";
import { Context, ContextType } from "../context/store";
import { sendMail } from "../lib/mail";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tilt from "react-parallax-tilt";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { selectedSection, setSelectedSection } = useContext(
    Context
  ) as ContextType;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isInWorkSection = scrollTop >= 2000 && scrollTop <= 3000;
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
      toast.error("Please fill in all fields!");
      return;
    }
    try {
      setLoading(true);
      await sendMail({
        to: "bartuportfolio@gmail.com",
        name: formData.name,
        subject: "Portfolio Contact",
        body: `
          <h1>${formData.name}</h1>
          <h3>From ${formData.email}</h3>
          <p>${formData.message}</p>`,
      });
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      toast.error("An error occurred while sending the message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tilt
      tiltEnable={false}
      scale={1.02}
      transitionSpeed={2500}
      className=" w-full"
    >
      <form
        id="contact"
        className="flex flex-col text-white p-8 bg-zinc-900 rounded-md"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        }}
      >
        <h1 className="text-xl text-sky-50 text-center mb-4">Contact Me</h1>
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
            type="button"
            onClick={send}
            className="text-white text-center cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 border border-sky-300 transition-all"
            disabled={loading}
          >
            {loading ? (
              <div className="px-4">
                <div className="w-6 h-6 border-t-2 border-r-2 border-b-0 border-l-0 border-gray-200 rounded-full animate-spin"></div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </Tilt>
  );
};

export default Contact;
