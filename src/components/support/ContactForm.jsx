import InputField from "./InputField";

const ContactForm = () => {
  return (
    <form className="space-y-6 bg(--color-primary)">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="First Name" placeholder="Enter First Name" />
        <InputField label="Last Name" placeholder="Enter Last Name" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Email" type="email" placeholder="Enter your Email" />

        <div>
          <label className="block text-sm mb-2 text-gray-300">
            Phone Number
          </label>

          <div className="flex gap-3">
            <select className="bg-(--color-primary) border border-white/20 rounded-lg px-3 py-3 outline-none focus:border-red-500">
              <option>🇮🇳</option>
              <option>🇺🇸</option>
              <option>🇬🇧</option>
            </select>

            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            />
          </div>
        </div>
      </div>
      <InputField label="Message" placeholder="Enter your Message" textarea />
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <label className="flex items-center gap-3 text-sm text-gray-400">
          <input type="checkbox" className="accent-red-500" />I agree with Terms
          of Use and Privacy Policy
        </label>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-lg font-medium"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
