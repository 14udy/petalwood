export default function TableCheck({ value, handleChange, label }) {
  return (
    <div className="flex gap-2">
      <label htmlFor="">{label}</label>
      <input
        type="checkbox"
        checked={value ? true : false}
        onChange={(e) => handleChange(e.target.checked)}
        className="h-5 w-5 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 border-gray-300 rounded cursor-pointer"
      />
    </div>
  )
}
