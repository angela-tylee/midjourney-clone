interface FormFieldProps {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: () => void;
  handleSurpriseMe?: () => void;
  isSurpriseMe?: boolean;
}

const FormField = ({ labelName, type, name, placeholder, value, handleChange, handleSurpriseMe, isSurpriseMe }: FormFieldProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button type="button" onClick={handleSurpriseMe} 
          className="font-semibold text-xs bg-{#ECECF1 py-1 px-2 rounded-[5px] text-black">
            Surprise me
          </button>
        )}
      </div>
      <input type={type} id={name} name={name} value={value} onChange={handleChange} placeholder={placeholder} required className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]" />
    </div>
  )
}

export default FormField