import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-8">
      <div className="container mx-auto text-center space-y-4 px-4">
        {/* Contact Info */}
        <p className="text-base">
          <strong>Contact Us:</strong>
        </p>
        <p className="text-base">
          Email: <a href="mailto:reggiesrecipes@gmail.com" className="underline hover:text-pink-200">reggiesrecipes@gmail.com</a>
        </p>
        <p className="text-base">
          Phone: <a href="tel:+44178212345" className="underline hover:text-pink-200">01782 12345</a>
        </p>
      </div>
      <div className="mt-6 text-center text-sm opacity-90">
        &copy; {new Date().getFullYear()} Reggie&rsquo;s Recipes. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
