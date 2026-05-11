const InputField = ({
  label,
  placeholder,
  type = "text",
  textarea = false,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm mb-2 text-gray-300">{label}</label>

      {textarea ? (
        <textarea
          placeholder={placeholder}
          rows={5}
          className="w-full border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full  border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
        />
      )}
    </div>
  );
};

export default InputField;
