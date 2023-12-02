import imgcc from "../../../assets/img-cc.jpg"

const Skills = () => {
    return (
        <div className="my-24">
            <h2 className="text-3xl text-center">HR & skills Management</h2>
            <img src={imgcc} alt="" className="mx-auto my-8" />
            <p><span className="text-purple-600">Training & onboarding</span>: Easily create and deliver onboarding and training sessions for your team to complete right from the app. Include a quiz to ensure they understand the covered material and track their performance, progress, and course completion in real-time.</p>
            <p><span className="text-purple-600">Document management</span>: Digitize, manage, and keep track of all employee documentation in one organized and secure location. Request and have your staff upload documents directly to the app.</p>
            <p><span className="text-purple-600">Recognition & rewards</span>: Show employees appreciation with digital recognitions, words of gratitude, and rewards they can convert into their favorite gift cards. Recognize individuals privately or share it to your company feed to have your whole team join in on the excitement.</p>
        </div>
    );
};

export default Skills;