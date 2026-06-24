import React from "react";
import Card from "./component/card";

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXVeLWXRVMGe5uQjDyc4mfqYJ098iucGh1fY5fMgiMTtE6tAOi-iXJT0&s=10",
    companyName: "Google",
    datePosted: "3 days ago",
    jobPost: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2429/PNG/512/apple_logo_icon_147318.png",
    companyName: "Apple",
    datePosted: "1 week ago",
    jobPost: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    jobPost: "Backend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2429/PNG/512/amazon_logo_icon_147320.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    jobPost: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$40/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/335/987/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "6 days ago",
    jobPost: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    jobPost: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzgYoyH6XVzyqrlKm0PhFPVO7QBO2vY7oPZ8yTdGkksY1e87A89EKmMBz&s=10",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    jobPost: "AI Research Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$35/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uY4d5TNjC1yRM2j7ceVjX12P1GR7UpNHNSvuQp_xPQ&s=10",
    companyName: "Adobe",
    datePosted: "1 week ago",
    jobPost: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    jobPost: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvMW41X24vx6q7MogZuMBL-H1Jv3wJfY9MtJZt3wnjb4hEKfanzDAFvQ&s=10",
    companyName: "OpenAI",
    datePosted: "2 days ago",
    jobPost: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote, India"
  }
];

  return <div className="Parent">
    {jobOpenings.map(function(ele){
      return <Card brandLogo={ele.brandLogo} companyName={ele.companyName} datePosted={ele.datePosted} jobPost={ele.jobPost} location={ele.location} pay={ele.pay} tag1={ele.tag1} tag2={ele.tag2}/>
    })}
  </div>;
};

export default App;
