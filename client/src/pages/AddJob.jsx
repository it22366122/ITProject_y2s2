import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function AddJob() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Create Job Vacancy
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Job Title"
            required
            id="title"
            className="flex-1"
          ></TextInput>
          <Select>
            <option value=" ">Select Job category</option>
            <option value="Caregiver">Caregiver</option>
            <option value="Nurse">Nurse</option>
            <option value="HouseKeeping">House Keeping</option>
            <option value="Therapists">Therapists</option>

            <option value="AdministrativeStaff:">Administrative Staff:</option>
          </Select>
          <TextInput
            type="text"
            placeholder="Salary"
            
            id="salary"
            className="flex-1"
          ></TextInput>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput typeof="file" accept="image/*" />
          <Button type="button" size="sm" outline>
            Upload cover Photo
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Enter job description"
          className="h-50 mb-5"
        />
        <Button type="submit" size="sm" outline>
          Post Vacancy
        </Button>
      </form>
    </div>
  );
}
