"use client";

import { useEffect, useRef, useState } from "react";
import { DoodleBorder } from "./doodle-border";
import { DoodleUnderline } from "./doodle-underline";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Instagram, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real implementation, you would handle form submission to a backend
        console.log("Form submitted:", formState);
        setFormSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormState({ name: "", email: "", message: "" });
            setFormSubmitted(false);
        }, 3000);
    };

    const socialLinks = [
        {
            icon: <Github className="h-6 w-6" />,
            url: SITE_CONFIG.socials.github,
            label: "GitHub",
        },
        // { icon: <Twitter className="h-6 w-6" />, url: SITE_CONFIG.socials.twitter, label: "Twitter" },
        {
            icon: <Linkedin className="h-6 w-6" />,
            url: SITE_CONFIG.socials.linkedin,
            label: "LinkedIn",
        },
        {
            icon: <Instagram className="h-6 w-6" />,
            url: SITE_CONFIG.socials.instagram,
            label: "Instagram",
        },
    ];

    return (
        <section id="contact" ref={sectionRef} className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2
                        className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <DoodleUnderline thickness={3} animated={true}>
                            Let's Connect
                        </DoodleUnderline>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div
                            className={`transition-all duration-700 delay-300 ${
                                isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-20"
                            }`}
                        >
                            <DoodleBorder>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        Get in touch
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        I'm always open to new opportunities,
                                        collaborations, or just a friendly chat.
                                        Feel free to reach out through the form
                                        or my social media channels!
                                    </p>

                                    <div className="flex gap-4 mb-6">
                                        {socialLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-accent/50 hover:bg-accent rounded-full transition-all duration-300 text-foreground hover:text-primary transform hover:-translate-y-1"
                                                aria-label={link.label}
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <Mail className="h-5 w-5" />
                                        <span>
                                            himanshuwandhare13@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </DoodleBorder>
                        </div>

                        <div
                            className={`transition-all duration-700 delay-500 ${
                                isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-20"
                            }`}
                        >
                            <DoodleBorder>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium mb-1"
                                        >
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleInputChange}
                                            placeholder="Your name"
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium mb-1"
                                        >
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            onChange={handleInputChange}
                                            placeholder="Your email"
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium mb-1"
                                        >
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleInputChange}
                                            placeholder="Your message"
                                            required
                                            className="w-full min-h-[120px]"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full group"
                                        disabled={formSubmitted}
                                    >
                                        {formSubmitted ? (
                                            "Message Sent!"
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </DoodleBorder>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
