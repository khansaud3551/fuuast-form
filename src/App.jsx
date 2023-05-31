import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm, Controller, useFieldArray } from "react-hook-form";
import InputMask from 'react-input-mask';
import { useDropzone } from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

function App() {
  const { control, handleSubmit,register, formState: { errors } } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: "qualifications" });
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setImage(URL.createObjectURL(acceptedFiles[0]))
    }
  });

  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
    setShowModal(true);
  }

  const qualificationNames = ["SSC", "HSSC", "Others"];


  return (
    <>
    
      <div className="bg-gray-100 max-w-4xl mx-auto flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full ">
       <div className="grid gap-y-4 gap-x-8 place-content-center items-center grid-cols-12">
     
       {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Submitted Form Data
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 break-all">
                          {JSON.stringify(formData)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}


     <div className='col-span-2 border p-2'>
      Form No :
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formNo">
        
          </label>
          <input
            id="formNo"
            type="text"
            {...register("formNo", { required: "This field is required" })}
            placeholder="Full Name"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.formNo && <p className="text-red-500 text-xs italic">{errors.formNo.message}</p>}
     </div>

        <div className="mb-4 text-center text-xl font-semibold col-span-7">
        <img className='mx-auto mt-[-20px] w-[90px] object-cover' src='https://seeklogo.com/images/F/federal-urdu-university-logo-8705438141-seeklogo.com.png'></img>
        <h2 className='mt-2'>Federal Urdu University of Arts, Science & Technology, Islamabad</h2>
        </div>

        <div className="mb-4 col-span-3">
        
          <div {...getRootProps({className: 'dropzone w-full w-[200px] h-[200px]  mx-auto bg-gray-200 text-center rounded'})}>
            <input {...getInputProps()} />
            {
              image ?
              <AvatarEditor
                image={image}
                width={200}
                height={200}
              border={0}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1}
                rotate={0}
              /> :
              <p className='cursor-pointer h-full w-full p-10 flex justify-center items-center'>  Paste a Recent Passport Size Photo</p>
            }
          </div>
        </div>
       
        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "This field is required" })}
            placeholder="Full Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
        </div>


        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fatherName">
          Father Name
          </label>
          <input
            id="fatherName"
            type="text"
            {...register("fatherName", { required: "This field is required" })}
            placeholder="Father Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.fatherName && <p className="text-red-500 text-xs italic">{errors.fatherName.message}</p>}
        </div>

        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domicile">
          Islamabad
          </label>
          <input
            id="domicile"
            type="text"
            {...register("domicile", { required: "This field is required" })}
            placeholder="Domicile"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.domicile && <p className="text-red-500 text-xs italic">{errors.domicile.message}</p>}
        </div>

        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="province">
        Province
          </label>
          <input
            id="province"
            type="text"
            {...register("province", { required: "This field is required" })}
            placeholder="Punjab"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.province && <p className="text-red-500 text-xs italic">{errors.province.message}</p>}
        </div>


        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
            Course
          </label>
          <select
            id="course"
            {...register("course", { required: "This field is required" })}
            className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Select a course</option>
            <option value="bsc">BSc</option>
            <option value="msc">MSc</option>
            <option value="phd">PhD</option>
          </select>
          {errors.course && <p className="text-red-500 text-xs italic">{errors.course.message}</p>}
        </div>

        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnic">
            CNIC
          </label>
          <Controller
            name="cnic"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, value } }) => (
              <InputMask
                mask="99999-9999999-9"
                maskChar={null}
                value={value}
                onChange={onChange}
              >
                {() => <input
                  type="text"
                  id="cnic"
                  placeholder="12345-1234567-1"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />}
              </InputMask>
            )}
          />
          {errors.cnic && <p className="text-red-500 text-xs italic">{errors.cnic.message}</p>}
        </div>

        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <PhoneInput
            international
            defaultCountry="US"
            value={phone}
        
            
            onChange={setPhone}
            className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none outline-none focus-visible:outline-none"
          />
          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
        </div>

        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            {...register("address", { required: "This field is required" })}
            id="address"
            placeholder="Enter Address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.address && <p className="text-red-500 text-xs italic">{errors.address.message}</p>}
        </div>

        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
            Postal Code
          </label>
          <input
            {...register("postalCode", { required: "This field is required" })}
            id="postalCode"
            placeholder="Enter Postal Code"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.postalCode && <p className="text-red-500 text-xs italic">{errors.postalCode.message}</p>}
        </div>




        <div className="mb-4 col-span-6">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Male"
                {...register("gender", { required: "This field is required" })}
                className="form-radio h-4 w-4 text-gray-600"
              />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="Female"
                {...register("gender", { required: "This field is required" })}
                className="form-radio h-4 w-4 text-gray-600"
              />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
          </div>
            {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender.message}</p>}
        </div>


        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianName">
            Guardian Name
          </label>
          <input
            {...register("guardianName", { required: "This field is required" })}
            id="guardianName"
            placeholder="Enter Guardian Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.guardianName && <p className="text-red-500 text-xs italic">{errors.guardianName.message}</p>}
        </div>

        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianRelation">
            Relation with Guardian
          </label>
          <input
            {...register("guardianRelation", { required: "This field is required" })}
            id="guardianRelation"
            placeholder="Enter Relation"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.guardianRelation && <p className="text-red-500 text-xs italic">{errors.guardianRelation.message}</p>}
        </div>

        <div className="mb-4 col-span-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianPhone">
            Guardian Phone
          </label>
          <input
            {...register("guardianPhone", { required: "This field is required" })}
            id="guardianPhone"
            placeholder="Enter Phone Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.guardianPhone && <p className="text-red-500 text-xs italic">{errors.guardianPhone.message}</p>}
        </div>



       <div className="mb-4 col-span-12">
       <div className='flex gap-8'>
       {fields.map((field, index) => (
      
        <fieldset key={field.id} className="mb-4">
            <legend className="text-gray-700 text-sm font-bold mb-2">{qualificationNames[index] || "Qualification"} {index + 1}</legend>
            <input
              {...register(`qualifications.${index}.group`)}
              placeholder="Group"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
              <input
              {...register(`qualifications.${index}.institute`)}
              placeholder="Board/University"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              {...register(`qualifications.${index}.rollNumber`)}
              placeholder="Roll Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
 <input
              {...register(`qualifications.${index}.totalmarks`)}
              placeholder="Total Marks"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />

             <input
              {...register(`qualifications.${index}.marksobtained`)}
              placeholder="Marks Obtained"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            {/* ...other inputs... */}
            <button type="button" onClick={() => remove(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Remove
            </button>
          </fieldset>
      
        ))}
        </div>
        <button type="button" onClick={() => append({ group: "", /* ...other default values... */ })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Qualification
        </button>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default App
