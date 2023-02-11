import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset(); // reset after form submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex w-full flex-col">
        <label>First Name</label>
        <input
          placeholder="First Name"
          className="input-home"
          type="text"
          {...register("firstName", { required: true })}
        />
      </div>
      <div className="flex w-full flex-col">
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          className="input-home"
          type="text"
          {...register("lastName", { required: true })}
        />
      </div>
      <div className="flex w-full flex-col">
        <label>Email</label>
        <input
          placeholder="Email"
          className="input-home"
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </div>
      {errors.email && (
        <p className="text-red-600 font-bold">Email address not correct</p>
      )}
      <div className="flex w-full flex-col">
        <label>Number</label>
        <input
          className="input-home"
          placeholder="080XXXXXXXX"
          type="number"
          {...register("number", {
            required: true,
            maxLength: 14,
            minLength: 11,
          })}
        />
      </div>
      {errors.number && (
        <p className="text-red-600 font-bold">Number not complete</p>
      )}
      <div className="flex w-full flex-col">
        <label htmlFor="request">Your Request</label>
        <textarea
          id="request"
          required
          className="border border-gray-400  rounded-lg p-4  focus:outline-none"
          rows={10}
        ></textarea>
      </div>
      <div>
        <input
          className="px-8 bg-blueColor text-white py-2 rounded-md cursor-pointer  hover:bg-blue-900"
          type="submit"
          onClick={() => reset()}
        />
      </div>
    </form>
  );
}
