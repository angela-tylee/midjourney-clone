interface FormFieldProps {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSurpriseMe?: () => void;
  isSurpriseMe?: boolean;
}

const FormField = ({ labelName, type, name, placeholder, value, handleChange, handleSurpriseMe, isSurpriseMe }: FormFieldProps) => {
  return (
    <div className="mb-1 w-full">
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button type="button" onClick={handleSurpriseMe} 
          className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black hover:bg-gray-300">
            Surprise me
          </button>
        )}
      </div>
      <input type={type} id={name} name={name} value={value} onChange={handleChange} placeholder={placeholder} required className="bg-gray-50 border-gray-300 border-2 text-gray-900 text-sm rounded-sm focus:ring-[#4649ff] focus:border-[#4649ff] w-full px-2 py-1" />
    </div>
  )
}

export default FormField