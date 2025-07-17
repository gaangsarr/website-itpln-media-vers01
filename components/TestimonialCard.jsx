// components/TestimonialCard.js
import Image from "next/image";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="w-10 h-10 text-[#471396]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      {/* Testimonial Content */}
      <div className="mb-6">
        <p className="text-gray-700 text-sm leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center space-x-3">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
            <span className="text-[#471396] font-semibold text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 text-xs">
            {testimonial.position}
            {testimonial.company && (
              <span className="text-gray-400"> • {testimonial.company}</span>
            )}
          </p>
        </div>
      </div>

      {/* Rating (if provided) */}
      {testimonial.rating && (
        <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < testimonial.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
