// app/formPage.page.js
import MyForm from "@/components/form";

export default function FormPage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 to-teal-600">
            <h1 className="text-3xl font-bold typewriter text-white">
                Do you want to land your dream job?
                
            </h1>
            

            <div className="w-full max-w-md mt-8">
                <MyForm />
            </div>
        </div>
    );
}
