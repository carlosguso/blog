import MainLayout from "@/components/MainLayout";
import projects from "./projects";
import ItemCard from "../../components/ItemCard";

export default function ProjectsMainPage() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-semibold mb-6 text-main-accent-light dark:text-main-accent">
        Projects
      </h2>
      {projects.length > 0 ? (
        <div className="flex flex-col space-y-6">
          {projects.map((project, index) => (
            <ItemCard
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
              date={project.date}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          No projects available at the moment. Check back later!
        </p>
      )}
    </MainLayout>
  );
}
