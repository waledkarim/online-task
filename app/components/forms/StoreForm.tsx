"use client"

import { FiMonitor } from "react-icons/fi";
import { FaEarthAfrica } from "react-icons/fa6";
import { MdOutlineEditLocation } from "react-icons/md";
import { useForm } from "react-hook-form";
import { StoreFormData } from "@/app/types/types";
import { FaShapes } from "react-icons/fa6";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


export default function StoreForm(){

    const {register, handleSubmit, formState: {errors}} = useForm<StoreFormData>({mode: 'onBlur'});
    const onSubmit = (formData: StoreFormData) => {
        console.log("Store formData: ", formData);
    }

    console.log(errors.domainName);

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-5 space-y-5">

          {/* store name input */}
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-2 md:h-12">

            <div className="flex gap-x-3 flex-1">
              <span className="self-center">
                <FiMonitor className="text-blue-600" size={30}/>
              </span>
                <div className="flex flex-col">
                  <h2 className="font-medium text-sm">Give your online store a name</h2>
                  <p className="text-xs">A great store name is a big part of your success. Make sure it aligns with your brand and product.</p>
                </div>
            </div>

            <div className="flex-1 md:self-center">
              <label className="block">
                <input {...register("storeName", {required: "Store name is required"})} type="text" placeholder="What'd you like to call your store" className={`input form-input placeholder:text-sm ${errors.storeName ? "!border !border-red-500 focus:outline-red-500 focus:ring-0 focus:border-transparent" : ""}`}/>
                {
                    errors.storeName && <p className="error">{errors.storeName.message}</p>
                }
              </label>
            </div>

          </div>

          {/* domain name input */}
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-2 md:h-12">

            <div className="flex gap-x-3 flex-1">
              <span className="self-center">
                <FaEarthAfrica className="text-blue-600" size={30}/>
              </span>
                <div className="flex flex-col">
                  <h2 className="font-medium text-sm">Your online store subdomain</h2>
                  <p className="text-xs">A SEO-friendly store name is a crucial part of your success. Make sure it aligns with your brand and product.</p>
                </div>
            </div>

            <div className="flex-1 md:self-center">
              <label className="block relative">
                <input 
                    {...register("domainName", {
                        required: "Domain name is required",
                        validate: {
                            chechDomainavailability: async (value) => {
                            const domain = `${value}.expressitbd.com`;
                            console.log(domain);
                            try {
                                const res = await fetch(`https://interview-task-green.vercel.app/task/domains/check/${domain}`);
                                const { data } = await res.json();

                                console.log(data);
                                console.log(data.taken);

                                if(data.taken){
                                    console.log("Unavailable");
                                    return "Not available domain. Please re-enter!";
                                }

                                return true;

                            } catch (error) {
                                console.error(error);
                                return "Failed to check domain availability";
                            }
                        }
                        }
                    })} 
                    type="text" 
                    placeholder="Domain name" className={`input placeholder:text-sm ${errors.domainName && "!border !border-red-500 focus:outline-red-500 focus:ring-0 focus:border-transparent"}`}
                />
                <span className="absolute right-3 inset-y-1 text-gray-500 pointer-events-none">
                  .expressitbd.com
                </span>
                {
                    errors.domainName && <p className="error">{errors.domainName.message}</p>
                }
              </label>
            </div>

          </div>

          {/* store location */}
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-2 md:h-12">

            <div className="flex gap-x-2 flex-1">
              <span className="self-center">
                <MdOutlineEditLocation className="text-blue-600" size={30}/>
              </span>
                <div className="flex flex-col">
                  <h2 className="font-medium text-sm">Where is your store located?</h2>
                  <p className="text-xs">Set your stores default location so we can optimize store access and speed for your customers.</p>
                </div>
            </div>

            <div className="flex-1 md:self-center">
              <label className="block">
                <select {...register("location", {required: "Location is required"})} className={`input form-input placeholder:text-sm ${errors.location ? "border border-red-500 focus:outline-red-500 focus:ring-0 focus:border-transparent" : "border"}`}>
                  {
                    ["Bangladesh", "India"].map((country, ind) => (
                      <option key={ind} value={country}>{country}</option>
                    ))
                  }
                </select>
                {
                    errors.location && <p className="error">{errors.location.message}</p>
                }
              </label>
            </div>

          </div>

          {/* category input */}
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-2 md:h-12">

            <div className="flex gap-x-3 flex-1">
              <span className="self-center">
                <FaShapes className="text-blue-600" size={30}/>
              </span>
                <div className="flex flex-col">
                  <h2 className="font-medium text-sm">What's your category?</h2>
                  <p className="text-xs">Set your stores default category so that we can optimize store access and speed for your customers.</p>
                </div>
            </div>

            <div className="flex-1 md:self-center">
              <label className="block">
                <select {...register("category", {required: "Category is required"})} className={`input form-input placeholder:text-sm ${errors.category ? "!border !border-red-500 focus:outline-red-500 focus:ring-0 focus:border-transparent" : "border"}`}>
                  {
                    ["Fashion", "Programming", "IT"].map((country, ind) => (
                      <option key={ind} value={country}>{country}</option>
                    ))
                  }
                </select>
                {
                    errors.category && <p className="error">{errors.category.message}</p>
                }
              </label>
            </div>

          </div>

          {/* currency */}
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-2 md:h-12">

            <div className="flex gap-x-3 flex-1">
              <span className="self-center">
                <MdCurrencyExchange className="text-blue-600" size={30}/>
              </span>
                <div className="flex flex-col">
                  <h2 className="font-medium text-sm">Choose store currency</h2>
                  <p className="text-xs">This is the main currency you wish to sell in.</p>
                </div>
            </div>

            <div className="flex-1 md:self-center">
              <label className="block">
                <select {...register("currency", {required: "Currency is required"})} className={`input form-input placeholder:text-sm ${errors.currency ? "!border !border-red-500 focus:outline-red-500 focus:ring-0 focus:border-transparent" : "border"}`}>
                  {
                    ["BDT", "Rupees", "Dollars"].map((country, ind) => (
                      <option key={ind} value={country}>{country}</option>
                    ))
                  }
                </select>
                {
                    errors.currency && <p className="error">{errors.currency.message}</p>
                }
              </label>
            </div>

          </div>
          
          {/* email */}
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-2 md:h-12">

            <div className="flex gap-x-3 flex-1">
              <span className="self-center">
                <MdOutlineEmail className="text-blue-600" size={30}/>
              </span>
                <div className="flex flex-col">
                  <h2 className="font-medium text-sm">Store contact email</h2>
                  <p className="text-xs">This is the email you'll use to send notifications to and receive orders from customers</p>
                </div>
            </div>

            <div className="flex-1 md:self-center">
              <label className="block">
                <input {...register("email", {required: "Email is required"})} type="text" placeholder="you@gmail.com" className={`input form-input placeholder:text-sm ${errors.email ? "!border !border-red-500 focus:outline-red-500 focus:ring-0 focus:border-transparent" : ""}`}/>
                {
                    errors.email && <p className="error">{errors.email.message}</p>
                }
              </label>
            </div>

          </div>

          {/* button */}
          <div className="flex justify-end">
            <button type="submit" className="p-2 rounded bg-blue-700 font-medium text-white">
                Create Store
            </button>
          </div>

        </form>
    );
}