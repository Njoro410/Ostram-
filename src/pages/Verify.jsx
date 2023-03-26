import { useParams } from "react-router-dom";
import gif from "../images/animation_640_lfpgi6aa.gif";
import gif2 from "../images/animation_640_lfpln1g1.gif";
import data from "../employee.json";

const Verify = () => {
  const { id } = useParams();
  const agents = data.employees.filter((emp) => emp.id === id);

  if (agents.length === 0) {
    return (
      <div class="flex flex-col items-center md:flex-row justify-center flex-wrap md:gap-8 dark:bg-white dark:text-gray-800 py-44 md:py-12">
        <div class="w-full md:w-[39rem] flex justify-center">
          <h2 className="text-4xl md:text-7xl tracking-tighter font-extrabold font-yanone ">
            Agent <span className="text-[#f11d1d]">Not Verified</span>{" "}
          </h2>
        </div>
        <div className="w-screen md:w-96 flex justify-center my-8 md:my-0">
          <img
            src={gif2}
            className="w-44 h-44 md:w-56 md:h-56"
            alt="not verified"
          />
        </div>
      </div>
    );
  }

  return (
    <div class="flex flex-col items-center md:flex-row justify-center flex-wrap md:gap-8 dark:bg-white dark:text-gray-800 pt-[5rem]">
      <div class="w-full md:w-[39rem]  ">
        {agents.map((emp) => (
          <div className="py-5" key={emp.id}>
            <h2 className="text-4xl text-center md:text-7xl tracking-tighter font-extrabold font-yanone ">
              Agent <span className="text-[#f36624]">Verified</span>{" "}
            </h2>
            <p className="font-bold tracking-tight font-mont text-sm text-center md:text-2xl">
              <span className="text-[#f36624] ">{emp.name}</span> is a verified
              agent of Ostram Sacco
            </p>
            <section className="flex flex-col px-5 justify-center items-center flex-wrap ">
              <p className=" font-bold tracking-tight font-mont ">
                ID: <span className="text-[#f36624] font-bold md:font-extrabold md:text-xl">{emp.id}</span>
              </p>
              <p className=" font-bold tracking-tight font-mont ">
                Name:{" "}
                <span className="text-[#f36624] font-extrabold md:text-xl ">
                  {emp.name}
                </span>
              </p>
            </section>
            <section className="flex flex-col px-5  justify-center items-center flex-wrap">
              <p className=" font-bold tracking-tight font-mont ">
                Designation:{" "}
                <span className="text-[#f36624] md:text-xl">{emp.designation}</span>
              </p>
              <p className=" font-bold tracking-tight font-mont ">
                Department:{" "}
                <span className="text-[#f36624] md:text-xl">{emp.department}</span>
              </p>
            </section>
          </div>
        ))}
      </div>
      <div className="w-screen md:w-96 flex justify-center mb-[12rem] md:my-0">
        <img src={gif} className="w-44 h-44 md:w-60 md:h-60" alt="verified" />
      </div>
    </div>
  );
};

export default Verify;
