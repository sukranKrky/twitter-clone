import React from "react";
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom";
 
export default function SidebarSection({ title, children, more }) {
  return (
    <section className="bg-[#16181c] mb-4 rounded-2xl  border border-[#16181c] overflow-hidden ">
      <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]">
        {title}
      </h5>
      <div className="grid">
        {children}

        {more && (
          <Link
            to={more}
            className="h-[52px] flex items-center text-[15px] px-4 text-[#1d9bf0] transition-colors hover:bg-[#eff3f41a] "
          >
            Daha fazla göster
          </Link>
        )}
      </div>
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
SidebarSection.defaultProps = {
  more: false,
};
