export const generateFormElements = (elements: any, formData: any, setFormData: any) => {
    return elements.map((element: any, index: number) => {
      switch (element.type) {
        case "input":
          return (
            <div key={index} className="flex flex-col mb-4">
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={element.name}>
                {element.text}
              </label>
              <input
                type="text"
                id={element.name}
                name={element.name}
                required={element.required}
                value={formData[element.name] || ""}
                onChange={(e) => setFormData({ ...formData, [element.name]: e.target.value })}
                style={{ width: `${element.width}px` }} // Use inline style for dynamic width
                className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"width={element.width}
              />
            </div>
          );
        // Add more cases for different element types if neededore cases for different element types if needed
        default:
          return null;
      }
    })
};