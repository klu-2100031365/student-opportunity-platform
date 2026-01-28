import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-text-heading text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            MORRIS <span className="text-primary-cyan">CORP</span>
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Connecting talented students with real opportunities backed by colleges and companies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-primary-cyan transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/listings" className="text-gray-300 hover:text-primary-cyan transition-colors text-sm">
                                    Opportunities
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-primary-cyan transition-colors text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-primary-cyan transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>5th Floor, Orion Business Park</li>
                            <li>HITEC City, Hyderabad</li>
                            <li>Telangana – 500081</li>
                            <li className="mt-4">
                                <a href="mailto:contact@morriscorp.com" className="hover:text-primary-cyan transition-colors">
                                    contact@morriscorp.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="hover:text-primary-cyan transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} MORRIS CORP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
