import Feedback from "@/components/Feedback";
export default function FeedbackPage() {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 to-teal-600">
            <h1 className="text-3xl font-bold typewriter1 text-white">
                You are a superstar! Here is some feedback on your interview! 
            </h1>

            <Feedback></Feedback>
        </div>
    );
}