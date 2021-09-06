function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center active:border-b-2 active:border-blue-500 group rounded-xl cursor-pointer md:p-8 sm:h-14 md:hover:bg-gray-100">
      <Icon
        className={`h-5 text-center sm:h-7 ${
          active && "text-blue-500"
        } mx-auto text-gray-500 group-hover:text-blue-500 `}
      />
    </div>
  );
}

export default HeaderIcon;
