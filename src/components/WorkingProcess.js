import React from "react";
import "aos/dist/aos.css"; // Import AOS styles if not already imported

const Step = ({ content, label }) => (
  <li data-content={content} className="step step-primary text-xl font-bold">
    {label}
  </li>
);

const WorkingProcess = () => (
  <div
    className="flex justify-center pt-10"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="3000"
  >
    <ul className="steps steps-vertical lg:steps-horizontal lg:w-full">
      <Step content="?" label="Meeting" />
      <Step content="!" label="Planning" />
      <Step content="★" label="Designing" />
      <Step content="?" label="Developing" />
      <Step content="✓" label="Testing" />
      <Step content="●" label="Delivery" />
    </ul>
  </div>
);

export default WorkingProcess;
