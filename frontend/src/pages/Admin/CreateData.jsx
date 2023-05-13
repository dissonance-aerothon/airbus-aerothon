import React, { useState } from 'react'
import axios from 'axios';
import { CreateDataApi } from '../../utils/ApiLinks';
const CreateData = () => {
    const [formData, setFormData] = useState({});

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }



    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post(CreateDataApi, formData).then(response => {
            alert("Data Created Successfully")
        })
            .catch(error => {
                alert("Error occured while creating the data")
            })
    }

    return (
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Create Data</h2>
            <form onSubmit={onSubmitHandler}>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" >ITEM</label>
                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " name="item" onChange={changeHandler} />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" >Raw material</label>
                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " name="rowMaterial" onChange={changeHandler} />
                    </div>
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" >Quantity</label>
                        <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " name="quantity" onChange={changeHandler} />
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">


                    <div>
                        <label class="text-gray-700 dark:text-gray-200" >Start Date</label>
                        <input type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " name="startDate" onChange={changeHandler} />
                    </div>
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" >End Date</label>
                        <input type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " name="endDate" onChange={changeHandler} />
                    </div>
                </div>

                <div class="flex justify-end mt-6">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>
    )
}

export default CreateData