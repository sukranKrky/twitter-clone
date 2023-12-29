import { Popover } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2">
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)]  leading-4 text-[13px] hover:underline  "
      >
        Hizmet Şartları
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline  "
      >
        Gizlilik Politikası
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline  "
      >
        Çerez Politikası
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline  "
      >
        Imprint
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline  "
      >
        Erişebilirlik
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline  "
      >
        Reklam Bilgisi
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline  "
      >
        Reklam Bilgisi

      </Link>
      <div className="w-full flex gap-2">
        <Popover className="relative inline-flex leading-4 ">
          <Popover.Button className="text-[color:var(--color-base-secondary)] outline-none leading-4 text-[13px] hover:underline index-flex items-center  ">
            Daha fazla ...
          </Popover.Button>
          <Popover.Panel className="w-[150px] max-w-[384px] bg-[color:var(--background-primary)] shadow-box rounded-xl absolute bottom-0 -right-8 grid overflow-hidden">
            <Link
              to="/"
              className="py-3 px-4 text-[color:var(--color-base)] text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors"
            >
              Hakkında
            </Link>
            <Link
              to="/"
              className="py-3 px-4 text-[color:var(--color-base)] text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors"
            >
              Duru
            </Link>
            <Link
              to="/"
              className="py-3 px-4 text-[color:var(--color-base)] text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors"
            >
              İşletmeler için x
            </Link>
            <Link
              to="/"
              className="py-3 px-4 text-[color:var(--color-base)] text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors"
            >
              Geliştiriciler
            </Link>
          </Popover.Panel>
        </Popover>
        <p className=" text-[color:var(--color-base-secondary)]  leading-4 text-[13px]">
          &copy; 2023 x Copy.
        </p>
      </div>
    </footer>
  );
}
