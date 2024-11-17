import React from "react"

export default function TrueFalseRadio({
  handleChange,
  label,
  required,
  option,
  form,
  yesLabel = "Yes",
  noLabel = "No",
}) {
  return (
    <div className="my-2 flex flex-col lg:flex-row">
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 lg:w-6/12 mb-2 lg:mb-0"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex lg:w-6/12 ">
        <label className="inline-flex items-center w-6/12">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            name={option}
            checked={form[option] === true}
            onChange={(e) => handleChange(option, true)}
            required={required}
          />
          <span className="ml-2">{yesLabel}</span>
        </label>
        <label className="inline-flex items-center w-6/12">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-gray-600"
            name={option}
            checked={form[option] === false}
            onChange={(e) => handleChange(option, false)}
            required={required}
          />
          <span className="ml-2">{noLabel}</span>
        </label>
      </div>
    </div>
  )
}
