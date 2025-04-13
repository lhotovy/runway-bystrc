import DropdownSelect from "@/components/ui/select";
import { JSX } from "react";

export const generateFormElements = (definitions: { type: string, name: string, text: string, width: number, required: boolean }[], formData: any, setFormData: any) => {
  type ElementFunction = (name: string, text: string, required: boolean, width: number) => JSX.Element;

  const elementsLibrary: { [key: string]: ElementFunction } = {
    //inputs
    userName: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    age: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    email: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    phone: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    representativeName: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    representativeEmail: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    representativePhone: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    preferedActivitySaturday: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    preferedActivitySunday: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    lift: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    limitations: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    note: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    preferedActivity: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <select       
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(value: any) => setFormData({ ...formData, [name]: value })}
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full bg-white bg-no-repeat bg-right"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: "24px", backgroundPosition: "calc(100% - 8px) center" }}
        >
          <option value="" disabled>Vyber možnost</option>
          <option value="sporty">Sporty</option>
          <option value="crafts">Crafts (vyrábění)</option>
        </select>
      </div>
    ),
    shirtSize: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    referal: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
          {text}
        </label>
        <select       
          name={name}
          required={required}
          value={formData[name] || ""}
          onChange={(value: any) => setFormData({ ...formData, [name]: value })}
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full bg-white bg-no-repeat bg-right"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: "24px", backgroundPosition: "calc(100% - 8px) center" }}
        >
          <option value="" disabled>Vyber možnost</option>
          <option value="sporty">Z doporučení</option>
          <option value="crafts">Z tištěných médií</option>
          <option value="crafts">Facebook</option>
          <option value="crafts">Instagram</option>
          <option value="crafts">Jinde</option>
        </select>
      </div>
    ),
    recommendation: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
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
          className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
      </div>
    ),
    englishLevel: (name: string, text: string, required: boolean, width: number) => (
      <div key={name} className={`flex flex-col mb-4`} style={{ width: `${width}px` }}>
      <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={name}>
        {text}
      </label>
      <select       
        name={name}
        required={required}
        value={formData[name] || ""}
        onChange={(value: any) => setFormData({ ...formData, [name]: value })}
        className="shadow appearance-none border border-gray-3 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full bg-white bg-no-repeat bg-right"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: "24px", backgroundPosition: "calc(100% - 8px) center" }}
      >
        <option value="" disabled>Vyber možnost</option>
        <option value="sporty">Neovládá</option>
        <option value="crafts">Základní</option>
        <option value="crafts">Pokročilá</option>
        <option value="crafts">Výborná</option>
      </select>
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