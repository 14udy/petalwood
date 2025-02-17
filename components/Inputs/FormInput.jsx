export default function FormInput({
  label,
  type,
  name,
  value,
  handleChange,
  required,
  placeholder,
  textArea = false,
  disabled = false,
  min,
  max,
  className,
  rows = 3,
}) {
  return (
    <div className="">
      {label && (
        <label className={`block text-sm font-medium ${className}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {textArea ? (
        <textarea
          className=" mt-1 block w-full px-3 py-2 border border-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black "
          type={type}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
        ></textarea>
      ) : (
        <input
          className=" mt-1 block w-full px-3 py-2 border border-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black disabled:opacity-50"
          type={type}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          min={min}
          max={max}
        />
      )}
    </div>
  )
}
