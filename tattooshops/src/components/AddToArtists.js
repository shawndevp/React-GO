import React, { useState } from 'react'
import axios from "axios";

function AddToArtists() {

const initialValues = {
    name:"",
    price:0,
    description:"",
}

const [formValues, setFormValues] = useState(initialValues);
const [fileData, setFileData] = useState();
const [success, setSuccess] = useState("");

function handleOnFile(e) {
  setFileData(e.target.files[0])
}

function handleOnChange(e) {
    setFormValues({...formValues, [e.target.name]:e.target.value})
}

function handleOnSubmit(e) {
    e.preventDefault();

    const formData = new FormData()
    formData.append("files", fileData)

    axios.post("http://localhost:1337/Artists", {
        name:formValues.name,
        price:formValues.price,
        description:formValues.description

    }).then( (res)=> {
        console.log(res.data)

        const data = new FormData();
        data.append("files", fileData)

        data.append("ref", "artist")
        
        data.append("refId", res.data.id)

        data.append("field", "img")

        axios.post("http://localhost:1337/upload",data)
        .then( (image)=> console.log(image))
        
    })
    .catch( (succ)=> {
      setSuccess(succ.request.statusText())
  })
    
    .catch( (err)=> {
        console.log(err)
    })


}

    return (
        <>
           <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <form
              onSubmit= {handleOnSubmit}
              method="POST"
              className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
            >
              <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                Add Artists
              </div>
              <div className="text-red-700">{/* error */}</div>
              <div className="text-red-700">{success}</div>
              <div className="mb-4"><br/>
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  v-model="form.name"
                  type="text"
                  required
                  autofocus
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  for="username"
                >
                  Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="price"
                  v-model="form.price"
                  type="number"
                  required
                  autofocus
                  placeholder="Price"
                  value={formValues.price}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  for="description"
                >
                  Description
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="form.description"
                  type="text"
                  placeholder="Description"
                  name="description"
                  required
                  autocomplete="current-description"
                  value={formValues.description}
                  onChange={handleOnChange}
                />
              </div>
              Image
              <div class="flex items-center justify-center bg-grey-lighter">
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Upload image</span>
        <input type='file' name="file" class="hidden" onChange={handleOnFile}/>
    </label>
</div><br/>
              <div className="flex items-center justify-between">
                <button
                  className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs"></p>
          </div>
        </div> 
        </>
    )
}

export default AddToArtists
