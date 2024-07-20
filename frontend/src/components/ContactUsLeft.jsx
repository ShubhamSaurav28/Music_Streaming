import React from 'react';

export default function ContactUsLeft() {
  return (
    <>
      <div className="w-[50%] px-6 space-y-6">
        <div>
          <h2 className="text-4xl font-bold mb-2 ">Discover Your Next Favorite Song</h2>
          <p className="text-gray-700">Explore a vast library of music and videos, curated just for you.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Streaming Tips</h2>
          <p className="text-gray-700">Learn how to get the most out of our streaming service with our helpful guides and tips.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Artist Insights</h2>
          <p className="text-gray-700">Get exclusive insights and stories from your favorite artists and creators.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Contact Us</h2>
          <p className="text-gray-700">
            <strong>General Inquiries</strong><br />
            Have questions or need assistance? Contact us at <a href="mailto:info@streamingportal.com" className="text-blue-600 hover:underline">info@streamingportal.com</a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Support</h2>
          <p className="text-gray-700">For technical support or assistance with your account, email <a href="mailto:support@streamingportal.com" className="text-blue-600 hover:underline">support@streamingportal.com</a>.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Partnerships</h2>
          <p className="text-gray-700">Interested in partnering with us? Contact our business development team at <a href="mailto:partnerships@streamingportal.com" className="text-blue-600 hover:underline">partnerships@streamingportal.com</a>.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Office Locations</h2>
          <p className="text-gray-700">
            <strong>Headquarters</strong><br />
            123 Music Lane, Suite 100, City, State 12345
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Additional Offices</h2>
          <p className="text-gray-700">
            <strong>Los Angeles Office</strong><br />
            789 Streaming Blvd, 2nd Floor, Los Angeles, CA 90001
          </p>
        </div>
      </div>
    </>
  );
}
