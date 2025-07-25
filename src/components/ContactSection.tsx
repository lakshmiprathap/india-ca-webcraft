import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xovlejpz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        const data = await response.json();
        setError(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <h2 className="section-title">Contact Us</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Have questions or need expert financial advice? Our team is ready to help with all your accounting needs.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-6 text-ca-navy">Send us a Message</h3>

          {isSubmitted ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
              Thank you for your message! We'll get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 text-red-700 p-3 mb-4 rounded-md">
                  {error}
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-ca-navy hover:bg-ca-navy/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-ca-navy text-white rounded-lg shadow-xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-ca-gold shrink-0" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <a href="tel:+91955783795">+91 9550783795</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-ca-gold shrink-0" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <p><a href="mailto:ca.prasanth193@gmail.com">ca.prasanth193@gmail.com</a></p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-ca-gold shrink-0" />
              <div>
                <p className="font-medium mb-1">Address</p>
                <p>677, 13th Cross, 27th Main,</p>
                <p>HSR Layout Sector 1, Bangalore -560102</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-ca-gold shrink-0" />
              <div>
                <p className="font-medium mb-1">Business Hours</p>
                <p>Monday - Friday: 9:30 AM to 6:30 PM</p>
                <p>Saturday: 10:00 AM to 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
