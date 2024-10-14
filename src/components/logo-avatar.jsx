const LogoAvatar = ({ src, company }) => {
  const logoSize = "50px";
  return (
    <aside className={` w-[${logoSize}] h-[${logoSize}] -mt-14 shadow-sm`}>
      <img
        className="aspect-square rounded-lg object-cover"
        src={src}
        alt={company}
        width={`auto`}
        height={`auto`}
      />
    </aside>
  );
};

export default LogoAvatar;
