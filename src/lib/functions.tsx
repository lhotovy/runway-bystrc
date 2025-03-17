export const generateFormElements = (definitions: { type: string, name: string, text: string, width: number, required: boolean }[], formData: any, setFormData: any) => {
  type ElementFunction = (name: string, text: string, required: boolean, width: number) => JSX.Element;

  const elementsLibrary: { [key: string]: ElementFunction } = {
    //inputs
    userName: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    age: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    email: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="email"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    phone: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    representativeName: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    representativeEmail: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    representativePhone: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    preferedActivitySaturday: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    preferedActivitySunday: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    lift: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    limitations: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    note: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className="flex flex-col mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          style={{ width: `${width}px` }} // Use inline style for dynamic width
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ),
    // Add more form element types to the library as needed
  };

  return definitions.map((definition) => {
    const element = elementsLibrary[definition.name];
    if (element) {
      return element(definition.name, definition.text, definition.required, definition.width);
    }
    return null;
  });
};