import { ButtonSecondary } from "./shared/button";

const JobHeader = ({ headerData }) => {
  const { companyLogo, companyName } = headerData[0];
  return (
    <section className=" flex flex-col md:flex-row  gap-4 md:gap-8 items-center md:justify-start bg-white dark:bg-slate-900 dark:text-slate-400 shadow-sm rounded-md">
      <img
        className="w-[50px] h-[50px] aspect-square object-cover rounded-lg md:rounded-none -mt-6 md:-mt-0 md:w-[110px] md:h-[110px] shadow-sm"
        src={companyLogo}
        alt="logo"
        width={`auto`}
        height={`auto`}
      />

      <div className=" text-center md:text-left">
        <h3 className="font-bold text-2xl md:text-base capitalize dark:text-slate-50">
          {companyName}
        </h3>
        <p className="text-sm text-slate-400">scoot.com</p>
      </div>
      <div className="pb-4 md:pb-0 md:ml-auto md:pr-4">
        <ButtonSecondary text={`Company Site`} />
      </div>
    </section>
  );
};

export default JobHeader;
