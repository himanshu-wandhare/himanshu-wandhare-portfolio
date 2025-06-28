"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { DoodleUnderline } from "./doodle-underline";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
];

export function NavMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-bold text-2xl flex items-center gap-2"
                >
                    <span className="text-primary">Portfolio</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-foreground/80 hover:text-foreground transition-colors relative group"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector(item.href)
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                        >
                            <DoodleUnderline>{item.label}</DoodleUnderline>
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="relative"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-white/70 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed right-0 left-0 top-18 bg-white/70 z-40 md:hidden transition-transform duration-300 ease-in-out",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector(item.href)
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                setMobileMenuOpen(false);
                            }}
                        >
                            <DoodleUnderline thickness={3}>
                                {item.label}
                            </DoodleUnderline>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
