import CinemaList from "./Cinema/CinemaList";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <CinemaList />
      </div>
    </main>
  );
};

export default Main;
