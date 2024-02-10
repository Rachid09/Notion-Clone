import Title from "@/components/landing-page/title";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <Title
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        ></Title>
      </div>
    </section>
  );
};

export default HomePage;
