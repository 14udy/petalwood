export default function FormSelect({
  handleChange,
  name,
  value,
  options,
  title,
  required = false,
  classes,
  label,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 ">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        required={required}
        onChange={(e) => handleChange(e)}
        name={name}
        value={value}
        className={` mt-1 block w-full  px-3 py-2 border border-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black  ${classes}`}
      >
        <option value={""} disabled>
          Select {title}...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
